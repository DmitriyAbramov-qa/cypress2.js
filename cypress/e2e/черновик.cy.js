describe('тестирование пакемонов', function () {


    it('сайт', function () {
        cy.visit('https://pokemonbattle.me/');

        })


    it('авторизация на сайте, переход в магазин, покупка №1', function () {
        cy.get(':nth-child(2) > .shop__button').click();
        cy.wait(3000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY  ');
        cy.get('.pay-btn').should('be.visible');
        cy.get('.pay__comeback-button').click();

        })




    it('авторизация на сайте, переход в магазин, покупка №1', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
        cy.get('#password').type('9RPAFl2V14');
        cy.wait(3000);
        cy.get('.auth__button').click(); 
        cy.get('.header__btns > [href="/shop"]').click();
        cy.wait(2000);
        cy.get(':nth-child(6) > .shop__button').click();
        cy.wait(3000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY  ');
        cy.get('.pay-btn').should('be.visible');
        cy.get('.pay__comeback-button').click();


        cy.get(':nth-child(2) > .shop__button').click();
        cy.wait(3000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY  ');
        cy.get('.pay-btn').should('be.visible');
        cy.get('.pay__comeback-button').click();

       })
     

    it('авторизация на сайте, переход в магазин, покупка №1', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
        cy.get('#password').type('9RPAFl2V14');
        cy.wait(3000);
        cy.get('.auth__button').click(); 
        cy.get('.header__btns > [href="/shop"]').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .shop__button').click();
        cy.wait(3000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY  ');
        cy.get('.pay-btn').click();  
        
        cy.wait(5000);
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
        })

    it('авторизация на сайте, переход в магазин,покупка№2', function () {
            cy.visit('https://pokemonbattle.me/');
            cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
            cy.get('#password').type('9RPAFl2V14');
            cy.wait(3000);
            cy.get('.auth__button').click(); 
            cy.get('.header__btns > [href="/shop"]').click();
            cy.wait(2000);
            cy.get(':nth-child(1) > .shop__button').click();
            cy.wait(3000);
            cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
            cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
            cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
            cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY');
            cy.get('.pay-btn').click();
             
            cy.wait(5000);
            cy.get('#cardnumber').type('56456');
            cy.get('.payment__submit-button').click();
            cy.get('.payment__adv').click();

        })
     
 
  })