# ARGUS Technical Architecture

## Data Telemetry Pipeline

The ARGUS platform is designed for real-time compliance monitoring at a macro scale. It operates on a robust data telemetry pipeline ensuring encrypted, low-latency transmission from field nodes to the central command center.

### 1. Edge Layer (Field Operations)
- **Video Capture:** RTSP feeds from facility CCTV and encrypted WebRTC streams via the Mobile Inspector PWA.
- **Geospatial Payload:** Continuous high-accuracy GPS coordinates polled from the inspector's device, bundled with an AES-256 encrypted payload timestamped to prevent replay attacks.

### 2. Processing Layer (FastAPI Backend)
- **Ingestion & Decryption:** FastAPI node receives the payload and decrypts it using secure key rotation.
- **Geofence Matching:** Spatial queries evaluate the coordinate data against predefined PostGIS multipolygon boundary data. An inspector must remain within the 14m radius threshold during the audit sequence.
- **AI Vision Pipeline:** Incoming RTSP feeds are sampled and processed via OpenCV and a headless CV model to extract and verify physical headcounts against claimed metrics.

### 3. Data Persistence Layer (PostgreSQL + PostGIS)
- All audit data, temporal geofence logs, and flagged anomalies are written to PostgreSQL.
- PostGIS enables rapid spatial indexing and geographic queries for the district-wide mapping dashboard.

### 4. Presentation Layer (React 19 Command Center)
- A stateless frontend fetching live updates via WebSockets.
- Renders the "4-cam surveillance matrix" and macro-level dashboards using Tailwind CSS for a seamless, responsive GovTech interface.
