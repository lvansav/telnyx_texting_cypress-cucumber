const { CompanyBase } = require('./support.bases.pages')

//locators
const officePicture = 'picture>img'
const whereWeAreSubtitle = 'div>section>h3'

class CompanyAboutPage extends CompanyBase {

    getOfficePicture() {
        return cy.get(officePicture, { timeout: 120000})
    }

    getWhereWeAreSubtitle() {
        return cy.get(whereWeAreSubtitle)
    }

    scrollToOfficePictures() {
        this.getWhereWeAreSubtitle()
            .scrollIntoView()
    }
}

module.exports = {
    CompanyAboutPage: CompanyAboutPage,
    companyAboutPage: new CompanyAboutPage
}