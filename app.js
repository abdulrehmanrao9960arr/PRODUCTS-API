const div = document.querySelector("#container");

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
console.log(res);
res.products.map((item)=>{
  div.innerHTML+=`<div class="card border-rounded">
  <h1>${item.title}</h1>
  <h1>PRICE :${item.price}</h1>
  <h3>${item.description.slice(0 , 10)}...</h3>
  <img src="${item.thumbnail}" alt="" srcset="">
  <button onclick="seeMore(${item.id})">DETAIL</button>
  </div>`

})


});

const seeMore = (id) =>{
    console.log(id);
    localStorage.setItem("id",id)
    window.location = "singleProduct.html"
}   
