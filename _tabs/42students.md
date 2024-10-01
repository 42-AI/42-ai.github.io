---
icon: fa-solid fa-bell
order: 2
title: Étudiants de 42
toc: true
layout: post
lang: fr
permalink: /42students
display_metadata: False
description:
    fr: Foire Aux Questions pour les étudiants de 42
    en: Q/A for 42 Students
---

{% assign template_variables = site.data.locales["tabs"]['42students']['students'] %}
{% assign lang = page.lang %}

<!-- ![42AI banniere](/assets/img/banners/banner_black_00.png){: width="100%";height="auto" } -->

## {{template_variables.who_adhesion.title[lang] }}

> {{template_variables.who_adhesion.text[lang] }}

## {{template_variables.how_adhesion.title[lang] }}

> {{template_variables.how_adhesion.text[lang] }}

## {{template_variables.how_contribution.title[lang] }}

> {{template_variables.how_contribution.text[lang] }}

## {{template_variables.blog_contribution.title[lang] }}

> {{template_variables.blog_contribution.text[lang] }}

