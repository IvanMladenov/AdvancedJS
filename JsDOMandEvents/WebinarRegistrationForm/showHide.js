var box = document.getElementById('check-box');
box.addEventListener('click', checked);


function checked(){
    var formToShow = document.getElementById('bottom-form');
    if (box.checked){
        formToShow.style.display = 'block';
    }else {
        formToShow.style.display = 'none';
    }
}
