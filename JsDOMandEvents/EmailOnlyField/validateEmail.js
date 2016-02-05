var butt = document.getElementById('button');
butt.addEventListener('click', validate);

function validate(){
    debugger;
    var input = document.getElementById('input-field'),
        output = document.getElementById('output'),
        regex = /[\w]{2,}@[\w]{2,}\.[a-zA-Z]{2,5}/g,
        text = input.value,
        match;

    output.textContent = text;

    if (match = regex.exec(text)){
        output.style.backgroundColor = 'green';
    }else {
        output.style.backgroundColor = 'red';
    }
}