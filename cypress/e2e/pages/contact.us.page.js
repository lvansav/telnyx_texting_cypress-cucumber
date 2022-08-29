const { faker } = require('@faker-js/faker')

//locators
const reasonSelect = '#Reason_for_Contact__c'
const selectSupportOpt = '[value="Support"]'
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const emailField = '#Email'
const phoneCode = '#Phone_Number_Extension__c'
const phoneNumber = '#Phone_Number_Base__c'
const websiteField = '#Website'
const additionalField = '#Form_Additional_Information__c'
const subscribeBox = '[name="Subscription_Opt_In__c"]'

class ContantUsPage {

    getReasonSelect() {
        return cy.get(reasonSelect)
    }

    getFirstNameField() {
        return cy.get(firstNameField)
    }
    
    getLastNameField() {
        return cy.get(lastNameField)
    }

    getEmailField() {
        return cy.get(emailField)
    }

    getPhoneCode() {
        return cy.get(phoneCode)
    }

    getPhoneNumber() {
        return cy.get(phoneNumber)
    }

    getWebsiteField() {
        return cy.get(websiteField)
    }

    getAdditionalField() {
        return cy.get(additionalField)
    }

    getSubscribeCheckbox() {
        return cy.get(subscribeBox)
    }

    selectSupportReason() {
        return this.getReasonSelect()
                    .select('Support')
    }

    getSupportOption() {
        return this.getReasonSelect()
                    .find(selectSupportOpt)
    }

    fillAllFields() {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const email = faker.internet.email()
        const randomCode = Math.floor(Math.random() * 221) + 1;
        const randomNumber = faker.phone.number('##########')
        const randomURL = faker.internet.url()
        const lorem  =faker.lorem.paragraph()

        this.getFirstNameField()
            .type(firstName)

        this.getLastNameField()
            .type(lastName)

        this.getEmailField()
            .type(email)

        this.getPhoneCode()
            .select(randomCode)

        this.getPhoneNumber()
            .type(randomNumber)

        this.getWebsiteField()
            .type(randomURL)

        this.getAdditionalField()
            .type(lorem)

        this.getSubscribeCheckbox()
            .check()

        return {
            firstName: firstName,
            lastName: lastName,
            email: email,
            code: randomCode,
            number: randomNumber,
            url: randomURL,
            text: lorem
        }
    }
}

module.exports = ContantUsPage