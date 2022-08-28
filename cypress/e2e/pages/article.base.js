class ArticleBase {

    getArticleTitle() {
        return cy.get('article header h1')
    }

    getArticleAuthor() {
        return cy.get('article header>div')
    }
}

module.exports = ArticleBase