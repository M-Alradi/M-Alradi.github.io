---
layout: default
title: Projects
---

# Projects

{% for section in site.data.projects %}
<div class="section-title">{{ section.section }}</div>

  {% for subsection in section.subsections %}
    {% if subsection.title != "" %}
<div class="subsection-title">{{ subsection.title }}</div>
    {% endif %}

<div class="cards-grid">
  {% for project in subsection.projects %}
  <div class="card">
    <div class="card-header">
      <span class="card-title">{{ project.name }}</span>
      <a class="card-link" href="{{ project.repo }}" target="_blank">↗ Repo</a>
    </div>
    <p class="card-desc">{{ project.desc }}</p>
    <div class="tags">
      {% for tag in project.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>
  {% endfor %}
{% endfor %}