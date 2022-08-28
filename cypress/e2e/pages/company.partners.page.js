const { faker } = require('@faker-js/faker')

const CompanyBase = require('./company.base')


class CompanyPartnersPage extends CompanyBase {
    getGrowTitle() {
        return cy.get('main header>h2')
    }

    getBuildList() {
        return cy.get('main ul:nth-child(2)')
    }

    getFirstNameField() {
        return cy.get('#FirstName', { timeout: 60000 })
    }

    getLastNameField() {
        return cy.get('#LastName')
    }

    getCompanyField() {
        return cy.get('#Company')
    }

    getEmailField() {
        return cy.get('#Email')
    }

    getPhoneField() {
        return cy.get('#Form_Phone__c')
    }

    getPartnerTypeSelect() {
        return cy.get('#Partner_Type__c')
    }

    getBecomeReasonField() {
        return cy.get('#Form_Additional_Information__c')
    }

    getReceiveEmailsChexbox() {
        return cy.get('#Subscription_Opt_In__c')
                .siblings('label')
    }

    scrollToGrowTitle() {
        this.getGrowTitle()
            .scrollIntoView()
    }

    scrollToBuildList() {
        this.getBuildList()
            .scrollIntoView()
    }

    fillAllFormFields() {
        const randomOpt = Math.floor(Math.random() * 5) + 1;

        this.getFirstNameField()
            .type(faker.name.firstName())
        this.getLastNameField()
            .type(faker.name.lastName())
        this.getCompanyField()
            .type(faker.company.name())
        this.getEmailField()
            .type(faker.internet.email())
        this.getPhoneField()
            .type(faker.phone.number())
        this.getPartnerTypeSelect()
            .select(randomOpt)
        this.getBecomeReasonField()
            .type(faker.lorem.paragraph())
        this.getReceiveEmailsChexbox()
            .realClick()
    }
}

module.exports = CompanyPartnersPage