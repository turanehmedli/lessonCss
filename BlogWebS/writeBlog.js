import { refreshAcToken } from "./utils.js"

const title = document.getElementById('title')
const ImageFl = document.getElementById('ImageFl')
const AddBio = document.getElementById('AddBio')
const categoryIn = document.getElementById('categoryIn')
const sendBio = document.getElementById('sendBio')

let userBio={}

title.addEventListener('input',(e)=>{
    userBio={
        ...userBio,
        title: e.target.value
    }
})

categoryIn.addEventListener('input',(e)=>{
    userBio={
        ...userBio,
        category: e.target.value
    }
})

ImageFl.addEventListener('input',(e)=>{
    userBio={
        ...userBio,
        image: e.target.value
    }
})

AddBio.addEventListener('input',(e)=>{
    userBio={
        ...userBio,
        description: e.target.value
    }
})

const userBioEnter = async () => {
    

    const userBioData = {
        title: title.value.trim(),
        description: AddBio.value.trim(),
        category: categoryIn.value.trim(),
        image: ImageFl.value.trim()
    }

    if (!userBioData.title || !userBioData.description || !userBioData.category || !userBioData.image) {
    alert("Please fill all fields including image URL")
    return
    }

    

    console.log(userBioData)

    const accessToken = sessionStorage.getItem('accessToken')|| localStorage.getItem('accessToken')

    try {
        const res = await fetch(`https://ilkinibadov.com/api/b/blogs`,{
            method:'POST',
            body: JSON.stringify(userBioData),
            headers:{
                'Content-Type':"application/json",
                'Authorization':`Bearer ${accessToken}`
            },
        })

        if(res.status === 401){
            refreshAcToken(userBioEnter)
        }

        if(res.ok){
            const data = await res.json()
            console.log(data)
        }
    } catch (error) {
        console.error(error)
    }
    
}

sendBio.addEventListener('click', userBioEnter)


//=========================================access Refresh======

const getUserInfo = async()=>{

    const accessToken = sessionStorage.getItem('accessToken')|| localStorage.getItem('accessToken')

    try {
        const res = await fetch('https://ilkinibadov.com/api/b/blogs/user/me',{
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
        })

        if(res.status === 401){
            await refreshAcToken(getUserInfo)
        }
        

        if(res.ok){
            const data = await res.json()
            console.log(data)
        }
    } catch (error) {
        console.error(error)
    }
}

getUserInfo()

const protactPage = () => {
    const refreshToken =
        sessionStorage.getItem("refreshToken") ||
        localStorage.getItem("refreshToken")

    if (!refreshToken) {
        window.location.href = "http://127.0.0.1:5500/login.html"
    }
}

protactPage()
//================================================================

