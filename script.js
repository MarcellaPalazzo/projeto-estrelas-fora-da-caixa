const numeroMaximoDePersonagens = 671; 

const generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

const getCharacter = (num) => {
    const id = generateRandomNumber();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        const tagFoto = document.getElementById(`foto-${num}`);
        const tagNome = document.getElementById(`nome-${num}`);

        tagFoto.src = data.image;
        tagFoto.alt = 'Imagem do personagem: ' + data.name;

        tagNome.textContent = data.name;
    })
}

const getCharacters = () => {
    [1, 2, 3, 4].forEach(num => getCharacter(num));
}

getCharacters();