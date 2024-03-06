const slider = document.querySelector('.slider');
// richiamo container di tutte le img: all-img
const allImg = document.querySelector('.all-images');
// adesso nel for concateno allImg += 

// 4
// richiamo bottoni
const sopra = document.querySelector('.sopra');
const sotto = document.querySelector('.sotto');

// contatore
let counterImg = 0;

// 2
// tutte le immagini
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
]

// ciclo
for (let i = 0; i < images.length; i++){
  const img = images [i];
  // console.log(img)
  allImg.innerHTML += `<img class="foto hide" src="${img}">`
  // in questo modo ho tutte le immagini
}

// 3
// prendo tutte le immagini e devo dargli una classe direttamente qui su js: foto
const fotoCollection = document.getElementsByClassName('foto');
// getElementsByClassName restituisce un HTML COLLECTION: un array che come elementi contiene un elemento html

// identifico il primo elemento e tolgo hide
fotoCollection[0].classList.remove('hide');

// 4
// incremento bottone sotto
sotto.addEventListener('click', function(){
  // quando clicco la freccia aggiungo hide all'incremento
  fotoCollection[counterImg++].classList.add('hide');
  
  // se il contatore è maggiore o uguale alla lunghezza delle immagini, ritorna a 0
  if(counterImg >= fotoCollection.length){
    counterImg = 0;
  }

  // img corrente
  fotoCollection[counterImg].classList.remove('hide');
})


// decremento bottone sopra
sopra.addEventListener('click', function(){
  console.log(counterImg);
  
  // img corrente
  fotoCollection[counterImg].classList.add('hide');

  if(counterImg === 0){
    counterImg = images.length-1;
  }else{
    counterImg--;
  }

  // quando clicco la freccia tolgo hide al decremento
  fotoCollection[counterImg].classList.remove('hide');
})

let slideAutomatico = setInterval(() =>{
    // quando clicco la freccia aggiungo hide all'incremento
  fotoCollection[counterImg++].classList.add('hide');
  
  // se il contatore è maggiore o uguale alla lunghezza delle immagini, ritorna a 0
  if(counterImg >= fotoCollection.length){
    counterImg = 0;
  }

  // img corrente
  fotoCollection[counterImg].classList.remove('hide');
},3000)

// meglio mouseenter
slider.addEventListener('mouseover', () =>{
  clearInterval(slideAutomatico);
  console.log('sto entrando')
})

// meglio mouseleave
// quando voglio far riaprtire nuovamente il timer devo ricopiare tutto slideAutomatico, quindi quando il cursore si sposta fuori, devo ridare tutte le opzioni che ho dato per far muovere le immagini
slider.addEventListener('mouseout', () =>{
  slideAutomatico = setInterval(() =>{
    // quando clicco la freccia aggiungo hide all'incremento
  fotoCollection[counterImg++].classList.add('hide');
  
  // se il contatore è maggiore o uguale alla lunghezza delle immagini, ritorna a 0
  if(counterImg >= fotoCollection.length){
    counterImg = 0;
  }

  // img corrente
  fotoCollection[counterImg].classList.remove('hide');
},3000)
  console.log('sto uscendo')
})

// if(slider.onmouseenter){
//   console.log('hover');
// }


// Bottone “Incremento” (sotto):
// Quando viene cliccato, viene eseguito il seguente codice:
// Aggiunge la classe CSS “hide” all’immagine corrente (quella visualizzata).
// Incrementa il contatore counterImg.
// Se il contatore supera o è uguale alla lunghezza totale delle immagini (fotoCollection), lo riporta a 0.
// Rimuove la classe “hide” dall’immagine corrente successiva.
// In pratica, questo bottone passa all’immagine successiva.

// Bottone “Decremento” (sopra):
// Quando viene cliccato, viene eseguito il seguente codice:
// Aggiunge la classe CSS “hide” all’immagine corrente.
// Controlla se il contatore è uguale a 0:
// Se sì, imposta il contatore all’indice dell’ultima immagine.
// Altrimenti, decrementa il contatore.
// Rimuove la classe “hide” dall’immagine corrente.
// In pratica, questo bottone passa all’immagine precedente.
