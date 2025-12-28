const platinumVita = [["https://img.psnprofiles.com/trophy/s/1497/afe2e430-de75-4022-a077-6f455d8c36bf.png", "LEGO Batman 2: DC Super Heroes", "27/08/2014"],
 ["https://img.psnprofiles.com/trophy/s/2633/48d286f6-59ea-4f08-8ffc-859c0115682b.png", "PlayStation Vita Pets", "13/07/2014"], 
 ["https://img.psnprofiles.com/trophy/s/1296/2d7ea69a-20c3-481a-8629-c6392db1bbec.png", "Uncharted: Golden Abyss", "27/03/2014"]];



// Función para crear cards de platinos
function createPlatinumCard([image, title, date]) {
    return `
        <div class="card" style="width: 100px;">
            <img src="${image}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <p>${title}</p>
                <p>${date}</p>
            </div>
        </div>
    `;
}

// Función para mostrar los platinos de PSVita
function displayPlatinumVita() {
    const container = document.getElementById('platinumPSVita');
    if (container) {
        const platinumCards = platinumVita.map(createPlatinumCard).join('');
        container.innerHTML = platinumCards;
    }
}

// Ejecutar la función para mostrar los platinos
displayPlatinumVita();