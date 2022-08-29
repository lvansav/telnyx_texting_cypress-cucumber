const { MainPage } = require('./main.page')

//locators
const readCustStoriesLink = 'main [href*="/customer-stories"]'

class CustomerStoriesPage extends MainPage {

    getReadCustomerStoriesLink(linkNum) {
        return cy.get(readCustStoriesLink)
                .eq(linkNum)
    }


}

module.exports = {
    CustomerStoriesPage: CustomerStoriesPage,
    customerStoriesPage: new CustomerStoriesPage
}