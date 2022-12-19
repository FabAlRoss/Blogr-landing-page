const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburgerMenu');

const hamburgerOne = document.getElementById('hamburgerOne');
const hamburgerTwo = document.getElementById('hamburgerTwo');
const hamburgerThree = document.getElementById('hamburgerThree');

const productBtn = document.getElementById('productBtn');
const productMenu = document.getElementById('productMenu');

const companyBtn = document.getElementById('companyBtn');
const companyMenu = document.getElementById('companyMenu');

const connectBtn = document.getElementById('connectBtn');
const connectMenu = document.getElementById('connectMenu');

const productBtnMobile = document.getElementById('productBtnMobile');
const productMenuMobile = document.getElementById('productMenuMobile');

const companyBtnMobile  = document.getElementById('companyBtnMobile');
const companyMenuMobile = document.getElementById('companyMenuMobile');

const connectBtnMobile  = document.getElementById('connectBtnMobile');
const connectMenuMobile = document.getElementById('connectMenuMobile');


function toggleMenu(button, menu, mobile, hamburger) {
    if (hamburger && (hamburgerMenu.classList.contains('justify-center') || 
        (hamburgerMenu.classList.contains('justify-between') && 
        (productMenuMobile.classList.contains('flex') || companyMenuMobile.classList.contains('flex') || connectMenuMobile.classList.contains('flex'))
        ))) {
        hamburgerMenu.classList.toggle('justify-center')
        hamburgerMenu.classList.toggle('justify-between')
    }

    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')

    for (let i=0; i<menu.children.length; i++) {
        menu.children[i].classList.toggle(`openDropDownD${i+1}`)
    }

    if (mobile) {
        menu.classList.toggle('openMobile')
        button.classList.toggle('shadow-md')
    }

    // if (!mobile) {
    //     if (button.children[0].classList.contains('rotate180')) button.children[0].classList.toggle('rotateBack')
    //     button.children[0].classList.toggle('rotate180')
    // }

    if (button.children[0].classList.contains('rotate180')) button.children[0].classList.toggle('rotateBack')
    button.children[0].classList.toggle('rotate180')
}

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('animate-spinOnce')

    if (hamburgerOne.classList.contains('animate-upperOpen') || hamburgerOne.classList.contains('animate-upperClose')) hamburgerOne.classList.toggle('animate-upperClose')
    if (hamburgerTwo.classList.contains('opacity-0') || hamburgerTwo.classList.contains('transition-opacity')) {
        hamburgerTwo.classList.toggle('transition-opacity')
        hamburgerTwo.classList.toggle('delay-300')
    }
    if (hamburgerThree.classList.contains('animate-lowerOpen') || hamburgerThree.classList.contains('animate-lowerClose')) hamburgerThree.classList.toggle('animate-lowerClose')

    hamburgerOne.classList.toggle('animate-upperOpen')
    hamburgerTwo.classList.toggle('opacity-0')
    hamburgerThree.classList.toggle('animate-lowerOpen')
    
    hamburgerMenu.classList.toggle('hidden')
    hamburgerMenu.classList.toggle('flex')
    hamburgerMenu.classList.toggle('openMobile')

    if (productMenuMobile.classList.contains('flex')) toggleMenu(productBtnMobile, productMenuMobile, true, true)
    if (companyMenuMobile.classList.contains('flex')) toggleMenu(companyBtnMobile, companyMenuMobile, true, true)
    if (connectMenuMobile.classList.contains('flex')) toggleMenu(connectBtnMobile, connectMenuMobile, true, true)
})

productBtnMobile.addEventListener('click',() => {
    if (companyMenuMobile.classList.contains('flex')) toggleMenu(companyBtnMobile, companyMenuMobile, true, false)
    if (connectMenuMobile.classList.contains('flex')) toggleMenu(connectBtnMobile, connectMenuMobile, true, false)

    toggleMenu(productBtnMobile, productMenuMobile, true, true)
})

companyBtnMobile.addEventListener('click',() => {
    if (productMenuMobile.classList.contains('flex')) toggleMenu(productBtnMobile, productMenuMobile, true, false)
    if (connectMenuMobile.classList.contains('flex')) toggleMenu(connectBtnMobile, connectMenuMobile, true, false)

    toggleMenu(companyBtnMobile, companyMenuMobile, true, true)
})

connectBtnMobile.addEventListener('click',() => {  
    if (productMenuMobile.classList.contains('flex')) toggleMenu(productBtnMobile, productMenuMobile, true, false)
    if (companyMenuMobile.classList.contains('flex')) toggleMenu(companyBtnMobile, companyMenuMobile, true, false)

    toggleMenu(connectBtnMobile, connectMenuMobile, true, true)
})

productBtn.addEventListener('click',() => {
    toggleMenu(productBtn, productMenu, false, false)

    if (companyMenu.classList.contains('flex')) toggleMenu(companyBtn, companyMenu, false, false)
    if (connectMenu.classList.contains('flex')) toggleMenu(connectBtn, connectMenu, false, false)
})

companyBtn.addEventListener('click',() => {
    toggleMenu(companyBtn, companyMenu, false, false)

    if (productMenu.classList.contains('flex')) toggleMenu(productBtn, productMenu, false, false)
    if (connectMenu.classList.contains('flex')) toggleMenu(connectBtn, connectMenu, false, false)
})

connectBtn.addEventListener('click',() => {
    toggleMenu(connectBtn, connectMenu, false, false)

    if (companyMenu.classList.contains('flex')) toggleMenu(companyBtn, companyMenu, false, false)
    if (productMenu.classList.contains('flex')) toggleMenu(productBtn, productMenu, false, false)
})

document.addEventListener('click',(evt) => {
    if (companyMenu.classList.contains('flex') && companyBtn != evt.target && companyMenu != evt.target) toggleMenu(companyBtn, companyMenu, false, false)
    if (productMenu.classList.contains('flex') && productBtn != evt.target && productMenu != evt.target) toggleMenu(productBtn, productMenu, false, false)
    if (connectMenu.classList.contains('flex') && connectBtn != evt.target && connectMenu != evt.target) toggleMenu(connectBtn, connectMenu, false, false)
})