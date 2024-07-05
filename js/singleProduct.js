$(document).ready(function(){
  // Using Ternory Operator we check if a there is existing product in our local storage to fetch once the website loads else return an empty array
  var cart = localStorage.getItem("cart")?
  JSON.parse(localStorage.getItem("cart")): [];
  var mySingleProduct ={}

  // Before you can store an object or array in a json, U have to stringify it first and that's why .parse is use
 $("#header").load("../components/header.html", function(){
  //  DISPLAY CART ONCE A HEADER IS LOADED
  displayCart(cart)
  var images = [
    {
      url:"../Asset/image/dress1.jpg",
      id:1,
    },
    {
      url:"../Asset/image/dress2.jpg",
      id:2,
    },
    // {
    //   url:"../Asset/image/dress3.jpg",
    //   id:3,
    // },
    // {
    //   url:"../Asset/image/dress4.jpg",
    //   id:4, 
    // },
  ]
  
  
  
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
  
   makeRequest(`https://fakestoreapi.com/products/${id}`,
   function(response){
    mySingleProduct = response;
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
   },
   function(error){ 
   console.log(error);
  }
  
   );
  
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





  