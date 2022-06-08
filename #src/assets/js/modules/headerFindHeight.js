const headerFindHeight = () => {
    const headerHeight = document.querySelector('.header').offsetHeight;

    document.documentElement.style.setProperty('--header-h', headerHeight + 'px');
}

export default headerFindHeight;