---
layout: page
title: Mechanistic Interpretability Research
description: Sparse autoencoders, vector steering, and research tooling for understanding neural network internals
importance: 1
category: research
---

## Overview

My interpretability research sits at the intersection of sparse autoencoders (SAEs), causal interventions, and automated feature analysis. I'm focused on understanding how fine-tuning changes what language models learn and building tools that make mechanistic interpretability more accessible and scalable.

## Causal Effects of Fine-Tuning on Sparse Features

For my NLP coursework at UC Berkeley (DATASCI 266), I studied how supervised fine-tuning causally shifts the features learned by sparse autoencoders. Working with GPT-2 models — one baseline, one fine-tuned on medical text — I used SAEs to extract sparse features and then applied vector steering interventions to test their causal relevance.

Key findings:
- The baseline GPT-2 model had **higher feature coherence** (0.54 vs. 0.35) than the fine-tuned model
- Baseline features were **more responsive to causal interventions** (99% vs. 83.7% pass rate on vector steering)
- Fine-tuning appears to create more specialized but less interpretable features
- Fine-tuned model activations showed 97% lower variance, suggesting feature compression

Code: [seansica/sae-vector-steering](https://github.com/seansica/sae-vector-steering)

## Neuronpedia Contributions

I contributed enterprise deployment features to [Neuronpedia](https://www.neuronpedia.org/), the open-source platform for AI interpretability research:
- **Kubernetes support** — enabling scalable, containerized deployments for enterprise and research environments
- **Azure inference integration** — expanding inference backend options beyond the default setup

## MITRE Interpretability Research Sprint

I bootstrapped MITRE's internal mechanistic interpretability effort on the Federal AI Sandbox:
- Led a research sprint developing in-house tooling for **SAE training pipelines** and **automated feature analysis**
- Currently building an **agent-based system** for managing ML experiments and training runs
- Exploring causal analysis techniques to understand representation shifts in fine-tuned models

## Refusal Direction Replication

Independently re-implemented the key experiments from *"Refusal in Language Models Is Mediated by a Single Direction"* (Arditi et al., 2024), reproducing the identification and ablation of the refusal direction in language model residual streams.
