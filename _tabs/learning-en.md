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
    en: By 42students, for anyone willing to learn !
    fr: Créé par les étudiants de 42, pour tous !
---

{% assign learning_template_variables = site.data.locales["tabs"]['learning']['learning'] %}

{% assign lang = page.lang %}
{% assign page.description = learning_template_variables.description[lang] %}

## {{learning_template_variables.bootcamps.title[lang]}}

{{ learning_template_variables.bootcamps.description[lang]}}

#### 1. {{learning_template_variables.bootcamps.python.title[lang]}} <i style="float:right" class="fab fa-python"></i>

{{ learning_template_variables.bootcamps.python.description[lang] }}

> <a href='{{learning_template_variables.bootcamps.python.url}}'>{{learning_template_variables.bootcamps.python.url}}</a>

#### 2. {{learning_template_variables.bootcamps.ml.title[lang]}} <i style="float:right" class="fas fa-cogs"></i>

{{ learning_template_variables.bootcamps.ml.description[lang] }}

> <a href='{{learning_template_variables.bootcamps.ml.url}}'>{{learning_template_variables.bootcamps.ml.url}}</a>

#### 3. {{learning_template_variables.bootcamps.dl.title[lang]}} <i style="float:right" class="fas fa-layer-group"></i>

{{ learning_template_variables.bootcamps.dl.description[lang] }}

> <a href='{{learning_template_variables.bootcamps.dl.url}}'>{{learning_template_variables.bootcamps.dl.url}}</a>

## {{learning_template_variables.other_resources.title[lang]}}

Section currently under construction