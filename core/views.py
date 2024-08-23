from django.shortcuts import render
from core.models import Event, Article, Team, VideoMaterial, Vacancy, JoinForm, EmailSubscription


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


def vacancies(request):
    vacancies = Vacancy.objects.filter(is_active=True)
    return render(request, "career-list.html", {"vacancies": vacancies})


def vacancy_detail(request, vacancy_id):
    vacancy = Vacancy.objects.get(id=vacancy_id)
    vacancies = Vacancy.objects.filter(is_active=True)
    return render(
        request, "career-detail.html", {"vacancy": vacancy, "vacancies": vacancies}
    )


def join_us(request):
    return render(request, "join-us.html")


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(["POST"])
def join_form(request):
    data = request.data
    if data.get("other-university"):
        data["university"] = data.get("other-university")

    JoinForm.objects.create(
        fullname=data.get("fullname"),
        email=data.get("email"),
        phone=data.get("phone"),
        date_of_birth=data.get("date-of-birth"),
        gender=data.get("gender"),
        university=data.get("university"),
        university_level=data.get("university-level"),
        profession=data.get("profession"),
        job=data.get("job"),
        experience_years=data.get("experience-years"),
        position=data.get("position"),
        motivation_letter=data.get("motivation-letter"),
    )
    return Response(
        {"message": "Form submitted successfully!"}, status=status.HTTP_201_CREATED
    )

@api_view(["POST"])
def email_subscription(request):
    data = request.data
    if EmailSubscription.objects.filter(email=data.get("email")).exists():
        return Response(
            {"message": "Siz artıq abunəsiniz!", "status": "error"}, status=status.HTTP_400_BAD_REQUEST
        )
    EmailSubscription.objects.create(
        email=data.get("email")
    )
    return Response(
        {"message": "Siz uğurla abunə oldunuz!", "status": "success"}, status=status.HTTP_201_CREATED
    )