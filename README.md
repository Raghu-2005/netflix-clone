# Netflix Clone

A production-deployed, frontend recreation of the Netflix user interface, built with React and Firebase. The application replicates core Netflix UI/UX patterns including authenticated browsing, dynamic content rendering, and a responsive layout — deployed live on Vercel.

**Live Demo:** [netflix-clone-frontend-gules.vercel.app](https://netflix-clone-frontend-gules.vercel.app)

---

## Overview

This project demonstrates proficiency in building real-world, component-driven React applications integrated with a cloud backend. Firebase handles user authentication and real-time data, while React Router manages client-side navigation across multiple views. The UI closely mirrors Netflix's production interface — including the hero banner, content rows, navigation bar, and toast-based feedback — built entirely from scratch without UI component libraries.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 with Vite |
| Routing | React Router DOM v7 |
| Backend / Auth | Firebase v11 (Authentication + Firestore) |
| State & Hooks | react-firebase-hooks |
| Notifications | React Toastify |
| Styling | Custom CSS |
| Deployment | Vercel |

---

## Features

- User authentication via Firebase — sign up, sign in, and sign out with session persistence
- Protected routes that redirect unauthenticated users to the login page
- Dynamic home page with a featured hero banner and horizontally scrollable content rows
- Browse content by category: TV Shows, Movies, New & Popular, and Browse by Language
- Personal watchlist ("My List") with add and remove functionality persisted to Firestore
- Toast notifications for user actions and authentication feedback
- Fully responsive layout across desktop and mobile viewports

---

## Project Structure

```
netflix-clone/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components (Navbar, Row, Banner, etc.)
│   ├── pages/            # Route-level views (Home, Login, PlayerPage)
│   ├── firebase.js       # Firebase configuration and initialization
│   └── main.jsx          # Application entry point and router setup
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher
- A [Firebase](https://firebase.google.com) project with Authentication and Firestore enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/Raghu-2005/netflix-clone.git
cd netflix-clone

# Install dependencies
npm install
```

### Environment Configuration

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

All environment variables must be prefixed with `VITE_` to be accessible in the Vite build pipeline.

### Running Locally

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com) and create a new project.
2. Enable **Email/Password** authentication under Authentication > Sign-in method.
3. Create a **Firestore** database and add a `users` collection to persist watchlist data per user.
4. Copy your Firebase config values into the `.env` file using the variable names above.

---

## Deployment

The application is deployed on Vercel. To deploy your own instance:

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add all environment variables from your `.env` file in the Vercel project settings.
4. Deploy — Vercel auto-detects the Vite configuration and builds accordingly.

---

## Roadmap

Planned enhancements for future iterations:

- Video playback integration using a YouTube embed or self-hosted player
- Real-time search with content filtering
- Genre-based dedicated category pages
- User profile management with avatar customization
- Infinite scroll for content rows

---

## License

This project is open source and available under the [MIT License](LICENSE). It is intended for educational and portfolio purposes only. All Netflix branding, trademarks, and content belong to Netflix, Inc.

---

## Contact

**Raghuram L** — Software Developer

- Email: [lraghuram14@gmail.com](mailto:lraghuram14@gmail.com)
- LinkedIn: [linkedin.com/in/raghuram-l-1193b5259](https://www.linkedin.com/in/raghuram-l-1193b5259/)
- GitHub: [github.com/Raghu-2005](https://github.com/Raghu-2005)
