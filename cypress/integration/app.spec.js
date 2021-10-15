describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Nav
    const menu = ['Sobre nós', 'Adoção', 'Contato']
    cy.get('.container nav').should('be.visible')
    cy.get('.container nav li').as('menu').should('have.length', menu.length)

    for (let i = 0; i < menu.length; i++) {
      cy.get('@menu').eq(i).should('contain', menu[i])
    }

    // Action button
    cy.get('.bt_brown').should('contain', 'Cadastre-se')

    // Banner
    cy.get('#banner_home img').should('be.visible')
    cy.get('#banner_home span').should('contain', 'Faça parte!')
    cy.get('#banner_home h1').should('contain', 'Doe seu lar, adote um pet.')
    cy.get('#banner_home p').should('contain', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit aspernatur minima optio exercitationem, nostrum, ipsa natus ad necessitatibus! Quas!')

    // Filter
    const filters = ['Cachorros', 'Gatos']
    cy.get('#banner_filter').should('be.visible')
    cy.get('#banner_filter a').as('filter').should('have.length', filters.length)

    for (let i = 0; i < filters.length; i++) {
      cy.get('@filter').eq(i).should('contain', filters[i])
    }

    // List
    const petLength = 4 // From database
    cy.get('#pet_list').should('be.visible')
    cy.get('#pet_list article').should('have.length', petLength)

    // Check first list item
    cy.get('#pet_list article:first img').should('be.visible')
    cy.get('#pet_list article:first h1').should('contain', 'Thor')
    cy.get('#pet_list article:first small').should('contain', 'Nasceu em 02/02/2019')
    cy.get('#pet_list article:first p').should('contain', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, exercitationem.')

    // Go to detail page
    cy.get('#pet_list article:first a').click()
    cy.url().should('include', '/pet/33')

    cy.get('#detail img').should('have.attr', 'src').should('include','https://s2.glbimg.com/XI_QifLkJB-6IxQ6eZ-u7XFU3ZY=/607x426/smart/e.glbimg.com/og/ed/f/original/2020/02/27/vira-lata.jpg')
    cy.get('#detail h1').should('contain', 'Thor')
    cy.get('#detail small').should('contain', 'Nasceu em 02/02/2019')
    cy.get('#bt_action').should('contain', 'Tenho interesse no Thor!')
    cy.get('#bt_back').should('contain', 'Voltar e visualizar outros pets')

  })
})