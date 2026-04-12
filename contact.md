---
layout: default
title: Contact
---

# Contact

I'm always open to new opportunities, collaborations, or just a good conversation about AI and ML. Feel free to reach out through any of the channels below!

<div class="contact-grid">
{% for item in site.data.contact %}
  <a class="contact-btn" href="{{ item.link }}" target="_blank">
    <span class="contact-icon">{{ item.icon }}</span>
    <span class="contact-label">{{ item.value }}</span>
  </a>
{% endfor %}
</div>