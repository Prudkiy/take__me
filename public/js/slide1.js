$( document ).ready(function() {

function slideGo () {
    const leftSlidePx = '-300px';
    const rightSlidePx = '300px';
    const imgSlide = $('.blockCarusel1__carousel .item');

    imgSlide.each((el)=>{
        let element = $(this);
        console.log(element)
    });
    
   // imgSlide.animate({left: leftSlidePx}, 500);
    
    console.log('go')
}

slideGo () 

let intervalSliderCarusel = setInterval(()=>{
   // slideGo();
}, 1000);

});