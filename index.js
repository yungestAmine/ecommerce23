function creaCard(img, articolo){
    return `
    <div class="card">
        <div class="imgCard">
            <img src="${img}">
        </div>
        <div class="textCard">
            <!-- <div class="nomeCard">`+articolo+`</div> -->
            <div id="nomeCard">${articolo}</div>
            <button id="compra" onclick="aggiungi('${img}', '${articolo}')">compra</button>
        </div>
    </div>
`;
}
//a.substring permette di ritagliare le stringhe
function pulire(categoria){
    //Pulire le card già visibili
    //document.querySelector(".card-group").innerHTML = "";

    let cards = ``;
    //Individuo gli articoli appartenenti a quella categoria
    //Su più vettori PARALLELI uso for-in o for classico
    
            cards += creaCard(images[i], articoli[i]);

    document.querySelector(".results-area").innerHTML = cards;
}

//METODO 1 (INTERCETTO il CHANGE, prelevo con getElementByID l'INPUT e richiamo filtraNome)

function intercettaCambiamento(evento){
    filtra(evento.srcElement.value+evento.key);
}

function filtra(testo){
    let cards = ``;
    for(let i in articoli){
        //.toLowerCase() permette di trasformare l'intera stringa in minuscolo
        //stringaCompleta.includes(sottoStringa) -> ritorna true se trova la sottoStringa in stringaCompleta
        if(articoli[i].toLowerCase().includes(testo.toLowerCase())){
            cards += creaCard(images[i], articoli[i]);
        }
    }

    document.querySelector(".results-area").innerHTML = cards;
}

ScrollReveal().reveal('main', {
    delay: 375,
    duration: 500,
    distance: '50px'
});


function blurr(){
    let main = document.querySelector('main')
    let header = document.querySelector('header')
    let ricerca= document.getElementById('search2')
    let ul = document.getElementById('el')
    ricerca.style.display= 'block'
    ul.style.animation= 'compari 1s'
    main.style.filter ='blur(10px)'
}
function comeback(){
    let main = document.querySelector('main')
    main.style.filter = "blur(0px)"
    let ricerca= document.getElementById('search2')
    ricerca.style.display= 'none'
}

let areaCart = document.querySelector('.cartHere')
let cards = ``;
function aggiungi(img, articolo)
{   
    if(confirm("Vuoi veramente acquistare "+ articolo+"?")){
        alert("Ti ringrazio per l'acquisto!");
         cards = creaShop(img, articolo);    
         areaCart.innerHTML += cards    
    }    
}
function creaShop(img, nome){
    return `
    <div id="shp">
        <div>
        <img style="width: 50px;"src="${img}">        
        </div
        <div>
        <h2 style="color:#fff;">${nome}</h2>
        </div>
    </div>
    `
}

function puliscicart(){
    if(confirm("Vuoi veramente svuotare il carrello?")){
        alert("ok come vuoi");
        let cards = ``;
        areaCart.innerHTML = cards
    }
    
}

