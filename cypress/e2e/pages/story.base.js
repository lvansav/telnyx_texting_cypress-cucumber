class StoryBase {

    getCompanyInformationMenu() {
        return cy.get('h4>strong')
                .parents()
                .parents()
    }

    getUsedProductsMenu() {
        return cy.get('main ul')
                .parents()
    }
}

module.exports = StoryBase