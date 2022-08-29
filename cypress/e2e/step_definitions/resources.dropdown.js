const { Given, And, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const { MainPage } = require('../pages/main.page')

const CustomerStoriesPage = require('../pages/customer.stories.page')
const LightspeedStoryPage = require('../pages/lightspeed.story.page')

const SavingCalcPage = require('../pages/saving.calc.page')

const { MoveTwillioArticlePage } = require('../pages/articles.pages')

const baseURL = Cypress.config().baseUrl


Given(/^I hover over the "Resources" dropdown in the header$/, () => {
    const mainPage = new MainPage

    mainPage
        .hoverHeader()
    
    mainPage
        .openAndGetResourcesDropItems()
})

When(/^I click "Customer story" link$/, () => {
    const mainPage = new MainPage

    mainPage
        .storiesHeadLinkClick()
    
    cy
        .moveFromHeader()
})

When(/^I click "Saving Calculator" link$/, () => {
    const mainPage = new MainPage

    mainPage
        .savingCalculatorLinkClick()

    cy
        .moveFromHeader()
})

And(/^I click first "Read customer story"$/, () => {
    const customerStoriesPage = new CustomerStoriesPage

    customerStoriesPage
        .getReadCustomerStoriesLink(0)
        .click()
})

And(/^I choose "(\w+)"$/, (service) => {
    const savingCalcPage = new SavingCalcPage
    
    if (service === "Messaging") {
        savingCalcPage
            .getMessagingApiBox()
            .click()
    }
    if (service === "Trunking") {
        savingCalcPage
            .getSipTrunkingBox()
            .click()
    }
    if (service === "Voice") {
        savingCalcPage
            .getVoiceApiBox()
            .click()
    }

})

And(/^I click "Continue" button$/, () => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getContinueBtn()
        .click()
})

And(/^I type (\d+) local numbers$/, (local) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getLocalNumField()
        .clear()
        .type(local)
})

And(/^I type (\d+) toll-free numbers$/, (tollFree) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getTollFreeNumField()
        .clear()
        .type(tollFree)
})

And(/^I type (\d+) sendSMS$/, (sendSMS) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getSendSmsField()
        .clear()
        .type(sendSMS)
})

And(/^I type (\d+) receiveSMS$/, (receiveSMS) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getReceiveSmsField()
        .clear()
        .type(receiveSMS)
})

And(/^I type (\d+) sendMMS$/, (sendMMS) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getSendMmsField()
        .clear()
        .type(sendMMS)
})

And(/^I type (\d+) receive sendMMS$/, (receiveMMS) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getReceiveMmsField()
        .clear()
        .type(receiveMMS)
})

And(/^I type (\d+) desired receive calls to local numbers$/, (toLocal) => {
    const savingCalcPage = new SavingCalcPage
    
    savingCalcPage
        .getReceiveToLocalField()
        .clear()
        .type(toLocal)
})

And(/^I type (\d+) desired receive calls to toll-free numbers$/, (toTollFree) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getReceiveToTollFreeField()
        .clear()
        .type(toTollFree)
})

And(/^I type (\d+) desired outbond calls$/, (outbond) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getOutbondField()
        .clear()
        .type(outbond)
})

And(/^I type (\d+) desired receive call with Call control$/, (receiveControl) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getReceiveCallControlField()
        .clear()
        .type(receiveControl)
})

And(/^I type (\d+) desired making calls with Call control$/, (makeControl) => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getMakeCallControlField()
        .clear()
        .type(makeControl)
})

And(/^I click "Read our Twillio Migration Guide" button$/, () => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .twillioMigrGuideBtnClick()
})

Then(/^I am on the "Customer story" page$/, () => {

    cy.getURL()
      .should('contain', 'customer-stories')
})

Then(/^I can see side company information menu$/, () => {
    const lightspeedStoryPage = new LightspeedStoryPage

    lightspeedStoryPage
        .getCompanyInformationMenu()
        .should('be.visible')
})

Then(/^I can see side menu with used products$/, () => {
    const lightspeedStoryPage = new LightspeedStoryPage

    lightspeedStoryPage
        .getUsedProductsMenu()
        .should('be.visible')
})

Then(/^I can see "Your saving" information block$/, () => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getYourSavingInfoBlock()
        .scrollIntoView()
        .should('be.visible')
})

Then(/^I can see "Try Telnyx for free" button$/, () => {
    const savingCalcPage = new SavingCalcPage

    savingCalcPage
        .getTryTelnyxFreeBtn()
        .should('be.visible')
})

Then(/^I am on "Move from Twillio to Telnyx" article page$/, () => {

    cy.getURL()
      .should('contain', 'twilio-migration-guide')
})

Then(/^I can see "Move from Twillio to Telnyx" article title$/, () => {
    const moveTwillioArticlePage = new MoveTwillioArticlePage

    moveTwillioArticlePage
        .getArticleTitle()
        .should('contain.text', 'Move from Twilio to Telnyx')
})
