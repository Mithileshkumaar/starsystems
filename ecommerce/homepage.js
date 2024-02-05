let product = [
      {
            name: "Iphone 13",
            price: 11599,
            delivery: '2nd feb',
            image: "../assests/apple-iphone-13-512-gb-starlight-digital-o491997710-p590798565-1-202203092111.webp"
      },
      {
            name: "Titan watch",
            price: 19599,
            delivery: '10th feb',
            image: "../assests/1698KM02_1.webp"
      },
      {
            name: "MacBook Air",
            price: 89000,
            delivery: '13th feb',
            image: "../assests/mac-card-40-macbook-air-202310_FMT_WHH.jpeg"
      }
];

const cardList = document.getElementById('products-wrapper');
const cartList = document.getElementById('cart-list');
const totalItemCount = document.getElementById('total-count');

let cartItems = [];

for (let i = 0; i < product.length; i++) {
      let number = 0;

      const card = document.createElement('div');
      card.className = 'card';
      const image = document.createElement('img');
      image.src = product[i].image;
      image.height = '200';
      const name = document.createElement('h1');
      name.textContent = product[i].name;
      const price = document.createElement('h2');
      price.textContent = `Rs ${product[i].price}`;
      const delivery = document.createElement('h2');
      delivery.textContent = `Deliver within: ${product[i].delivery}`;
      const qtyDiv = document.createElement('div');
      qtyDiv.className = 'qty';
      const qtyLabel = document.createElement('div');
      qtyLabel.textContent = 'QTY:';
      const decrementBtn = document.createElement('button');
      decrementBtn.textContent = '-';
      decrementBtn.onclick = () => decrement(i);
      decrementBtn.disabled = true;
      decrementBtn.id = `decrementBtn${i}`;
      const displayQty = document.createElement('h4');
      displayQty.textContent = '0';
      displayQty.id = `Display${i}`;
      const incrementBtn = document.createElement('button');
      incrementBtn.textContent = '+';
      incrementBtn.onclick = () => increment(i);

      qtyDiv.appendChild(qtyLabel);
      qtyDiv.appendChild(decrementBtn);
      qtyDiv.appendChild(displayQty);
      qtyDiv.appendChild(incrementBtn);

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(delivery);
      card.appendChild(qtyDiv);

      cardList.appendChild(card);
      //       cardList.innerHTML +=
      //             `<div class="card">
      //             <img src="${product[i].image}" height="200px"></img>
      //             <h1> ${product[i].name}</h1>
      //             <h2>Rs ${product[i].price}</h2>
      //             <h2>Deliver within: ${product[i].delivery}</h2>
      //             <div class="qty" style="display: flex;">
      //                 <div style="padding-top: 5px;">QTY:</div>
      //                 <button onclick="decrement(${i})" disabled id="decrementBtn${i}" style="margin: 0px 6px 0px 20px;">-</button>
      //                 <h4 id="Display${i}" style="margin: 0px 2px 0px 2px; padding-top: 5px;">0</h4>
      //                 <button onclick="increment(${i})" style="margin: 0px 2px 0px 6px;">+</button>
      //             </div>
      //         </div>`;
}

function updatenumber(index) {
      let number = parseInt(document.getElementById(`Display${index}`).innerHTML);
      if (number === 0) {
            document.getElementById(`decrementBtn${index}`).disabled = true;
      } else {
            document.getElementById(`decrementBtn${index}`).disabled = false;
      }
      updateTotalCount();
}

function increment(index) {
      let display = document.getElementById(`Display${index}`);
      let number = parseInt(display.innerHTML);
      number++;
      display.innerHTML = number;
      updatenumber(index);
      updateCartItems(product[index], number);
}

function decrement(index) {
      let display = document.getElementById(`Display${index}`);
      let number = parseInt(display.innerHTML);
      if (number > 0) {
            number--;
            display.innerHTML = number;
            updatenumber(index);
            updateCartItems(product[index], number);
      }
}

function updateTotalCount() {
      let totalCount = 0;
      for (let i = 0; i < product.length; i++) {
            totalCount += parseInt(document.getElementById(`Display${i}`).innerHTML);
      }
      totalItemCount.textContent = totalCount;
}


function updateCartItems(product, quantity) {
      let index = cartItems.findIndex(item => item.product.name === product.name);
      if (index !== -1) {
            cartItems[index].quantity = quantity;
      }
      else {
            cartItems.push({ product: product, quantity: quantity, });
      }
      renderCartItems();
}
function renderCartItems() {
      cartList.innerHTML = '';
      cartItems.forEach(item => {
            if (item.quantity > 0) {
                  cartList.innerHTML +=
                        `<li>${item.product.name} - Quantity: ${item.quantity}</li>

                        `;
            }
      });
}


function press() {
      // document.getElementById("dropdown").addEventListener("click", myfunction());

      document.getElementById('dropdown').classList.toggle("dropdown-styles");
      cartList.innerHTML +=
            `<li>${item.product.name} - Quantity: ${item.quantity}</li>`;


}


