Metro Journey Planner — Hyderabad Metro

Metro Journey Planner is a full-stack web application that helps users plan their Hyderabad Metro journeys efficiently.
It provides the shortest route between stations, calculates estimated travel time, and displays an interactive metro map.

Features

Journey Planning: Enter a source and destination to get the shortest metro route

Travel Time Estimate: Displays approximate travel time based on route distance

Interactive Map: Visual representation of the Hyderabad Metro network

Responsive Design: Works seamlessly on desktop and mobile devices

Organized UI: Simple and user-friendly interface built with React and Bootstrap

Technologies Used
Layer	Technologies
Backend	Python, Flask, Flask-CORS
Frontend	React, TypeScript, Vite, Bootstrap
Data	CSV files (stations.csv, edges.csv)
Algorithm	Dijkstra’s Algorithm for shortest path
Mapping	Static Hyderabad Metro map (Leaflet optional)
Getting Started
Prerequisites

Before running the project, make sure you have the following installed:

Python 3.9 or higher

Node.js (with npm)

Git

Installation
1. Clone the Repository

git clone https://github.com/jahnavigunnam1409/metroJourney.git

cd metroJourney

2. Backend Setup (Flask)

cd backend

Create and activate a virtual environment (macOS/Linux):
python3 -m venv venv
source venv/bin/activate

Install dependencies:
pip install -r requirements.txt

Run the backend server:
python app.py

The Flask backend will start on:
http://127.0.0.1:5000

3. Frontend Setup (Vite + React)

cd ../frontend

Install dependencies:
npm install

Run the frontend:
npm run dev

The Vite frontend will start on:
http://localhost:5173

Running the Application

Start the backend by running python app.py inside the backend directory.

Start the frontend by running npm run dev inside the frontend directory.

Open your browser and go to http://localhost:5173

Enter your source and destination stations.

The shortest route and estimated travel time will be displayed.

Click “Show Metro Map” to view the Hyderabad Metro route map.

Project Structure

metroJourney/
│
├── backend/
│ ├── app.py
│ ├── stations.csv
│ ├── edges.csv
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── Metro.tsx
│ │ ├── assets/
│ │ └── main.tsx
│ ├── package.json
│ └── vite.config.ts
│
└── README.md

Future Enhancements

Real-time metro tracking

GPS-based nearest station detection

Live interactive map using Leaflet or Mapbox

Smartcard recharge or ticketing integration

Route analytics and performance visualization

Author

Jahnavi Gunnam
Developed using Flask (Python) and React (Vite + TypeScript)
