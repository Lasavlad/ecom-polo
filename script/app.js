(function(){
    var homeButton = document.getElementById('navLinkMenu');
    var navLinks = document.getElementById('navListContainer');
    var navVerticalLine = document.querySelectorAll('.navVerticalLine');
    var navLinkList = document.querySelectorAll('.navLinkItem');
    var productContainer = document.querySelectorAll('.products');
    var navSubLinks = document.querySelector('#navSubLinks');

    console.log(productContainer)
    let isDragStart = false,prevScrollLeft, prevPageX

    homeButton.addEventListener('click', ()=>{
        //console.log('i was clicked')
        homeButton.classList.toggle('active');
        navVerticalLine.forEach((btn)=>{
            btn.classList.toggle('active');
        })
        navLinks.classList.toggle('active');
    })

    navLinkList.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            if(homeButton.classList.contains('active')){
                navLinks.classList.remove('active');
                homeButton.classList.remove('active')
            }
        })
    })
    
    productContainer.forEach((product)=>{
        const dragStart = (e)=>{
            // UPDATING THE GLOBAL VARIABLES VALUE ON MOUSE DOWN EVENT
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = product.scrollLeft;
        }

        
    
        const dragging = (e)=>{ 
            if(!isDragStart) return;
            e.preventDefault();
            let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            product.scrollLeft = prevScrollLeft - positionDiff;
        }
    
        const dragStop = ()=>{
            isDragStart = false;
        }
      

        product.addEventListener('touchstart', dragStart);
        product.addEventListener('mousemove', dragging);
        product.addEventListener('touchmove', dragging)
        product.addEventListener('mouseup', dragStop);
        product.addEventListener('touchend', dragStop);
        product.addEventListener('mousedown', dragStart);
        
    })

    const subNavdragStart = (e)=>{
        // UPDATING THE GLOBAL VARIABLES VALUE ON MOUSE DOWN EVENT
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = navSubLinks.scrollLeft;
    }

    const subNavDragging = (e)=>{ 
        if(!isDragStart) return;
        e.preventDefault();
        let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        navSubLinks.scrollLeft = prevScrollLeft - positionDiff;
    }
    const subNavdragStop = ()=>{
        isDragStart = false;
    }

    navSubLinks.addEventListener('touchstart', subNavdragStart);
    navSubLinks.addEventListener('touchmove', subNavDragging)
    navSubLinks.addEventListener('touchend', subNavdragStop);
    
})();