const { faker } = require('@faker-js/faker')
const VerifyEmailPage = require('./verify.email.page')

//locators
const emailInput = '#email'
const passwordInput = '#password'
const nameInput = '#full_name'
const termsBox = '#terms_and_conditions'
const subscribeBox = '#subscription_opt_in'
const submitBtn = '[type="submit"]'


class SignUpPage {
    getEmailInput() {
        return cy.get(emailInput, { timeout: 120000 })
    }

    getPasswordInput() {
        return cy.get(passwordInput)
    }

    getNameInput() {
        return cy.get(nameInput)
    }

    getTermsCheckbox() {
        return    cy.get(termsBox)
                    .parent()
    }

    getSubscribeCheckbox() {
        return    cy.get(subscribeBox)
                    .parent()
    }

    getSubmitBtn() {
        return cy.get(submitBtn)
    }

    signUpAfterTryItForFree() {
        this.getNameInput().type(faker.name.fullName())
        this.getPasswordInput().type(faker.internet.password(30, false, /[!-}]/, '!1'))
        this.getTermsCheckbox().click()
        this.getSubmitBtn().click()
        this.getSubmitBtn().click({ force: true })
        this.getSubmitBtn().click('bottom', { force: true })

        const verifyEmailPage = new VerifyEmailPage
        return verifyEmailPage
    }

    signUpByRequireFields() {
        const email = faker.internet.email()
        
        this.getEmailInput().type(email)
        this.getNameInput().type(faker.name.fullName())
        this.getPasswordInput().type(faker.internet.password(30, false, /[!-}]/, '!1'))
        this.getTermsCheckbox().click()
        this.getSubscribeCheckbox().click()
        this.getSubmitBtn().click()
  

        const verifyEmailPage = new VerifyEmailPage()
        return {page: verifyEmailPage, 
                email: email}
    }

    signUpByAllFields() {
        const email = faker.internet.email()
        
        this.getEmailInput().type(email)
        this.getNameInput().type(faker.name.fullName())
        this.getPasswordInput().type(faker.internet.password(30, false, /[!-}]/, '!1'))
        this.getTermsCheckbox().click()
        this.getSubscribeCheckbox().click()
        this.getSubmitBtn().click()
  

        const verifyEmailPage = new VerifyEmailPage()
        return {page: verifyEmailPage, 
                email: email}
    }
}

module.exports = SignUpPage;