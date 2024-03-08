document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('#DataEchoUI-navbar-left a');

    function removeHighlight() {
        links.forEach(link => link.classList.remove('DataEchoUI-highlight-2'));
    }

    function highlightLinkByHash() {
        var currentHash = window.location.hash;
        if (currentHash) {
            var activeLink = document.querySelector(`#DataEchoUI-navbar-left a[href="${currentHash}"]`);
            if (activeLink) {
                removeHighlight();
                activeLink.classList.add('DataEchoUI-highlight-2');
            }
        }
    }

    highlightLinkByHash();

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            removeHighlight();
            this.classList.add('DataEchoUI-highlight-2');
        });
    });

    window.addEventListener('hashchange', highlightLinkByHash);
});

document.addEventListener("DOMContentLoaded", function() {
var links = document.querySelectorAll('#DataEchoUI-navbar-left a');
var baseDelay = 0.2;

    links.forEach(function(link, index) {
    var delay = baseDelay * index + 's';
    link.style.animationDelay = delay;
    });
});

function DataEchoUI_ui() {

    
    if (document.querySelector('.DataEchoUI-navbar')) {
        var navbarHeight = document.querySelector('.DataEchoUI-navbar').offsetHeight;
        if (document.querySelector('#DataEchoUI-navbar-left')) {
            document.querySelector('#DataEchoUI-navbar-left').style.marginTop = navbarHeight + 'px';
        }
        if (document.querySelector('#DataEchoUI-navbar-left-31')) {
            document.querySelector('#DataEchoUI-navbar-left-31').style.marginTop = navbarHeight + 'px';
        }
        
    }
    if (document.querySelector('#DataEchoUI-navbar-left')) {
        var navbarLeftWidth = document.querySelector('#DataEchoUI-navbar-left').offsetWidth;
        document.querySelector('body').style.marginLeft = (navbarLeftWidth + 20) + 'px';
    }

    /*var navbarHeight = document.querySelector('.DataEchoUI-navbar').offsetHeight;
    document.querySelector('#DataEchoUI-navbar-left').style.marginTop = navbarHeight + 'px';
    document.querySelector('#DataEchoUI-navbar-left-31').style.marginTop = navbarHeight + 'px';

    var navbarLeftWidth = document.querySelector('#DataEchoUI-navbar-left').offsetWidth;
    document.querySelector('body').style.marginLeft = (navbarLeftWidth + 20) + 'px';*/
}



window.onload = DataEchoUI_ui;
window.onresize = DataEchoUI_ui;
