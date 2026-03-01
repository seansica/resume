---
layout: project-cards
title: MITRE ATT&CK
description: Leading open-source software engineering for the world's most widely adopted threat intelligence framework
importance: 2
category: engineering
project_intro: >-
  [MITRE ATT&CK](https://attack.mitre.org/) is a globally-accessible knowledge base of adversary tactics and techniques, used by thousands of organizations for threat modeling, detection engineering, and security operations. I help lead the software engineering team responsible for the tools and infrastructure that power ATT&CK's data distribution and community adoption.
project_section_title: Technical Contributions
project_cards:
  - title: ATT&CK Data Model
    title_url: https://github.com/mitre-attack/attack-data-model
    accent_class: card-accent-blue
    description: >-
      Authored the **first codified expression of the ATT&CK taxonomy**, a TypeScript library that formalizes the ATT&CK data model and enables type-safe programmatic access to ATT&CK content.
  - title: ATT&CK Website
    title_url: https://github.com/mitre-attack/attack-website/tree/master
    accent_class: card-accent-green
    description: >-
      Designed and implemented client-side search for [attack.mitre.org](https://attack.mitre.org/). The search runs entirely in-browser using [FlexSearch](https://github.com/nextapps-de/flexsearch), with precomputed indexes and IndexedDB-backed lookups for fast, offline-capable queries.
  - title: TAXII 2.1 Server
    title_url: https://github.com/mitre-attack/attack-workbench-taxii-server/tree/main
    accent_class: card-accent-amber
    description: >-
      Designed, deployed, and maintain the production [ATT&CK TAXII 2.1 server](https://attack-taxii.mitre.org/), which serves ATT&CK data in STIX format to automated threat intelligence platforms worldwide.
  - title: ATT&CK Workbench REST API
    title_url: https://github.com/center-for-threat-informed-defense/attack-workbench-rest-api
    accent_class: card-accent-red
    description: >-
      Primary developer for the ATT&CK Workbench REST API. I inherited and refactored the codebase for extensibility and am currently implementing release tracks to support more frequent publication.
  - title: mitreattack-python
    accent_class: card-accent-purple
    description: >-
      Maintain the [mitreattack-python](https://github.com/mitre-attack/mitreattack-python) library (published on PyPI). I am leading a refactor to align Python models with the ATT&CK Data Model's TypeScript schemas for stronger cross-language consistency.
---
