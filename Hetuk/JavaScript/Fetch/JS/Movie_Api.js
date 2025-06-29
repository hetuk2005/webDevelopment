const api = 'https://www.omdbapi.com/?s=avengers&apikey=3d15e923';

const ApiCalling = () => {
    fetch(api)
        .then((res) => res.json())
        .then((res) => appendsFunc(res))
        .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
    
    let mainDiv = document.getElementById('info');

    data.Search.forEach(hello => {
        
        const cardDiv = document.createElement('div');
        const img = document.createElement('img');

        const nameDiv = document.createElement('div');
        const title = document.createElement('h3');

        const gridDiv = document.createElement('div');
        const year = document.createElement('p');
        const imdb = document.createElement('p');
        const type = document.createElement('p');

        cardDiv.className = 'card_div';
        nameDiv.className = 'name_div';
        gridDiv.className = 'grid_div';

        img.src = hello.Poster;
        title.innerText = `Title: ${hello.Title}`;
        year.innerText = `Year: ${hello.Year}`;
        imdb.innerText = `Imdb ID: ${hello.imdbID}`;
        type.innerText = `Type: ${hello.Type}`;

        gridDiv.append(year, imdb, type);
        nameDiv.append(title, gridDiv);
        cardDiv.append(img, nameDiv);
        mainDiv.append(cardDiv);
    });
}