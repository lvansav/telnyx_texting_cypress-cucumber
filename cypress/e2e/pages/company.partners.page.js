const { faker } = require('@faker-js/faker')

const { CompanyBase } = require('./support.bases.pages')

//locators
const growTitle = 'main header>h2'
const prefooter = '#become-a-partner'
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const companyField = '#Company'
const emailField = '#Email'
const phoneField = '#Form_Phone__c'
const partnerTypeField = '#Partner_Type__c'
const becomeReasonField = '#Form_Additional_Information__c'
const receiveEmailsBox = {
    id: '#Subscription_Opt_In__c',
    clickable: 'label'
}

class CompanyPartnersPage extends CompanyBase {
    getGrowTitle() {
        return cy.get(growTitle)
    }

    getBuildList() {
        return cy.get(prefooter)
    }

    getFirstNameField() {
        return cy.get(firstNameField, { timeout: 60000 })
    }

    getLastNameField() {
        return cy.get(lastNameField)
    }

    getCompanyField() {
        return cy.get(companyField)
    }

    getEmailField() {
        return cy.get(emailField)
    }

    getPhoneField() {
        return cy.get(phoneField)
    }

    getPartnerTypeSelect() {
        return cy.get(partnerTypeField)
    }

    getBecomeReasonField() {
        return cy.get(becomeReasonField)
    }

    getReceiveEmailsChexbox() {
        return cy.get(receiveEmailsBox.id)
                .siblings(receiveEmailsBox.clickable)
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