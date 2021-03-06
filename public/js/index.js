/* checkbox class */

class CheckBox {
    constructor (idElement, bgImg, stateBox=false) {
        this.bgImg = bgImg;
        this.elementWrap = document.getElementById(idElement);
        this.checkbox = this.elementWrap.querySelector('input');

        if (stateBox) this.changeCheck(this);

        this.elementWrap.addEventListener('click', this.changeCheck.bind(null, this));
    }

    changeCheck (box) { // метод изменения атрибута
        if (box.checkbox.getAttribute('checked') === null) {
            box.checkbox.setAttribute('checked', 'checked');
            box.elementWrap.style.backgroundImage = "url('" + box.bgImg + "')";
        }
        else {
            box.checkbox.removeAttribute('checked');
            box.elementWrap.style.backgroundImage = "none";
        }
        
    }
    
}

class RadioBox {
    constructor (idRadioBox, imgRadio) {
        
        this.elementWrap = document.getElementById(idRadioBox);
        this.radioEl = this.elementWrap.querySelectorAll('input');
        

        this.radioEl.forEach((item)=>{
            let arr = [idRadioBox, imgRadio, item];
            item.addEventListener('click', this.setActiveRadio.bind(null, arr));
        });

        this.startPosition (idRadioBox, imgRadio);

    }

    startPosition (idRadioBox, imgRadio) {
        let bgImg = imgRadio;
        let elementWrap = document.getElementById(idRadioBox);
        let radioEl = elementWrap.querySelectorAll('input');
        radioEl.forEach((item)=>{
            if(item.hasAttribute('checked')){
                let parent = item.parentNode;
                parent.style.backgroundImage = "url('" + bgImg + "')";
            }
            else {
                let parent = item.parentNode;
                parent.style.backgroundImage = "none";
            }
        });
    }

    setActiveRadio (box) {
        let bgImg = box[1];
        let elementWrap = document.getElementById(box[0]);
        let radioEl = elementWrap.querySelectorAll('input');
        radioEl.forEach((item)=>{
            item.removeAttribute('checked')
        });
        box[2].setAttribute('checked', 'checked');
        radioEl.forEach((item)=>{
            if(item.hasAttribute('checked')){
                let parent = item.parentNode;
                parent.style.backgroundImage = "url('" + bgImg + "')";
            }
            else {
                let parent = item.parentNode;
                parent.style.backgroundImage = "none";
            }
        });
    }

}

class SelectPSI { // select

    constructor (idSelect, idSelectWrap, style='normal') {
        this.state = false; // состояние селекта (false - закрыто)
        this.select = document.getElementById(idSelect); // индификтор главной
        this.mainWrap = document.getElementById(idSelectWrap); // индификатор главной обложки
        this.option = this.select.querySelectorAll('li'); // список селекта
        this.optionWrap = this.select.querySelector('ul'); // обложка списка селекта
        this.input = this.select.querySelector('input'); // выбаное в селекте
        this.heightOptionWrap = this.optionWrap.clientHeight;
        if(style === 'normal') { // стили для обычного селекта (список выбора вверх/вниз)
            this.styleHideWrap = 'selectPSI__hideOption '; // класс, скрыть список
            this.styleShowWrap = 'selectPSI__showOption '; // класс, показать список
        }

        let obj = this;

        let arr = [false, obj];
        this.input.addEventListener('click', this.stateOption.bind(null, arr)); // клик по выбраном селекта
        
        this.option.forEach(function(item){
            let arrOption = [item, obj];
            item.addEventListener('click', obj.stateOption.bind(null, arrOption)); // клик по елементу в списку выбора
        });

        this.startPosition ();

    }

    stateOption (arr) { // распределитель
        let obj = arr[1];
        let element = arr[0];
        if (obj.state === false) {
            obj.showOption(); // показать блок выбора
            obj.state = true;
        }
        else {
            obj.hideOption(); // скрыть блок выбора
            obj.state = false;
        }
        if(element) {
            obj.setValueInput(element); // установка текста и значения инпут
        }
    }

    hideOption () { // скрыть блок выбора
        this.optionWrap.setAttribute('class', `custom ${this.styleHideWrap}`); 
    }

    showOption () { // показать блок выбора
        this.optionWrap.setAttribute('class', `custom ${this.styleShowWrap}`);
    }

    setValueInput (element) { // установка текста и значения инпут
        this.input.setAttribute('value', element.innerHTML);
    }

    startPosition () {
        let heightSizeWrapOption = this.optionWrap.clientHeight; // высота блока из списком
        let heightSizeMainWrap = this.input.getBoundingClientRect(); // высота / ширина инпута
        this.select.style.height = heightSizeWrapOption + 'px'; // установка высоты обложки списка селекта
        this.mainWrap.style.height = heightSizeMainWrap.height + 'px'; // установка высоты главной обложки
        this.optionWrap.style.width = heightSizeMainWrap.width + 'px'; // установка ширини обложки списка селекта
        this.optionWrap.style.position = 'absolute';
        this.select.style.position = 'absolute'
        this.state ? this.showOption() : this.hideOption();
    }

}





let checkBox__1 =  new CheckBox ("checkBox__1", "img/check.jpg", true); // индификатор обложки чекбокса, изображение для чекбокса, изначанльное состояние
let checkBox__2 =  new CheckBox ("checkBox__2", "img/check.jpg"); 

let radioBox__1 = new RadioBox ("radioBox__1", "img/check.jpg"); // // индификатор обложки радиобокса, изображение для радиокнопок, изначанльное состояние
let radioBox__2 = new RadioBox ("radioBox__2", "img/check.jpg");

let select = new SelectPSI ("testSelect1", "testSelect1-wrap");


// изменения фона
const mainContent = document.querySelector('.mainWrap'); // обложка основного контента
const header = document.querySelector('.header');
const topSlides = document.getElementById('slides');
const headerContent = document.querySelector('.header__content');

document.onscroll = function() {
    let rect = mainContent.getBoundingClientRect();
    if (rect.top < 0) {
       // header.style.opacity = '0';
        topSlides.style.opacity = '0';
        headerContent.style.opacity = '0';
    }
    else {
      //  header.style.opacity = '1'
        topSlides.style.opacity = '1'
        headerContent.style.opacity = '1';
    }
  }

$(".polzunok-5").slider({  // range
    min: 20,
    max: 4000,
    values: [20, 4000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(document).focusout(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".polzunok-input-5-left").val(input_left); 
    $(".polzunok-input-5-right").val(input_right); 
    $(".polzunok-5").slider( "values", [ input_left, input_right ] );
});