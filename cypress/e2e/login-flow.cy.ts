describe('Login flow', () => {
    it('Logs in a lands on dashboard', () => {
        // Visit the login page
        cy.visit('http://localhost:5173/login')

        // Fill in credentials
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123')

        // Submit form
        cy.get('button[type="submit"]').click()

        // Should be redirected to /dashboard
        cy.url().should('include', '/dashboard')

        // Confirm dashboard loaded with welcome message
        cy.contains('Welcome admin').should('exist')

        // Confirm the user list table is populated
        cy.get('table tbody tr').should('have.length.greaterThan', 0)

        // Assert token exists
        cy.window().then((win) => {
            const token = win.localStorage.getItem('token')
            expect(token).to.exist
        })
    })
})