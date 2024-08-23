from django.urls import path
from core.views import (
    home,
    events,
    event_detail,
    articles,
    article_detail,
    about,
    video_materials,
    video_material_detail,
    vacancies,
    vacancy_detail,
    join_us,
    join_form,
    email_subscription,
)

urlpatterns = [
    path("", home, name="home"),
    path("about/", about, name="about"),
    path("events/", events, name="events"),
    path("articles/", articles, name="articles"),
    path("article/<int:article_id>/", article_detail, name="article_detail"),
    path("video-materials/", video_materials, name="video-materials"),
    path(
        "video-material/<int:video_material_id>/",
        video_material_detail,
        name="video_material_detail",
    ),
    path("event/<int:event_id>/", event_detail, name="event_detail"),
    path("vacancies/", vacancies, name="vacancies"),
    path("vacancy/<int:vacancy_id>/", vacancy_detail, name="vacancy_detail"),
    path("join-us/", join_us, name="join_us"),
    path("api/join-form/", join_form, name="join_form"),
    path("api/email-subscription/", email_subscription, name="email_subscription"),
]
