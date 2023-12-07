const { Given,Then,When } = require("@badeball/cypress-cucumber-preprocessor");
const Project05 = require("../../pages/Project05");


const project05 = new Project05()


Given(/^the user is on "([^"]*)"$/, (link) => {
	cy.visit(link)
});

Then(/^the user should see the "([^"]*)" heading$/, (arg) => {
    project05.getHeadingByText(arg).should('have.text', arg)
});

Then(/^the user should see the "([^"]*)" paragraph$/, (arg2) => {
    project05.paragraph().should('have.text', arg2)
});

Then(/^the user should see the "([^"]*)" button is disabled$/, (prevBtn) => {
	project05.getBtnByName(prevBtn).should('be.disabled')
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (nextBtn) => {
	project05.getBtnByName(nextBtn).should('be.enabled')
});


When(/^the user clicks on the "([^"]*)" button$/, (nextBtn) => {
	project05.getBtnByName(nextBtn).click()
});

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (nextBtn) => {
    project05.getBtnByName(nextBtn).click()
    project05.getBtnByName(nextBtn).click()
    project05.getBtnByName(nextBtn).click()
    project05.getBtnByName(nextBtn).should('be.disabled')
})


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (arg,dataTable) => {
    project05.cityImage().should('have.attr', 'alt', arg)

    const arr = dataTable.rawTable.flat()

    project05.data().each((el , index) => {
        cy.wrap(el).should('have.text', arr[index])
    })

});



