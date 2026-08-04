
/*==========================
LOTOPY ADMIN
==========================*/

const ADMIN_PASSWORD = "lotopy123";

/*--------------------------
LOGIN
--------------------------*/

function login() {

    const password = document.getElementById("password").value.trim();

    const error = document.getElementById("error");

    if(password === ADMIN_PASSWORD){

        sessionStorage.setItem("lotopyAdmin","true");

        window.location.href="dashboard.html";

    }else{

        error.innerHTML="Wrong Password";

    }

}

/* Enter Key */

const passInput=document.getElementById("password");

if(passInput){

passInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

login();

}

});

}

/*--------------------------
CHECK LOGIN
--------------------------*/

if(window.location.pathname.includes("dashboard.html")){

const login=sessionStorage.getItem("lotopyAdmin");

if(login!=="true"){

window.location.href="index.html";

}

}

/*--------------------------
LOGOUT
--------------------------*/

function logout(){

sessionStorage.removeItem("lotopyAdmin");

window.location.href="index.html";

}
