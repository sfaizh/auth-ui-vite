import { jsx as _jsx } from "react/jsx-runtime";
import Login from './Login';
import { MemoryRouter } from 'react-router';
describe('<Login />', () => {
    it('renders', () => {
        cy.mount(_jsx(MemoryRouter, { children: _jsx(Login, {}) }));
        cy.get('input[name="username"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('contain.text', 'Login');
    });
    it('shows validation errors if fields are empty on submit', () => {
        cy.mount(_jsx(MemoryRouter, { children: _jsx(Login, {}) }));
        cy.get('button[type="submit"]').click();
        cy.contains(/Username is required/i).should('exist');
        cy.contains(/Password is required/i).should('exist');
    });
    it('calls login with form values', () => {
        cy.intercept('POST', '/auth/login', (req) => {
            expect(req.body).to.have.all.keys({ username: 'admin', password: 'admin123' });
            req.reply({ statusCode: 200, body: { access_token: '' } });
        }).as('loginRequest');
        cy.mount(_jsx(MemoryRouter, { children: _jsx(Login, {}) }));
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.wait('@loginRequest');
    });
});
