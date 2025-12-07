export const refreshAccesToken = async (callback)=>{
    try {
        const refreshToken = sessionStorage.getItem("refreshToken")
        const res = await fetch("https://ilkinibadov.com/api/v1/auth/refresh",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                refreshToken
            })
        })

        if(res.ok){
            const data = await res.json()
            sessionStorage.setItem("accessToken",data.accessToken)
            callback()
        }
    } catch (error) {
        console.error(error)
    }
}