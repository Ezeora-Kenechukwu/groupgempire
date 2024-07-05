$(document).ready(function(){
     const orderedProduct = localStorage.getItem
     ("orderInformation") ? JSON.parse(localStorage.getItem("orderInformation")) : []
    var orderContainer = $("#orderContainer") 
    console.log("My Ordered Product" , orderedProduct);
    if(orderedProduct.length 
<=0) {
     orderContainer.html(`<article class="card bg-danger d-flex align-items-center justify-content-center">
     <h1 class="text-white">NO Order Made Yet </h1>
     <a href="../index.html" class="btn btn-primary">Make Order Now</a>
     </article>`)
     return;
}

var orders = orderedProduct.map((item,index) => {
     const {user,
          productsPurchased,
          order_at,
          price_details,} = item
          return`
          <!--single Card -->
     <article class="card mb-5">
     <div class="card-header d-flex justify-content-between align-items-center flex-wrap">
        <section class="d-flex gap-3 flex-wrap align-items-center">
          <p class="px-4 py-2" style="background: rgb(226, 225, 225); border-radius:20px;"><b>Order</b> <span class="text-primary">#${index +1}</span></p>
          <p class="text-mute">Order Placed: ${formatDate(order_at)}</p>
        </section>
        <button class="px-4 py-2" style="background:orange; border: none; border-radius: 20px; font-size: 0.8rem;">
<i class="fas fa-chevron-right gap-3 d-flex align-items-center p-2"><b>Track Order</b></i>
        </button>
     </div>

<div class="card-body">
${
     productsPurchased.map((item,index) =>{
          const {title,image} = item
          return`
          <section class="row">
          <div class="col-6 row">
<div class="col-5">
     <img src="${image}" alt="" class="img-thumbnail" style="width: 100px; height: 130px;">
</div>
<div class="col-7">
     <h6 class="h6">${title}</h6>
     <small class="text-mute">By:  ${user.firstName}  ${user.lastName} </small>
</div>
</div>
<div class="col-6 row">
     <div class="col-md-6">
          <small class="text-mute">
               Status
          </small>
          <h4 class="h4 text-warning">
               In-Transit
          </h4>
     </div>
     <div class="col-md-6">
          <small class="text-mute">
               Deliverd on
          </small>
          <h4 class="h4 text-dark">
               24th January,2025
          </h4>
     </div>
</div>
     </section>
          `
     })
}
</div>

</article>
<!--End of Single Card-->
          `
     
})
orderContainer.html(orders)

})
function formatDate(dateString){
     const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     const days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     const date = new Date(dateString)
     const day = days[date.getDay()]
     const dayOfMonth = date.getDate();
     const month = months[date.getMonth()]
     const year = date.getFullYear()

     const suffix = getDateSuffix(dayOfMonth)
     return `${day}, ${dayOfMonth}${suffix} ${month}, ${year}`
}

function getDateSuffix(day){
     if(day >= 11 && day <=13){
          return "th"
     }
     // Using Moduluos to determine 1st 
     switch(day % 10){
          case 1:
               return 'st'

               case 2:
               return 'nd'

               case 3:
               return 'rd'

               default:
               return 'th'
     }
}