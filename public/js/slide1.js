

    class CaruselPs {

        constructor (divClassWrapMain, divClassWrap, marginRight = '0', classWrapBut = false) { // конкструтор

            this.index = 1;
            this.countSlide = 0;
            this.showButNav = classWrapBut;
            this.marginSlide = marginRight;
            this.wrapCaruselMain = document.querySelector(divClassWrapMain); // доступ к основной обложке карусели
            this.wrapCarusel = document.querySelector(divClassWrap); // доступ к внутреней обложке карусели
            this.elCarusel = this.wrapCarusel.querySelectorAll('.item'); // выбор елементов в обложке
            this.widthEl = this.elCarusel[1].offsetWidth; // ширина одного элемента
            if (classWrapBut) this.wrapBut = document.querySelector(classWrapBut); // обложка для кнопок, если нужно

            this.elCarusel.forEach(function(item, i, arr){ // проход по выбраным елементам в обложке
                item.style.marginRight = marginRight+'px'; // установка остпупа с права в обложке (по умолчанию 0)
            });

            this.slideLeft();
            this.readyBut();
            this.handlerButClick();
            
        }

        readyBut () { // реализация кнопок
            this.countSlide = (this.elCarusel.length) - 2;
            let htmlBut = '';
            for (let i = 1; i <= this.countSlide; i++) {
                if (i === 1 ) htmlBut += `<span class="blockCarusel1__but--act" id="blockCarusel1__slide__${i}"></span>`;
                else  htmlBut += `<span id="blockCarusel1__slide__${i}"></span>`;
            }
            this.wrapBut.innerHTML = htmlBut;
        }

        slideLeft () { // метод сдига елеметов в лево
            this.wrapCarusel.style.transform = `translateX(-${(this.index * this.widthEl)+15}px)`;
        }

        handlerButClick () { // назначим обработчик для кнопок 
            this.wrapBut.querySelectorAll('span').forEach(function(item, i, arr){ // проход по выбраным елементам в обложке
                item.addEventListener('click', handlerBut);
            });
        }

        buttonCarusel (attrId) { // метод при клике на кнопку
            let attrIdBut = attrId.substring(22);
            let size = this.widthEl;
            this.wrapCarusel.style.transition = 'transform .3s ease-in-out';
            this.wrapCarusel.style.transform = `translateX(-${(attrIdBut * size)+(attrIdBut * 15)}px)`;
            this.displayActiveBut (attrId);
        }

        displayActiveBut (attrId) { // метод для подствечивания активной кнопки
            this.wrapBut.querySelectorAll('span').forEach(function(item, i, arr){ // проход по выбраным елементам в обложке
                item.removeAttribute('class');
            });
            let el = document.getElementById(attrId);
            el.className += 'blockCarusel1__but--act';
        }

    }
   
let carusel1 = new CaruselPs('.blockCarusel1__img--wrap', '.blockCarusel1__carousel', '15', '.blockCarusel1__but'); // параметры = (класс главной обложки, класс непосдредственной обложки, отступ елемента, класс обложки для кнопок(если не нужно то false), класс активная кнопка)
function handlerBut () {
    carusel1.buttonCarusel(this.getAttribute('id'));
}


