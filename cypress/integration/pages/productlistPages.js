export default class productlistPages{
    
    hamburgerIcon = '.hm-icon'
    deviceCategories = '.hmenu-visible > :nth-child(16) > .hmenu-item'
    tvSelection = 'ul.hmenu:nth-child(9) > li:nth-child(3) > a'
    samsungBrand = 'div.a-section:nth-child(17) > ul:nth-child(2) > li:nth-child(2) > span:nth-child(1) > a:nth-child(1) > span'
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
        cy.wait(5000)
        cy.get(this.deviceCategories).click({ force: true})
    }

    selectTV(){
        cy.wait(5000)
        cy.get(this.tvSelection).click({ force: true})
    }

    selectSamsungBrand(){
        cy.get(this.samsungBrand).click({ force: true})
    }

    clickOnSortBy(){
        cy.get(this.sortBy).click({ force: true})
    }
    sortByPriceHightoLow(){
        cy.get(this.sortByHighToLowPrice).click({ force: true})
    }

    chooseSecondHighest(){
        cy.get(this.secondHighestPrice).invoke('removeAttr', 'target').click({ force: true})
        cy.get(this.aboutTheItem).invoke('text').then(cy.log)

    }

}