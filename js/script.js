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
// array di oggetti
const images = [
  {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },

  {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },

  {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
];


// ciclo
for (let i = 0; i < images.length; i++){
  const img = images [i];
  // console.log(img)
  allImg.innerHTML += `
  <div class="elements hide">
    <img class="img-fluid" src="${img.url}" alt="${img.title} picture">
    <div class="item-description px-3">
        <h2>${img.title}</h2>
        <p>${img.description}</p>
    </div>
  </div>
  `
  // in questo modo ho tutte le immagini
}

// 3
// prendo tutte le immagini e devo dargli una classe direttamente qui su js: foto
const elementiCollection = document.getElementsByClassName('elements');
// getElementsByClassName restituisce un HTML COLLECTION: un array che come elementi contiene un elemento html

// identifico il primo elemento e tolgo hide
elementiCollection[0].classList.remove('hide');

// 4
// incremento bottone sotto
sotto.addEventListener('click', function(){
  // quando clicco la freccia aggiungo hide all'incremento
  elementiCollection[counterImg++].classList.add('hide');
  
  // se il contatore è maggiore o uguale alla lunghezza delle immagini, ritorna a 0
  if(counterImg >= elementiCollection.length){
    counterImg = 0;
  }

  // img corrente
  elementiCollection[counterImg].classList.remove('hide');
})


// decremento bottone sopra
sopra.addEventListener('click', function(){
  console.log(counterImg);
  
  // img corrente
  elementiCollection[counterImg].classList.add('hide');

  if(counterImg === 0){
    counterImg = images.length-1;
  }else{
    counterImg--;
  }

  // quando clicco la freccia tolgo hide al decremento
  elementiCollection[counterImg].classList.remove('hide');
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
