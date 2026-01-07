// Variables globales para almacenar los datos
let platinumPS5 = [];
let platinumPS4 = [];
let platinumVita = [];
let platinumPS3 = [];

// Función para obtener la cantidad de elementos de un array
function getArrayLength(array) {
    return array.length;
}

// Función para crear cards de platinos
function createPlatinumCard([image, title, date]) {
    return `
        <div class="card" style="width: 120px;">
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

// Función para mostrar los platinos de PS4
function displayPlatinumPS4() {
    const container = document.getElementById('platinumPS4');
    if (container) {
        const platinumCards = platinumPS4.map(createPlatinumCard).join('');
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

// Función para mostrar los platinos de PS5
function displayPlatinumPS5() {
    const container = document.getElementById('platinumPS5');
    if (container) {
        const platinumCards = platinumPS5.map(createPlatinumCard).join('');
        container.innerHTML = platinumCards;
    }
}

// Función para actualizar contadores
function updateCounters() {
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

    // Obtener y mostrar la cantidad de platinos de PS4
    const totalPS4Platinum = getArrayLength(platinumPS4);
    const countPS4Element = document.getElementById('platinumCountPS4');
    if (countPS4Element) {
        countPS4Element.textContent = `Total: ${totalPS4Platinum}`;
    }

    // Obtener y mostrar la cantidad de platinos de PS5
    const totalPS5Platinum = getArrayLength(platinumPS5);
    const countPS5Element = document.getElementById('platinumCountPS5');
    if (countPS5Element) {
        countPS5Element.textContent = `Total: ${totalPS5Platinum}`;
    }

    // Obtener y mostrar la cantidad de platinos en total
    let totalAllPlatinum = 0;
    totalAllPlatinum += getArrayLength(platinumVita);
    totalAllPlatinum += getArrayLength(platinumPS3);
    totalAllPlatinum += getArrayLength(platinumPS4);
    totalAllPlatinum += getArrayLength(platinumPS5);
    const countAllElement = document.getElementById('platinumAllCount');
    if (countAllElement) {
        countAllElement.textContent = `Los ${totalAllPlatinum} Platinos de JMgranaGaming`;
    }
}

// Función para cargar datos desde archivos JSON
async function loadPlatinumData() {
    try {
        // Cargar todos los archivos JSON en paralelo
        const [ps5Data, ps4Data, vitaData, ps3Data] = await Promise.all([
            fetch('data/platinumPS5.json').then(res => res.json()),
            fetch('data/platinumPS4.json').then(res => res.json()),
            fetch('data/platinumVita.json').then(res => res.json()),
            fetch('data/platinumPS3.json').then(res => res.json())
        ]);

        // Asignar los datos a las variables globales
        platinumPS5 = ps5Data;
        platinumPS4 = ps4Data;
        platinumVita = vitaData;
        platinumPS3 = ps3Data;

        // Mostrar las cards
        displayPlatinumVita();
        displayPlatinumPS4();
        displayPlatinumPS3();
        displayPlatinumPS5();

        // Actualizar contadores
        updateCounters();

    } catch (error) {
        console.error('Error al cargar los datos de platinos:', error);
    }
}

// Iniciar la carga de datos cuando el DOM esté listo
loadPlatinumData();