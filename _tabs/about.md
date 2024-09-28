---
# the default layout is 'page'
layout: post
icon: fas fa-info-circle
order: 2
title: L'association
toc: true
lang: fr
permalink: /about
display_metadata: False
description: 
    fr: "Informations à propos de 42 Artificial Intelligence"
    en: "Relevant information about 42 Artificial Intelligence"
---

{% assign template_variables = site.data.locales["tabs"]['about']['about'] %}

{% assign lang = page.lang %}

{{ template_variables.intro[lang]}}

![Historique logos 42AI](/assets/img/banners/banner_legacy_logos.png){: width="100%" height="auto" }

## {{ template_variables.social_object.title[lang]}}

{{ template_variables.social_object.text[lang]}}

## {{ template_variables.action.title[lang]}}

> {{ template_variables.action.text[lang]}}

## {{ template_variables.statuts.title[lang]}}

> {{ template_variables.statuts.text[lang]}}

## {{ template_variables.finance.title[lang]}}

> {{ template_variables.finance.text[lang]}}