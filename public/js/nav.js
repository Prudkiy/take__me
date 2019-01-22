$( document ).ready(function() {

    const nav = $('.nav');
	const tableWidth = 1268 // также данная ширина указана в стилях, media.scss строка 3
    

    window.onscroll = () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled === 0 && (window.innerWidth > tableWidth)) {
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
	let flagInputSelectHeader = 'show'; // флаг / закрытый/ открытй блок селекта
	
	function positionSelectHeaderBlock(){
			let blockInputSelect = document.getElementById('header__input--select').getBoundingClientRect(); // позиция input 
			let mainWrap = document.querySelector('.mainWrap').getBoundingClientRect(); // позиция ОСТАЛЬНОНОГО КОНТЕТА вверх

			

			if(mainWrap.top < (blockInputSelect.bottom + selectBlockHeight)) {
				// блок не помещаеться
				
				selectBlock.removeClass(classBottom);
				selectBlock.addClass(classTop);
				selectBlock.css('margin-top', '-'+ (selectBlockHeight + 5) +'px');
			}
			else {
				// блок помещаеться
				selectBlock.css('margin-top', '5px');
				selectBlock.removeClass(classTop);
				selectBlock.addClass(classBottom);
				
			}
	}

	
	function hideShow () { // 
		flagInputSelectHeader === 'hide' ? flagInputSelectHeader = 'show' : flagInputSelectHeader = 'hide';

		$('#header__selectBlock span').click(function(event){
			let thisClick = $(this);
			$('#header__input--select input').val(thisClick.html()).css('color', '#7D7D7D');
		})

	if (flagInputSelectHeader === 'show') {
		selectBlock.css('display', 'flex');
		positionSelectHeaderBlock();
	}

	else if (flagInputSelectHeader === 'hide') {
		selectBlock.css('display', 'none');
	}

	}

	positionSelectHeaderBlock();
	hideShow();
	$('#header__input--select').click(hideShow.bind(this));
	if(window.innerWidth < tableWidth) {
		nav.removeClass("animationNavUp");
        nav.addClass("animationNavDown");
	}

     
});