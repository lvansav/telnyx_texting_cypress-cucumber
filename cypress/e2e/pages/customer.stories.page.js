const MainPage = require('./main.page')


class CustomerStoriesPage extends MainPage {

    getReadCustomerStoriesLink(linkNum) {
        return cy.get('main [href*="/customer-stories"]')
                .eq(linkNum)
    }


}

module.exports = CustomerStoriesPage