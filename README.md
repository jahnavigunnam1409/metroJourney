Metro Journey Planner — Hyderabad Metro
Metro Journey Planner is a full-stack web app to help users plan Hyderabad Metro trips efficiently. It shows the shortest route between stations, estimates travel time, and features an interactive metro map.

Features
Journey Planning: Enter start and end stations to find the shortest metro route.

Travel Time Estimate: Shows approximate travel time based on route distance.

Interactive Map: Visualizes the Hyderabad Metro network.

Responsive Design: Works well on desktop and mobile devices.

Organized UI: Simple, user-friendly interface built with React and Bootstrap.

Technologies Used
Layer	Technologies
Backend	Python, Flask, Flask-CORS
Frontend	React, TypeScript, Vite, Bootstrap
Data	CSV files (stations and edges)
Algorithm	Dijkstra’s Algorithm for shortest path
Mapping	Static Hyderabad Metro route map (Leaflet optional)
Getting Started
Prerequisites
Python 3.9 or higher

Node.js with npm

Git

Installation
1. Clone the Repository
bash
git clone https://github.com/jahnavigunnam1409/metroJourney.git
cd metroJourney
2. Backend Setup (Flask)
bash
cd backend

# Create and activate virtual environment (macOS/Linux)
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the backend server
python app.py
The backend server will run on:
http://127.0.0.1:5000

3. Frontend Setup (Vite + React)
bash
cd ../frontend

# Install dependencies
npm install

# Run the frontend
npm run dev
The frontend will run on:
http://localhost:5173

Running the Application
Start backend by running python app.py in the backend folder.

Start frontend by running npm run dev in the frontend folder.

Open browser at http://localhost:5173

Enter source and destination stations to get the shortest route and travel time.

Click “Show Metro Map” to see the Hyderabad Metro route map.

Deployment
Component	Platform
Frontend	Vercel
Backend	Render
Deploy frontend folder to Vercel.

Deploy backend folder as a Flask service to Render.

Project Structure
text
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
│   │   ├── components/
│   │   │   └── Metro.tsx
│   │   ├── assets/
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
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

