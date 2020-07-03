/// <reference types = "Cypress" />

class Intersect{

signIntersect(){
  return  cy.get('.banner-solution__title-top-level');
}

mapBanner(){
    return cy.get('.block-stats-map__map');
}

mapStudentPercentage(state){

            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '% of Students');
    
}


}
export default Intersect;