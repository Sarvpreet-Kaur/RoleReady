# RoleReady

AI-powered Resume Intelligence & Interview Orchestration Platform

RoleReady goes beyond traditional ATS keyword matching by evaluating whether skills are actually demonstrated through projects and experience. It combines resume intelligence, proof-based evaluation, and adaptive interview generation to help candidates prepare better and organizations evaluate smarter.

---

## Overview

RoleReady transforms resumes into structured insights by:

- Parsing and understanding resume structure
- Matching resumes against Job Descriptions
- Validating skills using supporting evidence
- Measuring actual depth of expertise
- Generating adaptive interview questions
- Preventing interview question leakage

The platform serves both:

👨‍🎓 Students → Improve resumes and prepare for interviews  
🏢 Organizations → Evaluate and compare candidates intelligently

---

## Key Features

### Resume Intelligence
- AI-powered resume analysis beyond traditional ATS
- Resume ↔ Job Description contextual matching
- Automatic extraction of skills, projects, and experience
- Structured resume understanding

### Skill Validation
- Skill-to-evidence mapping
- Proof-based verification of claimed expertise
- Expertise depth scoring
- Detection of weak and unsupported skills

### Interview Intelligence
- Personalized interview question generation
- Candidate-specific evaluation questions
- Adaptive difficulty and context-based questioning
- Interview readiness assessment

---

## Unique Features

### Proof-Based Skill Evaluation
Instead of trusting keywords, RoleReady checks whether skills are actually demonstrated.

### Depth Scoring Engine
Measures how strongly skills are supported using projects, experience, frequency, and context.

### Anti-Leakage Interview System
Students receive preparation-oriented questions while organizations receive evaluation-oriented questions.

### Role-Aware Intelligence
Different outputs for:
- Student Mode
- Organization Mode

### Organization-Specific Evaluation
Questions and evaluation logic can be isolated per organization.

---

## User Flow

```text
                    ┌────────────────────┐
                    │      User Login     │
                    └─────────┬──────────┘
                              │
                  ┌───────────┴───────────┐
                  │                       │
                  ▼                       ▼

          Student Mode            Organization Mode

       Upload Resume             Upload Job Description
       Enter JD                  Upload Candidate Resumes
             │                          │
             └────────────┬─────────────┘
                          ▼

                Resume Parsing Engine

                          ▼

                 Section Identification

                          ▼

          Skill Extraction + Normalization

                          ▼

               Skill → Evidence Mapping

                          ▼

                  Depth Scoring Engine

                          ▼

                Resume ↔ JD Matching

                          ▼

                 Insight Generation

                          ▼

              Interview Question Engine
             (Role + Org Aware + Protected)

                          ▼

         Student Output      Organization Output

      ATS • Suggestions     Ranking • Evaluation
      Questions             Candidate Insights
```

---

## System Architecture

```text
Frontend (React)
       │
       ▼
Backend (Node.js + Express)
       │
       ▼
AI Service (Python + FastAPI)
       │
       ▼
Question Engine
```

---

## Tech Stack

### Frontend
- React
- Vite

### Backend
- Node.js
- Express.js

### AI / Processing
- Python
- FastAPI
- spaCy
- PyMuPDF / pdfplumber

---

## Pipeline

```text
Resume Parsing
      ↓
Section Detection
      ↓
Skill Extraction
      ↓
Skill → Evidence Mapping
      ↓
Depth Scoring
      ↓
Resume ↔ JD Matching
      ↓
Insight Generation
      ↓
Question Generation
```

---

## Project Goals

- Move beyond keyword-based ATS systems
- Improve interview preparation quality
- Enable proof-aware hiring
- Reduce interview randomness
- Build trustworthy candidate evaluation

---

## Future Enhancements

- Semantic similarity models
- LLM-enhanced insights
- Team collaboration
- Interview analytics dashboard
- Resume version tracking

---

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd RoleReady
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Run backend:

```bash
npm run server
```

Run AI service:

```bash
uvicorn app:app --reload
```

---

Built to make hiring more evidence-driven and interview preparation more meaningful.
