from django.urls import path
from core.views import home, events, event_detail, articles, article_detail, about

urlpatterns = [
    path("", home, name="home"),
    path("about/", about, name="about"),
    path("events/", events, name="events"),
    path("articles/", articles, name="articles"),
    path("article/<int:article_id>/", article_detail, name="article_detail"),
    path("event/<int:event_id>/", event_detail, name="event_detail"),
]