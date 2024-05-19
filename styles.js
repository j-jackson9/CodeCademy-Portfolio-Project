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
    homeLink.addEventListener('mouseover', changeHomeColor);
    homeLink.addEventListener('mouseout', resetHomeColor);

    /* Contact link */
    function changeContactColor() {
        contactLink.style.color = 'red';
    }
    function resetContactColor() {
        contactLink.style.color = 'white';
    }
    contactLink.addEventListener('mouseover', changeContactColor);
    contactLink.addEventListener('mouseout', resetContactColor);

});