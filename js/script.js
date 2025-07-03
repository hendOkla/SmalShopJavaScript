

//////////////////////////!SECTION
let allProduct = document.querySelector('.products')
let products = [
    {
        id:1,
        title: 'pro1',
        color:"black",
        ImageUrl: "images/products/1.jpg"
    },
    {
        id:2,
        title: "pro2",
        color:"black",
        ImageUrl: "images/products/2.jpg"
    },
    {
        id:3,
        title: "pro3",
        color:"black",
        ImageUrl: "images/products/3.jpg"
    },
    {
        id:4,
        title: "pro4",
        color:"black",
        ImageUrl: "images/products/4.jpg"
    },
    {
        id:5,
        title: "pro5",
        color:"black",
        ImageUrl: "images/products/5.jpg"
    },
    {
        id:6,
        title: "pro6",
        color:"black",
        ImageUrl: "images/products/6.jpg"
    },
    {
        id:7,
        title: "pro7",
        color:"black",
        ImageUrl: "images/products/7.jpg"
    },
    {
        id:8,
        title: "pro8",
        color:"black",
        ImageUrl: "images/products/8.jpg"
    },
    {
        id:9,
        title: "pro9",
        color:"black",
        ImageUrl: "images/products/9.jpg"
    },
    {
        id:10,
        title: "pro10",
        color:"black",
        ImageUrl: "images/products/10.jpg"
    },
    {
        id:11,
        title: "pro11",
        color:"black",
        ImageUrl: "images/products/11.jpg"
    },
    {
        id:12,
        title: "pro12",
        color:"black",
        ImageUrl: "images/products/12.jpg"
    },
    {
        id:13,
        title: "pro13",
        color:"black",
        ImageUrl: "images/products/13.jpg"
    },
    {
        id:14,
        title: "pro14",
        color:"black",
        ImageUrl: "images/products/14.jpg"
    },
    {
        id:15,
        title: "pro15",
        color:"black",
        ImageUrl: "images/products/15.jpg"
    }
]
function drawItems(){
    let y = products.map((item)=>{
        return`<div class="product_item">
                <img class="product_item_img" src="${item.ImageUrl}" alt=""/>
                <div class="product_item_desc">
                    <h2>${item.title} </h2>
                    <p>product${item.id} description</p>
                    <span>color: ${item.color}</span>
                </div>
                <div class="product_item_action">
                    <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
                    <i class="far fa-heart fav"></i>
                </div>
            </div>`
    })
    allProduct.innerHTML =y;
}
drawItems();

let cardProductDiv = document.querySelector('.carts_products div')
let badge = document.querySelector('.badge')

/* let addItem = []; */
let addItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : []

if(addItem){
    addItem.map(item =>{
        cardProductDiv.innerHTML += `<p>${item.title}</p>`
    })
    badge.style.display="block";
    badge.innerHTML =addItem.length
}



if(localStorage.getItem=("username")){
    function addToCart(id){
        let chosenItem = products.find((item) =>item.id === id);
        cardProductDiv.innerHTML += `<p>${chosenItem.title}</p>`
        addItem = [...addItem, chosenItem]
        localStorage.setItem("ProductsInCart", JSON.stringify(addItem))

        let cartProductsLength = document.querySelectorAll('.carts_products div p')
        badge.style.display ="block";
        badge.innerHTML =cartProductsLength.length
    }
}else{
    window.location ="login.html"
}



///////////////////////////////!SECTION
let shoppingCartIcon = document.querySelector('.shopping_cart')
let cartProducts = document.querySelector('.carts_products')
shoppingCartIcon.addEventListener("click",openCart)
function openCart(){
    if(cardProductDiv.innerHTML !="" ){
        if(cartProducts.style.display == "block"){
            cartProducts.style.display ="none"
        }else{
            cartProducts.style.display ="block"
        }
    }
}
///////////////////////////////!

