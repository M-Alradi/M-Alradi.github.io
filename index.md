---
layout: default
---

<div class="profile-section">
  <img src="/assets/images/profile.jpg" alt="Malak Al-Radi" class="profile-photo">
  <div class="profile-text">

I'm a Machine Learning Engineer and Software Developer with a Bachelor's in Intelligent Systems Engineering from Tafila Technical University. 
Over nearly 2 years at 01 Inventions Company (Carseer), I built and deployed intelligent systems spanning NLP, OCR pipelines, RESTful APIs, and full-stack development. 
I'm currently part of the AI.SPIRE program, refining my skills in AI and ML toward true professionalism.

  </div>
</div>

---

## Experience

<div class="exp-headlines">
  <a class="exp-item" href="/experience">
    <div>
      <div class="exp-role">Teaching Assistant — AI Project Mentor</div>
      <div class="exp-company">University of Winchester</div>
    </div>
    <div class="exp-date">Oct 2025 – Jan 2026</div>
  </a>

  <a class="exp-item" href="/experience">
    <div>
      <div class="exp-role">Junior Machine Learning Engineer & Software Developer</div>
      <div class="exp-company">01 Inventions Company (Carseer)</div>
    </div>
    <div class="exp-date">Jan 2024 – Jun 2025</div>
  </a>

  <a class="exp-item" href="/experience">
    <div>
      <div class="exp-role">Machine Learning Trainee</div>
      <div class="exp-company">01 Inventions Company (Carseer)</div>
    </div>
    <div class="exp-date">Oct 2023 – Dec 2023</div>
  </a>
</div>

---

## Projects

{% for section in site.data.projects %}
<div class="section-title">{{ section.section }}</div>

  {% for subsection in section.subsections %}
    {% if subsection.title != "" %}
<div class="subsection-title">{{ subsection.title }}</div>
    {% endif %}

<div class="cards-grid">
  {% for project in subsection.projects %}
  <div class="card {% if section.personal %}card-personal{% endif %}">
    <div class="card-header">
      <span class="card-title">{{ project.name }}</span>
      <a class="card-link" href="{{ project.repo }}" target="_blank">↗ Repo</a>
    </div>
    <p class="card-desc">{{ project.desc }}</p>
    <div class="tags">
      {% for tag in project.tags %}
      <span class="tag {% if section.personal %}tag-personal{% endif %}">{{ tag }}</span>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>
  {% endfor %}
{% endfor %}


<!-- ### Machine Learning & NLP

**Machine Learning Fundamentals**

- **Project Name** — One sentence describing what you built.
  - Repo: [link](#)
  - Skills: scikit-learn, model evaluation

**Natural Language Processing**

- **Project Name** — One sentence describing what you built.
  - Repo: [link](#)
  - Skills: spaCy, text preprocessing, NLP pipelines

**Deep Learning for NLP**

- **Project Name** — One sentence describing what you built.
  - Repo: [link](#)
  - Skills: PyTorch, Hugging Face, transformers

---

### Retrieval & Knowledge Graphs

**Retrieval-Augmented Generation**

- **Project Name** — One sentence describing what you built.
  - Repo: [link](#)
  - Skills: Weaviate, RAG pipelines, embeddings
  - [Read more](projects/sample-project.md) *(optional -- use for projects complex enough to warrant a detail page)*

**Knowledge Graphs**

- **Project Name** — One sentence describing what you built.
  - Repo: [link](#)
  - Skills: Triple stores, SPARQL, knowledge representation

---

### Deployment

**API Development & Containerization**

- **Project Name** — One sentence describing what you built.
  - Repo: [link](#)
  - Skills: FastAPI, Docker, deployment

**Monitoring & Production Systems**

- **Project Name** — One sentence describing what you built.
  - Repo: [link](#)
  - Skills: Monitoring, logging, production reliability

---

### Capstone

- **Project Name** — One sentence describing your capstone.
  - Repo: [link](#)
  - Skills: Full-stack AI/ML system -->

---

## Contact

<div class="contact-grid">
{% for item in site.data.contact %}
  <a class="contact-btn" href="{{ item.link }}" target="_blank">
    <span class="contact-icon">{{ item.icon }}</span>
    <span class="contact-label">{{ item.value }}</span>
  </a>
{% endfor %}
</div>