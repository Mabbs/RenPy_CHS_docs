---
layout: default
title: Archives
---

# Archives

* * *

{% for post in site.posts %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %} 
{% if forloop.first %}

## {{ this_year }}

{% endif %} 

- [{{ post.title }}{% if post.layout == "encrypt" %} [加密] {% endif %}]({{ post.url }}) - {{ post.date | date: "%-d %B %Y" }}   

{% if forloop.last %} 
{% else %}
{% if this_year != next_year %}

## {{next_year}}

{% endif %} {% endif %} {% endfor %} 
