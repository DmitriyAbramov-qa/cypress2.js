describe('тестирование пакемонов', function () {


    it('сайт', function () {
        cy.visit('https://pokemonbattle.me/');
        })

    it('содержание страницы авторизации', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get('.auth__title').contains('Битва покемонов');
        cy.get('p.auth__text').should('be.visible');
        cy.get('a.auth__social').should('be.visible');
        cy.get('a.auth__social > .auth__social-icon').should('be.visible');
        cy.get('#telegram-login-qa_studio_pokemon_prod_bot').should('be.visible');
        cy.get('.k_show_500').should('be.visible');
        cy.get('.k_show_500 > .auth__social-icon').should('be.visible');
        cy.get(':nth-child(1) > .auth__input').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('.auth__restore').should('be.visible');
        cy.get('.auth__button').should('be.visible');
        cy.get('.auth__form > .auth__text').should('be.visible');
        cy.get('.auth__logo').should('be.visible');
        cy.get('.auth__version').should('be.visible');
        cy.get('.login__content').should('be.visible');
        cy.get('.content').should('be.visible');
        })

    it('авторизация на сайте', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
        cy.get('#password').type('9RPAFl2V14');
        cy.get('.auth__button').click();
        cy.wait(3000); 
        cy.get('.top_menu_exit').click();
        })

    it('авторизация на сайте, неверный пароль', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
        cy.get('#password').type('9RPAFl2');
        cy.get('.auth__button').click();
        cy.get(':nth-child(2) > .auth__error').should('be.visible');
        })

    it('авторизация на сайте, невалидная почта', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('nik82388doomail.ru');
        cy.get('#password').type('9RPAFl2V14');
        cy.get('.auth__button').click();
        cy.get(':nth-child(1) > .auth__error').should('be.visible');
        })

    it('авторизация на сайте, пустые поля', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input')
        cy.get('#password')
        cy.get('.auth__button').click();
        cy.get(':nth-child(1) > .auth__error').should('be.visible');
        cy.get(':nth-child(2) > .auth__error').should('be.visible');
        })

    it('авторизация на сайте, почта длинное слово', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('яхочубытьтестировщикомсегодняисейчасвгородесанктпетербурге');
        cy.get('#password').type('9RPAFl2V14');
        cy.get('.auth__button').click();
        cy.get(':nth-child(1) > .auth__error').should('be.visible');
        })

    it('авторизация на сайте через соцсеть', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get('.k_show_500').click();
        cy.get('.gradient')

        })

    it('авторизация на сайте через телеграмм', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get('#telegram-login-qa_studio_pokemon_prod_bot').click();
        cy.visit('https://oauth.telegram.org/auth?bot_id=6122098458&origin=https%3A%2F%2Fpokemonbattle.me&embed=1&request_access=write&return_to=https%3A%2F%2Fpokemonbattle.me%2Flogin')
        })



    it('авторизация на сайте, видимость основных кнопок, переход в магазин, видимость основных кнопок', function () {
                cy.visit('https://pokemonbattle.me/');
                cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                cy.get('#password').type('9RPAFl2V14');
                cy.wait(3000);
                cy.get('.auth__button').click();
                cy.get('.header__img').should('be.visible');
                cy.get('.header__btn_active > .header__btn-img').should('be.visible');
                cy.get('.header__btn_active').should('be.visible');
                cy.get('.header__btns > [href="/trainers"]').should('be.visible');
                cy.get('[href="/trainers"] > .header__btn-img').should('be.visible');
                cy.get('.header__btns > [href="/shop"]').should('be.visible');
                cy.get('[href="/shop"] > .header__btn-img').should('be.visible');
                cy.get('.header__container > .header__id').should('be.visible');
                cy.get('.header__id-texts > :nth-child(1)').should('be.visible');
                cy.get('.header__btn-setting').should('be.visible');
                cy.get('.top_menu_exit').should('be.visible');
                cy.get('.pokemon__title').contains('Покемоны');
                cy.get('#search-input').should('be.visible');
                cy.get('.form-search__img > img').should('be.visible');
                cy.get('.pokemon__filter-btn').should('be.visible');

                cy.get('.header__btns > [href="/shop"]').click();
                cy.get('.header__img').should('be.visible');
                cy.get('.header__btns > [href="/"]').should('be.visible');
                cy.get('.header__btn_active').should('be.visible');
                cy.get('.header__container > .header__id').should('be.visible');
                cy.get('.header__btn-setting').should('be.visible');
                cy.get('.top_menu_exit').should('be.visible');
                cy.get('.pokemon__title').contains('Магазин');
                cy.get('.shop__list > :nth-child(3)').should('be.visible');
                cy.get('.footer__dok').should('be.visible');
                cy.get('.footer__file').should('be.visible');
                cy.get('.footer__dok > .footer__text').should('be.visible');
                cy.get('.footer__studio').should('be.visible');
                cy.get('.footer__logo > div').should('be.visible');
                cy.get('.footer__rules').should('be.visible');
                cy.get('.footer__rules-img').should('be.visible');
                cy.get('.footer__rules > .footer__text').should('be.visible');
                cy.get('.shop__list').should('be.visible');

               })

    it('авторизация на сайте, переход в магазин, переход по основным кнопкам', function () {
                cy.visit('https://pokemonbattle.me/');
                cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                cy.get('#password').type('9RPAFl2V14');
                cy.wait(1000);
                cy.get('.auth__button').click(); 
                cy.get('.header__btns > [href="/shop"]').click();
                cy.get('.header__btns > [href="/"]').click();
                cy.wait(1000);
                cy.get('.header__btns > [href="/trainers"]').click();
                cy.wait(1000);
                cy.get('.header__btns > [href="/shop"]').click();
                cy.wait(1000);
                cy.get('.header__container > .header__id').click();
                cy.wait(1000);
                cy.get('.header__btn-setting').click();
                cy.wait(1000);
                cy.get('.profile__back-button').click();
                cy.wait(1000);
                cy.get('.header__container > .top_menu_exit').click();

              })

    it('авторизация на сайте, переход в магазин, основные надписи', function () {
                    cy.visit('https://pokemonbattle.me/');
                    cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                    cy.get('#password').type('9RPAFl2V14');
                    cy.wait(3000);
                    cy.get('.auth__button').click(); 
                    cy.get('.header__btns > [href="/shop"]').click();
                    cy.wait(2000);
                    cy.get('.header__btns > [href="/"]').contains('Покемоны');
                    cy.get('.header__btns > [href="/trainers"]').contains('Тренеры');
                    cy.get('.header__btn_active').contains('Магазин');
                    cy.get('.pokemon__title').contains('Магазин');
                    cy.get(':nth-child(4) > .shop__button').contains('Купить')

              })

    it('авторизация на сайте, переход в магазин,покупка, карточка товара видимость кнопок и надписей', function () {
                cy.visit('https://pokemonbattle.me/');
                cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                cy.get('#password').type('9RPAFl2V14');
                cy.wait(2000);
                cy.get('.auth__button').click(); 
                cy.get('.header__btns > [href="/shop"]').click();
                cy.get(':nth-child(4) > .shop__button').click();
                cy.get('.payment__info-button-v2').click();

                cy.get('.pay__header-logoimage').should('be.visible');
                cy.get('.pay__main-header').should('be.visible');
                cy.get('.pay__main-subtitle').should('be.visible');
                cy.get('.payment__info-text-new').should('be.visible');
                cy.get('.payment__info-button-v2').should('be.visible');
                cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
                cy.get('.payment__subblock > .payment__shopname').should('be.visible');
                cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
                cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
                cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
                cy.get('.pay__pay-header-v2').should('be.visible');
                cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
                cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
                cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
                cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
                cy.get('.pay__payform-v2').should('be.visible');
                cy.get('.pay__comeback-button').should('be.visible');
                cy.get('.pay__payform-v2 > :nth-child(2) > .pay__form-label-v2').should('be.visible');
                cy.get(':nth-child(1) > .pay__form-label-v2').should('be.visible');
                cy.get('.pay-inputs-box > :nth-child(2) > .pay__form-label-v2').should('be.visible');
                cy.get('.pay__input-box-last-of > .pay__form-label-v2').should('be.visible');


                cy.get('.payment__info-button-v2').click();
                cy.get('.pay__comeback-button').click();
                cy.wait(2000);
            })

    it('авторизация на сайте, переход в магазин,покупка, нет денег', function () {
                cy.visit('https://pokemonbattle.me/');
                cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                cy.get('#password').type('9RPAFl2V14');
                cy.wait(3000);
                cy.get('.auth__button').click(); 
                cy.get('.header__btns > [href="/shop"]').click();
                cy.wait(2000);
                cy.get(':nth-child(4) > .shop__button').click();
                cy.wait(3000);
                cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
                cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
                cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('300');
                cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY');
                cy.wait(1000);
                cy.get('.pay-btn').click();
                cy.wait(5000);
                cy.get('#cardnumber').type('56456');
                cy.get('.payment__submit-button').click();
                cy.get('.payment__font-for-success').contains('При оплате произошла ошибка');
                cy.get('.payment__adv').click();
                })


     



    })
