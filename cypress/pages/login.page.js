/// <reference types="cypress" />

class LoginPage {
    elements = {
        username: () => cy.get('input[name="username"]'),
        password: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('button.orangehrm-login-button')
    }
    saisirUsename(username) {
        this.elements.username().type(username)
    }
    saisirPassword(password) {
        this.elements.password().type(password)
    }
    cliquerLogin() {
        this.elements.loginButton().click()
    }
}

export default new LoginPage()