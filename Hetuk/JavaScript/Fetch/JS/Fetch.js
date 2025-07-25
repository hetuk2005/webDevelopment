// const api = 'https://jsonplaceholder.typicode.com/posts';

// let dataShow = document.getElementById('info');

// const Apicalling = () => {
//     fetch(api)
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.log('Error: ', err));

//     let h1 = document.createElement('h1');
//     h1.innerText = 'Hello Hetuk Patel';
//     dataShow.append(h1);
// };

const api = "https://fakestoreapi.com/products";

const Apicalling = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById("info");

  data.forEach((element) => {
    let cardDiv = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h5");
    let price = document.createElement("p");
    let description = document.createElement("p");
    let category = document.createElement("p");
    let rating = document.createElement("div");
    let rate = document.createElement("p");
    let count = document.createElement("p");
    let cart_btn = document.createElement("img");

    cardDiv.className = "card_div";
    rating.className = "rating";
    price.className = "price";
    description.className = "description";
    category.className = "category";
    rate.className = "rate";
    count.className = "count";
    cart_btn.className = "cart_btn";
    img.className = "div_image";

    cart_btn.src = "./Cart.svg";
    img.src = element.image;
    title.innerText = element.title;
    price.innerHTML = `<b><u>Price</u>: ${element.price}</b>`;
    description.innerHTML = `<b><u>Description</u>: ${element.description}</b>`;
    category.innerHTML = `<b><u>Category</u>: ${element.category}</b>`;
    rate.innerHTML = `<b><u>Rate</u>: ${element.rating.rate}</b>`;
    count.innerHTML = `<b><u>Count</u>: ${element.rating.count}</b>`;

    rating.append(rate, count);
    cardDiv.append(img, title, price, description, category, rating, cart_btn);
    dataShow.append(cardDiv);
  });
};
