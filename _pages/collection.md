---
layout: page
title: Collection
permalink: /collection/
description: Browse the complete Messerley Collection
nav: true
nav_order: 2
---

<div class="showcase-intro">
  <p></p>
</div>

<div class="collection-filters">
  <button class="filter-btn active" data-filter="all">All Towns</button>
  {% assign towns = site.tokens | map: "town" | join: "|" | split: "|" | uniq | sort %}
  {% for town in towns %}
    <button class="filter-btn" data-filter="{{ town | downcase }}">{{ town }}</button>
  {% endfor %}
</div>

<div class="showcase-gallery">
  {% assign all_tokens = site.tokens %}
  {% for token in all_tokens %}
    <div class="showcase-item" data-sort-key="{{ token.sort_key }}" data-town="{{ token.town | join: '|' | downcase }}">
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

<style>
.showcase-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: var(--global-text-color-light);
}

.collection-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--global-theme-color);
  background: transparent;
  color: var(--global-theme-color);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--global-theme-color);
  color: white;
}

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
  border: none;
  padding: 1rem;
  aspect-ratio: 2 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-item:hover {
  transform: scale(1.02);
}

.showcase-item img {
  width: 100%;
  height: 100%;
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
  color: #ffffff;
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

  // Filter by town
  const filterBtns = document.querySelectorAll('.filter-btn');

  function applyFilter(filter) {
    showcaseItems.forEach(item => {
      const towns = item.dataset.town.split('|');
      item.style.display = (filter === 'all' || towns.includes(filter)) ? 'flex' : 'none';
    });
  }

  function activateFilter(filter) {
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
    applyFilter(filter);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      activateFilter(this.dataset.filter);
    });
  });

  // Deep-link support: /collection/?town=harrisonburg pre-selects that filter
  // (used by the Map page's pin links)
  const requestedTown = new URLSearchParams(window.location.search).get('town');
  if (requestedTown) {
    const match = Array.from(filterBtns).find(b => b.dataset.filter === requestedTown.toLowerCase());
    if (match) activateFilter(match.dataset.filter);
  }
});
</script>
