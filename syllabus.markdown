---
layout: page
title: Syllabus
permalink: /syllabus/
---

## Course Syllabus

### Agentic Large Language Models

**Course Code**: TBD
**Credits**: 6 EC (168 hours of study)
**Institution**: LIACS, Leiden University — Master's programs Computer Science (AI track) and Creative Intelligence & Technology

### Course Description

This course provides a comprehensive introduction to building autonomous agents powered by Large Language Models (LLMs). Agentic LLMs are LLMs that (1) reason, (2) act, and (3) interact, and the course is structured around these three categories, following the course textbook *Agentic Large Language Models*, written by the teaching team.

### Prerequisites

- Programming skills in Python and PyTorch
- Understanding of classical machine learning (classification vs. regression, training/test sets, overfitting, decision trees/ensembles)
- Familiarity with deep learning basics (MLPs, CNNs, RNNs, backpropagation, loss and activation functions)
- Familiarity with reinforcement learning (sequential decision problems, agent/environment, Q-learning, DQN, PPO, SAC)
- Familiarity with NLP basics (tokenization, word embeddings, attention, the Hugging Face ecosystem)

If you are missing some of this background, the first part of the course reviews the fundamentals, but a supplementary textbook in the relevant area is recommended.

### Learning Outcomes

Upon successful completion of this course, students will be able to:

1. Explain the architecture, training pipeline, and scaling behavior of state-of-the-art Large Language Models.
2. Apply advanced reasoning techniques (chain-of-thought, self-reflection, test-time compute) for complex problem solving.
3. Design and implement autonomous AI agents, including tool use, retrieval augmentation, and agentic memory architectures.
4. Build and evaluate real-world assistants in domains such as medicine, finance, and scientific research.
5. Analyze and construct multi-agent systems for collaborative task solving and social simulation.
6. Critically assess the behavioral, cognitive, safety, and ethical dimensions of agentic AI systems.

### Course Topics

The book — and the course — are organized into seven parts:

#### Part I: Language Modeling
- Foundations of Language Modeling with LLMs: tokenization, embeddings, attention, the transformer architecture
- The Large Language Model Training Pipeline: data, pretraining, finetuning, preference tuning, inference, benchmarks
- Scaling Laws and Efficient Large Language Models: scaling laws, small/distilled models, energy consumption
- Case Study 1: Building LLMs from Scratch

#### Part II: Reasoning
- Reasoning Models: chain-of-thought, self-reflection, reinforcement learning with verifiable rewards
- Vision, Action and World Models: vision-language(-action) models, world models
- Metalearning: in-context learning, few-shot learning, inner/outer learning loops

#### Part III: Agents
- Interaction Styles for Agentic LLMs: historic agent types, the five agentic interaction styles, agentic memory
- Case Study 2: BALROG for LLM Reasoning and Reflection

#### Part IV: Tools for Agentic Systems and their Applications
- How Agents Use Tools to Act in the World: toolchains, the ReAct loop, the Model Context Protocol (MCP)
- Search and Retrieval in Agentic LLMs: retrieval-augmented generation (RAG), Self-RAG, agentic and multimodal retrieval
- From Tools to Assistants: Real-World Applications: shopping, medical, financial, scientific, and coding assistants
- Case Study 3: Building a Multi-Agent Diagnosis Framework

#### Part V: Behavioral and Cognitive Perspectives on Agentic LLMs
- Studying Behavior of Agentic LLMs: machine behavior, social and interactive competencies, Theory of Mind
- Role-Based Interaction in Multi-LLM Systems: role-based collaboration, orchestration topologies and protocols
- Emergent Behavior in Multi Agent LLM Environments: cooperation, norms, collective intelligence
- Case Study 4: Simulating Societies with LLM Agents

#### Part VI: Advanced Topics *(optional, in-depth material)*
- Synthetic Data Generation for Training Agentic LLMs
- Mechanistic Interpretability for LLM Agents
- Cognitive Perspectives on Agentic LLMs

#### Part VII: Conclusion
- Future Directions for Agentic LLMs

### Assessment

The final course grade is the average of the grades for the four case-study assignments — there is no separate written exam:

- **Assignment 1** (Part I) — Building LLMs from Scratch
- **Assignment 2** (Parts II/III) — Reasoning and self-reflection (BALROG)
- **Assignment 3** (Part IV) — Multi-Agent Diagnosis Framework
- **Assignment 4** (Part V) — Simulating Societies with LLM Agents

Each assignment has a deadline and a retake opportunity — see the [Schedule](/schedule/) for exact dates.

### Required Materials

- Course textbook: *Agentic Large Language Models* (Van Duijn, Van der Meer, Plaat & Van Stein)
- Lecture slides (provided online)
- Access to LLM APIs and a Python programming environment

### Schedule

See the [Schedule](/schedule/) page for the week-by-week topics and assignment deadlines.

### Academic Integrity

Students are expected to follow Leiden University's academic integrity policies. While collaboration on concepts is encouraged, all submitted work must be original, with proper attribution for any external resources used.

### Accessibility

If you require any accommodations to participate fully in this course, please contact the instructors or Leiden University's disability services as soon as possible.

---

*Last updated: July 2026*
