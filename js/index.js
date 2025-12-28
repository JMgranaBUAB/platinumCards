const platinumVita = [
    ["https://img.psnprofiles.com/trophy/l/5532/55e02a90-ce65-4b6b-8b15-a0a9971f19cd.png", "My Name is Mayo", "08/11/2017"],
    ["https://img.psnprofiles.com/trophy/l/3926/f186b34b-fb02-4ba2-8602-2c3029f9dbf6.png", "Farming Simulator 16", "25/08/2017"],
    ["https://img.psnprofiles.com/trophy/l/2630/efc3cd7c-9120-493b-9ce1-0c4968f5bd41.png", "Farming Simulator 14", "05/01/2017"],
    ["https://img.psnprofiles.com/trophy/l/2000/ea170da2-b5b7-4ddd-ba26-8edff1b650d3.png", "MotoGP 13", "22/05/2016"],
    ["https://img.psnprofiles.com/trophy/l/4103/b9eb7aeb-0f8c-4f91-93a2-fb95bf32ce39.png", "BigFest", "09/03/2016"],
    ["https://img.psnprofiles.com/trophy/l/1448/3ad1ff19-47e3-490d-8bc2-d4d6cbdbdd05.png", "Resistance: Burning Skies", "06/03/2016"],
    ["https://img.psnprofiles.com/trophy/l/2086/0a4af297-c45c-48f5-8903-a3f25cbfbe6d.png", "The Walking Dead", "22/11/2014"],
    ["https://img.psnprofiles.com/trophy/l/1947/eff1a012-7686-4756-b845-a1cf9ce119f6.png", "Farming Simulator", "09/11/2014"],
    ["https://img.psnprofiles.com/trophy/l/1372/acfe6141-aced-42d4-b046-c52e9700bb0a.png", "LEGO Harry Potter: Years 5-7", "27/09/2014"],
    ["https://img.psnprofiles.com/trophy/l/1497/afe2e430-de75-4022-a077-6f455d8c36bf.png", "LEGO Batman 2: DC Super Heroes", "27/08/2014"],
    ["https://img.psnprofiles.com/trophy/l/2633/48d286f6-59ea-4f08-8ffc-859c0115682b.png", "PlayStation Vita Pets", "13/07/2014"],
    ["https://img.psnprofiles.com/trophy/l/1296/2d7ea69a-20c3-481a-8629-c6392db1bbec.png", "Uncharted: Golden Abyss", "27/03/2014"]];

const platinumPS3 = [
    ["https://img.psnprofiles.com/trophy/l/1198/8e2524e1-b633-423f-bd44-694c91adc466.png", "Heavy Fire: Afghanistan", "09/09/2019"]];


// Función para obtener la cantidad de elementos de un array
function getArrayLength(array) {
    return array.length;
}

// Función para crear cards de platinos
function createPlatinumCard([image, title, date]) {
    return `
        <div class="card" style="width: 100px;">
            <img src="${image}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <p class="cardTitle">${title}</p>
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

// Función para mostrar los platinos de PS3
function displayPlatinumPS3() {
    const container = document.getElementById('platinumPS3');
    if (container) {
        const platinumCards = platinumPS3.map(createPlatinumCard).join('');
        container.innerHTML = platinumCards;
    }
}

// Ejecutar la función para mostrar los platinos
displayPlatinumVita();
displayPlatinumPS3();

// Obtener y mostrar la cantidad de platinos de PSVita
const totalVitaPlatinum = getArrayLength(platinumVita);
const countVitaElement = document.getElementById('platinumCountVita');
if (countVitaElement) {
    countVitaElement.textContent = `Total: ${totalVitaPlatinum}`;
}

// Obtener y mostrar la cantidad de platinos de PS3
const totalPS3Platinum = getArrayLength(platinumPS3);
const countPS3Element = document.getElementById('platinumCountPS3');
if (countPS3Element) {
    countPS3Element.textContent = `Total: ${totalPS3Platinum}`;
}

// Obtener y mostrar la cantidad de platinos en total
let totalAllPlatinum = 0;
totalAllPlatinum += getArrayLength(platinumVita);
totalAllPlatinum += getArrayLength(platinumPS3);
const countAllElement = document.getElementById('platinumAllCount');
if (countAllElement) {
    countAllElement.textContent = `Los ${totalAllPlatinum} Platinos de JMgranaGaming`;
}