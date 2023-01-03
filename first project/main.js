const pw1 = document.querySelector("#PW");
const pw2 = document.querySelector("#CPW");
const errotext = document.querySelector(".erro-text");
const btn = document.querySelector("button");
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


