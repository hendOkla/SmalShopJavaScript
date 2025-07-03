let userInfo = document.querySelector("#user_info")
let userData = document.querySelector('#user')
let links = document.querySelector("#link") 

if(localStorage.getItem("username")){
    links.remove();
    userInfo.style.display ="flex"
    userData.innerHTML = localStorage.getItem("username")
}

let logoutBtn = document.querySelector('#logout')

logoutBtn.addEventListener('click', function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location ="login.html"
    },1500)
})