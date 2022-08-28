const MarketplacePage = require('./marketplace.page')


class MarketplaceMSTeamsPage extends MarketplacePage {
    
    getPageTitle() {
        return cy.get('.listing-body h1')
    }

    getInstallDropdown() {
        return cy.get('.install-buttons .text')
    }

    getLastBreadcrumbsItem() {
        return cy.get('.breadcrumbs>li:last-child>a')
    }
}

module.exports = MarketplaceMSTeamsPage