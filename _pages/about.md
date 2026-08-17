---
layout: about
title: Home
permalink: /
subtitle: 

selected_papers: false
social: true

announcements:
  enabled: false

latest_posts:
  enabled: false
---
## Introduction and Welcome
The Messerley Collection is a set of 513 Virginia trade tokens — small paper or coin-like tokens issued by local merchants in exchange for goods and services, with dated examples ranging from 1894 to 1964. The collection is housed in the [Madison Art Collection](https://www.jmu.edu/madisonart/index.shtml) and is the gracious gift of Tim Messerley.

Below are some featured tokens from the collection. All tokens are available on the [Collection](collection/) or the [Map](map/) pages. All images and text in the Collection are in the public domain and may be shared with attribution. 

<div class="showcase-gallery">
  {% assign featured_tokens = site.tokens | where: "featured", true %}
  {% for token in featured_tokens %}
    <div class="showcase-item" data-sort-key="{{ token.sort_key }}">
      <a href="{{ token.url | relative_url }}">
        {% if token.image_aligned %}
          {% assign img_path = token.image_aligned | remove: '.png' | remove: '.jpg' %}
          <picture>
            <source
              srcset="{% for i in site.imagemagick.widths %}{{ img_path | prepend: '/assets/img/' | relative_url }}-{{ i }}.webp {{ i }}w,{% endfor %}"
              type="image/webp"
              sizes="700px"
            >
            <img src="{{ token.image_aligned | prepend: '/assets/img/' | relative_url }}" alt="{{ token.title }}" width="700" height="350" loading="lazy">
          </picture>
        {% elsif token.image_obverse %}
          {% assign img_path = token.image_obverse | remove: '.png' | remove: '.jpg' %}
          <picture>
            <source
              srcset="{% for i in site.imagemagick.widths %}{{ img_path | prepend: '/assets/img/' | relative_url }}-{{ i }}.webp {{ i }}w,{% endfor %}"
              type="image/webp"
              sizes="400px"
            >
            <img src="{{ token.image_obverse | prepend: '/assets/img/' | relative_url }}" alt="{{ token.title }}" width="400" height="400" loading="lazy">
          </picture>
        {% endif %}
        <div class="showcase-overlay">
          <h3>{{ token.title }}</h3>
          <p>{{ token.town | join: " & " }}, Virginia • {{ token.denomination }}</p>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<div style="text-align: center; margin-top: 3rem;">
  <a href="{{ '/collection/' | relative_url }}" class="btn" style="display: inline-block; padding: 0.75rem 2rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 4px; font-weight: 600;">Browse the Collection</a>
</div>

<style>
.showcase-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.showcase-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  background: #000000;
  padding: 1rem;
}

.showcase-item:hover {
  transform: scale(1.02);
}

.showcase-item img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  content-visibility: auto;
}

.showcase-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: #ffffff !important;
  padding: 2rem 1rem 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.showcase-item:hover .showcase-overlay {
  transform: translateY(0);
}

.showcase-overlay h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: #ffffff !important;
}

.showcase-overlay p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
  color: #ffffff !important;
}

.showcase-item a {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 768px) {
  .showcase-gallery {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const showcaseGallery = document.querySelector('.showcase-gallery');
  const showcaseItems = Array.from(document.querySelectorAll('.showcase-item'));
  
  // Sort tokens alphabetically by sort_key (town|merchant|denomination)
  showcaseItems.sort((a, b) => a.dataset.sortKey.localeCompare(b.dataset.sortKey));
  
  // Re-append items in sorted order
  showcaseItems.forEach(item => showcaseGallery.appendChild(item));
});
</script>
