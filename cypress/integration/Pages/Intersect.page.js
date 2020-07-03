/// <reference types = "Cypress" />

class Intersect{

signIntersect(){
  return  cy.get('.banner-solution__title-top-level');
}

mapBanner(){
    return cy.get('.block-stats-map__map');
}

mapStudentPercentage(state){
    switch(state){
        
         case 'NY':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '75% of Students');
            break;
        case 'NE': case 'MO': case 'KS': case 'IA': case 'OK': case 'OR': case 'WA': case 'AZ': case 'NM':  
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '26% to 50% of Students');
            break;
        case 'VT': case 'PA':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '60% of Students');
            break;
        case 'MD': case 'DE':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '81% to 90% of Students');
            break;
        case 'AL': case 'LA': case 'MS': case 'WY': case 'ID': case 'MT': case 'UT': case 'NV': case 'MI': case 'WI': case 'TN': case 'KY': case 'WV':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '11% to 25% of Students');
            break;
        case 'AK': case 'ND': case 'SD':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', 'Less than 10% of Students');
            break;
        case 'NJ': case 'MA':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '90% of Students');
            break;
        case 'CA':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '45% of Students');
            break;
        case 'AR': case 'MN': case 'RI': case 'VI':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '50% of Students');
            break;
        case 'CO':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '80% of Students');
            break;
        case 'CT':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '95% of Students');
            break;
        case 'TX': case 'HI':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '40% of Students');
            break;
        case 'IL': 
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '65% of Students');
            break;
        case 'IN': case 'ME': case 'OH':
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '55% of Students');
            break;
        case 'NH': 
            cy.get('[data-state="'+state+'"]').trigger('mousemove').click({force: true});
            cy.get('.block-stats-map__popup.active').should('contain', '70% of Students');
            break;
    }
}


}
export default Intersect;