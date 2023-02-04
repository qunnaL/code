const pw1 = document.querySelector("#PW");
const pw2 = document.querySelector("#CPW");
const errotext = document.querySelector(".erro-text");
const btn = document.querySelector("button");
const pws = document.querySelector("#shw");
const resshow = document.querySelector("ul");
const ress = document.querySelector("res");

//长度小于6 鼠标变成禁止样式
/*function recheckpsw() {
    if(pw1.value.length >= 6){
        btn.removeAttribute("disabled","");
        btn.classList.remove("bt");
    }else{
        btn.setAttribute("disabled","");
        btn.classList.add("bt");
    }
    
}*/

btn.onclick = function(){
    if(pw1.value != pw2.value){
        errotext.textContent = "Passwords do not match";
        return false;
    }else{
        errotext.textContent = "Successful";
        return faslse;
    }
}



var a=false;
pw1.onclick=function(){
     a=!a;
     a?resshow.style.visibility="visible":resshow.style.visibility="hidden";
}



//显示密码隐藏密码
var flag= 0;
pws.onclick= function(){
    if(flag == 0){
            pw1.type="text";
            flag= 1;
        } else{
            pw1.type="password";
            flag= 0;
        }
    }

//获取验证内容的li
let uppers = document.getElementById("upper");
let lowers = document.getElementById("lower");
let specs = document.getElementById("spec");
let legs = document.getElementById("leg");
let numbs = document.getElementById("numb");
let pwd;


//正则判断
function recheckpsw(data){
    pwd = data;

    const upper = new RegExp('(?=.*[A-Z])')
    const lower = new RegExp('(?=.*[a-z])')
    const numb = new RegExp('(?=.*[0-9])')
    const length = new RegExp('(?=.{12,})')
    const special = new RegExp('(?=.*[!@#\$%\^&\*])')


    if(upper.test(data)){
        uppers.classList.add('valid')
    }else{
        uppers.classList.remove('valid')
    }

    if(lower.test(data)){
        lowers.classList.add('valid')
    }else{
        lowers.classList.remove('valid')
    }

    if(numb.test(data)){
        numbs.classList.add('valid')
    }else{
        numbs.classList.remove('valid')
    }

    if(length.test(data)){
        legs.classList.add('valid')
    }else{
        legs.classList.remove('valid')
    }

    if(special.test(data)){
        specs.classList.add('valid')
    }else{
        specs.classList.remove('valid')
    }

}





