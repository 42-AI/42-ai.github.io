---
icon: fa-solid fa-school 
order: 1
title: Learning resources
toc: true
layout: post
lang: en
permalink: /learning
display_metadata: False
description:
    en: Created by 42 students, for students !
    fr: Créé par les étudiants de 42, pour les étudiants !
---


{% assign template_variables = site.data.locales["tabs"]['learning']['learning'] %}

{% assign lang = page.lang %}
{% assign page.description = template_variables.description[lang] %}

## {{template_variables.bootcamps.title[lang]}}

> {{ template_variables.bootcamps.description[lang]}}
{: .prompt-info }

#### 1. {{template_variables.bootcamps.python.title[lang]}}

> {{ template_variables.bootcamps.python.description[lang] }}

#### 2. {{template_variables.bootcamps.ml.title[lang]}}

> {{ template_variables.bootcamps.ml.description[lang] }}

#### 3. {{template_variables.bootcamps.dl.title[lang]}}

> {{ template_variables.bootcamps.dl.description[lang] }}

## {{template_variables.other_resources.title[lang]}}

TODO