from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required, permission_required
from .models import ClassicStudies1, ClassicStudies2
import json, os
from datetime import datetime

@login_required(login_url='/login')
def index(request):
    game_info = [
        ('心理学经典研究I', '/classic-studies-1', 'index.play_ClassicStudies1'),
        ('心理学经典研究II', '/classic-studies-2', 'index.play_ClassicStudies2'),
    ]

    game_list = []
    for i in range(0, len(game_info)):
        has_perm = request.user.has_perm(game_info[i][2])
        game_list.append((game_info[i][0], game_info[i][1], has_perm))

    # TODO: allow staff users to see this tab once the testing is complete
    if request.user.is_superuser:
        game_list.append(('游戏平台管理系统', '/admin', True))

    game_list.append(('退出登录', '/logout', True))

    return render(request, 'index.html', {'game_list': game_list})

# Call this function in view functions to simplify coding
def game_view(request, used_model, template, max_session):
    user = used_model.objects.filter(user__username=request.user.username)
    if not user:
        player = used_model(user=request.user, session=0, level=0, scene=0)
        player.save()
    else:
        player = user[0]

    if player.user.is_staff and player.session < max_session:
        player.session = max_session
        player.level = 0
        player.scene = 0
        player.save()

    log_path = os.path.join('.', 'log', 'bnu' if player.user.headquarter else 'bnuzh', template.split('.')[0])
    if not os.path.exists(log_path):
        os.makedirs(log_path)

    # Only use log for non-staff users
    log_file = os.path.join(log_path, player.user.username + '.txt')
    if not os.path.exists(log_file) and not player.user.is_staff:
        with open(log_file, 'w', encoding='utf-8') as f:
            f.close()

    old_session = player.session
    old_level = player.level
    old_scene = player.scene

    if request.method == 'POST':
        data = json.loads(request.body)
        session = float(data['session'])
        level = float(data['level'])
        scene = float(data['scene'])
        summary = data['summary']

        # Progress cannot move backward
        if 100 * int(session) + 10 * int(level) + int(scene) >= 100 * old_session + 10 * old_level + old_scene:
            if int(session) - old_session <= 1 or int(level) - old_level <= 1 or int(scene) - old_scene <= 1:
                player.session = int(session)
                player.level = int(level)
                player.scene = int(scene)
                player.save()

                if not player.user.is_staff:
                    with open(log_file, 'a+', encoding='utf-8') as f:
                        log_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                        log_type = 'DONE' if scene - int(scene) < 0.1 else 'FAIL'
                        log_content = f'[{log_time}] {log_type}: session={int(session)}, level={int(level)}, scene={int(scene)} --- {summary}\n'
                        f.write(log_content)

                return HttpResponse(b'1')
        
        return HttpResponse(b'0')
        
    return render(request, template, {'session': old_session, 'level': old_level, 'scene': old_scene})

@login_required(login_url='/login')
@permission_required(perm='index.play_ClassicStudies1', login_url='/login')
def classic_studies_1(request):
    return game_view(request, ClassicStudies1, 'classic-studies-1.html', 5)

@login_required(login_url='/login')
@permission_required(perm='index.play_ClassicStudies2', login_url='/login')
def classic_studies_2(request):
    return game_view(request, ClassicStudies2, 'classic-studies-2.html', 6)
