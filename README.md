<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/python-3.12-blue.svg" alt="Python 3.12">
  <img src="https://img.shields.io/badge/react-19.0.0-blue.svg" alt="React 19">
  <img src="https://img.shields.io/badge/Status-Production--Ready-success" alt="Status">
</div>

# ARGUS: Centralized Geo-Verified NGO & Facility Vigilance Network

**Ministry of Social Justice and Empowerment (DoSJE)**  
*Smart Automation & Software | Problem Statement ID: PS 26095 | Team Hexaverse: 145336*

---

## Executive Summary
**ARGUS** is an elite GovTech platform designed to replace reactive manual investigations with real-time, automated government oversight. By integrating cryptographic geofencing and AI-driven computer vision, ARGUS guarantees transparency and accountability for state-funded NGOs and rehabilitation facilities, effectively eliminating phantom reporting and remote check-in fraud.

## Core Operational Loop
`[ SIGNAL (Live Monitoring) ] ➔ [ ACTION (Automated/Random Assignment) ] ➔ [ PROOF (Geo-Tagged Field Evidence) ]`

---

## Key Architectural Features

- 📍 **Real-Time Geofence Enforcement**: Strict PostGIS geofence boundary coordinate matching algorithms (14m threshold) to instantly catch audit discrepancies and remote check-in loopholes.
- 👁️ **Automated CV Auditing**: Continuous AI-driven cross-referencing of live CCTV RTSP streams against claimed physical headcounts.
- 🌐 **Multi-District Command Center**: A unified dashboard scaling from national macro-data down to granular district nodes, paired with an offline-ready field PWA for remote inspectors.

---

## Tech Stack Grid

| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | React 19, Tailwind CSS | Lightning-fast responsive command interface |
| **Backend** | FastAPI (Python 3.12) | High-performance API with async support |
| **Database** | PostgreSQL + PostGIS | Spatial database for geographic telemetry |
| **Streaming** | WebRTC / RTSP | Multi-feed video integration for CV pipelines |
| **Security** | AES-256 Encryption | Secure role-based access and stream encryption |

---

## Quickstart & Local Installation Guide

### 1. Clone the Repository
```bash
git clone https://github.com/Hexaverse/ARGUS-DoSJE.git
cd ARGUS-DoSJE
```

### 2. Backend Setup (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
*The API will be available at `http://localhost:8000`.*

### 3. Frontend Setup (React 19)
```bash
cd frontend
npm install
npm run dev
```
*The Command Center will be available at `http://localhost:5173`.*

---

## Security & Compliance
ARGUS is fully aligned with the **Ministry of Social Justice and Empowerment (DoSJE)** vigilance guidelines and digital governance frameworks. The system enforces strict invariant state checks:
- Geolocation payloads are cryptographically signed to prevent spoofing.
- Role-based access control (RBAC) ensures compartmentalized data views for state vs. district-level administrators.
- Video streams are secured via end-to-end AES-256 encryption.

---
*Built for SIH 2026 by Team Hexaverse.*
