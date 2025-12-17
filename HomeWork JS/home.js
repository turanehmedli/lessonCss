import { refreshAccesToken } from "./utils.js"

const vievbtn = document.getElementById('vievbtn')
const container = document.getElementById('container')
const darkMode = document.getElementById('darkMode')
const body = document.getElementById('body')
const UpBtn = document.getElementById('UpBtn')
const categorieCont = document.getElementById('categorieCont')
const SearchInpt = document.getElementById('SearchInpt')
const h2Product = document.getElementById('h2Product')



//Dark Mode, Light Mode ======================================================================

UpBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

const setButton=()=>{
    const currencyMode = localStorage.getItem("darkmode")

    if(currencyMode === "light"){
        darkMode.classList.add("bg-black","text-white")
        darkMode.classList.remove("bg-white","text-black")
        darkMode.innerText ="Dark Mode"
    }else{
        darkMode.classList.remove("bg-black","text-white")
        darkMode.classList.add("bg-white","text-black")
        darkMode.innerText ="Light Mode"  
    }

    
}

const setBody=()=>{
    const currentMode = localStorage.getItem("darkmode")

    if(currentMode ==="light"){
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

    setButton()
}

setBody()

darkMode.addEventListener('click',()=>{

    const darkmode = localStorage.getItem("darkmode")
    localStorage.setItem("darkmode", darkmode==="light"?"dark":"light")
    const currentMode = localStorage.getItem("darkmode")
    setBody()
    
})

// Access Token =========================================================
async function getUserInfo(){
    try {
        const accessToken =
            sessionStorage.getItem("accessToken") ||
            localStorage.getItem("accessToken")

        const res = await fetch("https://ilkinibadov.com/api/v1/auth/me", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })

        if(res.status === 401){
            refreshAccesToken(getUserInfo)
            
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
        window.location.href = "http://127.0.0.1:5501/Login.html"
    }
}

protactPage()

// Access Token =========================================================



const categories = ['electronics', 'clothing', 'books', 'furniture', 'toys', 'groceries', 'beauty', 'sports', 'automotive', 'other']

let selectedCategory = ''
let searchTh = ''

SearchInpt.addEventListener('input', (e) => {
    selectedCategory = ''
    searchTh = e.target.value
    getAllProduct()
})

categories.forEach(category =>{
    const button = document.createElement('div')
    button.innerText = category
    button.classList.add('border','border-[3px]','p-5','rounded-lg','font-bold','hover:bg-zinc-300','transition-all','duraction-300','cursor-pointer','text-lg','focus:outline-2','focus:outline-offset-2','focus:outline-violet-500')

    button.addEventListener('click',()=>{
        const allButton = categorieCont.querySelectorAll('div')
        allButton.forEach(btn=>{
            btn.classList.remove('border-red-500')
            btn.classList.add('border-black')
        })
        
        h2Product.innerText = category.charAt(0).toUpperCase() +category.slice(1)

        button.classList.add('border-red-500')
        button.classList.remove('border-black')

        selectedCategory = category
        searchTh = ''
        getAllProduct()
        
    })
    categorieCont.append(button)
})

let limit = 8

vievbtn.addEventListener('click',()=>{
    limit +=8
    getAllProduct()
})


const getAllProduct = async ()=>{
    try{

        let url = ''
        
        if (searchTh.length > 3) {
    url = `https://ilkinibadov.com/api/v1/search?searchterm=${searchTh}`
    h2Product.innerText = `Search: "${searchTh}"`
}
        else if (selectedCategory) {
            url = `https://ilkinibadov.com/api/v1/products/category/${selectedCategory}`
        } 
        else if(!selectedCategory && !searchTh) {
            url = `https://ilkinibadov.com/api/v1/products?limit=${limit}`
        }

        const res = await fetch(url)

        if(res.status===404){
            container.innerHTML =""
             const h2 = document.createElement('h2')
        h2.innerText = "NO product found"
        container.append(h2)
        }
        if(res.ok){
            const data = await res.json()
        
        console.log(data)
        let renderData = data.products
        if(data.totalProducts === limit){
            vievbtn.classList.add('hidden')
        }
        
        if(selectedCategory){
            renderData = data
        }

        if(searchTh.length > 3){
            renderData = data.content
        }
        renderItem(renderData)
        }
    }catch(error){
        console.error(error)
    }
}

getAllProduct()

const renderItem =(products)=>{
    container.innerHTML =""
    if(products.length){
        console.log(1)
        products.forEach(product=>{
        const div = document.createElement('div')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')
        const a =document.createElement('a')

        img.src = product.image || product.images?.[0]
        h3.innerText = product.title
        p.innerText = product.description 
            || product.shortDescription 
        || product.title
        span.innerHTML = `${product.currency} ${product.price}`
        div.append(img)
        div.append(h3)
        div.append(p)
        div.append(span)
        a.append(div)
        container.append(a)
        img.classList.add('size-[200px]','object-contain')
        h3.classList.add('font-bold','text-md')
        p.classList.add('text-xs','my-2')
        span.classList.add('text-red-500')
        div.classList.add('w-full','h-full','border','border-zinc-300','p-3','rounded-md')
        a.classList.add('w-full','h-full')
        a.setAttribute('href',`http://127.0.0.1:5501/shopping.html?id=${product._id || product.id}`)
        })
    
    }
    
}


