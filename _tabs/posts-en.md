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

## Contributions 

> [Create a blog article on 42AI's site](/42students/#contributing-by-publishing-a-blog-article)

## Articles

<div id="post-list" class="flex-grow-1 px-xl-1" style="max-width: 90%; margin: 0 5% 0 5%;">
{% for post in site.posts %}
    {% if post.is_blog_post == true %}
    <a href="{{ post.url | relative_url }}" class="row g-0 flex-md-row-reverse">
        <article class="card-wrapper card" style="background-image: url(assets/img/banners/blog_card_background_img2.png); background-dimensions: cover; margin-top: 15px">
                  <div class="col-md-{{ card_body_col }}">
                    <div class="card-body d-flex flex-column">
                      <h2 class="card-title my-2 mt-md-0">{{ post.title }}</h2>
                      <div class="card-text content mt-0 mb-3">
                        <p>{% include post-description.html %}</p>
                      </div>
                      <div class="card-text content mt-0 mb-3">
                        <span style="font-size: 14px;">
                            <i class="fas fa-pen" style="margin-right: 10px;"></i>
                        {% if post.author %} By {{post.author}}
                        {% else %} By 42 Artificial Intelligence
                        {% endif %}</span>
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
                        </div>
                        {% if post.pin %}
                          <div class="pin ms-1">
                            <i class="fas fa-thumbtack fa-fw"></i>
                            <span>{{ site.data.locales[lang].post.pin_prompt }}</span>
                          </div>
                        {% endif %}
                      </div>
                      <!-- .post-meta -->
                    </div>
                    <!-- .card-body -->
                  </div>
    </article>
    </a>
    {% endif %}
{% endfor %}
</div>
