/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3111 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3374 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-36').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3647 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type(faker.person.firstName())
        cy.get('#billing_last_name').type(faker.person.lastName())
        cy.get('#billing_address_1').type(faker.location.streetName())
        cy.get('#billing_address_2').type('Ap 43 Bloco 8')
        cy.get('#billing_city').type(faker.location.cityName())
        cy.get('#billing_postcode').type('06253-050')
        cy.get('#billing_phone').type('961-770-7727')
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#createaccount').click()
        cy.get('#account_password').type(faker.internet.password())
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()



    });
})