$(document).ready(function(){
var noProductItems =$("#noProductItems");
var productqty =$("#productqty");
var subTotal =$("#subTotal");
var shipping =$("#shipping");
var tax =$("#tax");
var totalPrice =$("#totalPrice");


var cart = JSON.parse(localStorage.getItem('cart'));
console.log("cart from checkout",cart);

noProductItems.html(cart.length);
const proQty = cart.reduce((total,item) =>{
     total += item.quantity ;
     return total;
}, 0)

productqty.html(proQty);
const subTo = cart.reduce((total,item) =>{
     total += Number(item.amount);
     return total;
}, 0);

subTotal.html(`$${subTo}`);
shipping.html(`$${determineShippingCost(proQty).toFixed(2)}`)
tax.html(`$${determineTaxCost(subTo).toFixed(2)}`);


$(".checkOutForm").submit(function(event){
     event.preventDefault()
     console.log("lorem ipsum", this);

var firstName = $("#firstName").val()
var lastName = $("#lastName").val()
var email  = $("#email").val()
var address1 = $("#address1").val()
var address2 = $("#address2").val()
var city  = $("#city").val()
var state  = $("#state").val()
var country  = $("#country").val()
var zip  = $("#zip").val()

var shippingCost = determineShippingCost(proQty) 
var taxCost = determineTaxCost(subTo)
var subtotalPrice = subTo
var totalQuantity = proQty
var numberOfItems = cart.length
var totalOrderPrice = totalOrderPrice
// val means Value

// Form Validation Methood 
if (!firstName || !lastName || !email || !address1 || !address2 || !city || !state || !country || !zip)
 {
     alert(" All fields Must Be filled before checking out")
return;
}

const orderInformation = {user: {firstName,lastName,email,address1,address2,city,state,country,zip},
productsPurchased: cart,
order_at: new Date(),
price_details: {shippingCost, taxCost, subtotalPrice, totalQuantity, numberOfItems, totalOrderPrice}}
console.log(orderInformation);
// To capture an existing order and merge it with a new order

var storedOrderInformation = localStorage.getItem("orderInformation") ? JSON.parse(localStorage.getItem("orderInformation")) : []
storedOrderInformation.push(orderInformation)
localStorage.setItem('orderInformation', JSON.stringify(storedOrderInformation))
localStorage.setItem('cart' ,JSON.stringify([]))
alert("Order Made Successfully.  Thank you for Patronizing us")
window.location.href = "../pages/myorders.html"

});


var totalOrderPrice = subTo + determineShippingCost(proQty) + determineTaxCost(subTo)
totalPrice.html(`₦${totalOrderPrice.toFixed(2)}`);
});

function determineShippingCost(amount) {
     return amount <= 2 ? 0: amount >2 && amount <= 10 ? 10 : 40
}

function determineTaxCost(amount) {
     return amount <= 20 ? 0: amount >20 && amount <= 100 ? amount *(5 / 100) : amount *(10 / 100)
}



