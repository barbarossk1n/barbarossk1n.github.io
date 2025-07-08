---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Quant Developer</h1>
    <p class="hero-subtitle">Specializing in financial algorithms, trading strategies, and quantitative analysis</p>
    <a href="{{ '/pages/projects' | relative_url }}" class="hero-cta">View My Projects</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>About Me</h2>
    </div>
    <div class="about-content">
      <p>I am a quantitative developer specializing in [financial markets/algorithmic trading/risk management]. With a background in [mathematics/physics/computer science/finance], I combine strong analytical skills with software engineering expertise to develop robust quantitative solutions.</p>
      <p><a href="{{ '/pages/about' | relative_url }}">Learn more about me →</a></p>
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
          <li>Python</li>
          <li>C++</li>
          <li>R</li>
          <li>SQL</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Quantitative Libraries</h3>
        <ul>
          <li>NumPy, Pandas</li>
          <li>SciPy, Statsmodels</li>
          <li>QuantLib</li>
          <li>Scikit-learn, TensorFlow</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Financial Knowledge</h3>
        <ul>
          <li>Derivatives Pricing</li>
          <li>Risk Models</li>
          <li>Algorithmic Trading</li>
          <li>Portfolio Optimization</li>
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
      <div class="project-card">
        <div class="project-image" style="background-image: url('{{ '/assets/images/project-thumbnails/project1.jpg' | relative_url }}');"></div>
        <div class="project-content">
          <h3>Options Pricing Model</h3>
          <p>Implementation of advanced options pricing models with calibration to market data.</p>
          <div class="project-tags">
            <span class="tag">Python</span>
            <span class="tag">QuantLib</span>
            <span class="tag">Derivatives</span>
          </div>
          <div class="project-links">
            <a href="#"><i class="fab fa-github"></i> GitHub</a>
            <a href="#"><i class="fas fa-external-link-alt"></i> Demo</a>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-image" style="background-image: url('{{ '/assets/images/project-thumbnails/project2.jpg' | relative_url }}');"></div>
        <div class="project-content">
          <h3>Portfolio Optimization</h3>
          <p>Implementation of modern portfolio theory with various risk metrics and constraints.</p>
          <div class="project-tags">
            <span class="tag">Python</span>
            <span class="tag">CVXPY</span>
            <span class="tag">Finance</span>
          </div>
          <div class="project-links">
            <a href="#"><i class="fab fa-github"></i> GitHub</a>
            <a href="#"><i class="fas fa-external-link-alt"></i> Demo</a>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-image" style="background-image: url('{{ '/assets/images/project-thumbnails/project3.jpg' | relative_url }}');"></div>
        <div class="project-content">
          <h3>Trading Strategy Backtester</h3>
          <p>A framework for backtesting trading strategies with realistic market conditions.</p>
          <div class="project-tags">
            <span class="tag">Python</span>
            <span class="tag">Pandas</span>
            <span class="tag">Trading</span>
          </div>
          <div class="project-links">
            <a href="#"><i class="fab fa-github"></i> GitHub</a>
            <a href="#"><i class="fas fa-external-link-alt"></i> Demo</a>
          </div>
        </div>
      </div>
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
      <p>Interested in working together? Feel free to reach out!</p>
      <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
      <div style="margin-top: 20px;">
        <a href="{{ '/pages/contact' | relative_url }}" class="hero-cta">Contact Form</a>
      </div>
    </div>
  </div>
</section>
