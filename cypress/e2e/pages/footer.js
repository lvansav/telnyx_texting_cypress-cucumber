class Footer {

    getSipTrunkingLink() {
        return cy.get('footer [href="/products/sip-trunks"] span span')
    }

    getSignUpFooterLink() {
        return cy.get('footer [href="/sign-up"] span span')
    }
}

module.exports = Footer