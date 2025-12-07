# Architecture

Backend: Express `/api/sales` with CSV-loaded dataset.
Frontend: React + Zustand; components for search/filters/sorting/table/paginatio
n.
Data flow: UI params → GET `/api/sales` → pSettingsipeline → JSON → render.
