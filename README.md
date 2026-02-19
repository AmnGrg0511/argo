# [ArgoCode](https://argocode.web.app/)

Live demo: https://argocode.web.app/

## Introduction
Welcome to [ArgoCode](https://argocode.web.app/), your ultimate platform for teaching and learning programming. The experience is designed to feel seamless and engaging for learners while giving instructors a simple way to manage their content.

## Features

### 1. Diverse Programming Courses
Browse through an extensive catalog of programming courses covering a wide array of languages and topics, from Python and JavaScript to data structures and algorithms.

### 2. Interactive Coding Exercises
Engage with hands-on coding exercises, quizzes, and projects that make learning to program both enjoyable and effective.

### 3. Personalized Learning Paths
Create a tailored learning journey that aligns with your coding aspirations, with recommendations based on interests and progress.

### 4. Live Coding Workshops
Participate in live coding workshops hosted by experienced instructors and collaborate with peers in real time.

### 5. Code Progress Tracking
Keep tabs on your coding progress with detailed performance metrics and milestones.

### 6. Instructor Dashboard
Instructors get a dashboard to create and manage courses, track student progress, and engage with learners.

## Getting Started (Students)
1. Sign up or log in with your preferred OAuth provider.
2. Explore the course catalog and pick a learning path.
3. Enroll in a course and start with the guided lessons.
4. Track your progress as you complete exercises and projects.
5. Join live sessions when available to learn with others.

## Tech Stack
- React (CRA)
- Firebase (Auth + Firestore)
- React Router

## Developer Quickstart
```bash
npm install
npm start
```

## Configuration
Create a `.env` file in the project root (if not already configured):
```
REACT_APP_GOOGLE_CLIENT_ID=...
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

## Notes
- Firebase currently handles auth and data.
- A future backend should include role-aware API auth.
