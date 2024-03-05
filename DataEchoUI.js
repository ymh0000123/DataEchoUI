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

function adjustMarginTop() {
    var navbarHeight = document.querySelector('.DataEchoUI-navbar').offsetHeight;
    document.querySelector('#DataEchoUI-navbar-left').style.marginTop = navbarHeight + 'px';
}

function adjustMarginTop2() {
    var navbarHeight2 = document.querySelector('.DataEchoUI-navbar').offsetHeight;
    document.querySelector('#DataEchoUI-navbar-left-31').style.marginTop = navbarHeight2 + 'px';
}

window.onload = adjustMarginTop,adjustMarginTop2;
window.onresize = adjustMarginTop,adjustMarginTop2;