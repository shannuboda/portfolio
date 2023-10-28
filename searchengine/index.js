let data = []
fetch('https://fakestoreapi.com/products/').then(res=>res.json()).then(json=>{
    data = json
    
})

document.querySelector('#searchterm').addEventListener('keyup',()=>{
    let value = document.querySelector('#searchterm').value
    let resultArray = []
    resultArray = data.filter(product => String(product.title).includes(value)) // includes returns True or False
    renderpages(resultArray)
})

function renderpages(resultArray)
{
 
    if(!(document.querySelector('#searchterm').value == ""))
    {
    resultArray.forEach(product=>{
        renderOnepage(product)
    })
    }
    else
    {
        removeElement()
    }
    
}
function removeElement()
{
    document.querySelectorAll('.card').forEach(products => {
        products.parentElement.remove()
    })
}
function renderOnepage(element)
{
        let mydiv = document.createElement('div')
        mydiv.className='card'
        let myimg = document.createElement('img')
        myimg.src = element.image
        mydiv.append(myimg)
        let mytitle = document.createElement('h4')
        mytitle.textContent = element.title
        mydiv.append(mytitle)
        let myspan = document.createElement('span')
        myspan.textContent="Price: "+element.price
        mydiv.append(myspan)
        let mybtn = document.createElement('button')
        mybtn.className='mybtn'
        mybtn.textContent="BUY NOW"
        mydiv.append(mybtn)
        document.querySelector('.cards').append(mydiv)
}