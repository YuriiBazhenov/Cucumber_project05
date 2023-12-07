

class Project05 {
    heading(){
        return cy.get('.is-size-3')
    }

    sub_heading(){
        return cy.get('#sub_heading')
    }
     
    paragraph(){
        return cy.get('#content')
    }


    getHeadingByText(text){
        switch(text) {
            case "Pagination": 
                return this.heading()
            case "World City Populations 2022": 
                return this.sub_heading()
            case "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:":
                return this.paragraph()
        }
    }

    getPreviousBtn(){
        return cy.get('#previous')
    }
    
    getNextBtn(){
        return cy.get('#next')
    }

    
    getBtnByName(name){
        switch(name){
            case "Next":
            return this.getNextBtn()
            case "Previous":
                return this.getPreviousBtn()
        }
    }

    cityImage(){
        return cy.get('.city_image')
    }

    data(){
        return cy.get('.Pagination_pagBodyData__vG6oj > p')
    }


    
    
}

module.exports = Project05