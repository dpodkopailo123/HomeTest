/// <reference types = "Cypress" />
class HomePage{

visit(){
    cy.visit("https://www.hobsons.com/")
}

clickIntersect(){
    // cy.get('.card-home-banner__button').eq(1).click();
    cy.get('span[class="card-home-banner__button"]').eq(1).click({force: true});
}


}

export default HomePage