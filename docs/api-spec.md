# ARGUS API Specification

## Base URL
`/api/v1`

## Authentication
All protected endpoints require a Bearer token in the `Authorization` header.
- **Format:** `Bearer <JWT>`

## Endpoints

### 1. Telemetry & Audits

#### `POST /telemetry/check-in`
Registers a geospatial check-in for an inspector.
**Request Body:**
```json
{
  "inspector_id": "uuid",
  "facility_id": "uuid",
  "coordinates": {
    "lat": 17.6868,
    "lng": 83.2185
  },
  "timestamp": "ISO-8601"
}
```
**Response:** `200 OK`
```json
{
  "status": "verified",
  "geofence_match": true,
  "distance_to_center_m": 8.5
}
```

#### `GET /facilities/{id}/stream`
Retrieves the secure RTSP stream URI for automated CV auditing.
**Response:** `200 OK`
```json
{
  "facility_id": "uuid",
  "stream_url": "rtsp://secure.argus.gov.in/stream/123",
  "encryption_key": "aes-256-key-hash"
}
```

### 2. Dashboard Analytics

#### `GET /analytics/district/{district_id}`
Returns real-time operational metrics for a given district node.
**Response:** `200 OK`
```json
{
  "active_inspections": 12,
  "flagged_anomalies": 2,
  "headcount_discrepancies": [
    { "facility_id": "uuid", "claimed": 45, "verified": 42 }
  ]
}
```
