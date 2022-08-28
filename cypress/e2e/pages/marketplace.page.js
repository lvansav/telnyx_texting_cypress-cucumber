class MarketplacePage {

    getSearchInput() {
        return cy.get('input[type="text"]')
    }

    getFirstSearchItems() {
        return cy.get('#react-autowhatever-1--item-0 a')
    }
    
    fillSearchField(search) {
        this.getSearchInput()
            .type(search)
    }

    firstPossibleResultClick() {
        this.getFirstSearchItems()
            .wait(1000)
            .click({ waitForAnimations: true})
    }
}

module.exports = MarketplacePage