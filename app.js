const additem = ()=>{
    let productValue=document.getElementById('product-name');
    const productName=productValue.value;
    if(!productName){
        return;
    }
    //display product 
    displayProduct(productName);
    addProductToCart(productName);
    productValue.value='';
}
const displayProduct=name=>{
    const ul=document.getElementById('items');
    const li=document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
}


const getCart = () =>{
    const cart=localStorage.getItem('cart');
    let cartObject;
    if(cart){
        cartObject=JSON.parse(cart);
    }
    else{
        cartObject={};
    }
    return cartObject;
}

const addProductToCart=name=>{
    const cart=getCart();
    if(cart[name]){
        cart[name]=cart[name]+1;
    }
    else{
        cart[name]=1;
    }
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const displayLocalStorageCart=()=>{
    const cart=getCart();
    for(const name in cart){
        displayProduct(name);
    }
}
const placeOrder=()=>{
    document.getElementById('items').textContent='';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();