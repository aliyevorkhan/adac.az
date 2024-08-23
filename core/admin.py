from django.contrib import admin
from core.models import (
    Event,
    Article,
    Team,
    Vacancy,
    VideoMaterial,
    JoinForm,
    EmailSubscription,
)

admin.site.register(Event)
admin.site.register(Article)
admin.site.register(Team)
admin.site.register(Vacancy)
admin.site.register(VideoMaterial)
admin.site.register(JoinForm)
admin.site.register(EmailSubscription)
