let api = "https://fakestoreapi.com/products";

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appends(res))
    .catch((err) => console.log(err));
};
