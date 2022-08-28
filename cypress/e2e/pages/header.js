

class Header {
    
    getHeaderSignUpBtn() {
        return cy.get('li div [href="/sign-up"]')
    }

    getHeaderContactUsBtn() {
        return cy.get('header li [href="/contact-us"]')
    }

    getAllProdHeaderLink() {
        return cy.get('header [href="/products"] span')
    }

    getManagedServHeadLink() {
        return cy.get('[href*="managed-services"] span')
    }

    getNetworkHeadBtn() {
        return cy.get('header li [href$="global-ip-network"]')
    }

    getDocsHeadLink() {
        return cy.get('header li')
                .eq(3)
                .find('[tabindex]')
                .siblings('div')
                .find('[href*="developers"]')
    }

    getBlogHeadLink() {
        return cy.get('header li')
                .eq(3)
                .find('[tabindex]')
                .siblings('div')
                .find('[href="/resources"]')
    }

    getStoriesHeadLink() {
        return cy.get('header li')
                .eq(3)
                .find('[tabindex]')
                .siblings('div')
                .find('[href="/customer-stories"]')
    }

    getSavingCalculatorLink() {
        return cy.get('header li')
                .eq(3)
                .find('[tabindex]')
                .siblings('div')
                .find('[href="/twilio-pricing-calculator"]')
    }

    getAboutTelnyxHeadLink() {
        return cy.get('header li')
                .eq(4)
                .find('[tabindex]')
                .siblings('div')
                .find('[href="/company"]')
    }

    getCareersHeadLink() {
        return cy.get('header li')
                .eq(4)
                .find('[tabindex]')
                .siblings('div')
                .find('[href="/company/careers"]')
    }

    getPartnersHeadLink() {
        return cy.get('header li')
                .eq(4)
                .find('[tabindex]')
                .siblings('div')
                .find('[href="/company/partnerships"]')
    }

    getIntegrationsHeadLink() {
        return cy.get('header li')
                .eq(4)
                .find('[tabindex]')
                .siblings('div')
                .find('[href="/integrations"]')
    }
};

module.exports = Header