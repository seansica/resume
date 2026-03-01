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

### TAXII 2.1 Server

Designed, deployed, and maintain the **production ATT&CK TAXII 2.1 server** ([attack-taxii.mitre.org](https://attack-taxii.mitre.org)), a REST API that serves ATT&CK data in the STIX format to automated threat intelligence platforms worldwide.

### Open-Source Libraries

Maintain 10+ open-source repositories spanning:
- **Python and TypeScript libraries** for ATT&CK data access and manipulation
- **REST APIs** for content management and distribution
- **ATT&CK Workbench** — a web-based platform for curating and extending ATT&CK content

## Engineering at Scale

Leading ATT&CK's software has been an exercise in large-scale open-source stewardship:
- Managing community contributions, issue triage, and release cycles across multiple repositories
- Designing APIs and data models consumed by security teams globally
- Building CI/CD pipelines, testing infrastructure, and deployment automation
- Balancing backward compatibility with a rapidly evolving knowledge base
