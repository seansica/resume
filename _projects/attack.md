---
layout: page
title: MITRE ATT&CK
description: Leading open-source software engineering for the world's most widely adopted threat intelligence framework
importance: 2
category: engineering
---

## Overview

[MITRE ATT&CK](https://attack.mitre.org/) is a globally-accessible knowledge base of adversary tactics and techniques, used by thousands of organizations for threat modeling, detection engineering, and security operations. I lead the software engineering team responsible for the tools and infrastructure that power ATT&CK's data distribution and community adoption.

## Technical Contributions

### ATT&CK Data Model

Authored the **first codified expression of the ATT&CK taxonomy** — a TypeScript library that formalizes the ATT&CK data model, enabling type-safe programmatic access to ATT&CK content. This library underpins multiple downstream tools and integrations.

### ATT&CK Website Search

Designed and implemented the **client-side search** for [attack.mitre.org](https://attack.mitre.org/). The search runs entirely in the browser with no backend search engine — it uses [FlexSearch](https://github.com/nicext/flexsearch) to precompute a search index at build time and stores index-to-page mappings in the browser's IndexedDB for fast, offline-capable lookups.

### TAXII 2.1 Server

Designed, deployed, and maintain the **production ATT&CK TAXII 2.1 server** ([attack-taxii.mitre.org](https://attack-taxii.mitre.org)), a REST API that serves ATT&CK data in the STIX format to automated threat intelligence platforms worldwide.

### ATT&CK Workbench REST API

Primary developer for the [ATT&CK Workbench REST API](https://github.com/center-for-threat-informed-defense/attack-workbench-rest-api). Inherited and refactored the entire codebase for extensibility. Currently implementing **release tracks** (in beta) — a new publishing model that will enable the ATT&CK team to release content more frequently, a significant operational improvement for the framework's consumers.

### mitreattack-python

Maintain the [mitreattack-python](https://github.com/mitre-attack/mitreattack-python) library (published on PyPI). Currently leading a major refactor with plans to implement Pydantic schemas mirroring the Zod schemas in the ATT&CK Data Model — working toward a single-source-of-truth schema definition that can generate typed models for both Python and TypeScript.

## Engineering at Scale

Leading ATT&CK's software has been an exercise in large-scale open-source stewardship:
- Managing community contributions, issue triage, and release cycles across multiple repositories
- Designing APIs and data models consumed by security teams globally
- Building CI/CD pipelines, testing infrastructure, and deployment automation
- Balancing backward compatibility with a rapidly evolving knowledge base
