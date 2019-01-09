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

        positionSelectHeaderBlock()

      }

    const selectBlock = $('.header__selectBlock'); //  блок селект
	const classTop = 'header__selectBlock--top';
	const classBottom = 'header__selectBlock--bottom';
	const selectBlockHeight = selectBlock.height(); // высота блока селект
	
	function positionSelectHeaderBlock(){
			let blockInputSelect = document.getElementById('header__input--select').getBoundingClientRect(); // позиция input 
			let mainWrap = document.querySelector('.mainWrap').getBoundingClientRect(); // позиция ОСТАЛЬНОНОГО КОНТЕТА вверх
	
			console.log(mainWrap.top +' === '+ (blockInputSelect.bottom + selectBlockHeight))
			if(mainWrap.top < (blockInputSelect.bottom + selectBlockHeight)) {
				// блок не помещаеться
				
				selectBlock.removeClass(classBottom);
				selectBlock.addClass(classTop);
				selectBlock.css('margin-top', '-'+ selectBlockHeight +'px');
			}
			else {
				// блок помещаеться
				selectBlock.css('margin-top', '0px');
				selectBlock.removeClass(classTop);
				selectBlock.addClass(classBottom);
				
			}
	}

	positionSelectHeaderBlock()

     
});