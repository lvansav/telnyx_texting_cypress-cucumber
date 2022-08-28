const CompanyBase = require('./company.base')


class CompanyCareersPage extends CompanyBase {

    getListOfVacanciesTitle() {
        return cy.get('header>p')
    }
}

module.exports = CompanyCareersPage