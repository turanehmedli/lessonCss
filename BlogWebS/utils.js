export const refreshAcToken = async (callback)=>{
    try {
        const refreshToken = sessionStorage.getItem('refreshToken') || localStorage.getItem('refreshToken')

        if (!refreshToken) {
            window.location.href = "/login.html";
            return;
        }

        const res = await fetch('https://ilkinibadov.com/api/b/auth/refresh',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
             body: JSON.stringify({
                refreshToken
            })
        })

        if(res.ok){

            const data = await res.json()
            console.log(data)

            const newAccessToken =  data.accessToken || data.token

            if(newAccessToken){
                localStorage.setItem('accessToken', newAccessToken)
                sessionStorage.setItem('accessToken', newAccessToken)

                console.log('token basari ile yenilendi')
            }

            callback()

        }else{
            window.location.href = "http://127.0.0.1:5501/Login.html"
        }
        
    } catch (error) {
        console.error(error)
    }
}