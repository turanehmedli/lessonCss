const userNameE = document.getElementById('userNameE')
const blogUserContact = document.getElementById('blogUserContact')


//userin bloglarini gomre=======================================

//https://ilkinibadov.com/api/b/blogs/user/:userId

const blogRenderUser = (blogs)=>{

    blogs.forEach(blog => {
        const limitWords = (text, limit = 20) => {
        return text.split(' ').slice(0, limit).join(' ') + '...'
        }
        const div = document.createElement('div')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const h2= document.createElement('h2')
        const p = document.createElement('p')
        const h4 = document.createElement('h4')
        const set = document.createElement('div')
        const date = document.createElement('h5')
        const a = document.createElement('a')
        const user = document.createElement('a')

        img.classList.add('size-[300px]','object-contain','mx-auto')
            div.classList.add('border','border-zinc-200','w-[400px]','h-full','p-5','object-contain','flex','flex-col')

            h3.classList.add('text-blue-400','py-2','font-medium','text-[23px]')

            p.classList.add('font-bold','text-[20px]','py-2')

            h2.classList.add('font-semibold','text-lg','pb-2')

            h4.classList.add('font-semibold','text-zinc-400','pb-2','text-[18px]')

            set.classList.add('font-semibold','text-zinc-400','pb-2', 'text-[18px]')
        
        img.src = blog.image
        h3.innerText = blog.category
        h2.innerText = blog.title
        p.innerText = limitWords(blog.description, 5)
        h4.innerText = blog.user.email
        date.innerText = `Update: ${blog.updatedAt}`
        userNameE.innerText = blog.user.email
        div.append(img)
        div.append(h3)
        div.append(h2)
        div.append(p, h4, date)
        a.append(div)
        a.setAttribute('href',`http://127.0.0.1:5500/BlogDetails.html?id=${blog._id||blog.id}`)
        blogUserContact.append(a)

    })
    
}

const getuserBlogId = async (itemId)=>{
    try {
        const res = await fetch(`https://ilkinibadov.com/api/b/blogs/user/${itemId}`)
        if(res.ok){
            const data = await res.json()
            console.log(data)
            blogRenderUser(data)
        }
    } catch (error) {
       console.error(error) 
    }
}




window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if(id){
    
    getuserBlogId(id)
  }
}

//userin bloglarini gomre=======================================