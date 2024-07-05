// // var addToWhistlist = $("#addToWhistlist")
// // addToWhistlist.on("click", () =>{
// //      alert("product have been added successfully")  
// // })

//                  // Product Add To Wishlist
//                  $(document).on('click', '#addToWishlist', function(e){
//                 e.preventDefault();
//                 if ($('#login_status').val() == 'no') {
//                     Swal.fire({
//                         title: 'You are not log in!',
//                         text: "Please login first.",
//                         icon: 'warning',
//                         showCancelButton: true,
//                         confirmButtonColor: '#3085d6',
//                         cancelButtonColor: '#d33',
//                         confirmButtonText: 'Go to login.'
//                     }).then((result) => {
//                         if (result.isConfirmed) {
//                             window.location.href = "login.html"
//                         }
//                     })
//                 } else {
//                     if ($('#verified_status').val() == 'no') {
//                         Swal.fire({
//                             icon: 'warning',
//                             title: 'You are not verified user!',
//                             text: 'Please go to your email and verified your account.',
//                         })
//                     } else {
//                         var product_id = $(this).attr('id');
//                         var user_id = "";
//                         // ajax start
//                         $.ajax({
//                             type: 'POST',
//                             url: "https://fakestoreapi.com/products.com/insert/wishlist",
//                             data: {
//                                 product_id: product_id,
//                                 user_id: user_id
//                             },
//                             success: function (data) {
//                                 if (data.status == 200) {
//                                     $('#header_wishlist_num').html(data.wishlist_qty_status + parseInt($('#header_wishlist_num').html()));
//                                         const Toast = Swal.mixin({
//                                             toast: true,
//                                             position: 'top-center',
//                                             showConfirmButton: false,
//                                             timer: 3000,
//                                             timerProgressBar: true,
//                                             didOpen: (toast) => {
//                                                 toast.addEventListener('mouseenter', Swal.stopTimer)
//                                                 toast.addEventListener('mouseleave', Swal.resumeTimer)
//                                             }
//                                         })
//                                         Toast.fire({
//                                             icon: 'success',
//                                             title: 'Product Added successfully in Wishlist'
//                                         })
//                                 } else {
//                                     $('#header_wishlist_num').html(data.wishlist_qty_status + parseInt($('#header_wishlist_num').html()));
//                                     const Toast = Swal.mixin({
//                                         toast: true,
//                                         position: 'top-center',
//                                         showConfirmButton: false,
//                                         timer: 3000,
//                                         timerProgressBar: true,
//                                         didOpen: (toast) => {
//                                             toast.addEventListener('mouseenter', Swal.stopTimer)
//                                             toast.addEventListener('mouseleave', Swal.resumeTimer)
//                                         }
//                                     })
//                                     Toast.fire({
//                                         icon: 'warning',
//                                         title: 'This Product Already Added in Wishlist'
//                                     })
//                                 }
//                             }
//                         })
//                         // ajax end
//                     }
//                 }
//             })
