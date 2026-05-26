---
layout: base.njk
title: Home
description: Glen Roy Cafe in Roy Bridge — coffee, tea, baking, sandwiches, local staples and a warm welcome.
hero_heading: Your village cafe in Roy Bridge
hero_text: Fresh coffee, proper tea, home baking, sandwiches, useful staples and a warm welcome in Brae Lochaber.
primary_button_text: See the draft menu
primary_button_url: /menu/
secondary_button_text: Get in touch
secondary_button_url: /contact/
---

<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Glen Roy Cafe · Roy Bridge</p>
      <h1>{{ hero_heading }}</h1>
      <p class="lede">{{ hero_text }}</p>
      <p class="status-note">{{ site.opening_status }}</p>
      <div class="button-row">
        <a class="button primary" href="{{ primary_button_url }}">{{ primary_button_text }}</a>
        <a class="button secondary" href="{{ secondary_button_url }}">{{ secondary_button_text }}</a>
      </div>
    </div>
    <div class="hero-card" aria-label="Cafe highlights">
      <img src="{{ site.logo }}" alt="{{ site.name }} logo" class="hero-logo">
      <ul class="tick-list">
        <li>Expanded, regular hours</li>
        <li>Coffee, tea, baking and sandwiches</li>
        <li>A small shop for bread, milk and essentials</li>
        <li>Community-focused events and gatherings</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="container cards three">
    <article class="card">
      <h2>Coffee, tea & baking</h2>
      <p>Simple, good-quality cafe standards: espresso drinks, selected teas, tray bakes, cakes and morning rolls.</p>
    </article>
    <article class="card">
      <h2>Lunch & quick bites</h2>
      <p>Sandwiches, toasties, soup when practical, and hot cabinet options without trying to become a full restaurant.</p>
    </article>
    <article class="card">
      <h2>Useful local staples</h2>
      <p>A small shop offer for everyday essentials such as bread, milk and locally useful items.</p>
    </article>
  </div>
</section>

<section class="section muted">
  <div class="container split">
    <div>
      <p class="eyebrow">Community first</p>
      <h2>A cafe that earns its place in the village</h2>
      <p>We want Glen Roy Cafe to be practical, welcoming and useful: somewhere to stop for coffee, meet neighbours, pick up essentials and bring visitors.</p>
    </div>
    <div class="panel">
      <h3>What is coming next</h3>
      <ul>
        <li>Refreshed opening hours</li>
        <li>Improved cafe layout and service flow</li>
        <li>Local feedback and an open house</li>
        <li>Occasional special evening events</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">News</p>
      <h2>Latest updates</h2>
    </div>
    <div class="cards two">
      {% for post in collections.announcements | slice(0, 2) %}
        <article class="card">
          <p class="date">{{ post.date | readableDate }}</p>
          <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
          <p>{{ post.data.summary }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
