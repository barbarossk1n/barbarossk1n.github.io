<!-- ---
layout: default
title: Contact
permalink: /pages/contact/
---

<div class="container">
  <h1>Contact Me</h1>
  
  <p>Interested in working together or have a question? Feel free to reach out using the form below or via email.</p>
  
  <div class="contact-info">
    <p><i class="fas fa-envelope"></i> <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    <p><i class="fab fa-linkedin"></i> <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank">LinkedIn Profile</a></p>
    <p><i class="fab fa-github"></i> <a href="https://github.com/{{ site.github_username }}" target="_blank">GitHub Profile</a></p>
  </div>
  
  <div class="contact-form">
    <form action="https://formspree.io/f/your-formspree-endpoint" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="_replyto" required>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      
      <button type="submit">Send Message</button>
    </form>
  </div>
</div> -->
