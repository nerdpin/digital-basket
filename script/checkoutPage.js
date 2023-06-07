
let img_src = sessionStorage.getItem("img_src");
let title = sessionStorage.getItem("title");
let price = JSON.parse(localStorage.getItem('dp'))
let original_price = JSON.parse(localStorage.getItem('op'))
let tax = (((+price) / 100) * 18).toFixed(2);
let total_price = (+price + +tax).toFixed(2);
let saved_price = (+original_price - +price).toFixed(2);
let qty = sessionStorage.getItem("qty");

// let price = (total_price-tax).toFixed(2);

let item_details = document.getElementById("item_details");
let right_item_details = document.getElementById("right_item_details");
let right_checkout_price = document.getElementById("right_checkout_price");
let address_subm_btn = document.getElementById("address_subm");
let form = document.getElementById("add_form");
let address = document.getElementById("userAddress");
let saving = document.getElementById("saving");

// setting details on DOM
// item_details.innerHTML = 
// `
//        <img class="product_image"
//               src="${img_src}"
//               alt="">
//        <p class="product_title">${title}</p>
// `;

// right_item_details.innerHTML = 
// `
//       <img src="${img_src}"
//               alt="">
//        <p id="title">${title}</p>
//        <div>
//               <p id="price">$${price}</p>
//               <p>Qty 1</p>
//               <a href="">Remove</a>
//        </div> 
// `;

// right_checkout_price.innerHTML = 
// `
//       <div class="right_checkout_price_box">
//               <p>Item Subtotal</p>
//               <p>$${price}</p>
//        </div>
//        <div class="right_checkout_price_box">
//               <p>Shipping</p>
//               <p>FREE</p>
//        </div>
//        <div class="right_checkout_price_box">
//               <p>Estimated Sales Tax</p>
//               <p>$${tax}</p>
//        </div>
//        <p>You're saving $200 on your order today!</p>
//        <div class="right_checkout_price_box">
//               <h2>Total</h2>
//               <h2>$${total_price}</h2>
//        </div> 
// `

let checkout_price = document.getElementById("checkout_price");
let checkout_tax = document.getElementById("checkout_tax");
let checkout_total = document.getElementById("checkout_total");

checkout_price.innerText = `$${price}`;
checkout_tax.innerText = `$${tax}`;
checkout_total.innerText = `$${total_price}`;
saving.innerText = `You're saving $${saved_price} on your order today!`;

// adding event listener to address button

address_subm_btn.addEventListener("click", setData);

async function setData(event){
       event.preventDefault();
       form.style.display = "none";
       address.style.display = "block";

       let firstName = document.getElementById("inputFirstName").value;
       let lastName = document.getElementById("inputLastName").value;
       let address1 = document.getElementById("inputAddress").value;
       let address2 = document.getElementById("inputAddress2").value;
       let city = document.getElementById("inputCity").value;
       let state = document.getElementById("inputState").value;
       let zip = document.getElementById("inputZip").value;

       let obj = {
              firstName,
              lastName,
              address1,
              address2,
              city,
              state,
              zip
       }

       sessionStorage.setItem("user_details", JSON.stringify(obj));

       
}