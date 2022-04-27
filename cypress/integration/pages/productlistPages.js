export default class productlistPages{
    
    hamburgerIcon = '.hm-icon'
    deviceCategories = '.hmenu-visible > :nth-child(16) > .hmenu-item'
    tvSelection = ':nth-child(2) > :nth-child(1) > .nav_cat_links > .nav_first > .nav_a'
    tvSelection2 = 'ul[class="hmenu hmenu-visible hmenu-translateX"] li:nth-child(3) a'
    samsungBrand = 'div.a-section:nth-child(17)'
    sortBy = '.a-dropdown-prompt'
    sortByHighToLowPrice = '#s-result-sort-select_2'
    secondHighestPrice = '.widgetId\\=search-results_2 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1) > a'
    aboutTheItem = '#feature-bullets'
    searchResult= '.s-main-slot'



    navigatetoHomePage(){
        cy.visit('https://www.amazon.in/')
    }

    clickHamburgerMenu(){
        
        cy.get(this.hamburgerIcon).click({ force: true})
        

    }

    selectDeviceCategory(){
        cy.get('.hmenu-visible > :nth-child(14) > .hmenu-item', {timeout:10000}).should('have.text', 'shop by department')
        cy.get(this.deviceCategories).click({ force: true})
        
    }

    selectTV(){

        cy.get(this.tvSelection, {timeout:40000}).should('be.visible')
        cy.get(this.tvSelection).click({ force: true})
        //cy.get('div[id="sobe_d_b_6-carousel"] h2').should('have.text', 'Latest Launches in TVs')

        //cy.get('.hmenu-visible > :nth-child(2) > .hmenu-item').then(($TVSelect)=>{
           // if(expect(this.tvSelection, {timeout:20000}).to.exist){
           //     cy.get(this.tvSelection).click({ force: true})
           // }
           // else
           // {
            //    cy.get(this.tvSelection2, {timeout:20000}).click({ force: true})

            //}
        //})
        
    }

    selectSamsungBrand(){
        cy.get(this.samsungBrand).then(function($TVBrand){
            const BrandText = $TVBrand.text()
            cy.log(BrandText)
            expect(BrandText).to.contain('Brands')
            cy.contains('Samsung').click({ force: true})
        })

    }

    clickOnSortBy(){
        cy.get(this.sortBy).click({ force: true})
    }
    sortByPriceHightoLow(){
        cy.get(this.sortByHighToLowPrice).click({ force: true})
    }

    chooseSecondHighest(){
        cy.get(this.searchResult)
        cy.get(this.secondHighestPrice).invoke('removeAttr', 'target').click({ force: true})
        cy.get(this.aboutTheItem).contains('About this item')
        cy.get(this.aboutTheItem).invoke('text').then(cy.log)

    }

}