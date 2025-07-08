---
layout: default
title: Home
---

<!-- <section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">{{ site.data.home.hero.title }}</h1>
    <p class="hero-subtitle">{{ site.data.home.hero.subtitle }}</p>
    <a href="{{ '/pages/projects' | relative_url }}" class="hero-cta">{{ site.data.home.hero.cta_text }}</a>
  </div>
</section> -->

<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>About Me</h2>
    </div>
    <div class="about-content">
      <p>{{ site.data.home.about.text }}</p>
      <p><a href="{{ '/pages/about' | relative_url }}">{{ site.data.home.about.link_text }}</a></p>
    </div>
  </div>
</section>

<section class="section" style="background-color: #f6f8fa;">
  <div class="container">
    <div class="section-title">
      <h2>Skills</h2>
    </div>
    <div class="skills-container">
      <div class="skill-category">
        <h3>Programming Languages</h3>
        <ul>
          {% for skill in site.data.home.skills.programming %}
          <li>{{ skill }}</li>
          {% endfor %}
        </ul>
      </div>
      <div class="skill-category">
        <h3>Quantitative Libraries</h3>
        <ul>
          {% for skill in site.data.home.skills.libraries %}
          <li>{{ skill }}</li>
          {% endfor %}
        </ul>
      </div>
      <div class="skill-category">
        <h3>Financial Knowledge</h3>
        <ul>
          {% for skill in site.data.home.skills.financial %}
          <li>{{ skill }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Featured Projects</h2>
    </div>
    <div class="projects-grid">
      {% for project in site.data.home.featured_projects %}
      <div class="project-card">
        <div class="project-image" style="background-image: url('{{ '/assets/images/project-thumbnails/' | append: project.image | relative_url }}');"></div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            {% for tag in project.tags %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
          <div class="project-links">
            <a href="{{ project.github_link }}"><i class="fab fa-github"></i> GitHub</a>
            <a href="{{ project.demo_link }}"><i class="fas fa-external-link-alt"></i> Demo</a>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    <div style="text-align: center; margin-top: 30px;">
      <a href="{{ '/pages/projects' | relative_url }}" class="hero-cta">View All Projects</a>
    </div>
  </div>
</section>

<section class="section" style="background-color: #f6f8fa;">
  <div class="container">
    <div class="section-title">
      <h2>Latest Blog Posts</h2>
    </div>
    <div class="posts-list">
      {% for post in site.posts limit:3 %}
      <div class="post-item">
        <h3 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        <a href="{{ post.url | relative_url }}">Read more →</a>
      </div>
      {% endfor %}
    </div>
    <div style="text-align: center; margin-top: 30px;">
      <a href="{{ '/pages/blog' | relative_url }}" class="hero-cta">View All Posts</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Contact Me</h2>
    </div>
    <div class="contact-content" style="text-align: center;">
      <p>{{ site.data.home.contact.text }}</p>
      <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
      <div style="margin-top: 20px;">
        <a href="{{ '/pages/contact' | relative_url }}" class="hero-cta">Contact Form</a>
      </div>
    </div>
  </div>
</section>
