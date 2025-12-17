import { refreshAccesToken } from "./utils.js"

const CuontainerBasketItems = document.getElementById('CuontainerBasketItems')
const clearAll = document.getElementById('clearAll')
const totalPriceLe = document.getElementById('totalPriceLe')


const productIds = []
//https://ilkinibadov.com/api/v1/basket/delete/:id
let basketTotalPrice 

const removeAllPrice = async (id)=>{
    try {
        const accessToken = localStorage.getItem('accessToken')||sessionStorage.getItem('accessToken')
        const  res = await fetch(`https://ilkinibadov.com/api/v1/basket/delete/${id}`,{
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${accessToken}`
            }
        })
    } catch (error) {
        console.error(error)
    }
}

clearAll.addEventListener("click", ()=>{
    productIds.map(id =>{
        removeAllPrice(id)
    })
    getBasketItems()
    CuontainerBasketItems.innerHTML = ''
})

const renderBasketItem = (basketItems)=>{
    basketItems.map(item=>{
        productIds.push(item.id)
        const div = document.createElement('div')
        const img = document.createElement('img')
        const title = document.createElement('h3')
        const price = document.createElement('p')

        img.setAttribute('src', item.image)
        title.innerText = `${item.title} ${item.count}`
        price.innerText = ` ${item.total}`

        div.classList.add('w-[270px]','h-[250px]','bg-zinc-200','flex','justify-center','items-center','flex-col','object-scale-down','group','rounded-sm')
        
        img.classList.add('w-[172px]')

        title.classList.add( 'mb-[8px]','mt-[16px]','font-medium','text-[16px]','leading-[24px]')

        price.classList.add('font-medium','text-[16px]','leading-[24px]','text-[#DB4444]')

        div.append(img)
        div.append(title)
        div.append(price)
        CuontainerBasketItems.append(div)
    })
}

const getBasketItems = async ()=>{
    try {
        const accessToken = localStorage.getItem('accessToken')||sessionStorage.getItem('accessToken')
        const res =  await fetch('https://ilkinibadov.com/api/v1/basket/products',{
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${accessToken}`
            }
        })

        if(res.status === 401){
            refreshAccesToken()
        }

        if(res.ok){
            const data = await res.json()
            basketTotalPrice =`${data.currency || "$"} ${data.basketTotal}`
            console.log(data)

            totalPriceLe.innerText = basketTotalPrice
            
            renderBasketItem(data.content)
        }
    } catch (error) { 
        console.error(error)
    }
}

window.onload=()=>{
    getBasketItems()
}