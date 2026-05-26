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
      <p><strong>Location:</strong> {{ site.address }}</p>
      <p style="margin-top: 0.5rem; margin-bottom: 1.5rem;">
        <a href="https://www.google.com/maps/search/?api=1&query=Glen+Roy+Cafe,+Roy+Bridge+PH31+4AE" target="_blank" rel="noopener noreferrer" class="button secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem; text-decoration: none;">
          Get Directions ↗
        </a>
      </p>
      <p><strong>Facebook:</strong> <a href="{{ site.facebook }}">Glen Roy Cafe on Facebook</a></p>
      <p class="form-note" style="margin-top: 1.5rem;">For opening updates, specials, and local notices, follow our Facebook page.</p>
    </div>
    <div class="panel" style="display: flex; flex-direction: column; gap: 1.5rem; border-left: 4px solid var(--color-green);">
      <h2>Email us</h2>
      <p class="lede" style="font-size: 1.1rem; margin: 0;">The best way to reach us is by email. We check our inbox daily and will get back to you as soon as possible.</p>
      <div style="background: var(--color-cream); padding: 1.5rem; border-radius: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1rem; border: 1px solid var(--border);">
        <span style="font-size: 2rem; color: var(--color-green);">✉</span>
        <a href="mailto:{{ site.email }}" style="font-size: 1.4rem; font-family: var(--font-serif); font-weight: bold; color: var(--color-green-dark); text-decoration: none; word-break: break-all;">{{ site.email }}</a>
        <a href="mailto:{{ site.email }}" class="button primary" style="width: 100%; max-width: 280px; margin-top: 0.5rem; text-decoration: none;">
          Send Email Direct
        </a>
      </div>
      <div style="font-size: 0.95rem; color: var(--color-muted);">
        <p style="margin: 0 0 0.5rem 0; font-weight: 700;">Useful details to include:</p>
        <ul style="margin: 0; padding-left: 1.2rem;">
          <li>Your name and contact phone number</li>
          <li>A clear subject line (e.g., "Supplier Enquiry" or "Event Booking")</li>
          <li>As much detail as possible to help us respond quickly</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section" style="padding-top: 0;">
  <div class="container">
    <div class="panel" style="padding: 0; overflow: hidden; height: 400px; border-radius: var(--radius); box-shadow: var(--shadow); border: 1px solid var(--border);">
      <iframe 
        src="https://maps.google.com/maps?q=Glen%20Roy%20Cafe,%20Roy%20Bridge%20PH31%204AE&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</section>
