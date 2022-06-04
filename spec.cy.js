

describe('spec.cy.js', () => {
  beforeEach(() =>{
    cy.visit('https://test-ask.ridely.com/doc-wizard')
  })
  it('odwiedzenie strony internetowej oraz sprawdzenie czy można przejść całą rejestrację z poborem dokumetu i powrotem na stronę główną', () => {
    
    cy.get('.types > :nth-child(1) > div').click()
    cy.get('#mat-input-0').click()
    cy.get('#mat-input-0').type('Marian sp. z o.o.')
    cy.get('#mat-input-1').click()
    cy.get('#mat-input-1').type('przestrzegnia zasad')
    cy.get('#mat-input-2').click()
    cy.get('#mat-input-2').clear()
    cy.get('#mat-input-2').type('1111')
    cy.contains('Dalej').click()
    cy.get('#mat-input-3').click()
    cy.get('#mat-input-3').type('Jan ')
    cy.get('#mat-input-3').type('Kowalski')
    cy.get('#mat-input-4').type('Brak płatności')
    cy.get('#mat-input-5').select("'odzyskaj posag'")
    cy.get('span').contains('Dalej').click({force: true})
    cy.get('.download-link > .mat-focus-indicator > .mat-button-wrapper').click()
    cy.get('.mat-tertiary > .mat-button-wrapper').click()
  })
    it('odwiedzenie strony internetowej i wpisanie danych podstawowych, oraz przejście do następnej karty', () => {
    cy.get('.types > :nth-child(2) > div').click()
    cy.get('#mat-input-0').type('Marian sp. z o.o.')
    cy.get('#mat-input-1').click()
    cy.get('#mat-input-1').type('przestrzegnia zasad')
    cy.get('#mat-input-2').click()
    cy.get('#mat-input-2').clear()
    cy.get('#mat-input-2').type('1111')
    cy.contains('Dalej').click()
    cy.get('#mat-input-3').click()
    cy.get('#mat-input-3').type('Zbyszek Kieliszek spółka cywilna')
    cy.get('#mat-input-4').type('okradł sklep')
    cy.get('#mat-input-5').select("'ukryj skarbiec'")
    cy.contains('Dalej').click({force: true})
    cy.get('.download-link > .mat-focus-indicator > .mat-button-wrapper').click()
    cy.get('.mat-tertiary > .mat-button-wrapper').click()   
    
  
  })
})
