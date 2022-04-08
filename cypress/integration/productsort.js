/// <reference types="cypress"/>
import productlistPages from "./pages/productlistPages";

const productlistpage = new productlistPages();

it('Sort Product Price From High to Low', () => {

    productlistpage.navigatetoHomePage()
    productlistpage.clickHamburgerMenu()
    productlistpage.selectDeviceCategory()
    productlistpage.selectTV()
    productlistpage.selectSamsungBrand()
    productlistpage.clickOnSortBy()
    productlistpage.sortByPriceHightoLow()
    productlistpage.chooseSecondHighest()
})