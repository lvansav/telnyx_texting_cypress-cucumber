const { Given, And, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const MainPage = require('../pages/main.page')

const SignUpPage = require('../pages/sign.up.page')
const VerifyEmailPage = require('../pages/verify.email.page')

const SipTrunksProdPage = require('../pages/sip.trunks.prod.page')
const SipTrunkingArticlePage = require('../pages/sip.trunking.article.page')
const ChannelBillingArticlePage = require('../pages/channel.billing.article.page')
const SipTrunksPricingPage = require('../pages/sip.trunking.pricing.page')

const baseURL = Cypress.config().baseUrl                                                //


Given(/^I click "Sign up" footer link$/, () => {
    const mainPage = new MainPage

    mainPage
        .footerSignUpLinkClick()
})

Given(/^I click "Elastic SIP Trunking" footer link$/, () => {
    const mainPage = new MainPage

    mainPage
        .footerSipTrunkingLinkClick()
})

When(/^I sign up with filling in all fields$/, () => {
    const signUpPage = new SignUpPage

    signUpPage
        .signUpByAllFields()
})

When(/^I click "How many SIP trunks do I need" accordion$/, () => {
    const sipTrunksProdPage = new SipTrunksProdPage

    sipTrunksProdPage
        .openSecondItemFAQ()
})

When(/^I click "How much does SIP trunking cost" accordion$/, () => {
    const sipTrunksProdPage = new SipTrunksProdPage

    sipTrunksProdPage
        .openThirdItemFAQ()
})

When(/^I click "Resource Center" link in the "Frequency asked questions" block$/, () => {
    const sipTrunksProdPage = new SipTrunksProdPage

    sipTrunksProdPage
        .resourceCenterLinkFAQ1Click()
})

And(/^I click "channels" link$/, () => {
    const sipTrunksProdPage = new SipTrunksProdPage

    sipTrunksProdPage
        .channelsLinkFAQ2Click()
})

And(/^I click "pricing" link$/, () => {
    const sipTrunksProdPage = new SipTrunksProdPage

    sipTrunksProdPage
        .pricingLinkFAQ3Click()
})

Then(/^I am on verify email page$/, () => {
    
    cy.url({ timeout: 60000 })
      .should('eq', `${baseURL}sign-up/verify-email/f`)
})

Then(/^I can see verify email$/, () => {
    const verifyEmailPage = new VerifyEmailPage

    verifyEmailPage
        .getVerifyEmail()
        .should('be.visible')
})

Then(/^I can see "Resend verification email" button$/, () => {
    const verifyEmailPage = new VerifyEmailPage

    verifyEmailPage
        .getResentEmailBtn()
        .should('be.visible')
        .and('have.text', 'Resend verification email')
})

Then(/^I am on the "What SIP trunking is" article page$/, () => {
    
    cy.url({ timeout: 60000 })
      .should('eq', `${baseURL}resources/sip-trunking-explained`)
})

Then(/^I am on the "Channel Billing" article page$/, () => {
    
    cy.url({ timeout: 60000 })
      .should('eq', `${baseURL}resources/channel-billing-what-it-is-and-why-its-important`)
})

Then(/^I am on the SIP Trunk Pricing page$/, () => {
        
    cy.url({ timeout: 60000 })
      .should('eq', `${baseURL}pricing/elastic-sip`)
})

Then(/^The title of the article contains "What SIP trunking is"$/, () => {
    const sipTrunkingArticlePage = new SipTrunkingArticlePage

    sipTrunkingArticlePage
        .getArticleTitle()
        .should('contain.text', 'What SIP trunking is')
})

Then(/^The title of the article contains "Channel Billing"$/, () => {
    const channelBillingArticlePage = new ChannelBillingArticlePage

    channelBillingArticlePage
        .getArticleTitle()
        .should('contain.text', 'Channel Billing')
})

Then(/^The author of the article Odhran Reidy$/, () => {
    const sipTrunkingArticlePage = new SipTrunkingArticlePage

    sipTrunkingArticlePage
        .getArticleAuthor()
        .should('contain.text', 'Odhran')
        .and('contain.text', 'Reidy')
})

Then(/^The author of the article Josh Whitaker$/, () => {
    const channelBillingArticlePage = new ChannelBillingArticlePage

    channelBillingArticlePage
        .getArticleAuthor()
        .should('contain.text', 'Josh')
        .and('contain.text', 'Whitaker')
})

Then(/^The title of the page contains "SIP Trunk Pricing"$/, () => {
    const sipTrunksPricingPage = new SipTrunksPricingPage

    sipTrunksPricingPage
        .getPageTitle()
        .should('have.text', 'SIP Trunk Pricing')
})

