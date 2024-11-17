// console.log("hi");

const id = localStorage.getItem("id")
const div = document.querySelector("#container")
console.log(id);

 fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then((res)=>{
console.log(res);

    div.innerHTML+=`
    <div class="card">
    <h1> Title : ${res.title}</h1>
<img src="${res.thumbnail}" alt="" srcset="">
    <h1>Category : ${res.category}</h1>
    <h1>Description : ${res.description}</h1>
    <h1> Price : ${res.price}$</h1>
    <h1>Brand : ${res.brand}</h1>
    <h1>Id : ${res.id}</h1>
    <h1>AvailabilityStatus : ${res.availabilityStatus} </h1>
    <h1>DiscountPercentage : ${res.discountPercentage}%</h1>
    <h1> MinimumOrderQuantity : ${res.minimumOrderQuantity}</h1>
    <h1>Rating : ${res.rating}*</h1>
    <h1> ReturnPolicy : ${res.returnPolicy}</h1> <br><br><br>
    </div>
    
    
     `
     res.reviews.forEach((item) => {
        div.innerHTML += `
    <div class="card">   
    <h2>NAME : ${item.reviewerName}</h2>
    <h2>USER-EMAIL : ${item.reviewerEmail}</h2>
    <h2>${item.comment}</h2>
    <h2>Rating: ${item.rating}*</h2>
    <h2>DATE : ${item.date}</h2>
        `;
      });
    //   div.innerHTML += `</div>`;
})


