function handleContactLinkHover() {
    var contactLink = document.getElementById('third-list-item');
    var contactSpan = contactLink.querySelector('span');

    contactLink.addEventListener('mouseenter', function() {
        contactSpan.style.backgroundColor = 'white';
        contactSpan.style.color = 'black';
    });

    contactLink.addEventListener('mouseleave', function() {
        contactSpan.style.backgroundColor = '';
        contactSpan.style.color = '';
    });
}

handleContactLinkHover();



window.addEventListener('scroll', function () {
    var headerDiv = document.querySelector('header div');
    var navLinks = document.querySelectorAll('header div nav ul li a');
    var spanElements = document.querySelectorAll('header div nav ul li a span');
    var headerH1 = document.querySelector('header div h1 a')

    if (window.scrollY > 550) {
        headerDiv.style.backgroundColor = 'white';
        headerH1.style.color = 'black';

        navLinks.forEach(function(link) {
            link.style.color = 'black';
        });

        spanElements.forEach(function(span) {
            span.style.backgroundColor = 'black';
            span.style.color = 'white';
        });
    } else {
        headerDiv.style.backgroundColor = '';
        headerH1.style.color = '';
        
        navLinks.forEach(function(link) {
            link.style.color = '';
        });

        spanElements.forEach(function(span) {
            span.style.backgroundColor = '';
            span.style.color = '';
        });
    }
});
