const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const loginBtn = document.getElementById('loginBtn')
const rememberMe = document.getElementById('rememberMe')


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

const loginUser = async()=>{
    try{
        const res = await fetch("https://ilkinibadov.com/api/v1/auth/login",{
            method: 'POST',
            body: JSON.stringify(userData),
            headers:{
                "Content-Type": "application/json"
                
            }
            
        })
        if(res.ok){
        const data = await res.json()
        console.log(data)

            if(rememberMe.checked){
                localStorage.setItem("accessToken", data.accessToken) //Local ve session arasindaki ferq Local qalicidi browsu baglayanda silinmir session ise silinir
                localStorage.setItem("refreshToken", data.refreshToken)
            }else{
                sessionStorage.setItem("accessToken", data.accessToken) //Local ve session arasindaki ferq Local qalicidi browsu baglayanda silinmir session ise silinir
                sessionStorage.setItem("refreshToken", data.refreshToken)
            }

            
            sessionStorage.setItem("UserLogin", JSON.stringify(true))

            const userLoggIn = JSON.parse(sessionStorage.getItem("UserLogin"))
            console.log(
                sessionStorage.getItem("accessToken"),
                sessionStorage.getItem("refreshToken"),
                typeof userLoggIn
            )
         
        window.open("http://127.0.0.1:5501/home.html","_blank")
        }else{
            alert("Email or Password is incorrect")
        }
        
    }catch(error){
        console.error(error)
    }
}



loginBtn.addEventListener('click',loginUser)

