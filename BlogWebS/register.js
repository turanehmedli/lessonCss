const naminput = document.getElementById('naminput')
const surnamInput = document.getElementById('surnamInput')
const emailInpt = document.getElementById('emailInpt')
const passInput = document.getElementById('passInput')
const loginBtn = document.getElementById('loginBtn')
const darkmode = document.getElementById('darkmode')
const body = document.getElementById('body')
const signBtn = document.getElementById('signBtn')

//https://ilkinibadov.com/api/b/auth/register



let userdata ={}

naminput.addEventListener('input',(e)=>{
    userdata={
        ...userdata,
        firstname: e.target.value
    }
    
})

surnamInput.addEventListener('input',(e)=>{
    userdata={
        ...userdata,
        lastname: e.target.value
    }
    
})

emailInpt.addEventListener('input',(e)=>{
    userdata={
        ...userdata,
        email: e.target.value
    }
    
})

passInput.addEventListener('input',(e)=>{
    userdata={
        ...userdata,
        password: e.target.value
    }
    
})

const registerUser = async (e)=>{

    try {
        const res = await fetch(`https://ilkinibadov.com/api/b/auth/register`,{
            method: 'POST',
            body: JSON.stringify(userdata),
            headers:{
                'Content-Type': 'application/json'
            },
            


        })

        if(res.ok){
            const data = await res.json()
            console.log(data)

            
            sessionStorage.setItem("accessToken", data.accessToken)
            sessionStorage.setItem('refreshToken', data.refreshToken)

            window.open("http://127.0.0.1:5500/homepage.html","_blank")
        }
    } catch (error) {
        console.error(error)
    }
   

    console.log(userdata)
}

loginBtn.addEventListener('click', registerUser)

//========================DarkMode===========================

const setBtnColor =()=>{
    const currentMode = localStorage.getItem("darkmode")

    if(currentMode==="light"){
        signBtn.classList.remove("bg-black",'border-white','border-[2px]')
        signBtn.classList.add("bg-white",'border','border-[2px]')

        signBtn.classList.remove("text-white")
        signBtn.classList.add("text-black")
    }else{
        signBtn.classList.add("bg-black")
        signBtn.classList.remove("bg-white")

        signBtn.classList.remove("text-black")
        signBtn.classList.add("text-white")
    }
}

const setBody=()=>{
    const currentMode = localStorage.getItem("darkmode")

    if(currentMode==="light"){
        body.classList.remove("bg-black")
        body.classList.add("bg-white")

        body.classList.remove("text-white")
        body.classList.add("text-black")
    }else{
        body.classList.add("bg-black")
        body.classList.remove("bg-white")

        body.classList.remove("text-black")
        body.classList.add("text-white")
    }

    setBtnColor()
}

darkmode.addEventListener('click',()=>{
    const darkmode = localStorage.getItem('darkmode')
    localStorage.setItem("darkmode", darkmode==='light'?"dark":"light")
    const currentMode = localStorage.getItem("darkmode")
    setBody()
})

