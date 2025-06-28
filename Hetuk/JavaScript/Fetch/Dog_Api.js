const api = 'https://api.thedogapi.com/v1/images/search?limit=10&ids=beng&api_key=live_4AxWixUUgWVNxjEhWYkQkK09C8Aw5e52sSUCMfGklcxgS1kJUHIz5JhmjMa1C505';

const ApiCalling = () => {
    fetch(api)
        .then((res) => res.json())
        .then((res) => appendsFunc(res))
        .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
    let mainDiv = document.getElementById('info');

    data.forEach(element => {
        
        let breed = element.breeds[0];

        const cardDiv = document.createElement('div');
        const img = document.createElement('img');

        const detailBreed = document.createElement('div');
        const id = document.createElement('p');
        const name = document.createElement('h3');

        const gridDiv = document.createElement('div');
        const width = document.createElement('p');
        const height = document.createElement('p');
        const breed_group = document.createElement('p');
        const life_span = document.createElement('p');

        cardDiv.className = 'card_div';
        gridDiv.className = 'grid_div';
        detailBreed.className = 'detail_breed';

        img.src = element.url;
        id.innerText = `Id: ${element.id}`;
        name.innerText = breed.name;
        width.innerText = `Width: ${element.width}`;
        height.innerText = `Height: ${element.height}`;
        breed_group.innerText = `Breed Group: ${breed.breed_group}`;
        life_span.innerText = `Life Span: ${breed.life_span}`;

        gridDiv.append(width, height, breed_group, life_span);
        detailBreed.append(id, name, gridDiv);
        cardDiv.append(img, detailBreed);
        mainDiv.append(cardDiv);

    });
}