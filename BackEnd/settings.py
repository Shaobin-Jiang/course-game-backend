import os
from pathlib import Path
from . import config

BASE_DIR = Path(__file__).resolve().parent.parent
CONFIG = config.CONFIG

SECRET_KEY = CONFIG.get('SECRET_KEY')
SECURE_CROSS_ORIGIN_OPENER_POLICY = 'None'

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = False
DEBUG = True

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'simpleui',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'index',
    'user',
    'utils',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',  # use Chinese
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
CORS_ORIGIN_WHITE_LIST = ('*')
CORS_ALLOW_METHODS = ('*')
CORS_ALLOW_HEADERS = ('*')

ROOT_URLCONF = 'BackEnd.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,  # Must be True to enable admin
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'BackEnd.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'CourseGame',
        'USER': CONFIG.get('USER'),
        'PASSWORD': CONFIG.get('PASSWORD'),
        'HOST': CONFIG.get('HOST'),
        'PORT': CONFIG.get('PORT')
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
AUTH_USER_MODEL = 'user.Player'

LANGUAGE_CODE = 'zh-hans'
TIME_ZONE = 'Asia/Shanghai'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'assets/'
STATIC_ROOT = os.path.join(BASE_DIR, 'assets')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

EMAIL_USE_SSL = True
EMAIL_HOST = CONFIG.get('EMAIL_HOST')
EMAIL_PORT = CONFIG.get('EMAIL_PORT')
EMAIL_HOST_USER = CONFIG.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = CONFIG.get('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER

# Simpleui config
SIMPLEUI_HOME_INFO = False
SIMPLEUI_HOME_ACTION = False
SIMPLEUI_ANALYSIS = False
SIMPLEUI_ICON = {
    '心理学经典研究I': 'fas fa-gamepad',
    '心理学经典研究II': 'fas fa-gamepad',
}
