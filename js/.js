function incrementValue(stringId){
    let string =document.getElementById(stringId).innerText;
    let number =parseInt(string);
    number++
    document.getElementById(stringId).innerText = number;
}
function decrementValue(stringId){
    let string =document.getElementById(stringId).innerText;
    let number =parseInt(string);
    number--
    document.getElementById(stringId).innerText = number;
}