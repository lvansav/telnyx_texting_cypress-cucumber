class CompanyBase {
    
    getPageSubtitle() {
        return cy.get('main section>header>div')
    }
}

module.exports = CompanyBase