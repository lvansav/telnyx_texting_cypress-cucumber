const { faker } = require('@faker-js/faker')
const Header = require('./header')
const SignUpPage = require('./sign.up.page')
const ContactUsPage = require('./contact.us.page')
const Footer = require('./footer')


class MainPage extends Header {

    getEmailField() {
        return cy.get('[name="email"]')
    }

    getTryForFreeBtn() {
        return cy.get('button[type="submit"]')
    }

    getMainSignUpBtn() {
        return cy.get('main [href="/sign-up"]')
    }

    headerSignUpBtnClick() {
        const btn = super.getHeaderSignUpBtn()
        btn.click()

        const signUpPage = new SignUpPage()
        return signUpPage
    }

    headerContactUsBtnClick() {
        super.getHeaderContactUsBtn()
            .click()

        const contactUsPage = new ContactUsPage
        return contactUsPage
    }

    hoverHeader() {
        return cy.get('header')
                .realHover()
    }

    openAndGetProdDropItems() {
        return cy.openAndGetAllDropItems(0)
    }

    openAndGetSolutionDropItems() {
        return cy.openAndGetAllDropItems(1)
    }

    openAndGetResourcesDropItems() {
        return cy.openAndGetAllDropItems(3)
    }

    openAndGetCompanyDropItems() {
        return cy.openAndGetAllDropItems(4)
    }

    allProductHeadLinkClick() {
        const link = super.getAllProdHeaderLink()
        link.click()
    }

    managedServHeadLinkClick() {
        const link = super.getManagedServHeadLink()
        link.click()
    }

    networkHeadBtnClick() {
        const btn = super.getNetworkHeadBtn()
        btn.click()
    }

    docsHeadLinkClick() {
        const link = super.getDocsHeadLink()
        link.click()
    }

    blogHeadLinkClick() {
        const link = super.getBlogHeadLink()
        link.click()
    }

    storiesHeadLinkClick() {
        const link = super.getStoriesHeadLink()
        link.click()
    }

    savingCalculatorLinkClick() {
        const link = super.getSavingCalculatorLink()
        link.click()
    }

    aboutTelnyxHeadLinkClick() {
        const link = super.getAboutTelnyxHeadLink()
        link.click()
    }

    careersHeadLinkClick() {
        const link = super.getCareersHeadLink()
        link.click()
    }

    partnersHeadLinkClick() {
        const link = super.getPartnersHeadLink()
        link.click()
    }

    integrationsHeadLinkClick() {
        const link = super.getIntegrationsHeadLink()
        link.click()
    }

    mainSignUpBtnClick() {
        this.getMainSignUpBtn()
            .scrollIntoView({top: 1000, left: 0})
            .click()

        return new SignUpPage
    }

    addEmailAndTryForFree() {
        const email = faker.internet.email()
        this.getEmailField().type(email)
        this.getTryForFreeBtn().click()

        const signUpPage = new SignUpPage()
        return {
            page: signUpPage,
            email: email
        }
    }

    footerSipTrunkingLinkClick() {
        const footer = new Footer

        footer
            .getSipTrunkingLink()
            .click()
    }

    footerSignUpLinkClick() {
        const footer = new Footer

        footer
            .getSignUpFooterLink()
            .click()
    }
}


module.exports = MainPage;