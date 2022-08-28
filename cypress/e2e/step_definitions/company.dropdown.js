const { Given, And, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const MainPage = require('../pages/main.page')

const CompanyAboutPage = require('../pages/company.about.page')
const CompanyCareersPage = require('../pages/company.careers.page')
const CompanyPartnersPage = require('../pages/company.partners.page')

const IntegrationsPage = require('../pages/integrations.page')
const MarketplacePage = require('../pages/marketplace.page')
const MarketplaceMSTeamsPage = require('../pages/marketplase.msteams.page')

const baseURL = Cypress.config().baseUrl

Given(/^I hover over the "Company" dropdown in the header$/, () => {
    const mainPage = new MainPage

    mainPage
        .hoverHeader()
    
    mainPage
        .openAndGetCompanyDropItems()
})

When(/^I click "About Telnyx" link$/, () => {
    const mainPage = new MainPage

    mainPage
        .aboutTelnyxHeadLinkClick()

    cy
        .moveFromHeader()
})

When(/^I click "Careers" link$/, () => {
    const mainPage = new MainPage

    mainPage
        .careersHeadLinkClick()

    cy
        .moveFromHeader()
})

When(/^I click "Partners" link$/, () => {
    const mainPage = new MainPage

    mainPage
        .partnersHeadLinkClick()

    cy  
        .moveFromHeader()
})

When(/^I click "Integrations" link$/, () => {
    const mainPage = new MainPage

    mainPage
        .integrationsHeadLinkClick()

    cy
        .moveFromHeader()
})

And(/^I fill in the all fields in "Become a Telnyx partner" form$/, () => {
    const companyPartnersPage = new CompanyPartnersPage

    companyPartnersPage
        .scrollToBuildList()

    companyPartnersPage
        .fillAllFormFields()
})

And(/^I click "Explore our marketplace" button$/, () => {
    const integrationsPage = new IntegrationsPage

    integrationsPage
        .exploreMarketplaceBtnClick()
})

And(/^I search '(\w+)' by the search field$/, (search) => {
    const marketplacePage = new MarketplacePage

    marketplacePage
        .fillSearchField(search)
})

And(/^I click first link in possible result list$/, () => {
    const marketplacePage = new MarketplacePage

    marketplacePage
        .firstPossibleResultClick()
})

And(/^I fill in all fields in the Become a Beta Tester form$/, () => {
    const integrationsPage = new IntegrationsPage

    integrationsPage
        .getTelnyxDiffTitle()
        .scrollIntoView()

    integrationsPage
        .fillAllFormsField()
})

Then(/^I am on the "About Telnyx" page$/, () => {

    cy.url({ timeout: 60000})
      .should('eq', `${baseURL}company/about`)
})

Then(/^I am on the "Careers" page$/, () => {

    cy.url({ timeout: 60000})
      .should('eq', `${baseURL}company/careers`)
})

Then(/^I can see "About us" subtitle above the title$/, () => {
    const companyAboutPage = new CompanyAboutPage

    companyAboutPage
        .getPageSubtitle()
        .should('have.text', 'About Us')
})

Then(/^I can see "careers at telnyx" subtitle above the title$/, () => {
    const companyCareersPage = new CompanyCareersPage

    companyCareersPage
        .getPageSubtitle()
        .should('have.text', 'careers at telnyx')
})

Then(/^I can see Telnyx office pictures$/, () => {
    const companyAboutPage = new CompanyAboutPage

    companyAboutPage
        .scrollToOfficePictures()

    companyAboutPage
        .getOfficePicture()
        .should('be.visible')
})

Then(/^I can see "Come and work with us!" title$/, () => {
    const companyCareersPage = new CompanyCareersPage
    
    companyCareersPage
        .getListOfVacanciesTitle()
        .should('have.text', 'Come and work with us!')
})

Then(/^All fields are filled$/, () => {
    const companyPartnersPage = new CompanyPartnersPage

    companyPartnersPage
        .getFirstNameField()
        .should('be.visible')
    
    companyPartnersPage
        .getLastNameField()
        .should('be.visible')

    companyPartnersPage
        .getCompanyField()
        .should('be.visible')

    companyPartnersPage
        .getEmailField()
        .should('be.visible')

    companyPartnersPage
        .getPhoneField()
        .should('be.visible')

    companyPartnersPage
        .getPartnerTypeSelect()
        .should('not.have.value', 'Select...')

    companyPartnersPage
        .getBecomeReasonField()
        .should('be.visible')

    companyPartnersPage
        .getReceiveEmailsChexbox()
        .should('be.visible')
})

Then(/^I am on the '(\w+)' page$/, (search) => {
    search = search.toLowerCase()

    cy.url({ timeout: 60000})
      .should('contain', search)
})

Then(/^I can see '(\w+)' title$/, (search) => {
    const marketplaceMSTeamsPage = new MarketplaceMSTeamsPage

    marketplaceMSTeamsPage
        .getPageTitle()
        .should('contain.text', search)
})

Then(/^I can see "Get started" button$/, () => {
    const marketplaceMSTeamsPage = new MarketplaceMSTeamsPage

    marketplaceMSTeamsPage
        .getInstallDropdown()
        .should('be.visible')
})

Then(/^Last item in the breadcrumb is '(\w+)'$/, (search) => {
    const marketplaceMSTeamsPage = new MarketplaceMSTeamsPage

    marketplaceMSTeamsPage
        .getLastBreadcrumbsItem()
        .should('contain.text', search)
})

Then(/^All fields are filling$/, () => {
    const integrationsPage = new IntegrationsPage
    const re = new RegExp('a*');

    integrationsPage
        .getFirstNameField()
        .should('be.visible')
        
    integrationsPage
        .getLastNameField()
        .should('be.visible')

    integrationsPage
        .getCompanyField()
        .should('be.visible')

    integrationsPage
        .getEmailField()
        .should('be.visible')

    integrationsPage
        .getUseCaseSelect()
        .should('be.visible')
})