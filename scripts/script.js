const tabs = document.querySelectorAll('.tabheader');
const tabsParent = document.querySelector('.tabheaders');
const tabsContent = document.querySelectorAll('.tabcontent');



const hideAllTabsContent = () => {
    tabsContent.forEach(tabContent => {
        tabContent.classList.add('hide')
    })
}

const showAllTabsContent = () => {
    tabsContent.forEach(tabContent => {
        tabContent.classList.add('show')
    })
}


tabsParent.addEventListener('click', hideAllTabsContent)
tabsParent.addEventListener('click', hideAllTabsContent)