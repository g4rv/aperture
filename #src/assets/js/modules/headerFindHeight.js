const headerFindHeight = () => {
    const headerHeight = document.querySelector('.header').offsetHeight;

    document.documentElement.style.setProperty('--header-h', headerHeight + 'px');
    console.log(headerHeight)
    
}

export default headerFindHeight;