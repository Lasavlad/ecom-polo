(function(){
    var homeButton = document.getElementById('navLinkMenu');
    var navLinks = document.getElementById('navListLinks');
    var navVerticalLine = document.querySelectorAll('.navVerticalLine');

    homeButton.addEventListener('click', ()=>{
        console.log('i was clicked')
        homeButton.classList.toggle('active');
        navVerticalLine.forEach((btn)=>{
            btn.classList.toggle('active');
        })
        navLinks.classList.toggle('active');
    })
})();