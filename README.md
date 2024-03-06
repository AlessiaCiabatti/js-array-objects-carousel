Carosello Mono Array
===
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

## SVOLGIMENTO
1. creiamo il markup statico:
  - costruiamo il container e inseriamo un’immagine grande al centro

2. rimuoviamo tutto il markup statico:
  - inseriamo tutte le immagini dinamicamente servendoci dell’array
  - ciclo for che concatena il template literal delle img, tutte le immagini saranno display: none

3. togliere la classe hide solo alla prima immagine
  - devo prendere tutti gli elementi
  - identificare il primo e togliere la classe hide

4. Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente
  - creare un contatore (counter) partendo dalla prima img cioè 0
  - devo incrementare e decrementare questo counter quando clicco le frecce
    - creare in HTML gli elementi con freccia, btn top e bottom, richiamarli in js

5. al click del mouse devo aggiungere la classe hide alle immagini che si incrementano e che si decrementano

6. all'immagine corrente rimuovo la classse hide

7. **ciclo infinito** Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa
  - se io sono sulla prima img, e clicco la freccia sopra, mi appare l'ultima img
  - se sono sull'ultima img e clicco sulla freccia sotto, mi appare la prima img

===
Riprendendo il carousel realizzato in passato  e con le Timeng Function rendete lo scroll automatico ogni 3 secondi.
Attenzione: dopo l’ultima slide deve riapparire la prima e così via

## SVOLGIMENTO
1. devo realizzare un setInterval di 3 secondi, il quale faccia alternare automaticamente le foto
  - all'interno di setInterval devo copiare ed incollare le funzioni che permettono lo slide delle foto

2. quando con mouse vado sopra tutto o slider, il setInterval di 3 secondi non deve più entrare in funzione
  - se il mouse è sopra lo slide, setInterval si blocca
  - quando tolgo il mouse deve ripartire lo slide automatico


===

## SVOLGIENTO
1. Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

2. realizzare un ciclo e richiamare in js il contenitore delle img, title, e p
  - concateno

3. togliere hide dalla prima immagine

4. al click delle frecce l'immagine deve cambiare