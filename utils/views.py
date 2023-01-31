from django.shortcuts import redirect, render, HttpResponse
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth.models import Group
from user.models import Player
import json


@login_required(login_url='/login')
def add_users_view(request):
    available_groups = list(Group.objects.all())
    groups = []
    for group in available_groups:
        groups.append(str(group))

    if request.user.is_staff:
        if request.method == 'POST':
            data = json.loads(request.body)
            data_users = data['users'].split('|')
            data_groups = data['groups'].split(',')

            target_groups = []
            for group_index in data_groups:
                group_index = group_index.replace(',', '')
                if group_index != '':
                    target_groups.append(int(group_index))

            for user in data_users:
                if user != '':
                    user_info = user.split(',')
                    user_id = user_info[0]
                    user_name = user_info[1]
                    user_class = user_info[2]
                    potential_existing_players = Player.objects.filter(username=user_id)
                    if not potential_existing_players:
                        player = Player.objects.create_user(
                            username=user_id,
                            full_name=user_name,
                            student_class=user_class,
                            password='123456',
                            email=user_id + '@bnu.edu.cn'
                        )
                    else:
                        player = potential_existing_players[0]

                    for group_index in target_groups:
                        player.groups.add(Group.objects.get(name=groups[group_index]))
            return HttpResponse(b'1')

        return render(request, 'add-users.html', {'groups': groups})
    else:
        return redirect('/')
