---
layout: page
title: MITRE ATT&CK
description: Leading open-source software engineering for the world's most widely adopted threat intelligence framework
importance: 2
category: engineering
---

<div class="attack-project">

<p>
  <a href="https://attack.mitre.org/">MITRE ATT&amp;CK</a> is a globally-accessible knowledge base of adversary tactics and techniques, used by thousands of organizations for threat modeling, detection engineering, and security operations. I help lead the software engineering team responsible for the tools and infrastructure that power ATT&amp;CK's data distribution and community adoption.
</p>

<h2>Technical Contributions</h2>

<div class="attack-contrib-grid">
  <section class="attack-card attack-card-model">
    <h3><a href="https://github.com/mitre-attack/attack-data-model">ATT&amp;CK Data Model</a></h3>
    <p>
      Authored the <strong>first codified expression of the ATT&CK taxonomy</strong>, a TypeScript library that formalizes the ATT&CK data model and enables type-safe programmatic access to ATT&CK content.
    </p>
  </section>

  <section class="attack-card attack-card-search">
    <h3><a href="https://github.com/mitre-attack/attack-website/tree/master">ATT&amp;CK Website</a></h3>
    <p>
      Designed and implemented client-side search for <a href="https://attack.mitre.org/">attack.mitre.org</a>. The search runs entirely in-browser using <a href="https://github.com/nextapps-de/flexsearch">FlexSearch</a>, with precomputed indexes and IndexedDB-backed lookups for fast, offline-capable queries.
    </p>
  </section>

  <section class="attack-card attack-card-taxii">
    <h3><a href="https://github.com/mitre-attack/attack-workbench-taxii-server/tree/main">TAXII 2.1 Server</a></h3>
    <p>
      Designed, deployed, and maintain the production <a href="https://attack-taxii.mitre.org/">ATT&amp;CK TAXII 2.1 server</a>, which serves ATT&amp;CK data in STIX format to automated threat intelligence platforms worldwide.
    </p>
  </section>

  <section class="attack-card attack-card-api">
    <h3><a href="https://github.com/center-for-threat-informed-defense/attack-workbench-rest-api">ATT&amp;CK Workbench REST API</a></h3>
    <p>
      Primary developer for the <a href="https://github.com/center-for-threat-informed-defense/attack-workbench-rest-api">ATT&amp;CK Workbench REST API</a>. I inherited and refactored the codebase for extensibility and am currently implementing release tracks to support more frequent publication.
    </p>
  </section>

  <section class="attack-card attack-card-python">
    <h3>mitreattack-python</h3>
    <p>
      Maintain the <a href="https://github.com/mitre-attack/mitreattack-python">mitreattack-python</a> library (published on PyPI). I am leading a refactor to align Python models with the ATT&amp;CK Data Model's TypeScript schemas for stronger cross-language consistency.
    </p>
  </section>
</div>
</div>
