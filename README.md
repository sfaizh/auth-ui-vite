# Frontend UI build with React + Typescript + Vite

An example of a login page with protected routes, authentication via [Nest.JS Backend API](https://github.com/sfaizh/auth-api-nestjs), and testing suite using **Cypress**.

---

## Features

- **Authentication Flow**: Secure login with JWT token handling and protected routes.
- **React Router v6**: Uses loaders (`authLoader`, `redirectIfAuthed`) for route protection.
- **Cypress Tests**: Includes unit, integration, and end-to-end tests.

## Project Structure

```bash
├── public/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components (E.g. User Card)
│   ├── utils/         # Utility functions (authLoader, redirectIfAuthed)
│   ├── App.tsx
│   └── main.tsx
├── cypress/
│   ├── e2e/           # End-to-end tests
│   └── support/
├── vite.config.ts
└── tailwind.config.js
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sfaizh/auth-ui-vite.git
cd auth-ui-vite

# Install dependencies
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

---

## Testing

### Cypress Configuration

Ensure your backend server is running at `http://localhost:3000` before executing tests.

### Running Tests

```bash
# Open Cypress Test Runner
npx cypress open
```

This will launch the Cypress Test Runner, where you can execute:

- **Component Tests**: Test individual React components in isolation.
- **Integration Tests**: Test the interaction between components and routes.
- **End-to-End Tests**: Test the complete user flow from login to dashboard.

---

## Authentication Flow

- **Login**: Users authenticate via the `/login` route. Upon successful login, a JWT token is stored in `localStorage`.
- **Protected Routes**: Routes like `/dashboard` are protected using `authLoader`, which checks if the JWT token exists.
- **Redirects**: If a user is already authenticated, `redirectIfAuthed` prevents access to the login page.
