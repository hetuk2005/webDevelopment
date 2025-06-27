const api =  'https://dog.ceo/api/breeds/list/all';

const Apicalling = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById('info');

  for(let breed in data.message) {
    let cardDiv = document.createElement('div');
    let title = document.createElement('h6');
      
    cardDiv.className = 'card_div';
      
    title.className = 'title';

    title.innerText = breed;

    cardDiv.append(title);

    dataShow.append(cardDiv);
  };
};