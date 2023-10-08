///for fetch value of increment and decrement of button in products container

let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let add = document.querySelectorAll(".add");
let cat = document.querySelectorAll(".cat");
console.log(cat);

//for fetch value of cart
let totalPrice = 0;
let totalPrice0 = 0;
let totalPrice1 = 0;
let totalPrice2 = 0;
let emptyCart = document.getElementById("cart-sub");
let cart = document.getElementById("cart");
let cartproduct = document.getElementById("cartproduct");
let cartproductsub = document.getElementsByClassName("cartproductsub");
let totalruppe = document.getElementById('totalruppe');
let p1 = document.getElementsByClassName("p1");
let p2 = document.getElementsByClassName("p2");

addedProductObj = {};

//increment qty to cart
cat.forEach((item, idx) => {
    plus[idx].addEventListener('click', (e) => {
        const totalClicks = item.querySelector(".add-item");
        totalClicks.innerText = parseInt(totalClicks.innerText) + 1;
        productName = item.querySelectorAll("p")[0]?.innerHTML;
        productPrice = item.querySelectorAll("p")[1]?.innerHTML;
        addedProductObj[productName] = { 'price': productPrice, 'count': totalClicks.innerText };

        if (idx == 0) {
            totalPrice0 += 100;
        } else if (idx == 1) {
            totalPrice1 += 200;
        } else {
            totalPrice2 += 300;
        }
        totalPrice = totalPrice0 + totalPrice1 + totalPrice2;
        totalruppe.innerText = totalPrice + " " + '₹';
        cart_div = document.getElementById('cart-sub');

        //cart 
        console.log(cartproduct);
        if (totalPrice == 0) {
            emptyCart.style.display = "block";
            cartproduct.style.display = "none";
        } else {
            emptyCart.style.display = "none";
            cartproduct.style.display = "block";

            if (idx == 0) {
                let qty = document.querySelector("#q1");
                cartproductsub[idx].style.display = "flex";
                qty.innerText = totalClicks.innerText;

            } else if (idx == 1) {
                let qty = document.querySelector("#q2");
                cartproductsub[idx].style.display = "flex";
                qty.innerText = totalClicks.innerText;
            } else {
                let qty = document.querySelector("#q3");
                cartproductsub[idx].style.display = "flex";
                qty.innerText = totalClicks.innerText;
            }
        }
    });
});

// decrement qty to cart
cat.forEach((item, idx) => {
    minus[idx].addEventListener('click', (event) => {
        const totalClicks = item.querySelector(".add-item");
        if (totalClicks.innerText > 0) {
            totalClicks.innerText = parseInt(totalClicks.innerText) - 1;


            productName = item.querySelectorAll("p")[0]?.innerHTML;
            addedProductObj[productName].count = totalClicks.innerText;

            if (idx == 0) {
                totalPrice0 -= 100;
            } else if (idx == 1) {
                totalPrice1 -= 200;
            } else {
                totalPrice2 -= 300;
            }
            totalPrice = totalPrice0 + totalPrice1 + totalPrice2;
            totalruppe.innerText = totalPrice + " " + '₹';

            //cart 
            console.log(cartproduct);
            if (totalPrice == 0) {
                emptyCart.style.display = "block";
                cartproduct.style.display = "none";
                cartproductsub[idx].style.display = "none";
            } else {
                emptyCart.style.display = "none";
                cartproduct.style.display = "block";

                if (idx == 0) {
                    let qty = document.querySelector("#q1");
                    cartproductsub[idx].style.display = "flex";
                    qty.innerText = totalClicks.innerText;
                    if(qty.innerText==0){
                        cartproductsub[idx].style.display = "none";
                    }

                }else if (idx == 1) {
                    let qty = document.querySelector("#q2");
                    cartproductsub[idx].style.display = "flex";
                    qty.innerText = totalClicks.innerText;
                    if(qty.innerText==0){
                        cartproductsub[idx].style.display = "none";
                    }
                } else {
                    let qty = document.querySelector("#q3");
                    cartproductsub[idx].style.display = "flex";
                    qty.innerText = totalClicks.innerText;
                    if(qty.innerText==0){
                        cartproductsub[idx].style.display = "none";
                    }
                }
            }
        }
    });
});

///add to cart
let cartsign = document.getElementsByClassName("cartsign");
cartsign[0].addEventListener('click',()=>{
    cart.style.display = "block";
    cart.style.boxShadow = "#3F2609 1rem 1rem 20rem 2rem";
})


