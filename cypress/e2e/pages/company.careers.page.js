const { CompanyBase } = require('./support.bases.pages')

//locators
const listVacantionsTitle = 'header>p'

class CompanyCareersPage extends CompanyBase {

    getListOfVacanciesTitle() {
        return cy.get(listVacantionsTitle)
    }
}

module.exports = CompanyCareersPage