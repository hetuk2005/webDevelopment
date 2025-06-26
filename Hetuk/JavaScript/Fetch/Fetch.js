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

const api =  'https://fakestoreapi.com/products';

const Apicalling = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById('info');

  data.forEach((element) => {
    let cardDiv = document.createElement('div');
    let img = document.createElement('img');
      let title = document.createElement('h5');
      let price = document.createElement('p');
      let description = document.createElement('p');
      let category = document.createElement('p');
      let rating = document.createElement('div');
      let rate = document.createElement('p');
    let count = document.createElement('p');
    
    cardDiv.className = 'card_div';
      
    rating.className = 'rating';

    price.className = 'price';
    
    description.className = 'description';
    
    category.className = 'category';
    
    rate.className = 'rate';
    
    count.className = 'count';
    
    img.src = element.image;

    title.innerText = element.title;

    price.innerText = element.price;

    description.innerText = element.description;
      
    category.innerText = element.category;

      rate.innerText = element.rating.rate;
      
      count.innerText = element.rating.count;
    
      rating.append(rate, count);

    cardDiv.append(img, title, price, description, category, rating);

      dataShow.append(cardDiv);
  });
};

// task

// https://fakestoreapi.com/products