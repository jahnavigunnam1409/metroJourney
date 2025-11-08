# Metro Journey Planner — Hyderabad Metro

Metro Journey Planner is a full-stack web application that helps users plan their Hyderabad Metro journeys efficiently.  
It provides the shortest route between stations, calculates estimated travel time, and displays an interactive metro map.

---

## Features

- Journey Planning: Enter a source and destination to get the shortest metro route  
- Travel Time Estimate: Displays approximate travel time based on route distance  
- Interactive Map: Visual representation of the Hyderabad Metro network  
- Responsive Design: Works seamlessly on desktop and mobile devices  
- Organized UI: Simple and user-friendly interface built with React and Bootstrap  

---

## Technologies Used

| Layer | Technologies |
|--------|---------------|
| Backend | Python, Flask, Flask-CORS |
| Frontend | React, TypeScript, Vite, Bootstrap |
| Data | CSV files (stations and edges) |
| Algorithm | Dijkstra’s Algorithm for shortest path |
| Mapping | Static Hyderabad Metro route map (Leaflet optional) |

---

## Getting Started

### Prerequisites
- Python 3.9 or higher  
- Node.js (with npm)  
- Git

---

### Installation

Clone this repository:

```bash
git clone https://github.com/jahnavigunnam1409/metroJourney.git
cd metroJourney
Backend Setup (Flask)
cd backend

# Create and activate a virtual environment (macOS/Linux)
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the backend
python app.py


The Flask backend will start on http://127.0.0.1:5000

Frontend Setup (Vite + React)
cd frontend

# Install dependencies
npm install

# Run the frontend
npm run dev


The Vite frontend will start on http://localhost:5173

Running the Application

Start the backend (python app.py)

Start the frontend (npm run dev)

Open http://localhost:5173
 in your browser

Enter your source and destination stations

The shortest route and estimated travel time will be displayed

Click “Show Metro Map” to view the Hyderabad Metro route map

Deployment
Component	Platform
Frontend	Vercel
Backend	Render

Frontend: Build and deploy the frontend/ directory on Vercel
Backend: Deploy the backend/ directory as a Flask web service on Render

Project Structure
metroJourney/
│
├── backend/
│   ├── app.py
│   ├── stations.csv
│   ├── edges.csv
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/Metro.tsx
│   │   ├── assets/
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
└── README.md

Author

Jahnavi Gunnam
Developed using Flask (Python) and React (Vite + TypeScript)
