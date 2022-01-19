function eyeGlass(){
    document.getElementById("computerglass").style.display="none"
    var eyeglasses= document.getElementById("glass1");
    eyeglasses.style.display="block";
    document.getElementById("eyeGlass").style.borderImage="linear-gradient(to right,rgb(218, 204, 8), red, blue, cyan) 10";
    window.onmouseover = function(event) {
    if (event.target == eyeglasses) {
        eyeglasses.style.display = "none";
    }
}
}
function compGlass(){
    document.getElementById("glass1").style.display="none"
    var computerglass= document.getElementById("computerglass");
    computerglass.style.display="block";
    document.getElementById("compglass").style.borderImage="linear-gradient(to right,rgb(218, 204, 8), red, blue, cyan) 10";
    
    window.onmouseover=function(){
        if(event.target==computerglass){
            computerglass.style.display="none";
        }
    }
}

function myAccount(){
     let account = document.getElementById("main_account");
     account.style.display="block";
     window.onclick=function(){
         if(event.target==account){
             account.style.display="none";
         }
     }
}
function loginPage(){
    let mail = document.getElementById("email").value;
    let phone = document.getElementById("password").value;
    if(mail=="" || password==""){
        alert("email and password should not empty!")
    } else{

    }
}
function open_search(){
    let S = document.getElementById("dsearch");
    if(S.style.display==="flex"){
        S.style.display = "none";
    } else{
        S.style.display= "flex";
    }   
}
function revmenu(){
    let X = document.getElementById("resmenu");
    X.style.transform="translate(100%, 0)";
    let span = document.getElementById("span");
    span.onclick=function(){
        X.style.transform="translate(-100%, 0)"
    }
}
function eye(){
    window.location.href="../collections/eyeglasses.html"
}
function com_glass(){
    window.location.href="../collections/computer_glasses.html"
}