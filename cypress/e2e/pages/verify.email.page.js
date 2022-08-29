//locators
const verifyEmail = {
    title: 'h1',
    text: 'div',
    btn: 'strong'
}

const resentEmailBtn = 'p>button'


class VerifyEmailPage {
    
    getVerifyEmail() {
        return cy.get(verifyEmail.title)
                .siblings(verifyEmail.text)
    }

    getResentEmailBtn() {
        return cy.get(resentEmailBtn)
    }
}

module.exports = {
    VerifyEmailPage: VerifyEmailPage,
    verifyEmailPage: new VerifyEmailPage
}