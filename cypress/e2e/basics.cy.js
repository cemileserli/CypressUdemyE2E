/// <reference types="cypress"/>


function generateText(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

describe('Task operations', () => {

    beforeEach('Login to the App ', () => {
        cy.visit('http://localhost:5173/')
    })




    it('Cancel task adding', () => {

        cy.contains('Add Task').click()
        cy.get('dialog.modal').should('exist')
        // cy.contains('Cancel').click()
        cy.get('.backdrop').click({ force: true })
        cy.get('dialog.modal').should('not.exist')
    })

    it('Add a task Without Title and Summary', () => {

        cy.contains('Add Task').click()
        cy.get('dialog.modal').should('exist')
        cy.get('[type="submit"]').click('')
        cy.get('dialog.modal').should('contain', 'title')
            .and('contain', 'summary')
        //cy.get('dialog.modal').should('not.exist')
    })

    it('Add a task successfully', () => {

        let title = generateText(4) + ' ' + generateText(5)
        let summary = generateText(3) + ' ' + generateText(4) + ' ' + generateText(5)
        cy.contains('Add Task').click()
        cy.get('dialog.modal').should('exist')
        cy.get('#title').type(title)
        cy.get('#summary').type(summary)
        cy.get('#category').select('important').should('contain', 'Important')
        cy.get('[type="submit"]').click('')
        cy.get('dialog.modal').should('not.exist')
        cy.get('.task-list').first().then(($task) => {
            cy.get($task).should('contain', title)
                .and('contain', summary)
        })





    })
})


