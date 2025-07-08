<!-- ---
layout: default
title: Blog
permalink: /pages/blog/
---

<div class="container">
  <h1>Blog</h1>
  
  <p>I write about quantitative finance, algorithmic trading, and software development for financial applications.</p>
  
  <div class="posts-list">
    {% for post in site.posts %}
    <div class="post-item">
      <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      {% if post.tags %}
      <div class="post-tags">
        {% for tag in post.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
      <a href="{{ post.url | relative_url }}">Read more →</a>
    </div>
    {% endfor %}
  </div>
</div> -->
