---
layout: base.njk
title: Contact
description: Contact Glen Roy Cafe.
---

<section class="page-hero">
  <div class="container narrow">
    <p class="eyebrow">Contact</p>
    <h1>Get in touch</h1>
    <p class="lede">Questions, local ideas, supplier enquiries or event suggestions are welcome.</p>
  </div>
</section>

<section class="section">
  <div class="container contact-grid">
    <div class="panel">
      <h2>Contact details</h2>
      <p><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
      <p><strong>Location:</strong> {{ site.address }}</p>
      <p><strong>Facebook:</strong> <a href="{{ site.facebook }}">Glen Roy Cafe on Facebook</a></p>
    </div>
    <form class="contact-form" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact">
      <label>Name <input name="name" autocomplete="name" required></label>
      <label>Email <input type="email" name="email" autocomplete="email" required></label>
      <label>Message <textarea name="message" rows="6" required></textarea></label>
      <button class="button primary" type="submit">Send message</button>
      <p class="form-note">This form is Netlify-compatible. For Cloudflare Pages, connect a form provider or replace this with a mailto link.</p>
    </form>
  </div>
</section>
