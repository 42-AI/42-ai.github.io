---
# the default layout is 'page'
# layout: page
icon: fas fa-robot
order: 3
title: Departments
layout: post
toc: true
lang: en
permalink: /departments
display_metadata: False
description:
    en: Departments are the functional units of 42AI
    fr: Les pôles sont les entités fonctionnelles de 42AI
---

{% assign template_variables = site.data.locales["tabs"]['departments'] %}
{% assign lang = page.lang %}

{{ template_variables.intro[lang] }}

### {{template_variables.pedago.title[lang]}}

> **{{template_variables.pedago.people}}**
> <a href="mailto:{{template_variables.pedago.contact}}"><span style="float:right">{{template_variables.pedago.contact}}&nbsp;&nbsp;<i class="fas fa-envelope"></i></span></a>

{{template_variables.pedago.description[lang]}}

### {{template_variables.ethics.title[lang]}}

> **{{template_variables.ethics.people}}**
> <a href="mailto:{{template_variables.ethics.contact}}"><span style="float:right">{{template_variables.ethics.contact}}&nbsp;&nbsp;<i class="fas fa-envelope"></i></span></a>

{{template_variables.ethics.description[lang]}}

### {{template_variables.lab.title[lang]}}

> **{{template_variables.lab.people}}**
> <a href="mailto:{{template_variables.lab.contact}}"><span style="float:right">{{template_variables.lab.contact}}&nbsp;&nbsp;<i class="fas fa-envelope"></i></span></a>

{{template_variables.lab.description[lang]}}

### {{template_variables.media.title[lang]}}

> **{{template_variables.media.people}}**
> <a href="mailto:{{template_variables.media.contact}}"><span style="float:right">{{template_variables.media.contact}}&nbsp;&nbsp;<i class="fas fa-envelope"></i></span></a>

{{template_variables.media.description[lang]}}