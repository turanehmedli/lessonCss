//login.js


const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const registerBtn = document.getElementById('registerBtn')

const passwordTog = document.getElementById('passwordTog')
const eyeIcon = document.getElementById('eyeIcon')

passwordTog.addEventListener('click',()=>{
    let isVisible = passwordInput.getAttribute('type')==='text' ? true : false
    if(!isVisible){
        eyeIcon.setAttribute('src',"items/eye-closed.svg")
        passwordInput.setAttribute('type','text')
    }else{
        eyeIcon.setAttribute('src',"items/eye.svg")
        passwordInput.setAttribute('type','password')
    }
})

let userData = {}

emailInput.addEventListener("input", (e) => {
    userData = {
        ...userData,
        email: e.target.value
    }
    
})

passwordInput.addEventListener("input",(e)=>{
    userData = {
        ...userData,
        password: e.target.value
    }
   
})

firstName.addEventListener("input", (e) => {
    userData = {
        ...userData,
        firstName: e.target.value
    }
     
})

lastName.addEventListener("input", (e) => {
    userData = {
        ...userData,
        lastName: e.target.value
    }
     
})


const registerUser = async(e)=>{
    e.preventDefault()

    const userData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        firstname: firstName.value.trim(),
        lastname: lastName.value.trim()   
    }

    try{
        const res = await fetch("https://ilkinibadov.com/api/v1/auth/signup",{
            method: 'POST',
            body: JSON.stringify(userData),
            headers:{
                "Content-Type": "application/json"
                
            }
            
        })
        if(res.ok){
        const data = await res.json()
        console.log(data)

           
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)
        sessionStorage.setItem("accessToken", data.accessToken)
        sessionStorage.setItem("refreshToken", data.refreshToken)
          
            
           
         
        window.open("http://127.0.0.1:5501/home.html","_blank")
        }
        
    }catch(error){
        console.error(error)
    }
}



registerBtn.addEventListener('click',registerUser)

