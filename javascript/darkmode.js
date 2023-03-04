
    let mode = 'day'
    let header= document.querySelector('header')
    let li = document.querySelectorAll('li')
    let pointer = document.getElementById('pointer')
    let lente = document.getElementById('lente')
    let main=document.querySelector('main')
    let pub= document.querySelector('h1')
    let body=document.querySelector('body')
    let apple=document.getElementById('eppol')
    let kart=document.getElementById('kart')
    let input=document.getElementById('search2')
    let nome = document.querySelector('#nomeCard')
function dark(){ 
    if(mode=='day'){
        header.classList.add('darkheader')
        li.forEach((lo)=>{
            lo.classList.add('darkli')
        })
        pointer.src="./img/darkmode.svg"
        lente.src="./img/darksearch.svg"
        main.classList.add('darkmain')
        pub.classList.add('darkkpub')
        body.classList.add('darkbody')
        apple.src="./img/whiteapple.svg"
        kart.src="./img/whitekart.svg"
        input.classList.add('darksearch2')
        mode='dark'

        
    }
    else{
        header.classList.remove('darkheader')
        li.forEach((lo)=>{
            lo.classList.remove('darkli')
        })
        pointer.src="./img/whitemode.svg"
        lente.src="./img/search.png"
        main.classList.remove('darkmain')
        pub.classList.remove('darkkpub')
        body.classList.remove('darkbody')
        apple.src="./img/apple.png"
        kart.src="./img/carrello.png"
        input.classList.remove('darksearch2')
        mode='day'
    }
}

