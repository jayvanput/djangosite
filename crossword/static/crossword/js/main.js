var guess = document.querySelector("#guess");
var next = document.querySelector("#next");
var answer = document.querySelector("#answer");
var i = 0;

guess.addEventListener('change', updateValue);
next.addEventListener('click',newQuestion)
next.addEventListener('click',endList)

var clue_text = document.querySelector("#clue");
clue_text.innerHTML = lst[i].fields.question;

var clue_length = document.querySelector("#units");
clue_length.innerHTML = clueLength(4);

function clueLength(len){
    let revealer = "_ ".repeat(len);
    return revealer
}

function endList(){
    if (i == lst.length) {
        alert("You answered every clue. Congratulations!");
        next.disabled = true;
        i = lst.length()-1;
    }
}

function newQuestion(){
    i++;
    answer.textContent = "";
    guess.value = "";
    clue_length.innerHTML = lst[i].fields.answer.length;
    clue_text.innerHTML = lst[i].fields.question;
    guess.focus();
}
// TODO: add revealer button

function updateValue(e) {
    if(e.target.value.toUpperCase() == lst[i].fields.answer){
        answer.textContent = lst[i].fields.answer + " is correct!";
        answer.style.color = "green";
        try{
            next.focus();
        }
        finally{
            pass;
        }
    } else {
        answer.textContent = "incorrect";
        answer.style.color = "red";
    }
    e.target.value = "";
}