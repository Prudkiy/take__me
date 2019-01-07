$( document ).ready(function() {

    const nav = $('.nav');

    

    window.onscroll = () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled === 0) {
            nav.removeClass("animationNavDown");
            nav.addClass("animationNavUp");
        }
        else {
            nav.removeClass("animationNavUp");
            nav.addClass("animationNavDown");
        }
      }
     
});