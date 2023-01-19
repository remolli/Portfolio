const form = document.getElementsByClassName('formulario');
const campos = document.getElementsByClassName('campo');
const spans = document.getElementsByClassName('span-required');
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidade();
})

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if (campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidade(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}