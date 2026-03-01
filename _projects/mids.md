---
layout: page
title: Berkeley MIDS
description: Graduate coursework projects spanning capstone engineering, interpretability research, and RAG system evaluation
importance: 3
category: research
---

<div class="mids-project">

<p>
  My Berkeley MIDS work combines applied ML engineering and model evaluation, with projects focused on time-series modeling, sparse autoencoder-based interpretability, and retrieval-augmented generation systems.
</p>

<h2>Technical Contributions</h2>

<div class="attack-contrib-grid">
  <section class="attack-card mids-card-capstone">
    <h3>Capstone (OvertakeAI)</h3>
    <p>
      For my capstone course (<a href="https://www.ischool.berkeley.edu/courses/datasci/210">DATASCI 210, Summer 2025</a>), I helped build OvertakeAI, a Formula 1 safety car prediction and telemetry analysis system.
    </p>
    <p>
      Project page: <a href="https://www.ischool.berkeley.edu/projects/2025/overtakeai">Berkeley iSchool - OvertakeAI</a><br>
      Code deliverables: <a href="https://github.com/UC-Berkeley-I-School/datasci-210-2025-summer-formula1/tree/main/deliverables">datasci-210-2025-summer-formula1</a><br>
      PyPI artifact: <a href="https://pypi.org/project/f1-etl/">f1-etl</a>
    </p>
  </section>

  <section class="attack-card mids-card-nlp">
    <h3>DATASCI 266 (NLP): SAE Paper</h3>
    <p>
      Co-authored <em>Unveiling the Black Box: Causal Inference and Feature Analysis in Fine-Tuned Language Models Using Sparse Autoencoders</em>, a controlled study comparing baseline vs. medically fine-tuned GPT-2 using SAE feature extraction, a semantic coherence metric, and vector-steering interventions.
    </p>
    <p>
      Key result: the baseline model showed stronger interpretability and steerability despite fewer medical features, with higher mean coherence (0.5438 vs 0.3511) and higher intervention pass rate (99% vs 83.7%).
    </p>
    <p>
      Research page: <a href="/publications/">Publications</a><br>
      Code: <a href="https://github.com/seansica/sae-vector-steering">seansica/sae-vector-steering</a>
    </p>
  </section>

  <section class="attack-card mids-card-genai">
    <h3>DATASCI 267 (GenAI): RAG Pipeline with LangGraph</h3>
    <p>
      Built and systematically evaluated a retrieval-augmented generation pipeline orchestrated with LangGraph for domain-specific Q&A. Results showed template and retriever design had greater performance impact than embedding model choice; the strongest configuration used multi-qa-mpnet-base-cos-v1 with chunk size 1024, overlap 100, and similarity retrieval at top-k=8.
    </p>
    <p>
      Code: <a href="https://github.com/seansica/final-project-rag-pipeline">seansica/final-project-rag-pipeline</a><br>
      Paper: <a href="https://github.com/seansica/final-project-rag-pipeline/blob/main/reports/report.pdf">Final report (PDF)</a>
    </p>
  </section>
</div>

</div>
