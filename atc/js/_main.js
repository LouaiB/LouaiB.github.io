///////////////////////////////////////////////////////////
///////////////////////// HEADER //////////////////////////
///////////////////////////////////////////////////////////
const navBtn = document.querySelector('#navBtn');
const navList = document.querySelector('#navList');
const headerNav = document.querySelector('#headerNav');
const headerNavOverlay = document.querySelector('#headerNavOverlay');

/**
 * Open the side navigation panel
 */
function openNav() {
    headerNav.classList.add('nav-open');
}

/**
 * Close the side navigation panel
 */
function closeNav() {
    headerNav.classList.remove('nav-open');
}

// Listen for nav btn click to open the nav
navBtn.addEventListener('click', openNav);

// Listen for nav overlay click to close the nav
headerNavOverlay.addEventListener('click', closeNav);


///////////////////////////////////////////////////////////
////////////////////// BUBBLE TREE ////////////////////////
///////////////////////////////////////////////////////////

// Bubble Lists
const bubbleLists = document.querySelectorAll('.bubble-tree__list');

// For each bubble list, get its items and lister to their trogger element's click
// When the trigger element is clicked, toggle the item (open or close) to show/hide the item content
bubbleLists.forEach(bubbleList => {
    const listItems = bubbleList.querySelectorAll('.bubble-tree__item');

    listItems.forEach(item => {
        const itemTrigger = item.querySelector('.bubble-tree__item-img');
        itemTrigger.addEventListener('click', function(ev) {
            item.classList.toggle('bubble-tree__item--open');
        })
    })
})

