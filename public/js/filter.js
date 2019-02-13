
const blockSelect = document.querySelectorAll('.select__filter__blockSelect p');

blockSelect.forEach((item)=>{
    let select = item.nextElementSibling;
    let arrEl = [item, select];
    item.addEventListener('click', clickBlockSelect.bind(null, arrEl));
    
});

function clickBlockSelect (data) {
   
    let classEl = data[1].getAttribute('class');
    let imgArrow = data[0].querySelector('span');
    let resHide = classEl.indexOf('hide');
    let resShow = classEl.indexOf('show');
    if(resHide > 0){
        data[1].setAttribute('class', 'select__filter__blockSelect__punkt show');
        imgArrow.style.transform = 'rotate(180deg)';
    }
    else if(resShow > 0){
        data[1].setAttribute('class', 'select__filter__blockSelect__punkt hide');
        imgArrow.style.transform = 'rotate(0deg)';
    }
}
