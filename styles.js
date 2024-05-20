document.addEventListener('DOMContentLoaded', () => {
    let homeLink = document.querySelector('.navbar .home');
    let contactLink = document.querySelector('.navbar .contact');
    /* Home link */
    function changeHomeColor() {
        homeLink.style.color = 'red';
    }
    function resetHomeColor() {
        homeLink.style.color = 'white';
    }
    function increaseHomeSize() {
        homeLink.style.fontSize = '30px';
    }
    function resetHomeSize() {
        homeLink.style.fontSize = '20px';
    }
    homeLink.addEventListener('mouseover', changeHomeColor);
    homeLink.addEventListener('mouseout', resetHomeColor);
    homeLink.addEventListener('mouseover', increaseHomeSize);
    homeLink.addEventListener('mouseout', resetHomeSize);
    

    /* Contact link */
    function changeContactColor() {
        contactLink.style.color = 'red';
    }
    function resetContactColor() {
        contactLink.style.color = 'white';
    }
    function increaseContactSize() {
        contactLink.style.fontSize = '30px';
    }
    function resetContactSize() {
        contactLink.style.fontSize = '20px';
    }
    contactLink.addEventListener('mouseover', changeContactColor);
    contactLink.addEventListener('mouseout', resetContactColor);
    contactLink.addEventListener('mouseover', increaseContactSize);
    contactLink.addEventListener('mouseout', resetContactSize);


});