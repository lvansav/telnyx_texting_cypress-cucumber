class VerifyEmailPage {
    getVerifyEmail() {
        return cy.get('h1')
                .siblings('div')
                .find('strong', { timeout: 120000 })
    }

    getResentEmailBtn() {
        return cy.get('p>button')
                .should('be.visible')
    }
}

module.exports = VerifyEmailPage;