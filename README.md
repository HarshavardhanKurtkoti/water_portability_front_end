# Water Portability Checker (React + Vite)

Welcome to the **Water Portability Checker** project! This web application allows users to instantly check if their water sample is potable (safe for drinking) by entering key chemical parameters. The app leverages a machine learning model deployed on a cloud backend and demonstrates modern frontend best practices with React and Vite.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Technologies Used](#technologies-used)
5. [Project Setup](#project-setup)
6. [Usage](#usage)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)
9. [Contributing](#contributing)
10. [License](#license)

## Project Overview

The Water Portability Checker is designed to make water safety assessment accessible to everyone. By inputting values such as pH, Hardness, Solids, Chloramines, Sulfate, Conductivity, Organic Carbon, Trihalomethanes, and Turbidity, users can receive an instant prediction on whether their water is potable. The prediction is powered by a machine learning model hosted on a cloud backend (e.g., Vercel or Render).

## Features

- **Instant Water Safety Check**: Enter water parameters and get immediate results.
- **Modern UI/UX**: Responsive, user-friendly interface built with React and custom CSS.
- **Cloud-Hosted ML Model**: Backend API predicts water portability using real-world data.
- **Loading Feedback**: Loader and dialog inform users if the backend is waking up (free tier cold start).
- **Navigation**: Home, Checker, and About sections for a complete user experience.
- **Accessible**: Works on desktop and mobile browsers.

## Architecture

- **Frontend**: React (with Vite) for fast, modern SPA experience.
- **Backend**: Python FastAPI (or similar) serving a trained ML model for water portability prediction.
- **API Communication**: Frontend sends user input to backend via REST API and displays the result.

```
User → React Frontend → REST API → ML Model (Backend) → Result
```

## Technologies Used

- **React 19**: UI library for building interactive interfaces.
- **Vite**: Lightning-fast build tool for modern web projects.
- **Custom CSS**: For styling and responsive design.
- **Python FastAPI**: (Backend, not included here) for serving the ML model.
- **Cloud Hosting**: Backend deployed on Vercel/Render (free tier, may have cold starts).

## Project Setup

### Prerequisites

- **Node.js (v18+)** and **npm**: [Download Node.js](https://nodejs.org/)
- **Backend API**: You need access to a running backend API for predictions (see About section for details).

### Clone the Repository

```bash
git clone https://github.com/your-username/water-portability-frontend.git
cd water-portability-frontend
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Usage

1. **Home**: Learn about the project and its purpose.
2. **Checker**: Enter your water sample's chemical parameters and click "Check Portability".
3. **Result**: Instantly see if your water is potable, with clear visual feedback.
4. **About**: Read about the technology, workflow, and the developer.

**Note:** If the backend is on a free tier, the first request may take a few seconds. A dialog will appear if the backend is waking up.

## Deployment

You can deploy this frontend to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Troubleshooting

- **Backend cold start**: If you see a dialog saying "Please wait, the backend hosted on Vercel is starting", just wait a few seconds for the backend to wake up.
- **API errors**: Ensure the backend URL in the code is correct and the backend is running.
- **Styling issues**: Clear your browser cache or do a hard refresh (Ctrl+F5).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Created by Harshavardhan Kurtkoti**

Portfolio: [Click for Portfolio](https://portflio-website-azure.vercel.app/)
