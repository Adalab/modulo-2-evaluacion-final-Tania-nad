"use strict";

/* Búsqueda de la serie en el servidor
Cuando la usuaria haga click en buscar:
    Se recoge el dato del casillero
    Se construye la url
    Se hace la petición al servidor
    Por cada serie contenida en el resultado
        Pinto la serie en la página

1- Selecciono los elementos HTML (input de búsqueda,botón de buscar y sección para pintar las series seleccionadas)
2- Escucho el click del botón
3- Recojo el valor del input
4- Petición al servidor con la nueva url
5- Por cada serie contenida en el resultado de la url
    Pinto la serie en el html

*/

const inputText = document.querySelector(".js-input");
const buttonSearch = document.querySelector(".js-button");
const contentSearch = document.querySelector(".js-content");
let seriesList = [];

function handleButton() {
    const inputSearch = inputText.value;
    fetch(`https://api.jikan.moe/v4/anime?q=${inputSearch}`)
        .then((response) => response.json())
        .then(info => {

            seriesList = info.data;
            for (const serie of seriesList) {
                let content = "";
                content += `<div><h2>${serie.title}</h2>`
                content += "</div>";
                contentSearch.innerHTML += content;
            }
            console.log(seriesList);




        })

}



buttonSearch.addEventListener("click", handleButton);

