/// <reference types="cypress" />

describe('Login Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('should log in with valid credentials', { tags: ['@smoke', '@regression', 'tc-001', 'direct'] }, () => {
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button.orangehrm-login-button').click()
        cy.url().should('include', '/dashboard')
    })

    //Scenario negatif
    it('should show error message with invalid credentials', { tags: ['@smoke', '@regression', 'tc-002', 'alternatif'] }, () => {
        cy.get('input[name="username"]').type('InvalidUser')
        cy.get('input[name="password"]').type('InvalidPass')
        cy.get('button.orangehrm-login-button').click()
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
    })

    //Scenario d'exception
    it('should show validation messages when fields are empty', { tags: ['@smoke', '@regression', 'tc-003', 'alternatif'] }, () => {
        cy.get('button.orangehrm-login-button').click()
        cy.get('.oxd-input-field-error-message').should('have.length', 2)
        cy.get('.oxd-input-field-error-message').first().should('contain', 'Required')
        cy.get('.oxd-input-field-error-message').last().should('contain', 'Required')
    })
})