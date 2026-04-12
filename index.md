---
layout: default

---

# Malak Fadi Alradi

## About

I'm a Machine Learning Engineer and Software Developer with a Bachelor's in Intelligent Systems Engineering from Tafila Technical University. 

Over nearly 2 years at 01 Inventions Company (Carseer), I had the opportunity to build and deploy a wide range of intelligent systems and projects — from developing production-ready NLP models specializing in Named Entity Recognition (NER), to building OCR pipelines that automated data extraction from scanned documents and images. I also architected RESTful APIs using FastAPI to integrate machine learning models into enterprise applications, and contributed to full-stack development using Python and .NET Core, collaborating closely with cross-functional teams to deliver end-to-end solutions. 

Beyond ML, I worked across the full software development lifecycle — from feature engineering and model optimization to integration testing and CI/CD pipelines — gaining a well-rounded foundation in both AI and software engineering. I'm currently part of the AI.SPIRE program, where I'm pushing my expertise further, refining my skills in AI and ML, and working toward true professionalism in the field. I'm deeply passionate about leveraging cutting-edge AI technologies to build systems that are not just technically sound, but genuinely impactful in the real world.

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