## 1 从零部署

如果真的很不幸，我们需要从头部署这个游戏，可以按照以下步骤完成：

0. 安装python3以及相应的依赖，包括：
  - python3版本：3.10.6
  - 通过pip安装依赖:
    - django == 4.0.4
    - django-cors-headers == 3.12.0
    - django-simpleui == 2023.3.1
    - mysqlclient == 2.1.1
    - uwsgi == 2.0.21
  - 不一定要保证版本完全匹配（一般直接安装最新版本就行），但是如果出现版本冲突，可以按照这一套的版本进行安装。
1. 安装nginx并进行配置（此步略过，运维同学应该可以自行解决）  
2. 从当前git仓库上拉取代码：
  - 配置文件（`config.py`）不在git上（显然的），里面记录了密钥、数据库密码等敏感信息，可以找你的前一任运维同学要一下
  - 国内的网络环境嘛……反正`git pull`时不时会报错，多试几次就行
3. 如果数据库也寄了，你可能需要重新去`config.py`修改相应的配置。你还需要在新的数据库中创建`coursegame`这个database，剩下的建表操作就不用管了，Django会自己处理

不过还是要migrate一下:

```bash
python manage.py makemigrations index
python manage.py makemigrations user
python manage.py migrate
```
4. 如果cdn寄了，也需要上去重新配置，重点是把`cache-control`那一套设置一下，省的用户每次进入游戏都要重新加载静态资源
5. 如果前面都没什么问题，到这里应该可以正常跑起来了。接下来：
  - 先需要创建一个超级用户
    - 这个系统包含超级用户和普通管理员，超级用户有一些特殊的权限
    - 创建超级用户的命令是`python3 manage.py createsuperuser`
    - 创建后进入到`/admin`的管理系统下，添加组并赋予相应权限：
      - 心理学经典研究I
      - 心理学经典研究II

## 2 添加游戏

1. 在`templates/`下创建相应的HTML文件
2. 在`index/views.py`下创建相应的视图，并修改`index`函数中的`game_info`变量
3. 在`index/urls.py`下添加相应的url
4. 在`index/models.py`中创建相应的模型，并创建相应的权限，然后进行迁移
5. 在`index/admin.py`中添加相应的后台管理
6. 在管理系统中创建一个组
7. 在`user/admin.py`中添加相应的动作，并在`PlayerAdmin`的`actions`列表中添加
8. 在`settings.py`中修改图标（可选但是很推荐，不然很丑）

具体写法参照已经写好的函数就行

游戏模板不要重名，因为会根据这个创建日志文件夹

## 3 更新游戏

本地更新push到远程仓库，然后到服务器上拉取一下，之后重启uwsgi和刷新nginx

更新静态文件的话，要先`python3 manage.py collectstatic`一下

建议修改前端的文件的时候，动手改一下`index/templatetags/versioning.py`中的版本号，这样可以强制刷新静态文件缓存，防止出现奇怪的bug

## 4 其他

### 4.1 关于超级用户和普通管理员

超级用户有所有权限，普通管理员不能创建和修改权限组，只能看到自己校区的同学（本部和珠海校区都在用）的数据，也看不到超级用户的数据，后台有一些字段也仅对超级用户可见

### 4.2 添加用户

`/utils-add-users`下添加，执行操作的人是本部的添加的学生就是本部的，是珠海校区的添加的学生就是珠海校区的。

### 4.3 日志文件

直接去服务器上看，在`log`文件夹下，本部的数据在`bnu`里，珠海校区的数据在`bnuzh`里。
