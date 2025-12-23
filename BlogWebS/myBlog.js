import { refreshAcToken } from "./utils.js"

const myBlogContent = document.getElementById('myBlogContent')
const blgsss = document.getElementById('blogsss')
const userNameE = document.getElementById('userNameE')



const getMyBlogs = async ()=>{
    const accessToken = localStorage.getItem('accessToken')|| sessionStorage.getItem('accessToken')

    if (!accessToken) {
        window.location.href = "http://127.0.0.1:5500/login.html";
        return;
    }

    try {
        const res = await fetch(`https://ilkinibadov.com/api/b/blogs/user/me`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
        })

        if(res.status === 401){
            await refreshAcToken(getMyBlogs)
            return
        }
        

        if(res.ok){
            const data = await res.json()
            renderItemsMyBlog(data)
            console.log(data)
        }
    } catch (error) {
        console.error(error)
    }
}

window.addEventListener('DOMContentLoaded', getMyBlogs)

function renderItemsMyBlog(blogs){
    myBlogContent.innerHTML = ''

    if (!blogs || blogs.length === 0) {
        blgsss.innerText = 'Henüz Bir Blogunuz Yok';
        return; 
    }

    blogs.forEach(blog => {
        const limitWords = (text, limit = 60) => {
            return text.split(' ').slice(0, limit).join(' ') + '...'
        }

        
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const h4 = document.createElement('h4')
        const date = document.createElement('h5')
        const user = document.createElement('a')
        const set = document.createElement('div') 

        userNameE.innerText = blog.user.email
        
        img.src = blog.image
        h3.innerText = blog.category
        h2.innerText = blog.title
        p.innerText = limitWords(blog.description, 20)
        h4.innerText = blog.user.email
        date.innerText = `Update: ${blog.updatedAt}`
        
        
        img.classList.add('size-[300px]', 'object-contain', 'mx-auto')
        div.classList.add('border', 'border-zinc-200', 'w-[400px]', 'h-full', 'p-5', 'flex', 'flex-col')
        h3.classList.add('text-blue-400', 'py-2', 'font-medium', 'text-[23px]')
        p.classList.add('font-bold', 'text-[20px]', 'py-2')
        h2.classList.add('font-semibold', 'text-lg', 'pb-2')
        h4.classList.add('font-semibold', 'text-zinc-400', 'pb-2', 'text-[18px]')
        set.classList.add('font-semibold', 'text-zinc-400', 'pb-2', 'text-[18px]', 'mt-auto')

        
        user.append(h4)
        set.append(user, date)
        
        div.append(img, h3, h2, p, set, blgsss)
        myBlogContent.append(div)
    })
}
