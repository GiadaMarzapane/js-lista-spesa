const spesa = [
    'Pane',
    'Latte',
    'Biscotti',
    'Marmellata',
    'Yogurt'
]

const baseElement = document.querySelector("ul");

// CICLO WHILE

let index = 0;
while(index < spesa.length){
    const element = spesa[index];
    baseElement.innerHTML += `<li> ${element} </li>`;
    index++
}