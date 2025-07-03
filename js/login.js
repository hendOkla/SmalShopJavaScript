let username = document.querySelector('#username')
let password = document.querySelector('#password')
let logInBtn = document.querySelector('#sing_in')


let getUsername = localStorage.getItem('username')
let getPassword = localStorage.getItem('password')

logInBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value ==="" || password.value ===""){
        alert('please enter value...')

    }else{
        if(username.value.trim() === getUsername.trim() && password.value === getPassword){
            setTimeout(()=>{
                window.location = 'index.html'
            })
        }else{
            alert('Error: password or username is wrong please inter username and password again ....')

        }
    }

})
