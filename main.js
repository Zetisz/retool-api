const API_URL = 'https://retoolapi.dev/CHwKt2/data';

let adatok = [];

async function init() {
    const response = await (fetch(API_URL));
    console.log('Headerek letöltve');

    adatok = await response.json();
    const table = document.getElementById('tablazat');
    for (const auto of adatok) {
        const tr = document.createElement('tr');
        const modell = document.createElement('td');
        const szin = document.createElement('td');
        const evjarat = document.createElement('td');

        modell.textContent = auto.modell;
        szin.textContent = auto.szín;
        evjarat.textContent = auto.évjárat;

        tr.appendChild(modell);
        tr.appendChild(szin);
        tr.appendChild(evjarat);
        table.appendChild(tr)

        if (auto.szín == "fekete") {
            tr.style.background = "#505a6c";
            modell.style.color = "whitesmoke";
            szin.style.color = "whitesmoke";
            evjarat.style.color = "whitesmoke";
        }
        else if (auto.szín == "piros") {
            tr.style.background = "crimson";
            modell.style.color = "whitesmoke";
            szin.style.color = "whitesmoke";
            evjarat.style.color = "whitesmoke";
        }
    }
    console.log('Tartalom letöltve');
}
init();
console.log('Betöltött');