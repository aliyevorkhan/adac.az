from django.shortcuts import render
from core.models import Event, Article, Team, VideoMaterial


def home(request):
    events = Event.objects.filter(is_active=True)
    return render(request, "index.html", {"events": events})


def events(request):
    events = Event.objects.filter(is_active=True)
    return render(request, "event-list.html", {"events": events})


def event_detail(request, event_id):
    event = Event.objects.get(id=event_id)
    return render(request, "event-detail.html", {"event": event})


def articles(request):
    articles = Article.objects.filter(is_active=True)
    return render(request, "article-list.html", {"articles": articles})


def article_detail(request, article_id):
    article = Article.objects.get(id=article_id)
    articles = Article.objects.filter(is_active=True)
    return render(
        request, "article-detail.html", {"article": article, "articles": articles}
    )


def video_materials(request):
    video_materials = VideoMaterial.objects.filter(is_active=True)
    return render(request, "video-materials.html", {"video_materials": video_materials})


def video_material_detail(request, video_material_id):
    video_material = VideoMaterial.objects.get(id=video_material_id)
    video_materials = VideoMaterial.objects.filter(is_active=True)
    return render(
        request,
        "video-material-detail.html",
        {"video_material": video_material, "video_materials": video_materials},
    )


def about(request):
    team = Team.objects.filter(is_active=True)
    return render(request, "about.html", {"team": team})
