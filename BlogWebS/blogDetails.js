const blogDetailsRd = document.getElementById('blogDetailsRd')

const blogRenderUser =  (blog)=>{
    blogDetailsRd.innerHTML = ''

    const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const h2 = document.createElement('h2')
        const user = document.createElement('a')
        const date = document.createElement('h4')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const set = document.createElement('div')

        h3.innerText = blog.category
        h2.innerText = blog.title
        user.innerText = blog.user.email
        date.innerText = blog.updatedAt
        img.setAttribute('src', blog.image)
        p.innerText = blog.description

        h3.classList.add('text-[28px]','text-blue-500','my-5')

        h2.classList.add('text-[33px]','font-semibold','mb-3')

        set.classList.add('flex','gap-5','text-[18px]','font-bold','mb-3')

        p.classList.add('mt-5','font-semibold','text-[24px]')

        div.classList.add('w-[800px]','mt-[80px]',)

        user.setAttribute('href',`http://127.0.0.1:5500/Page.html?id=${blog.user._id}`)
        
        set.append(user, date)
        div.append(h3, h2, set, img, p)
        blogDetailsRd.append(div)
}

const getuserBlogId = async (itemId)=>{
    try {
        const res = await fetch(`https://ilkinibadov.com/api/b/blogs/blog/${itemId}`)
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

