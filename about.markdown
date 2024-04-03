---
layout: page
title: About
permalink: /about/
---
```
class MyBio:
    def __init__(self):
        self.name = "Gavin Qu"
        self.role = "Data Creative"
        self.location = " "
        self.languages = ["Python", "JavaScript", "SQL", "R", ]
        self.interests = ["Machine Learning", "A/B Testing", "Web Dev", "Open Source"]

    def current_project(self):
        return "Working on a book recommendation system for a community-based book exchange"

    def contact(self):
        return {
            "LinkedIn": "linkedin.com/in/gavinqu/",
            "Email": "gavin.qu@hotmail.com",
        }

    def about_me(self):
        return """
        Passionate and creative data science student with diverse background in economics and social sciences. 
        """

bio = MyBio()
print(bio.about_me())
print("Current Project:", bio.current_project())
print("Contact Info:", bio.contact())
```
