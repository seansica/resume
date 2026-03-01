---
layout: page
title: F1 Safety Car Prediction Engine
description: ML-based early warning system for Formula 1 safety car deployments using time series analysis
importance: 3
category: research
---

## Overview

For my Berkeley MIDS capstone (DATASCI 210, Summer 2025), I developed a machine learning system that predicts Formula 1 safety car deployments using real-time telemetry data. The project was **selected for the Berkeley Summer 2025 Showcase**.

## Approach

- **Time series analysis** of F1 telemetry data (speed, throttle, brake, tire wear, weather conditions)
- **ROCKET regression** (Random Convolutional Kernel Transform) for time series classification
- Built the open-source **f1-etl** Python library for F1 data preprocessing and feature extraction

## Technical Details

The system processes lap-by-lap telemetry streams to identify patterns that precede safety car interventions. By applying ROCKET — a fast, scalable time series classification method — the model learns convolutional kernel features that capture temporal dynamics in driving data without the computational cost of deep learning approaches.
