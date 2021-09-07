const additem = ()=>{
    const productValue=document.getElementById('product-name');
    const productName=productValue.value;
    //display product 
    displayProduct(productName);

    productValues.value='';
}
const displayProduct=name=>{
    const ul=document.getElementById('items');
    const li=document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
}