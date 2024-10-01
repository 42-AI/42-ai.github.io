---
icon: fa-solid fa-people-group
order: 3
toc: true
layout: post
title:  Team
lang: en
permalink: /team
display_metadata: False
description: 
    en: Meet the team and the people who contributed to building 42AI since 2017
    fr: Rencontrez l'équipe et tous ceux qui ont contribué à 42AI depuis 2017
---


{% assign t_vars = site.data.locales["tabs"]['team'] %}
<!-- t_vars for team_variables -->
{% assign lang = page.lang %}
{% assign page.description = t_vars.description[lang] %}

{% assign current_team = t_vars['current_team'] %}

<h2>{{current_team.mandate}}</h2>

<div class="column" >
    <div class="row" style="align-items: center; display:flex; margin-top: 15px">
        <div class="col-1 col-xs-12"><img src="{{current_team.bureau.president.person.photo}}" width=48px/></div>
        <div class="col-5 col-xs-12">{{current_team.bureau.president.person.name}}</div>
        <div class="col-5 col-xs-12"><span>{{current_team.bureau.president.title[lang]}}</span></div>
        <!-- <div class="col-2">
            <span style="display: flex; justify-content: space-evenly">
                <a href="{{current_team.bureau.president.person.github}}"><i class="fab fa-github"></i></a>
                <a href="{{current_team.bureau.president.person.linkedin}}"><i class="fab fa-linkedin"></i></a>
                <a href="{{current_team.bureau.president.person.twitter}}"><i class="fab fa-twitter"></i></a>
            </span>
            </div> -->
    </div>
    <div class="row" style="align-items: center; display:flex; margin-top: 15px">
        <div class="col-1 col-xs-12"><img src="{{current_team.bureau.tresorier.person.photo}}" width=48px/></div>
        <div class="col-5 col-xs-12">{{current_team.bureau.tresorier.person.name}}</div>
        <div class="col-5 col-xs-12"><span>{{current_team.bureau.tresorier.title[lang]}}</span></div>
        <!-- <div class="col-2">
            <span style="display: flex; justify-content: space-evenly">
                <a href="{{current_team.bureau.tresorier.person.github}}"><i class="fab fa-github"></i></a>
                <a href="{{current_team.bureau.tresorier.person.linkedin}}"><i class="fab fa-linkedin"></i></a>
                <a href="{{current_team.bureau.tresorier.person.twitter}}"><i class="fab fa-twitter"></i></a>
            </span>
            </div> -->
    </div>
    <div class="row" style="align-items: center; display:flex; margin-top: 15px">
        <div class="col-1 col-xs-12"><img src="{{current_team.bureau.secretaire.person.photo}}" width=48px/></div>
        <div class="col-5 col-xs-12">{{current_team.bureau.secretaire.person.name}}</div>
        <div class="col-5 col-xs-12"><span>{{current_team.bureau.secretaire.title[lang]}}</span></div>
        <!-- <div class="col-2">
            <span style="display: flex; justify-content: space-evenly">
                <a href="{{current_team.bureau.secretaire.person.github}}"><i class="fab fa-github"></i></a>
                <a href="{{current_team.bureau.secretaire.person.linkedin}}"><i class="fab fa-linkedin"></i></a>
                <a href="{{current_team.bureau.secretaire.person.twitter}}"><i class="fab fa-twitter"></i></a>
            </span>
            </div> -->
    </div>
    <div class="row" style="align-items: center; display:flex; margin-top: 15px">
        <div class="col-1 col-xs-12"><img src="{{current_team.bureau.secretaire2.person.photo}}" width=48px/></div>
        <div class="col-5 col-xs-12">{{current_team.bureau.secretaire2.person.name}}</div>
        <div class="col-5 col-xs-12"><span>{{current_team.bureau.secretaire2.title[lang]}}</span></div>
        <!-- <div class="col-2">
            <span style="display: flex; justify-content: space-evenly">
                <a href="{{current_team.bureau.secretaire2.person.github}}"><i class="fab fa-github"></i></a>
                <a href="{{current_team.bureau.secretaire2.person.linkedin}}"><i class="fab fa-linkedin"></i></a>
                <a href="{{current_team.bureau.secretaire2.person.twitter}}"><i class="fab fa-twitter"></i></a>
            </span>
            </div>
    </div> -->
</div>
<hr/>
    <div class="row" style="align-items: center; display:flex; margin-top: 15px">
        <div class="col-1 col-xs-12"><img src="{{current_team.lab.person.photo}}" width=48px/></div>
        <div class="col-5 col-xs-12">{{current_team.lab.person.name}}</div>
        <div class="col-5 col-xs-12"><span>{{current_team.lab.title[lang]}}</span></div>
        <!-- <div class="col-2">
            <span style="display: flex; justify-content: space-evenly">
                <a href="{{current_team.lab.person.github}}"><i class="fab fa-github"></i></a>
                <a href="{{current_team.lab.person.linkedin}}"><i class="fab fa-linkedin"></i></a>
                <a href="{{current_team.lab.person.twitter}}"><i class="fab fa-twitter"></i></a>
            </span>
            </div> -->
    </div>
    <div class="row" style="align-items: center; display:flex; margin-top: 15px">
        <div class="col-1 col-xs-12"><img src="{{current_team.media.person.photo}}" width=48px/></div>
        <div class="col-5 col-xs-12">{{current_team.media.person.name}}</div>
        <div class="col-5 col-xs-12"><span>{{current_team.media.title[lang]}}</span></div>
        <!-- <div class="col-2">
            <span style="display: flex; justify-content: space-evenly">
                <a href="{{current_team.media.person.github}}"><i class="fab fa-github"></i></a>
                <a href="{{current_team.media.person.linkedin}}"><i class="fab fa-linkedin"></i></a>
                <a href="{{current_team.media.person.twitter}}"><i class="fab fa-twitter"></i></a>
            </span>
            </div> -->
    </div>
<hr/>

<h2>Alumni</h2>

<p>Section under construction</p>