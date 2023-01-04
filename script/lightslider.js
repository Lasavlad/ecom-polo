const autoWidth = document.querySelector('#autoWidth');
const sliderItem = document.querySelectorAll('.sliderItem');
firstImg = sliderItem[0];

const arrowIcons = document.querySelectorAll('.sliderIcon');
console.log(arrowIcons[0])
let isDragStart = false, prevPageX, prevScrollLeft;



const showHideIcons = () =>{
    let scrollWidth = autoWidth.scrollWidth - autoWidth.clientWidth; // to get max scrollable width
    arrowIcons[0].style.display = autoWidth.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = autoWidth.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach((icon)=>{
    icon.addEventListener('click', ()=>{
        let firstImgWidth = firstImg.clientWidth + 32; 
        // if clicked icon is left, reduce width value form the autowidth scroll left else add to it
        autoWidth.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        console.log(autoWidth.scrollLeft);
        setTimeout(()=>showHideIcons(), 60  ); // call the showHideIcons after 60ms
    })
})

const dragStart = (e)=>{
    // UPDATING THE GLOBAL VARIABLES VALUE ON MOUSE DOWN EVENT
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = autoWidth.scrollLeft;
    console.log(e.touches[0].pageX)
}

const dragging = (e)=>{ 
    // scrolling images/ carousel to left according to the mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    autoWidth.classList.add('dragging');
    let positionDiff =(e.pageX || e.touches[0].pageX) - prevPageX;
    //console.log(`value of positionDiff: ${positionDiff}`);
    autoWidth.scrollLeft= prevScrollLeft - positionDiff;
    console.log(e.touches[0].pageX)
    showHideIcons();
}

const dragStop = ()=>{
    isDragStart = false; 
    autoWidth.classList.remove('dragging');
}
autoWidth.addEventListener('mousedown', dragStart);
autoWidth.addEventListener('touchstart', dragStart);
autoWidth.addEventListener('mousemove', dragging);
autoWidth.addEventListener('mousetouch', dragging);

autoWidth.addEventListener('mouseup', dragStop);
autoWidth.addEventListener('mouseleave', dragStop);
autoWidth.addEventListener('touchend', dragStop);