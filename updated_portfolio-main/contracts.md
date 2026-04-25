# API Contracts - Rahul Aryan Portfolio

## Mock Data in `mock.js`
- `personalInfo` - Static personal details (no backend needed)
- `experience` - Static work experience (no backend needed)
- `projects` - Static projects (no backend needed)
- `skillCategories` - Static skills (no backend needed)
- `certifications` - Static certifications (no backend needed)
- `beyondCode` - Static interests/chess/travel (no backend needed)
- `education` - Static education (no backend needed)

## Backend Endpoints

### 1. POST `/api/contact`
**Purpose:** Save contact form submissions to MongoDB
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```
**Response (201):**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "message": "string",
  "created_at": "datetime",
  "status": "success"
}
```
**Validation:** All fields required, email format check

### 2. GET `/api/contact`
**Purpose:** Retrieve all messages (for admin/future use)
**Response (200):**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "message": "string",
    "created_at": "datetime"
  }
]
```

## Frontend Integration
- `ContactSection.jsx`: Replace localStorage mock with `POST /api/contact` via axios
- Use `REACT_APP_BACKEND_URL` for API base URL
- Show sonner toast on success/failure
