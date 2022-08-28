const AllProductPage = require('./all.product.page')


class SipTrunksProdPage extends AllProductPage {

    getResourceCenterLinkFAQ1() {
        return cy.get('main dl')
                .scrollIntoView()
                .find('#faq1_description')
                .contains('Resource Center')
    }

    getChannelsLinkFAQ2() {
        return cy.get('main dl')
                .scrollIntoView()
                .find('#faq2_description')
                .contains('channels')
    }

    getPricingLinkFAQ3() {
        return cy.get('main dl')
                .scrollIntoView()
                .find('#faq3_description')
                .contains('pricing')
    }

    getFaqAccordionBtn(btnNum) {
        return cy.get('main dl>div')
                .eq(btnNum)
                .find('button')
    }

    openSecondItemFAQ() {
        this.getFaqAccordionBtn(1)
            .click()
    }

    openThirdItemFAQ() {
        this.getFaqAccordionBtn(2)
            .click()
    }

    resourceCenterLinkFAQ1Click() {
        this.getResourceCenterLinkFAQ1()
            .click()

            
        return Cypress.on('uncaught:exception', (err) => {
                // returning false here prevents Cypress from
                // failing the test
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }

    channelsLinkFAQ2Click() {
        this.getChannelsLinkFAQ2()
            .click()

        return Cypress.on('uncaught:exception', (err) => {
                // returning false here prevents Cypress from
                // failing the test
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }

    pricingLinkFAQ3Click() {
        this.getPricingLinkFAQ3()
            .click()


        return Cypress.on('uncaught:exception', (err) => {
                // returning false here prevents Cypress from
                // failing the test
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }
}

module.exports = SipTrunksProdPage