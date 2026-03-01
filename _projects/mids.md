---
layout: project-cards
title: Berkeley MIDS
description: Graduate coursework projects spanning capstone engineering, interpretability research, and RAG system evaluation
importance: 3
category: research
project_intro: >-
  My Berkeley MIDS work combines applied ML engineering and model evaluation, with projects focused on time-series modeling, sparse autoencoder-based interpretability, and retrieval-augmented generation systems.
project_section_title: Technical Contributions
project_cards:
  - title: Capstone (OvertakeAI)
    accent_class: card-accent-blue
    description: >-
      For my capstone course ([DATASCI 210, Summer 2025](https://www.ischool.berkeley.edu/courses/datasci/210)), I helped build OvertakeAI, a Formula 1 safety car prediction and telemetry analysis system.
    links:
      - label: Project page
        url: https://www.ischool.berkeley.edu/projects/2025/overtakeai
      - label: Code deliverables
        url: https://github.com/UC-Berkeley-I-School/datasci-210-2025-summer-formula1/tree/main/deliverables
      - label: PyPI artifact
        url: https://pypi.org/project/f1-etl/
  - title: "DATASCI 266 (NLP): SAE Paper"
    accent_class: card-accent-green
    description: >-
      Co-authored *Unveiling the Black Box: Causal Inference and Feature Analysis in Fine-Tuned Language Models Using Sparse Autoencoders*, a controlled study comparing baseline vs. medically fine-tuned GPT-2 using SAE feature extraction, a semantic coherence metric, and vector-steering interventions.

      Key result: the baseline model showed stronger interpretability and steerability despite fewer medical features, with higher mean coherence (0.5438 vs 0.3511) and higher intervention pass rate (99% vs 83.7%).
    links:
      - label: Research page
        url: /publications/
      - label: Code
        url: https://github.com/seansica/sae-vector-steering
  - title: "DATASCI 267 (GenAI): RAG Pipeline with LangGraph"
    accent_class: card-accent-red
    description: >-
      Built and systematically evaluated a retrieval-augmented generation pipeline orchestrated with LangGraph for domain-specific Q&A. Results showed template and retriever design had greater performance impact than embedding model choice; the strongest configuration used multi-qa-mpnet-base-cos-v1 with chunk size 1024, overlap 100, and similarity retrieval at top-k=8.
    links:
      - label: Code
        url: https://github.com/seansica/final-project-rag-pipeline
      - label: Paper
        url: https://github.com/seansica/final-project-rag-pipeline/blob/main/reports/report.pdf
---
