icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})

let body=document.querySelector('body');
let bt =document.querySelector("button");

let x=0;
function dark(){
    if(x==0){
        body.style.background="black";
        x=1;
    }else{
        body.style.background="white";
        x=0
    }
}
bt.addEventListener("click", dark)