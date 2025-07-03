let ProductsInCart = localStorage.getItem("ProductsInCart")
let allProduct = document.querySelector('.products')


if (ProductsInCart){
    let item =JSON.parse(ProductsInCart);
    drawCartProducts(item)
}


function drawCartProducts(products){
    let y = products.map((item)=>{
        return`<div class="product_item">
                <img class="product_item_img" src="${item.ImageUrl}" alt=""/>
                <div class="product_item_desc">
                    <h2>${item.title} </h2>
                    <p>product${item.id} description</p>
                    <span>color: ${item.color}</span>
                </div>
                <div class="product_item_action">
                    <button class="add_to_cart" onClick="removeFromCart(${item.id})">Remove from Cart</button>
                </div>
            </div>`
    })
    allProduct.innerHTML =y;
}

function removeFromCart(id){
    const items = JSON.parse(ProductsInCart) || [];

    const removeItem = items.filter(item =>item.id !== id)

    localStorage.setItem('ProductsInCart',JSON.stringify(removeItem))

    setTimeout(()=>{
        window.location ="cardProducts.html"
    },100)
    
}