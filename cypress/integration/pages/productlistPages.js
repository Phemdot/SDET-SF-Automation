export default class productlistPages{
    
    hamburgerIcon = '.hm-icon'
    deviceCategories = '.hmenu-visible > :nth-child(16) > .hmenu-item'
    tvSelection = 'ul.hmenu:nth-child(9) > li:nth-child(3) > a'
    //samsungBrand = 'div.a-section:nth-child(17) > ul:nth-child(2) > li:nth-child(2) > span:nth-child(1) > a:nth-child(1) > span'
    samsungBrand = 'div.a-section:nth-child(17) > ul:nth-child(2) > li:nth-child(4) > span:nth-child(1) > a:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i'
    sortBy = '.a-dropdown-prompt'
    sortByHighToLowPrice = '#s-result-sort-select_2'
    secondHighestPrice = '.widgetId\\=search-results_2 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1) > a'
    aboutTheItem = '#featurebullets_feature_div'



    navigatetoHomePage(){
        cy.visit('https://www.amazon.in/')
    }

    clickHamburgerMenu(){
        
        cy.get(this.hamburgerIcon).click({ force: true})
        

    }

    selectDeviceCategory(){
        cy.get('ul.hmenu:nth-child(1) > li:nth-child(14) > div', {timeout:10000}).should('have.text', 'shop by department')
        cy.get(this.deviceCategories).click({ force: true})
    }

    selectTV(){
        cy.get('ul.hmenu:nth-child(9) > li:nth-child(2) > div', {timeout:5000}).should('have.text', 'tv, audio & cameras')
        cy.get(this.tvSelection).click({ force: true})
        cy.get('div[id="sobe_d_b_6-carousel"] h2').should('have.text', 'Latest Launches in TVs')

    }

    selectSamsungBrand(){
        cy.get(this.samsungBrand).click({ force: true})
        cy.get('div.s-no-outline > span').should('have.text', 'RESULTS')

    }

    clickOnSortBy(){
        cy.get(this.sortBy).click({ force: true})
    }
    sortByPriceHightoLow(){
        cy.get(this.sortByHighToLowPrice).click({ force: true})
    }

    chooseSecondHighest(){
        cy.get(this.secondHighestPrice).invoke('removeAttr', 'target').click({ force: true})
        cy.get('h1.a-size-base-plus').should('have.text', 'About this item')
        cy.get(this.aboutTheItem).invoke('text').then(cy.log)

    }

}