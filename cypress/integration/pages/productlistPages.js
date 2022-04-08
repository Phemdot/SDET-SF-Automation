export default class productlistPages{
    
    hamburgerIcon = '.hm-icon'
    deviceCategories = ':nth-child(16) > .hmenu-item > div'
    tvSelection = ':nth-child(2) > :nth-child(1) > .nav_cat_links > .nav_first > .nav_a'
    samsungBrand = ':nth-child(17) > .a-unordered-list > :nth-child(3) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon'
    sortByHighPrice = '[id="s-result-sort-select_2"][class="a-dropdown-link"]'
    secondHighestPrice = '.widgetId\=search-results_2 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1) > span'
    aboutTheItem = 'ul.a-unordered-list:nth-child(2)'


    navigatetoHomePage(){
        cy.visit('https://www.amazon.in/')
    }

    clickHamburgerMenu(){
        
        cy.get(this.hamburgerIcon).click({ force: true})
    }

    selectDeviceCategory(){
        cy.get(this.deviceCategories).click({ force: true})
    }

    selectTV(){
        cy.wait(10000)
        cy.get(this.selectTV).click({ force: true})
    }

    selectSamsungBrand(){
        cy.get(this.samsungBrand).click({ force: true})
    }

    sortByPriceHightoLow(){
        cy.get(this.sortByHighPrice).click({ force: true})
    }

    chooseSecondHighest(){
        cy.get(this.secondHighestPrice).click({ force: true})
    }

    exportAboutThisItemText(){

    }

}