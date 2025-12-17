//https://ilkinibadov.com/api/v1/products/:id/details

const title = document.getElementById('title')
const stock = document.getElementById('stock')
const price = document.getElementById('price')
const description = document.getElementById('description')
const images = document.getElementById('images')
const bigImage = document.getElementById('bigImage')
const RelatedItems = document.getElementById('RelatedItems')
 
                        
const removePls = document.getElementById('removePls')
const count = document.getElementById('count')
const addPls = document.getElementById('addPls')
const addToBasket = document.getElementById('addToBasket')

let selectedImage 
let basketItemCount = 1
let itemId
let itemStock = 0

count.innerText = basketItemCount

removePls.addEventListener('click',()=>{
  if(basketItemCount > 1){
    basketItemCount -=1
    count.innerText = basketItemCount
  }
})

addPls.addEventListener('click',()=>{
  if(basketItemCount < itemStock){
    basketItemCount +=1
    count.innerText = basketItemCount
  }
})



const addItemBasket = async ()=>{
  try {
    const accessToken = localStorage.getItem('accessToken')||sessionStorage.getItem('accessToken')
    const res = await fetch("https://ilkinibadov.com/api/v1/basket/add",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${accessToken}`
      },
      body: JSON.stringify({
        productId:itemId,
        count:basketItemCount
      })
    })

     alert(res.ok ?"Item added to basket":"Error while adding item to basket")
     
  } catch (error) {
    console.error(error)
  }
}

addToBasket.addEventListener('click', addItemBasket)



const renderPage = (product) =>{
  selectedImage = product.images[0]
  title.innerText = product.title
  bigImage.setAttribute('src',selectedImage)

  product.images.map(image =>{
    const button = document.createElement('button')
    button.classList.add('w-fit','h-fit')
    button.addEventListener('click',()=>{
      selectedImage = image
      bigImage.setAttribute('src',selectedImage)
    })

    const img = document.createElement('img')
    img.setAttribute('src',image)
    img.classList.add('w-[170px]','h-[138px]','object-contain','border','border-zinc-300')
    button.append(img)
    images.append(button)
  })
  if(product.stock){
    stock.innerText ='In Stock'
    stock.classList.add('text-green-300')
  }else{
    
    stock.innerText ="Of Stock"
    stock.classList.add('text-red-400')
  }
   
  price.innerText = `${product.currency} ${product.price}`
  description.innerText = product.description
}

renderSimilarItems = (similarItems)=>{
  similarItems.map(item=>{
      const div = document.createElement('div')
      const img = document.createElement('img')
      const title = document.createElement('p')
      const price = document.createElement('p')
      const a = document.createElement('a')
      a.setAttribute('href',`http://127.0.0.1:5501/shopping.html?id=${item._id || item.id}`)

      img.setAttribute('src',item.images[0])
      title.innerText = item.title
      price.innerText = `${item.currency} ${item.price}`
      
      
      div.classList.add('border-[0px]', 'transition','delay-150','duration-300','ease-in-out','hover:-translate-y-1','hover:scale-110')
      img.classList.add('items-center','p-[35px]','size-[250px]','border','border-zinc-300','object-contain')
      price.classList.add('mt-[8px]','text-[#DB4444]')
      title.classList.add('mt-[16px]')

      div.append(img)
      div.append(title)
      div.append(price)
      a.append(div)
      RelatedItems.append(a)
  })
}

const getProductID= async (itemId)=>{
    try {
        const res = await fetch(`https://ilkinibadov.com/api/v1/products/${itemId}/details`)
        if(res.ok){
            const data = await res.json()
            
            itemStock = data.stock
            renderPage(data)
            console.log(data)
        }
    } catch (error) {
        console.error(error)
    }
}

const getSimilarProduct = async (itemId)=>{
  try {
     const res = await fetch(`https://ilkinibadov.com/api/v1/products/${itemId}/similar`)

        if(res.ok){
            const data = await res.json()
            renderSimilarItems(data)
        }
  } catch (error) {
    console.error(error)
  }
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  if (id) {
    itemId = id
    getProductID(id)
    getSimilarProduct(id)
  }
};

//<div class=" ">
 //                   <div
  //                      class="w-[270px] h-[250px] bg-zinc-200 flex justify-center items-center relative  object-scale-down group rounded-sm">
  //                      <button
   //                         class="opacity-0 transition-all delay-300 duration-300 ease-in-out group-hover:opacity-100 absolute bottom-0 w-[270px] bg-black text-white text-center py-2 text-semibold">Add
  //                          To Basket</button>
    //                    <img class="w-[172px] h-[152px]" src="img2/g92-2-500x500 1.png" alt="">
   //                 </div>
//
   //                 <h1 class="mb-[8px] mt-[16px] font-medium text-[16px]  leading-[24px]">HAVIT HV-G92 Gamepad</h1>
   //                 <p class="font-medium text-[16px]  leading-[24px]  text-[#DB4444]">$120</p>
 //              </div>