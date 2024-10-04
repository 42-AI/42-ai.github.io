---
icon: fas fa-lightbulb
order: 5
toc: true
layout: post
lang: en
description: 
    en: Express yourselves !
    fr: Exprimez-vous !
title: Blog
permalink: /blog
display_metadata: False
---

{% assign default = site.posts | where_exp: 'item', 'item.pin != true and item.hidden != true' %}

## Contributions 

> [Create a blog article on 42AI's site](/en/42students#contributing-by-publishing-a-blog-article)
> 
> <a href="http://42ai.medium.com/" target="_blank">42AI sur Medium</a>

## Articles

<div id="post-list" class="flex-grow-1 px-xl-1">
  {% for post in site.posts %}
    {% if post.is_blog_post %}
    <div class="container" style="margin-top: 15px">
    <article class="card-wrapper card" >
      <a href="{{ post.url | relative_url }}" class="post-preview flex-md-row-reverse">
          <div class="row" >
        {% assign card_body_col = '12' %}
        {% if post.image %}
          {% unless src contains '//' %}
            {% assign src = post.media_subpath | append: '/' | append: src | replace: '//', '/' %}
          {% endunless %}
          {% assign src = post.image.path | default: '/assets/img/banners/banner_post_blog.png' %}
          {% assign card_body_col = '7' %}
        {% else %}
          {% assign src="/assets/img/banners/banner_post_blog.png" %}
        {% endif %}
                <img style="max-height: 100%; position: absolute; right: 15px; top: 0px; opacity: .025" src="{{src}}" />
        <div class="col-md-{{ card_body_col }}">
          <div class="card-body d-flex flex-column">
            <h2 class="card-title my-2 mt-md-0">{{ post.title }}</h2>
            <div class="card-text content mt-0 mb-3">
              <p>{% include post-description.html %}</p>
            </div>
            <div class="post-meta flex-grow-1 d-flex align-items-end">
              <div class="me-auto">
                <!-- posted date -->
                <i class="far fa-calendar fa-fw me-1"></i>
                {% include datetime.html date=post.date lang=lang %}
                <!-- categories -->
                {% if post.categories.size > 0 %}
                  <i class="far fa-folder-open fa-fw me-1"></i>
                  <span class="categories">
                    {% for category in post.categories %}
                      {{ category }}
                      {%- unless forloop.last -%},{%- endunless -%}
                    {% endfor %}
                  </span>
                {% endif %}
                  <!-- HERE -->
              </div>
            </div>
            <!-- .post-meta -->
          </div>
          <!-- .card-body -->
        </div>
        </div>
      </a>
    </article>
    </div>
    {%endif%}
  {% endfor %}
</div>
<!-- #post-list -->