const CompanyBase = require('./company.base')


class CompanyAboutPage extends CompanyBase {

    getOfficePicture() {
        return cy.get('picture>img', { timeout: 120000})
    }

    getWhereWeAreSubtitle() {
        return cy.get('div>section>h3')
    }

    scrollToOfficePictures() {
        this.getWhereWeAreSubtitle()
            .scrollIntoView()
    }
}

module.exports = CompanyAboutPage