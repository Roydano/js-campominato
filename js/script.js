


// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50







//? CREARE 16 NUMERI CASUALI DA 1 A 100 ED INSERIRLI DENTRO UN ARRAY IN MODO CHE NON SI RIPETANO


//* array che contiene i numeri random del campo minato

var numeriPc = [];

//* condizione per fare si che i numeri vengano inseriti nell'array solo se non sono già stati inseriti

while(numeriPc.length < 16){
    var genRandom = randomNum(1, 100);

    if(!numeriPc.includes(genRandom)){
        numeriPc.push(genRandom);
    }
}

//* in questo modo usiamo la funzione creata per ordinare i numeri in modo crescente

numeriPc.sort(orderNum);

console.log(numeriPc);


//? CHIEDERE ALL'UTENTE DI INSERIRE 100 - 16 VOLTE UN NUMERO COMPRESO TRA 1 E 100 SENZA INSERIRE 2 VOLTE LO STESSO NUMERO

//* array che contiene i numeri inseriti dall'utente

var numeriUser = [];
//* condizione per far si che se l'utente inserisce due volte lo stesso numero il programma lo avverte e ne fa inserire un altro

while(numeriUser.length < (100 - 16)){

    var scelta = parseInt(prompt('Inserisci un numero da 1 a 100'));

    if(!numeriPc.includes(scelta)){

        if(numeriUser.includes(scelta)){
            alert('Il numero è già stato inserito...perfavore provane un altro!');
        } else{
            numeriUser.push(scelta);
        }
    } else{
        if(numeriUser.length >= 16){
            alert('Complimenti! Nonostante tu non sia riuscito a completare il gioco hai piazzato ' + numeriUser.length + ' numeri!');
        } else if(numeriUser.length == 1){
            alert('Mi dispiace ma hai piazzato solamente un numero!');
        } else if(numeriUser.length == 0){
            alert('Accidenti che sfortuna! Non sei riuscito a piazzare nessun numero!');
        } else{
            alert('Mi dispiace ma hai piazzato solamente ' + numeriUser.length + ' numeri!')
        }
        break;

    }

    console.log(scelta);
}

//* in questo modo usiamo la funzione creata per ordinare i numeri in modo crescente

numeriUser.sort(orderNum);

console.log(numeriUser);




//? SE IL NUMERO E' NELLA LISTA DEI NUMERI BOMBA LA PARTITA TERMINA ALTRIMENTI SI CONTINUA. LA PARTITA TERMINA QUANDO IL GIOCATORE INSERISCE UN NUMERO VIETATO O RAGGIUNGE IL MASSIMO DI NUMERI CONSENTITI











//? ***** FUNZIONI *****

//! generare numeri random ed inserirli

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//! ordinare i numeri in ordine crescente

function orderNum(num1, num2){
    return num1 - num2;
}