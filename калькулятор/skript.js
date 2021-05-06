window.addEventListener('load', function() {
    console.log(calculator)
}

let num;
 
let out = document.getElementById('out');
 
function plus() {
 num = document.getElementById('n').value; 
 num = parseInt(num)
 
 out.innerHTML = num + num;
}
 
function minus() {
 num = document.getElementById('n').value; 
 num = parseInt(num)

 out.innerHTML = num - num;
}
 
function multiplication() {
 num = document.getElementById('n').value; 
 num = parseInt(num)

 out.innerHTML = num * num;
}
 
function division() {
 num = document.getElementById('n').value; 
 num = parseInt(num)

 out.innerHTML = num / num;
}