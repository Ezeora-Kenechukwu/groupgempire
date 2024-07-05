$(document).ready(function () {
     
     $("#header").load("../components/header.html")
//      $.ajax({
//           url: "https://fakestoreapi.com/products",
// success: (data) => {
//      const products = data;
//      localStorage.setItem("products", 
//      JSON.stringify(products));
// DisplayCategory(products)
// DisplayedProducts(products)
// DisplayedProductCarousel(products)
// console.log(products);
// },
//      });

     $("#navCategory").on("change" , function(){
          const cat =$(this).val()
          const data = makeRequest(`https://fakestoreapi.com/products${cat =="all"? '': `/category/${cat}`}`,
          function(response){
               console.log(response);
               DisplayedProducts(response)
          },
          function(error){
               alert(error.responseText)
          }

          )
     })

function DisplayCategory(products){
     const category = new Set(products.map(item => item.category) )
     const maincat = [...category]
     $("#navCategory").html(`
     <option value="all">All Products</option>${
          maincat.map(item => {
               return`<option value="${item}">${item}</option>
               `
          }).join('')
     }
     `)
}
function makeRequest(url,successCallback,errorCallback, method="get",data=null,){

     $.ajax({
          url: url,
          method:method,
             data:data,
             success: (data) =>{
               var products = data

               successCallback(products)
             },
             error: function(error) {
               errorCallback(error)
             }
     });    
}

});

function DisplayedProducts(products) {
     const container = $("#productsContainer")

     container.html( products.map(item => {
          const {rate} = item.rating
          return `
        
        <article class="card " style="min-width: 220px;max-width: 400px;"> 
        <img src="${item.image}" alt="" class="card-img-top">
        <div class="card-body">
             <h4 class="card-title">${item.title}</h4>
             <div class=" justify-content-between align-items-center">
                  <div class="d-flex  text-warning">
                  ${
                       DisplayedRating(rate)
                  }
                  
                  <p class="card-text">₦${item.price}</p>
             </div>
             <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi?</p>
        </div>
        <div class="card-footer d-flex justify-content-end bg-dark">
             <a href="./pages/product.html?id=${item.id}" class="btn btn-warning">
             <i class="fas fa-shopping-cart">Add to Cart</i></a>
        </div>
                </article> 
          `
     }).join(''))
}

function DisplayedRating(rate){
          return rate < 0.5 ? 
          `
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           `
           : 
           rate >= 0.5 && rate < 1 ?
            `
           <i class="fas fa-star-half"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           `
           :
           rate >= 1 && rate < 1.5 ?
           `
           <si class="fas fa-star"></si>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           ` 
           :
            rate >= 1.5 && rate < 2 ?
             `
           <i class="fas fa-star"></i>
           <i class="fas fa-star-half"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           `
           :
           rate >=2 && rate < 2.5 ?
           `
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           `
           :
           rate >=2.5 && rate <3 ?
           `
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star-half"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           `
           :
           rate >=3 && rate <3.5?
           `
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="far fa-star"></i>
           <i class="far fa-star"></i>
           `
           :
           rate >=3.5  && rate < 4 ?
           `
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star-half"></i>
           <i class="far fa-star"></i>
           `
           :
           rate >=4.5 && rate < 5?
           `
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star-half"></i>
           `
           :
           `
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           `
}

function DisplayedProductCarousel(products){
     var carouselindicator =$("#carouselIndicators")
     var carouselinner =$("#carouselInner")
     const carouselIndicatorsmapped = products.map((item,index) =>{
          return `
          <button type="button" class="active" data-bs-target="#productCarousel" data-bs-slide-to="${index}"></button>`
     })
     var constcarouselInnermapped = products.map((item,index) =>{
          return ` <div class="carousel-item ${index == 0 ? "active" : ""} " style="height:700px; padding: 20px 40px; background-color:whitesmoke;">
          <img src="${item.image}" alt="" class="d-block w-100" style="justify-content-center;object-fit: contain; max-width:500px; margin:auto; display:block;" >
          <div class="carousel-caption bg-primary rounded d-md-block">
               <h3>${item.title}</h3>
               <h4>₦${item.price}</h4>
          </div>
               </div>

               `
     })   

     carouselindicator.html(carouselIndicatorsmapped)
     carouselinner.html( constcarouselInnermapped)
}



