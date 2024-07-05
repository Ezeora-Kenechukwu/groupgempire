$(document).ready(function () {
     $("#header").load("../components/header.html")
     const products = [
          {
            id: 1,
            title: "Stocked Polo",
            price: 109.95,
            description: "Best polo comes in white, black, and orange",
            category: "men's clothing",
            image: "../Asset/image/products/product31.jpg",
            rating: {
              rate: 3.9,
              count: 120
            }
          },
          {
            id: 2,
            title: "Elegant Dress",
            price: 159.95,
            description: "Elegant dress perfect for any occasion",
            category: "female's clothing",
            image: "../Asset/image/products/product32.jpg",
            rating: {
              rate: 4.5,
              count: 80
            }
          },
          {
            id: 3,
            title: "Trousers",
            price: 89.95,
            description: "Comfortable running sneakers for daily workouts",
            category: "men's footwear",
            image: "../Asset/image/products/product33.jpg",
            rating: {
              rate: 4.2,
              count: 150
            }
          },
          {
            id: 4,
            title: "High Heel Sandals",
            price: 119.95,
            description: "Stylish high heel sandals for special occasions",
            category: "female's footwear",
            image: "../Asset/image/products/product34.jpg",
            rating: {
              rate: 4.8,
              count: 50
            }
          },
          {
            id: 5,
            title: "Casual T-Shirt",
            price: 29.95,
            description: "Casual t-shirt available in various colors",
            category: "men's clothing",
            image: "../Asset/image/products/product45.jpg",
            rating: {
              rate: 3.7,
              count: 200
            }
          },
          {
            id: 6,
            title: "Summer Blouse",
            price: 49.95,
            description: "Lightweight summer blouse for a cool look",
            category: "female's clothing",
            image: "../Asset/image/products/product36.jpg",
            rating: {
              rate: 4.3,
              count: 100
            }
          },
          {
            id: 7,
            title: "Leather Boots",
            price: 129.95,
            description: "Durable leather boots for outdoor adventures",
            category: "men's footwear",
            image: "../Asset/image/products/product47.jpg",
            rating: {
              rate: 4.6,
              count: 75
            }
          },
          {
            id: 8,
            title: "Ballet Flats",
            price: 69.95,
            description: "Comfortable ballet flats for everyday wear",
            category: "female's footwear",
            image: "../Asset/image/products/product8.jpg",
            rating: {
              rate: 4.0,
              count: 90
            }
          },
          {
            id: 9,
            title: "Slim Fit Jeans",
            price: 79.95,
            description: "Stylish slim fit jeans for a modern look",
            category: "men's clothing",
            image: "../Asset/image/products/product9.jpg",
            rating: {
              rate: 4.1,
              count: 130
            }
          },
          {
            id: 10,
            title: "Cocktail Dress",
            price: 179.95,
            description: "Elegant cocktail dress for evening events",
            category: "female's clothing",
            image: "../Asset/image/products/product10.jpg",
            rating: {
              rate: 4.7,
              count: 60
            }
          },
          {
            id: 11,
            title: "Running Shorts",
            price: 39.95,
            description: "Lightweight running shorts for comfortable workouts",
            category: "men's clothing",
            image: "../Asset/image/products/product11.jpg",
            rating: {
              rate: 4.0,
              count: 110
            }
          },
          {
            id: 12,
            title: "Maxi Skirt",
            price: 69.95,
            description: "Flowy maxi skirt for a relaxed and chic look",
            category: "female's clothing",
            image: "../Asset/image/products/product12.jpg",
            rating: {
              rate: 4.4,
              count: 95
            }
          },
          {
            id: 13,
            title: "Hiking Shoes",
            price: 99.95,
            description: "Durable hiking shoes for rugged terrains",
            category: "men's footwear",
            image: "../Asset/image/products/product13.jpg",
            rating: {
              rate: 4.3,
              count: 85
            }
          },
          {
            id: 14,
            title: "Wedge Sandals",
            price: 79.95,
            description: "Stylish wedge sandals for a fashionable look",
            category: "female's footwear",
            image: "../Asset/image/products/product14.jpg",
            rating: {
              rate: 4.1,
              count: 100
            }
          },
          {
            id: 15,
            title: "Graphic Tee",
            price: 19.95,
            description: "Trendy graphic tee with unique designs",
            category: "men's clothing",
            image: "../Asset/image/products/product15.jpg",
            rating: {
              rate: 3.8,
              count: 140
            }
          },
          {
            id: 16,
            title: "Crop Top",
            price: 29.95,
            description: "Chic crop top for a casual summer look",
            category: "female's clothing",
            image: "../Asset/image/products/product16.jpg",
            rating: {
              rate: 4.5,
              count: 75
            }
          },
          {
            id: 17,
            title: "Formal Shoes",
            price: 149.95,
            description: "Elegant formal shoes for business or events",
            category: "men's footwear",
            image: "../Asset/image/products/product17.jpg",
            rating: {
              rate: 4.4,
              count: 55
            }
          },
          {
            id: 18,
            title: "Espadrille Flats",
            price: 59.95,
            description: "Casual espadrille flats for a comfortable walk",
            category: "female's footwear",
            image: "../Asset/image/products/product18.jpg",
            rating: {
              rate: 4.2,
              count: 70
            }
          },
          {
            id: 19,
            title: "Workout Tank",
            price: 24.95,
            description: "Breathable workout tank for intense sessions",
            category: "men's clothing",
            image: "../Asset/image/products/product19.jpg",
            rating: {
              rate: 4.0,
              count: 90
            }
          },
          {
            id: 20,
            title: "Peplum Top",
            price: 39.95,
            description: "Stylish peplum top for a feminine look",
            category: "female's clothing",
            image: "../Asset/image/products/product20.jpg",
            rating: {
              rate: 4.3,
              count: 65
            }
          },
          {
            id: 21,
            title: "Casual Loafers",
            price: 89.95,
            description: "Comfortable casual loafers for daily wear",
            category: "men's footwear",
            image: "../Asset/image/products/product21.jpg",
            rating: {
              rate: 4.5,
              count: 60
            }
          },
          {
            id: 22,
            title: "Ankle Boots",
            price: 139.95,
            description: "Stylish ankle boots for a trendy look",
            category: "female's footwear",
            image: "../Asset/image/products/product22.jpg",
            rating: {
              rate: 4.6,
              count: 80
            }
          },
          {
            id: 23,
            title: "Denim Jacket",
            price: 99.95,
            description: "Classic denim jacket for a versatile style",
            category: "men's clothing",
            image: "../Asset/image/products/product23.jpg",
            rating: {
              rate: 4.2,
              count: 105
            }
          },
          {
            id: 24,
            title: "Cardigan Sweater",
            price: 69.95,
            description: "Cozy cardigan sweater for cooler days",
            category: "female's clothing",
            image: "../Asset/image/products/product24.jpg",
            rating: {
              rate: 4.5,
              count: 85
            }
          },
          {
            id: 25,
            title: "Basketball Shoes",
            price: 119.95,
            description: "High-performance basketball shoes for athletes",
            category: "men's footwear",
            image: "../Asset/image/products/product25.jpg",
            rating: {
              rate: 4.7,
              count: 70
            }
          },
          {
            id: 26,
            title: "Slip-On Sneakers",
            price: 79.95,
            description: "Convenient slip-on sneakers for casual outings",
            category: "female's footwear",
            image: "../Asset/image/products/product26.jpg",
            rating: {
              rate: 4.0,
              count: 90
            }
          },
          {
            id: 27,
            title: "Bomber Jacket",
            price: 129.95,
            description: "Stylish bomber jacket for a cool look",
            category: "men's clothing",
            image: "../Asset/image/products/product27.jpg",
            rating: {
              rate: 4.3,
              count: 110
            }
          },
          {
            id: 28,
            title: "Wrap Dress",
            price: 89.95,
            description: "Elegant wrap dress for a chic style",
            category: "female's clothing",
            image: "../Asset/image/products/product28.jpg",
            rating: {
              rate: 4.7,
              count: 60
            }
          },
          {
            id: 29,
            title: "Beach Flip Flops",
            price: 19.95,
            description: "Comfortable beach flip flops for summer",
            category: "men's footwear",
            image: "../Asset/image/products/product29.jpg",
            rating: {
              rate: 3.9,
              count: 100
            }
          },
          {
            id: 30,
            title: "Knee-High Boots",
            price: 149.95,
            description: "Chic knee-high boots for a stylish look",
            category: "female's footwear",
            image: "../Asset/image/products/product30.jpg",
            rating: {
              rate: 4.8,
              count: 40
            }
          }
        ];
        

     DisplayCategory(products)
     DisplayedProducts(products)
     DisplayedProductCarousel(products)
     localStorage.setItem("products",  JSON.stringify(products));
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
             <p class="card-text">${item.description}</p>
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



