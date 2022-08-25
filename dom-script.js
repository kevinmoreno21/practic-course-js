let p = document.querySelectorAll('p');
let h1 = document.querySelector('p');
let parrafito = document.querySelector('.parrafito');
let pid = document.getElementById('pid');
let input = document.querySelector('input');

console.log({
    p,
    h1,
    parrafito,
    pid,
    input
});

input.onchange = function (e) {
    console.log('cambio', e)
}