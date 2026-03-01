---
layout: about
title: about
permalink: /
subtitle: >
  <a href='https://www.mitre.org/our-impact/mitre-labs/software-engineering-innovation-center'>SWE @ MITRE Labs</a> · <a href='https://www.ischool.berkeley.edu/programs/mids'>UC Berkeley MIDS alumni</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info:

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
---

At MITRE, I help lead software development for [MITRE ATT&CK](https://attack.mitre.org/) and contribute to research on [Judy](https://www.mitre.org/news-insights/impact-story/naming-supercomputer-mitre-honors-early-innovator), the supercomputing platform powering the [Federal AI Sandbox](https://www.mitre.org/focus-areas/artificial-intelligence/federal-ai-sandbox).

My recent research has focused on understanding how fine-tuning reshapes internal model representations. During my master’s work at Berkeley (2024), I used mechanistic interpretability methods to empirically characterize how fine-tuning corpora affect a model’s parametric knowledge. In 2025, I worked on a small research team training sparse autoencoders (SAEs) and experimenting with linear cross-layer probes to study feature drift and representation shift under fine-tuning.

That work produced:
- A general-purpose Python library for mechanistic interpretability workflows, published internally at MITRE to reduce barriers to experimentation.
- Exploratory experiments using linear probes as a lightweight alternative to crosscoders for tracking how features change during fine-tuning. While preliminary, this work deepened my interest in questions like whether features relocate across layers, collapse, or transform into new vector representations.

In parallel, I collaborated with Neuronpedia’s founder to help bring [Neuronpedia](https://www.neuronpedia.org/) into a zero-trust government environment. I contributed features enabling secure internal deployment and supported efforts that led to its open-sourcing.

I bring 5+ years of experience shipping production software across distributed infrastructure, APIs, open-source tooling, and Kubernetes-based systems.

I’m currently enrolled in the [BlueDot Technical AI Safety Course](https://bluedot.org/courses/technical-ai-safety/) and am seeking research engineering roles or fellowships in frontier AI labs or safety-focused research organizations.

I’m especially interested in research agendas that use mechanistic interpretability to inform or guide training[^1][^2]—for example, leveraging internal representations to shape objectives, reduce hallucinations, or monitor alignment-relevant behavior. I’m also closely following emerging work on evaluation awareness and model introspection[^3][^4][^5], particularly where it intersects with representation-level monitoring.

[^1]: [Features as Rewards: Using Interpretability to Reduce Hallucinations](https://www.goodfire.ai/research/rlfr#)
[^2]: [Intentionally designing the future of AI](https://www.goodfire.ai/blog/intentional-design)
[^3]: [Emergent Introspective Awareness in Large Language Models](https://transformer-circuits.pub/2025/introspection/index.html)
[^4]: [We need a science of evals](https://www.apolloresearch.ai/blog/we-need-a-science-of-evals)
[^5]: [Large Language Models Often Know When They Are Being Evaluated](https://arxiv.org/abs/2505.23836)
