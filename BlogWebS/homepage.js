const darkmode = document.getElementById('darkmode')
const body = document.getElementById('body')
const signBtn = document.getElementById('signBtn')
const container = document.getElementById('container')
const firstContainer = document.getElementById('firstContainer')
const limitBtn = document.getElementById('limitBtn')
const searchBLg = document.getElementById('searchBLg')
const categorySele = document.getElementById('categorySele')
const footer = document.getElementById('footer')

//================Dark Mode=========================
const setBtnColor =()=>{
    const currentMode = localStorage.getItem("darkmode")

    if(currentMode==="light"){
        footer.classList.add("bg-zinc-200")
        footer.classList.remove("bg-black")

        signBtn.classList.remove("bg-black",'border-white','border-[2px]')
        signBtn.classList.add("bg-white",'border','border-[2px]')

        signBtn.classList.remove("text-white")
        signBtn.classList.add("text-black")
    }else{
        footer.classList.remove("bg-zinc-200")
        footer.classList.add("bg-black")

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



//=======Blog list===============================

const categoryes =['lifestyle', 'technology', 'travel', 'business', 'economy', 'sports']

let selectedCategory = ''
let searchB = ''

searchBLg.addEventListener('input',(e)=>{
    selectedCategory = ''
    searchB = e.target.value
    blogDetailsAll()
})

//https://ilkinibadov.com/api/b/blogs

categoryes.forEach(category=>{
    const p = document.createElement('p')
    p.innerText = category

    p.addEventListener('click',()=>{
        selectedCategory = category
        searchB = ''
        blogDetailsAll()
    })
    p.classList.add('text-zinc-500','mb-3','text-[18px]','cursor-pointer')
    categorySele.append(p)
})


limit=4

limitBtn.addEventListener('click',()=>{
    limit +=6
    blogDetailsAll()
})

let url=``

const blogDetailsAll = async ()=>{
    
    

    if(searchB.trim().length >= 3){
        url = `https://ilkinibadov.com/api/b/blogs?search=${searchB}`
    }else if(selectedCategory){
        url = `https://ilkinibadov.com/api/b/blogs?category=${selectedCategory}`
    }else if(!selectedCategory && !searchB){
        url = `https://ilkinibadov.com/api/b/blogs?limit=${limit}`
    }

    try {
        const res = await fetch(url)

        if(res.ok){
            const data = await  res.json()
            console.log(data)
            renderItemsBigImg(data.blogs[0])
            renderItemsBlog(data.blogs.slice(1))

            if(data.totalItems === limit){
                limitBtn.classList.add('hidden')
            }

            if(searchB.length > 3){
                renderData = data.blogs
            }
        }
        

    } catch (error) {
        console.error(error)
    }
}

blogDetailsAll()

const renderItemsBigImg = (blog)=>{
    firstContainer.innerHTML = ''

    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const h2 = document.createElement('h2')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const a = document.createElement('a')
    const h4 = document.createElement('h4')
    const set = document.createElement('div')
    const date = document.createElement('h5')
    const user = document.createElement('a')
            

    h3.innerText = blog.category
    h2.innerText = blog.title
    p.innerText = blog.description
    h4.innerText = blog.user.email
    date.innerText = `Update: ${blog.updatedAt}`

    h4.classList.add('font-semibold','text-white','pb-2','text-[18px]','bg-zinc-300','text-center','text-[20px]')

    set.classList.add('font-semibold','text-white','pb-2', 'text-[18px]','bg-zinc-300','p-3')

    img.src = blog.image
    img.classList.add('h-[450px]','w-full','object-none')
    div.classList.add('relative','w-full',)
    
    h3.classList.add('absolute','bottom-59','left-40','text-blue-400','py-2','font-medium','text-[23px]','bg-zinc-300','p-3','text-[25px]')

    h2.classList.add('absolute','bottom-39','left-40','font-semibold','text-lg','pb-2','text-white','bg-zinc-300','p-3','text-[25px]')

    p.classList.add('absolute','bottom-23','left-40','font-bold','text-[20px]','py-2','text-white')

    set.classList.add('absolute','bottom-5','left-40')

    a.classList.add('w-full', 'h-full')

    user.append(h4)

    user.setAttribute('href',`http://127.0.0.1:5500/Page.html?id=${blog.user._id}`)

    set.append(user,date)

    div.append(img, h3, h2,set)
    a.append(div)

    a.setAttribute('href',`http://127.0.0.1:5500/BlogDetails.html?id=${blog._id||blog.id}`)
    firstContainer.append(a)
}

const renderItemsBlog =(blogs)=>{
    container.innerHTML = ''
    if(blogs.length){
        blogs.forEach(blog => {
            const limitWords = (text, limit = 60) => {
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

            img.src = blog.image
            h3.innerText = blog.category
            h2.innerText = blog.title
            p.innerText = limitWords(blog.description, 20)
            h4.innerText = blog.user.email
            date.innerText = `Update: ${blog.updatedAt}`

            img.classList.add('size-[300px]','object-contain','mx-auto')
            div.classList.add('border','border-zinc-200','w-[400px]','h-full','p-5','object-contain','flex','flex-col')

            h3.classList.add('text-blue-400','py-2','font-medium','text-[23px]')

            p.classList.add('font-bold','text-[20px]','py-2')

            h2.classList.add('font-semibold','text-lg','pb-2')

            h4.classList.add('font-semibold','text-zinc-400','pb-2','text-[18px]')

            set.classList.add('font-semibold','text-zinc-400','pb-2', 'text-[18px]')

            set.classList.add()
            
            user.append(h4)

            set.append(user,date)

            div.append(img)
            div.append(h3)
            div.append(h2,)
            div.append(p, set)
            a.append(div)

            a.setAttribute('href',`http://127.0.0.1:5500/BlogDetails.html?id=${blog._id||blog.id}`)

            user.setAttribute('href',`http://127.0.0.1:5500/Page.html?id=${blog.user._id}`)
            container.append(a)
        });

        
    }

}



//================================================