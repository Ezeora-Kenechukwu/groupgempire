$(document).ready(function(){
  // Using Ternory Operator we check if a there is existing product in our local storage to fetch once the website loads else return an empty array
  var cart = localStorage.getItem("cart")?
  JSON.parse(localStorage.getItem("cart")): [];
  var mySingleProduct ={}

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
  // Before you can store an object or array in a json, U have to stringify it first and that's why .parse is use
 $("#header").load("../components/header.html", function(){
  //  DISPLAY CART ONCE A HEADER IS LOADED
  displayCart(cart)
 
  var myImages = [
    {
      url: "../Asset/image/products/product31.jpg",
      id: 1
    },
    {
      url: "../Asset/image/products/product32.jpg",
      id: 2
    },
    {
      url: "../Asset/image/products/product33.jpg",
      id: 3
    },
    {
      url: "../Asset/image/products/product34.jpg",
      id: 4
    },
    {
      url: "../Asset/image/products/product35.jpg",
      id: 5
    },
    {
      url: "../Asset/image/products/product36.jpg",
      id: 6
    },
    {
      url: "../Asset/image/products/product37.jpg",
      id: 7
    },
    {
      url: "../Asset/image/products/product38.jpg",
      id: 8
    },
    {
      url: "../Asset/image/products/product39.jpg",
      id: 9
    },
    {
      url: "../Asset/image/products/product40.jpg",
      id: 10
    },
    {
      url: "../Asset/image/products/product41.jpg",
      id: 11
    },
    {
      url: "../Asset/image/products/product42.jpg",
      id: 12
    },
    {
      url: "../Asset/image/products/product43.jpg",
      id: 13
    },
    {
      url: "../Asset/image/products/product44.jpg",
      id: 14
    },
    {
      url: "../Asset/image/products/product45.jpg",
      id: 15
    },
    {
      url: "../Asset/image/products/product46.jpg",
      id: 16
    },
    {
      url: "../Asset/image/products/product47.jpg",
      id: 17
    },
    {
      url: "../Asset/image/products/product48.jpg",
      id: 18
    },
    {
      url: "../Asset/image/products/product49.jpg",
      id: 19
    },
    {
      url: "../Asset/image/products/product50.jpg",
      id: 20
    },
    {
      url: "../Asset/image/products/product51.jpg",
      id: 21
    },
    {
      url: "../Asset/image/products/product52.jpg",
      id: 22
    },
    {
      url: "../Asset/image/products/product53.jpg",
      id: 23
    },
    {
      url: "../Asset/image/products/product4.jpg",
      id: 24
    }
  ];
  
  function getRandomImages(array, num) {
    var result = [];
    var taken = [];
    while (result.length < num) {
      var randomIndex = Math.floor(Math.random() * array.length);
      if (!taken.includes(randomIndex)) {
        result.push(array[randomIndex]);
        taken.push(randomIndex);
      }
    }
    return result;
  }

  var images = getRandomImages(myImages, 3);
  
  
   function getId(url,item){
            const urlparam = new URLSearchParams(url)
           // URLPARAMS is any  that is separated by question mark e;g pages/product.html?id=2. Now everthing after the question is a urlparam
           console.log(urlparam);
            return urlparam.get(item)
       }
      const id= getId(window.location.search,'id')
  //     console.log(window.location.href);
  //     console.log(window.location.search);
  
 
  var currentCartItem;
  if(cart.length > 0) {
   currentCartItem = cart.filter((item) => item.id == id)
  
  }else{
   currentCartItem = null;
  
  }
  const response = products.filter(item => item.id == id)[0]
  mySingleProduct =  response;
  console.log(response);
  $(".product_title").append(`
  <h4>${response.title}</h4>
  `);
  $(".product_desc").html(response.description);
  $("#cat").html(response.category);
  $(".rating-container").html(DisplayedRating(response.rating.rate));
$(".product-images").html(`
<section class="row d-flex flex-wrap">
<ul class="nav nav-tabs flex-column col-4">
<li class="nav-item">
     <a class="nav-link active" data-bs-toggle="tab" href="#img${0}">
          <img src="${response.image}" alt="error" style="width: 100px; height:200px;">
     </a>
</li>

${
 images.map((item) => {
   return`
   <li class="nav-item">
   <a class="nav-link" data-bs-toggle="tab" href="#img${item.id}">
        <img src="${item.url}" alt="" style="width: 100px; height:200px;">
   </a>
</li>

 ` ;
 }).join('')
}
</ul>

<div class="tab-content col-8">
<article id="img0" class="tab-pane container active">
  <img src="${response.image}" alt="" style="height:600px; margin:auto;">
</article>
${
images.map((item) => {
 return `
 <article id="img${item.id}" class="tab-pane container fade">
  <img src="${item.url}" alt="" style="width:300px">
</article>
 `  ;
})
}

</div>
</section>

`)
$("#price").html(`price: ₦${response.price}`);
$("#totalprice").html(`Total Amount: ₦${currentCartItem && currentCartItem.length > 0 ? currentCartItem[0].amount :response.price}`).data(`amount`,currentCartItem && currentCartItem.length > 0 ? currentCartItem[0].amount : response.price)
$("#qty").val(currentCartItem && currentCartItem.length > 0 ? currentCartItem[0].quantity : 1)
  
  //  makeRequest(`https://fakestoreapi.com/products/${id}`,
  //  function(response){
  //   mySingleProduct = response;
  //      console.log(response);
  //      $(".product_title").append(`
  //      <h4>${response.title}</h4>
  //      `);
  //      $(".product_desc").html(response.description);
  //      $("#cat").html(response.category);
  //      $(".rating-container").html(DisplayedRating(response.rating.rate));
  //    $(".product-images").html(`
  //    <section class="row d-flex flex-wrap">
  //    <ul class="nav nav-tabs flex-column col-4">
  //    <li class="nav-item">
  //         <a class="nav-link active" data-bs-toggle="tab" href="#img${0}">
  //              <img src="${response.image}" alt="error" style="width: 100px; height:200px;">
  //         </a>
  //    </li>
  
  //    ${
  //     images.map((item) => {
  //       return`
  //       <li class="nav-item">
  //       <a class="nav-link" data-bs-toggle="tab" href="#img${item.id}">
  //            <img src="${item.url}" alt="" style="width: 100px; height:200px;">
  //       </a>
  //  </li>
  
  //     ` ;
  //     }).join('')
  //    }
  //    </ul>
  
  // <div class="tab-content col-8">
  // <article id="img0" class="tab-pane container active">
  //      <img src="${response.image}" alt="" style="height:600px; margin:auto;">
  // </article>
  // ${
  //  images.map((item) => {
  //     return `
  //     <article id="img${item.id}" class="tab-pane container fade">
  //      <img src="${item.url}" alt="" style="width:300px">
  // </article>
  //     `  ;
  //   })
  // }
  
  // </div>
  // </section>
  
  //    `)
  //    $("#price").html(`price: ₦${response.price}`);
  //    $("#totalprice").html(`Total Amount: ₦${currentCartItem && currentCartItem.length > 0 ? currentCartItem[0].amount :response.price}`).data(`amount`,currentCartItem && currentCartItem.length > 0 ? currentCartItem[0].amount : response.price)
  //    $("#qty").val(currentCartItem && currentCartItem.length > 0 ? currentCartItem[0].quantity : 1)
  //  },
  //  function(error){ 
  //  console.log(error);
  // }
  
  //  );
  
  var minus = $("#minus")
  var qty = $("#qty")
  var plus = $("#plus")
  var addToCart = $("#addToCart")
  var addToWhistlist = $("#addToWhistlist")
  var totalprice = $("#totalprice")

  minus.on("click", function (){
    var quantity = Number(qty.val())
    if (quantity <= 1){
      qty.val(1)
    }
    else{
      quantity -=1
      qty.val(quantity)
      var totalAmount = quantity * Number($("#totalprice").data('amount'))
      $("#totalprice").html(`Total Amount: ₦${totalAmount}`)
    }
  })
  plus.on("click", function (){
    var quantity = Number(qty.val())
    quantity +=1
    qty.val(quantity)
      var totalAmount = quantity * Number($("#totalprice").data('amount'))
      $("#totalprice").html(`Total Amount: ₦${totalAmount}`)
  })
  
  
  var addToCart= $("#addToCart")
  var addToWhistlist= $("#addToWhistlist")
  // MODAL 
  // LISTENING TO EVENT OF (ADDTOCART) BUTTON, THEN CHECK if the item is already in cart,if it is already in cart, I just find the product inside the cart array and add the amount and the quantity to the already existing product
  addToCart.on("click", () =>{
    alert("product have been added successfully")
  if(InCart(cart, mySingleProduct.id)){
  const newCart = cart.map(item =>{
    if(item.id == mySingleProduct.id){
      return{...item,quantity:Number(qty.val()),amount:Number(qty.val()) * Number($("#totalprice").data('amount'))}
    }
    return item
  })
  cart = newCart
  storeCart(cart)
  console.log(cart);
  }else{
    const newCartItem ={...mySingleProduct,quantity:Number(qty.val()),amount:Number(qty.val())*Number($("#totalprice").data('amount'))}
    cart.push(newCartItem)
    storeCart(cart)
    console.log(cart);
  }
  
  })
  // Using for Loop

  
   function makeRequest(url,successCallback,errorCallback,method="get",data=null,){
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

      function deleteCartItem() {
        const id = $(this).data("id")
        const newCart = cart.filter(item => item.id != id)
        cart = newCart
        storeCart(cart)
        
      }
     
      
      function increaseQuantity(){
      const newId = $(this).data('id')
      var newCar = cart.map((item,index,array)=> {
        if(item.id == newId){
          const newQuant = item.quantity + 1
          item.quantity = newQuant
          item.amount = (newQuant * item.price).toFixed(2)
        }
        return item
      
      } ) 
      cart = newCar
      storeCart(cart)
      }
      function decreaseQuantity(){
        const newId = $(this).data('id')
        var newCar = cart.map((item,index,array)=> {
          if(item.id == newId){
            let newQuant;
            if(item.quantity <= 1){
              newQuant = 1
            }else {
           newQuant = sitem.quantity -1
            }
            item.quantity = newQuant
            item.amount = (newQuant * item.price).toFixed(2)
          }
          return item
        } ) 
        cart = newCar
        storeCart(cart)
      }
      function displayCart (carts){
        var cartItemContainer = $("#cartItemContainer")
      if (carts.length <= 0) {
        $("#cartItemContainer").html(`<h3 class="text-danger">Cart item not found.Please add items first </h3>`)
        return;
      } 
    const carting = carts.map(item =>{
    const {title,quantity, amount, id, image} = item
  
    return `
    <section class=" section d-flex px-2 align-items-center gap-2 justify-content-between">
                             <img src="${image}" alt="" class="rounded-circle" style="width: 30px; height: 30px;">
                             <div class="d-flex flex-column">
                                  <small class="small">${title?.slice(0,8)}</small>
                                  <button class="text-muted btn remove" id="delete_btn" style="padding: 0px !important; margin: 0px !important; margin-top:-10px !important; font-size: 0.8rem;" data-id="${id}">remove</button>
                             </div>
                             <div class="d-flex flex-column gap-2 align-items-center">
                             <button class="btn increaseQuantityBtn "style="padding: 0px !important; margin: 0px !important; margin-top:-10px !important; font-size:0.8rem;" data-id= "${id}" onclick="increaseQuantity()"><i class="fas fa-chevron-up increment-btn"></i></button>
    
            <small class="small" data-qty="1" >${quantity}</small>
                             <button class="btn decreaseQuantityBtn " style="padding: 0px !important; margin: 0px !important; margin-top:-10px !important;font-size: 0.8rem;" data-id= "${id}" onclick="decreaseQuantity()"><i class="fas fa-chevron-down decrement-btn"></i></button>
                             </div>
                        </section>
    
    `
    
    }).join('')
    cartItemContainer.html(carting)
     $(`.remove`).on("click", deleteCartItem)
    $(`.increaseQuantityBtn`).on("click", increaseQuantity)
    $(`.decreaseQuantityBtn`).on("click", decreaseQuantity)

    var totalCartAmount = $("#totalCartAmount")
    var totalCartQuantity = $("#totalCartQuantity")
    
    const totalCartQu = carts.reduce((total,item)=>{
      return total += Number(item.quantity)
    },0)
    const totalCartAm = carts.reduce((total,item)=>{
      return total += Number(item.amount)
    },0)
    totalCartAmount.html(`Total Amount: $${totalCartAm.toFixed(2)}`)
    totalCartQuantity.html(`Quantity: ${totalCartQu}`)
    $("#headerquantity").html(`${totalCartQu}`)
    $("#headeramount").html(`₦${totalCartAm}`)
    
    
    $("#clearCart").on('click', clearCart )
    
    
    function clearCart(){
      console.log("cleared");
    cart = []
    storeCart(cart)
    var totalCartAmount = $("#totalCartAmount").html("Total Amount:")
    var totalCartQuantity = $("#totalCartQuantity").html("Quantity:")
    $("#headerquantity").html(0)
    }
    
      }
      function InCart(cartArray, id){
        for(let i =0; i < cartArray.length; i++){
          if (cartArray[i].id == id){
            return true
          }
      
        }
        return false
      }
      function storeCart(cartArray){
        localStorage.setItem('cart', JSON.stringify(cartArray))
        // DISPLAY CART ONCE THERE ARE CHANGES IN THE CART
        displayCart(cartArray)
      }



    })
})

function DisplayedRatingg(rate){
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
};





  