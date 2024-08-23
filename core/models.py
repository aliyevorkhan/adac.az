from django.db import models
from ckeditor.fields import RichTextField

FULL_TIME = "Tam ştat"
PART_TIME = "Yarım ştat"
INTERNSHIP = "Təcrübəçi"
TYPE_CHOICES = [
    (FULL_TIME, "Tam ştat"),
    (PART_TIME, "Yarım ştat"),
    (INTERNSHIP, "Təcrübəçi"),
]


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = RichTextField()
    location = models.CharField(max_length=255)
    date = models.DateTimeField()
    image = models.ImageField(upload_to="events/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Article(models.Model):
    title = models.CharField(max_length=255)
    content = RichTextField()
    image = models.ImageField(upload_to="articles/")
    author = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Team(models.Model):
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    image = models.ImageField(upload_to="team/")
    linkedin_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    image = models.ImageField(upload_to="vacancies/")
    position = models.CharField(max_length=255)
    type = models.CharField(max_length=255, choices=TYPE_CHOICES, default=FULL_TIME)
    deadline = models.DateTimeField()
    title = models.CharField(max_length=255)
    description = RichTextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class VideoMaterial(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="video-materials/")
    description = RichTextField()
    youtube_url = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class JoinForm(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    date_of_birth = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    university = models.CharField(max_length=255)
    university_level = models.CharField(max_length=255)
    profession = models.CharField(max_length=255)
    job = models.CharField(max_length=255, blank=True, null=True)
    experience_years = models.CharField(max_length=255, blank=True, null=True)
    position = models.CharField(max_length=255, blank=True, null=True)
    motivation_letter = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.fullname

class EmailSubscription(models.Model):
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.email