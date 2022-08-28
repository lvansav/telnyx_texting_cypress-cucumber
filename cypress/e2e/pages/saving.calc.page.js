const MainPage = require('./main.page')


class SavingCalcPage extends MainPage {

    getMessagingApiBox() {
        return cy.get('#MessageApi_svg__a')
                .parent()
                .parent()
    }

    getSipTrunkingBox() {
        return cy.get('[alt="elastic sip trunking"]')
                .parent()
    }
        
    getVoiceApiBox() {
        return cy.get('[alt="voice api"]')
                .parent()
    }

    getContinueBtn() {
        return cy.get('main header')
                .parent('div')
                .find('div>div>button')
                .contains('Continue')
    }

    getLocalNumField() {
        return cy.get('#local-numbers')
    }

    getTollFreeNumField() {
        return cy.get('#toll-free-numbers')
    }

    getSendSmsField() {
        return cy.get('#send-sms')
    }

    getReceiveSmsField() {
        return cy.get('#receive-sms')
    }

    getSendMmsField() {
        return cy.get('#send-mms')
    }

    getReceiveMmsField() {
        return cy.get('#receive-mms')
    }

    getReceiveToLocalField() {
        return cy.get('#receive-inbound-calls-to-local-numbers')
    }

    getReceiveToTollFreeField() {
        return cy.get('#receive-inbound-calls-to-toll-free-numbers')
    }

    getOutbondField() {
        return cy.get('#make-outbound-calls')
    }

    getReceiveCallControlField() {
        return cy.get('#receive-inbound-calls-with-call-control')
    }

    getMakeCallControlField() {
        return cy.get('#make-outbound-calls-with-call-control')
    }

    getYourSavingInfoBlock() {
        return cy.get('main header')
                .siblings('div')
                .find('h2')
                .parent()
    }

    getTryTelnyxFreeBtn() {
        return cy.get('h2')
                .siblings('div')
                .find('a[href="/sign-up"]')
    }

    getTwillioMigrGuideBtn() {
        return cy.get('main')
                .find('[href*="twilio-migration-guide"]')
    }

    twillioMigrGuideBtnClick() {
        this.getTwillioMigrGuideBtn()
            .click()

        
        return Cypress.on('uncaught:exception', (err) => {
                // returning false here prevents Cypress from
                // failing the test
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }
}

module.exports = SavingCalcPage