const { faker } = require('@faker-js/faker')

const { MainPage } = require('./main.page')

//locators
const exploreMarketBtn = {
    title: 'main h1',
    hook: 'div',
    btn: 'a[href*="market"]'
}

const becomeTesterForm = '#become-a-beta-tester'
const firstName = '#FirstName'
const lastName = '#LastName'
const companyField = '#Website'
const emailField = '#Email'
const industryField = '#Industry'
const useCaseSelect = '#Use_Case_Form__c'


class IntegrationsPage extends MainPage {

    getExploreMarketplaceBtn() {
        return cy.get(exploreMarketBtn.title, { timeout: 120000})
                .siblings(exploreMarketBtn.hook)
                .find(exploreMarketBtn.btn)
    }

    getTelnyxDiffTitle() {
        return cy.get(becomeTesterForm)
    }

    getFirstNameField() {
        return cy.get(firstName, { timeout: 60000 })
    }

    getLastNameField() {
        return cy.get(lastName)
    }

    getCompanyField() {
        return cy.get(companyField)
    }

    getEmailField() {
        return cy.get(emailField)
    }

    getIndustryField() {
        return cy.get(industryField)
    }

    getUseCaseSelect() {
        return cy.get(useCaseSelect)
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