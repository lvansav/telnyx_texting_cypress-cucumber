const { faker } = require('@faker-js/faker')

const MainPage = require('./main.page')

class IntegrationsPage extends MainPage {

    getExploreMarketplaceBtn() {
        return cy.get('main h1')
                .siblings('div')
                .find('a[href*="market"]')
    }

    getTelnyxDiffTitle() {
        return cy.get('header h2')
    }

    getFirstNameField() {
        return cy.get('#FirstName', { timeout: 60000 })
    }

    getLastNameField() {
        return cy.get('#LastName')
    }

    getCompanyField() {
        return cy.get('#Website')
    }

    getEmailField() {
        return cy.get('#Email')
    }

    getIndustryField() {
        return cy.get('#Industry')
    }

    getUseCaseSelect() {
        return cy.get('#Use_Case_Form__c')
    }

    exploreMarketplaceBtnClick() {
        this.getExploreMarketplaceBtn()
            .click()
    }

    fillAllFormsField() {
        const randomOpt = Math.floor(Math.random() * 18) + 1;

        this.getFirstNameField()
            .type(faker.name.firstName())
        this.getLastNameField()
            .type(faker.name.lastName())
        this.getCompanyField()
            .type(faker.internet.url())
        this.getEmailField()
            .type(faker.internet.email())
        this.getIndustryField()
            .type(faker.commerce.product())
        this.getUseCaseSelect()
            .select(randomOpt)
    }
}

module.exports = IntegrationsPage