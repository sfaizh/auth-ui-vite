import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './Login'; // Adjust path if needed
import Dashboard from './Dashboard';
import { RouterProvider } from 'react-router';
import { mount } from 'cypress/react';
import { redirectIfAuthed } from '../utils/redirectIfAuthed';
import { authLoader } from '../utils/authLoader';
describe('<Login /> integration', () => {
    it('log in with loader and navigate to dashboard', () => {
        // Stub the login API
        cy.intercept('POST', '/auth/login', {
            statusCode: 200,
            body: { access_token: 'fake_token' },
        }).as('loginRequest');
        // Stub the /auth/current API to simulate authenticated user
        cy.intercept('GET', '/auth/current', {
            statusCode: 200,
            body: { username: 'admin' },
        }).as('currentUser');
        // Stub get all users
        cy.intercept('GET', '/user', {
            statusCode: 200,
            body: [
                { userId: 1, username: 'admin', email: 'admin@example.com' },
                { userId: 2, username: 'newuser', email: 'newuser@example.com' }
            ],
        }).as('getUser');
        const router = createMemoryRouter(createRoutesFromElements(_jsxs(_Fragment, { children: [_jsx(Route, { path: '/login', element: _jsx(Login, {}), loader: redirectIfAuthed }), _jsx(Route, { path: '/dashboard', element: _jsx(Dashboard, {}), loader: authLoader })] })), {
            initialEntries: ['/login']
        });
        mount(_jsx(RouterProvider, { router: router }));
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.wait('@loginRequest');
        cy.wait('@currentUser');
        cy.wait('@getUser');
        cy.contains('Welcome admin').should('exist');
    });
});
