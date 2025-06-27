const Api_Key = 'live_bxAXdnQu3q8aDrjTeIG2rLwQEc4t7cpCb94MhUZ2JlZjObLB2WOJnhdgTbUZD7Nf';

const api = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${Api_Key}`;

const Apicalling = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let mainDiv = document.getElementById('info');

    data.forEach((el) => {

        let breed = el.breeds[0];

        // Cards

        const cardDiv = document.createElement('div');
        const img = document.createElement('img');
        const id = document.createElement('p');

        // Detail Card

        const detailDiv = document.createElement('div');
        const height = document.createElement('p');
        const width = document.createElement('p');

        // Breeds Section

        const detailDiv1 = document.createElement('div');
        const name = document.createElement('h3');
        const description = document.createElement('p');
        const origin = document.createElement('p');
        const life_span = document.createElement('p');

        // ClassName

        cardDiv.className = 'card_div';
        detailDiv.className = 'detail_div';
        detailDiv1.className = 'detail_div1';

        // Data Setting

        name.innerText = `Name: ${breed.name}`;
        name.innerText = `Description: ${breed.description}`;
        name.innerText = `Origin: ${breed.origin}`;
        name.innerText = `Life-Span: ${breed.life_span}`;

        img.src = el.url;
        id.innerText = `Id: ${el.id}`;
        height.innerText = `Height ${el.height}`;
        width.innerText = `Width ${el.width}`;

        // Append

        detailDiv.append(width, height, origin, life_span);
        detailDiv1.append(id, name, detailDiv, description);
        cardDiv.append(img,detailDiv1);
        mainDiv.append(cardDiv);

    });
};