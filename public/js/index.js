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
        box[2].setAttribute('checked', 'checked')
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

let checkBox__1 =  new CheckBox ("checkBox__1", "img/check.jpg", true); // индификатор обложки чекбокса, изображение для чекбокса, изначанльное состояние
let checkBox__2 =  new CheckBox ("checkBox__2", "img/check.jpg"); 

let radioBox__1 = new RadioBox ("radioBox__1", "img/check.jpg"); // // индификатор обложки радиобокса, изображение для радиокнопок, изначанльное состояние
let radioBox__2 = new RadioBox ("radioBox__2", "img/check.jpg");

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