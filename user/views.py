from django.shortcuts import redirect, render
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login, logout
from .models import Player
import re, random

regex_contains_invalid_character = re.compile('[^a-z0-9A-Z]')
regex_contains_nan = re.compile('[^0-9]')

def login_view(request):
    dict = {}

    if request.user.is_authenticated:
        return redirect('/')

    if request.method == 'POST':
        id = request.POST.get('id').strip()
        password = request.POST.get('password').strip()
        if id == '' or password == '':
            dict.update(tips='您必须填写所有字段！')
        else:
            player = Player.objects.filter(username=id)
            if not player or (player and not player[0].is_active):
                dict.update(tips='用户未注册！')
            else:
                player = authenticate(username=id, password=password)
                if player:
                    login(request, player)
                    return redirect('/')
                else:
                    dict.update(tips='密码错误！')

    return render(request, 'login.html', dict)

def register_view(request):
    dict = {'id': '', 'email': ''}

    if request.user.is_authenticated:
        return redirect('/')

    if request.method == 'POST':
        id = request.POST.get('id').strip()
        email = request.POST.get('email').strip()
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        is_valid = False

        # Check for empty value
        if id == '' or email == '' or password.strip() == '' or confirm_password.strip() == '':
            dict.update(tips='您必须填写所有字段！')

        # Check ID
        elif len(id.strip()) != 12 or regex_contains_nan.search(id.strip()) != None:
            dict.update(tips='您填写的学号无效！学号应为12位纯数字！')

        # Check email
        elif email.strip().find('@') == -1:
            dict.update(tips='电子邮件地址无效，请在电子邮件地址中包括@！')
        elif email.count('@') > 1:
            dict.update(tips='电子邮件地址无效，@后面的内容不应包含@！')
        elif email.index('@') == 0:
            dict.update(tips='电子邮件地址无效，请在@前面输入内容！')
        elif email.index('@') == len(email) - 1:
            dict.update(tips='电子邮件地址无效，请在@后面输入内容！')

        # Check password
        elif len(password) < 8 or len(password) > 16 or regex_contains_invalid_character.search(password) != None:
            dict.update(tips='您所设置的密码无效！密码应为8 - 16位的字母和数字的组合！')
        elif password != confirm_password:
            dict.update(tips='您前后两次填写的密码不一致！')

        # Value is valid
        else:
            is_valid = True

        if not is_valid:
            dict.update(id=id, email=email)
        else:
            # Check if the user is allowed to register
            player = Player.objects.filter(username=id)
            if player:
                if not player[0].is_active:
                    player[0].is_active = True
                    player[0].email = email
                    player[0].password = make_password(password, None, 'pbkdf2_sha256')
                    player[0].save()
                    login(request, player[0])
                    return redirect('/')
                else:
                    dict.update(tips='当前账号已注册！', id=id, email=email)
            else:
                dict.update(tips='小游戏仅对选课同学开放注册！')

    return render(request, 'register.html', dict)

def find_password_view(request):
    dict = {'button': '获取验证码', 'new_password': False, 'id': ''}
    
    if request.user.is_authenticated:
        return redirect('/')

    if request.method == 'POST':
        id = request.POST.get('id').strip()
        verification = request.POST.get('verification').strip()
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if id == '':
            dict.update(tips='您必须填写需要找回密码的账号！')
        else:
            dict.update(id=id)
            player = Player.objects.filter(username=id)
            if not player or (player and not player[0].is_active):
                dict.update(tips='账号无效，请检查账号输入是否正确')
            else:
                if not request.session.get('VerificationCode', ''):
                    dict.update(button='重置密码', tips='验证码已发送', new_password=True)
                    verification_code = str(random.randint(100000, 999999))
                    request.session['VerificationCode'] = verification_code
                    player[0].email_user('找回密码', '【课程小游戏】验证码为 ' + verification_code + ' ，如非本人操作，请检查账号安全。')
                elif verification == request.session.get('VerificationCode'):
                    if len(password) < 8 or len(password) > 16 or regex_contains_invalid_character.search(password) != None:
                        dict.update(button='重置密码', tips='您所设置的密码无效！密码应为8 - 16位的字母和数字的组合！', new_password=True)
                    elif password != confirm_password:
                        dict.update(button='重置密码', tips='您前后两次填写的密码不一致！', new_password=True)
                    else:
                        player[0].password = make_password(password, None, 'pbkdf2_sha256')
                        player[0].save()
                        del request.session['VerificationCode']
                        return redirect('/login')
                else:
                    dict.update(tips='验证码错误，请重新获取！')
                    del request.session['VerificationCode']

    return render(request, 'password.html', dict)

def logout_view(request):
    logout(request)
    return redirect('/login')

