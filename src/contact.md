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
  <div class="container">
    <p class="status-banner" style="max-width: 720px; margin: 0 auto 2rem;">{{ site.opening_status }}</p>
  </div>
  <div class="container contact-grid">
    <div class="panel hours-panel">
      <h2>Opening hours</h2>
      <p class="form-note" style="margin: 0 0 1rem;">From 15 June</p>
      <dl class="hours-list">
        {% for h in site.hours %}
          <div class="hours-row{% if h.closed %} closed{% endif %}"><dt>{{ h.day }}</dt><dd>{{ h.display }}</dd></div>
        {% endfor %}
      </dl>
      <hr style="border: 0; border-top: 1px solid var(--border); margin: 1.5rem 0;">
      <h2>Find us</h2>
      <p><strong>Location:</strong> {{ site.address }}<br>{{ site.postcode }}</p>
      <p style="margin-top: 0.75rem; margin-bottom: 1rem;">
        <a href="https://www.google.com/maps/search/?api=1&query=Glen+Roy+Cafe,+Roy+Bridge+PH31+4AE" target="_blank" rel="noopener noreferrer" class="button secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem; text-decoration: none;">
          Get Directions ↗
        </a>
      </p>
      <p><strong>Facebook:</strong> <a href="{{ site.facebook }}">Glen Roy Cafe on Facebook</a></p>
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
    <div class="map-embed">
      <iframe
        title="Glen Roy Cafe location on Google Maps"
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
