import HomePage  from "../Pages/HomePage.page";
import Intersect from "../Pages/Intersect.page";

describe('Testing Hobsons web site', () =>{
  
    var homePage = new HomePage();
    var intersect = new Intersect();
    before(function(){
        homePage.visit();
    });
    
    it('Should verify title of the home page', () => {
        cy.title().should('include', 'Education Advances | Hobsons');
    });
    it('Should select the “Intersect” application card and click the “learn more” link.', () => {
        homePage.clickIntersect();
        intersect.signIntersect().should('be.visible');
        
    });
    it('Should scroll down to “The Growing Naviance Footprint” and verify the map of the United States is displayed.', () => {
        cy.scrollTo(0, 4800);
        cy.wait(1000);      //this command just for visibility purposes
        intersect.mapBanner().should('be.visible');
    });
    it('Should for each state or logically grouped collection of states that can be highlighted, verify that there is an associated tooltip containing text with the correct percentage or a percentage range when hovered or selected.', () => {
        intersect.mapStudentPercentage('TX');
        intersect.mapStudentPercentage('NY');
        intersect.mapStudentPercentage('KS');
    });



})