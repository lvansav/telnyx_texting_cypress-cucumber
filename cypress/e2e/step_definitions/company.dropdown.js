const { Given, And, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const { faker } = require('@faker-js/faker')

const { mainPage } = require('../pages/main.page')

const { companyAboutPage } = require('../pages/company.about.page')
const { companyCareersPage } = require('../pages/company.careers.page')
const { companyPartnersPage } = require('../pages/company.partners.page')

const { integrationsPage } = require('../pages/integrations.page')
const { marketplacePage } = require('../pages/support.bases.pages')
const { marketplaceMSTeamsPage } = require('../pages/marketplase.msteams.page')

const baseURL = Cypress.config().baseUrl

const fakeFirstName = faker.name.firstName()
const fakeLastName = faker.name.lastName()
const fakeCompany = faker.company.name()
const fakeEmail = faker.internet.email()
const fakePhone = faker.phone.number()
const randomPartnerTypeOpt = Math.floor(Math.random() * 5) + 1
const randomParagraph = faker.lorem.paragraph()

const fakeWebsite = faker.internet.url()
const randomIndustry = faker.commerce.product()
const randomUseCaseOpt = Math.floor(Math.random() * 18) + 1


Given(/^I hover over the "Company" dropdown in the header$/, () => {

    mainPage
        .hoverHeader()
    
    mainPage
        .openAndGetCompanyDropItems()
})

When(/^I click "About Telnyx" link$/, () => {

    mainPage
        .aboutTelnyxHeadLinkClick()

    cy
        .moveFromHeader()
})

When(/^I click "Careers" link$/, () => {

    mainPage
        .careersHeadLinkClick()

    cy
        .moveFromHeader()
})

When(/^I click "Partners" link$/, () => {

    mainPage
        .partnersHeadLinkClick()

    cy  
        .moveFromHeader()
})

When(/^I click "Integrations" link$/, () => {

    mainPage
        .integrationsHeadLinkClick()

    cy
        .moveFromHeader()
})

And(/^I fill in the all fields in "Become a Telnyx partner" form with random data$/, () => {

    companyPartnersPage
        .scrollToBuildList()

    companyPartnersPage
        .fillAllFormFields(
            fakeFirstName,
            fakeLastName,
            fakeCompany,
            fakeEmail,
            fakePhone,
            randomPartnerTypeOpt,
            randomParagraph
        )
})

And(/^I click "Explore our marketplace" button$/, () => {

    integrationsPage
        .exploreMarketplaceBtnClick()
})

And(/^I search '(\w+)' by the search field$/, (search) => {

    marketplacePage
        .fillSearchField(search)
})

And(/^I click first link in possible result list$/, () => {

    marketplacePage
        .firstPossibleResultClick()
})

And(/^I fill in all fields in the Become a Beta Tester form with random data$/, () => {

    integrationsPage
        .getTelnyxDiffTitle()
        .scrollIntoView()

    integrationsPage
        .fillAllFormsField(
            fakeFirstName,
            fakeLastName,
            fakeWebsite,
            fakeEmail,
            randomIndustry,
            randomUseCaseOpt
        )
})

Then(/^I am on the "About Telnyx" page$/, () => {

    cy.getURL()
      .should('eq', `${baseURL}company/about`)
})

Then(/^I am on the "Careers" page$/, () => {

    cy.getURL()
      .should('eq', `${baseURL}company/careers`)
})

Then(/^I can see "About us" subtitle above the title$/, () => {

    companyAboutPage
        .getPageSubtitle()
        .should('have.text', 'About Us')
})

Then(/^I can see "careers at telnyx" subtitle above the title$/, () => {

    companyCareersPage
        .getPageSubtitle()
        .should('have.text', 'careers at telnyx')
})

Then(/^I can see Telnyx office pictures$/, () => {

    companyAboutPage
        .scrollToOfficePictures()

    companyAboutPage
        .getOfficePicture()
        .should('be.visible')
})

Then(/^I can see "Come and work with us!" title$/, () => {
    
    companyCareersPage
        .getListOfVacanciesTitle()
        .should('have.text', 'Come and work with us!')
})

Then(/^All fields are filled$/, () => {

    companyPartnersPage
        .getFirstNameField()
        .should('be.visible')
        .and('have.value', fakeFirstName)
    
    companyPartnersPage
        .getLastNameField()
        .should('be.visible')
        .and('have.value', fakeLastName)

    companyPartnersPage
        .getCompanyField()
        .should('be.visible')
        .and('have.value', fakeCompany)

    companyPartnersPage
        .getEmailField()
        .should('be.visible')
        .and('have.value', fakeEmail)

    companyPartnersPage
        .getPhoneField()
        .should('be.visible')
        .and('have.value', fakePhone)

    companyPartnersPage
        .getPartnerTypeSelect()
        .should('not.have.value', 'Select...')

    companyPartnersPage
        .getBecomeReasonField()
        .should('be.visible')
        .and('have.value', randomParagraph)

    companyPartnersPage
        .getReceiveEmailsChexbox()
        .should('be.visible')
})

Then(/^I am on the '(\w+)' page$/, (search) => {
    search = search.toLowerCase()

    cy.getURL()
      .should('contain', search)
})

Then(/^I can see '(\w+)' title$/, (search) => {

    marketplaceMSTeamsPage
        .getPageTitle()
        .should('contain.text', search)
})

Then(/^I can see "Get started" button$/, () => {

    marketplaceMSTeamsPage
        .getInstallDropdown()
        .should('be.visible')
})

Then(/^Last item in the breadcrumb is '(\w+)'$/, (search) => {

    marketplaceMSTeamsPage
        .getLastBreadcrumbsItem()
        .should('contain.text', search)
})

Then(/^All fields are filling$/, () => {

    integrationsPage
        .getFirstNameField()
        .should('be.visible')
        .and('have.value', fakeFirstName)
        
    integrationsPage
        .getLastNameField()
        .should('be.visible')
        .and('have.value', fakeLastName)

    integrationsPage
        .getCompanyField()
        .should('be.visible')
        .and('have.value', fakeWebsite)

    integrationsPage
        .getEmailField()
        .should('be.visible')
        .and('have.value', fakeEmail)

    integrationsPage
        .getIndustryField()
        .should('be.visible')
        .and('have.value', randomIndustry)

    integrationsPage
        .getUseCaseSelect()
        .should('be.visible')
})