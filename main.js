const pw1 = document.querySelector("#PW");
const pw2 = document.querySelector("#CPW");
const errotext = document.querySelector(".erro-text");
const btn = document.querySelector("button");
const pws = document.querySelector("#shw");

/*let upper = documebt.getElementById('upper');
let lower = documebt.getElementById('lower');
let spec = documebt.getElementById('spec');
let leg = documebt.getElementById('leg');
let numb = documebt.getElementById('numb');
let pwd;



const lower = new RegExp('?=.*[a-z]');
const upper = new RegExp('?=.*[A-Z]');
const numb = new RegExp('?=.*[0-9]');
const length = new RegExp('?=.{6,}');
const special = new RegExp('?=.*[!@#\$%\^&\*]');*/



function active(){
    if(pw1.value.length >= 6){
        btn.removeAttribute("disabled","");
        btn.classList.remove("bt");
    }else{
        btn.setAttribute("disabled","");
        btn.classList.add("bt");
    }
    

}

btn.onclick= function(){
    if(pw1.value != pw2.value){
        //errotext.style.display = "block";
        errotext.textContent = "Passwords do not match";
        return false;
    }else{
       // errotext.style.display = "block";
        errotext.textContent = "Successful";
        return false;
    }
}

var flag= 0;
pws.onclick= function(){
    if(flag == 0){
            pw2.type="text";
            flag= 1;
        } else{
            pw2.type="password";
            flag= 0;
        }
    }







