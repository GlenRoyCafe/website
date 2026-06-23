---
layout: base.njk
title: Scenery
description: A few photos from around Glen Roy, Roy Bridge and Brae Lochaber.
---

<section class="page-hero">
  <div class="container narrow">
    <p class="eyebrow">Around the cafe</p>
    <h1>A glimpse of Brae Lochaber</h1>
    <p class="lede">Wondering where we're located?  Here ere are a few favourite views from the glens and hills around Roy Bridge.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="scenery-grid">
      {% for photo in scenery %}
        {% sceneryItem photo.file, photo.alt, photo.caption, loop.index0 %}
      {% endfor %}
    </div>
  </div>
</section>

<dialog id="lightbox" class="lightbox" aria-label="Photo viewer">
  <button type="button" class="lightbox-close" data-action="close" aria-label="Close">×</button>
  <button type="button" class="lightbox-nav lightbox-prev" data-action="prev" aria-label="Previous photo">‹</button>
  <button type="button" class="lightbox-nav lightbox-next" data-action="next" aria-label="Next photo">›</button>
  <figure class="lightbox-figure">
    <img class="lightbox-img" alt="">
    <figcaption class="lightbox-caption"></figcaption>
  </figure>
</dialog>

<script src="/assets/js/lightbox.js" defer></script>
