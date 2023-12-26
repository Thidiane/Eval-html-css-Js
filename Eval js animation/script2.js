"use strict";

let pseudos=document.querySelector("#pseudos")
console.log(pseudos);
    let bt= document.querySelector('#bt');

function check(e){
    e.preventdefault();
    let pseudosValue=pseudos.value;
    console.log(pseudosValue);
}
bt.addEventListener('click',check)