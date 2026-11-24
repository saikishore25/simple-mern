# Simple MERN Demo — GitHub Pages practice

This repository contains a React/Vite frontend and a small Express backend with three API endpoints. It intentionally uses in-memory sample data and no MongoDB, so you can practice frontend hosting without database setup.

## Run locally

### Backend
```bash
cd backend
npm install
npm run dev
```
Runs on http://localhost:5000

### Frontend
In another terminal:
```bash
cd frontend
npm install
npm run dev
```
Vite will print a local URL (usually http://localhost:5173).

## API endpoints

- `GET /` — health message
- `GET /api/products` — list products
- `GET /api/products/:id` — one product
- `POST /api/products` — add a product (JSON `{ "name": "Headphones", "price": 2200 }`)

## Build frontend
```bash
cd frontend
npm run build
```
The static build is created in `frontend/dist`. GitHub Pages can publish static frontend output; the Express server itself needs separate hosting.

The frontend currently points at `http://localhost:5000`. When deployed, change the API base URL to your separately deployed backend URL.
