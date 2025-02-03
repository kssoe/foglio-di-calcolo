

function calcola(){
    const num1 = parseFloat(document.querySelector('#num1').value);
    const num2 = parseFloat(document.querySelector('#num2').value);
    const operatore = document.querySelector('#operatore').value;
    let risultato;
    if (isNaN(num1) || isNaN(num2))  {
        risultato = 'inserci numero o assicurati che il num(2) sia > 0'
    } else {
        switch (operatore) {
            case '+': risultato = num1 + num2; break;
            case '-': risultato = num1 - num2; break;
            case '*': risultato = num1 * num2; break;
            case '/': risultato = num1 / num2; break;
        }
    }
    document.querySelector('#risultatoTesto').innerText = 'Risultato: ' + risultato;
}


function conversione (){
    const operatore = document.querySelector('#converti').value;
    const input =  parseFloat(document.querySelector('#denarodaConvertire').value);
    let soldiConvertiti;
    if (isNaN(input)){
        soldiConvertiti = "inserisci o seleziona l'unita di conversione"
    } else {
        switch (operatore){
            case 'euro': soldiConvertiti = `${input} Euro corrispondono a ${input * 1.1} Dollari \$`;break;
            case 'dollaro': soldiConvertiti = `${input} Dollari corrispondono a ${input / 1.1} Euro £`;break;
        }       
    }
document.querySelector('#equivalenzaTesto').innerText = soldiConvertiti; 
}


function celciusFahrenheit(){
    const celcius = parseFloat(document.querySelector('#celcius').value);
    let Fahrenheit = (celcius*9/5) + 32;
    document.querySelector('#fahrenheitTesto').innerText = celcius + ' °C corrispondono a ' + Fahrenheit + ' °F';
}


function numeriPari (){
    const input = parseFloat(document.querySelector('#numeroPari').value);
    let pari;
    if (input % 2 === 0){
      pari = input + ' è un numero pari';
    } else {
        pari = input + ' è un numero dispari';
    }
document.querySelector('#pariTesto').innerText = pari;
}


class Area {
    constructor(){}
    area (){
        return 0;
    }
}

class Quadrato extends Area{
    constructor (base){
        super();
        this.base = base;
    }
area(){
    return this.base * this.base
}
}

class Rettangolo extends Quadrato {
    constructor (base,altezza){
        super(base);
        this.altezza = altezza;
    }
    area(){
        return this.altezza * this.base;
    }
}

class Triangolo extends Rettangolo {
    constructor (base,altezza){
        super(base,altezza);
    }
    area(){
        return (this.base * this.altezza ) /2 ;
    }
}

function calcArea(){
const base = parseFloat(document.querySelector('#base').value);
const altezza = parseFloat(document.querySelector('#altezza').value);
const forma = document.querySelector('#sceltaForma').value;
let area;
switch (forma){
    case 'quadrato': area = new Quadrato(base).area();break;
    case 'rettangolo': area = new Rettangolo(base,altezza).area();break;
    case 'triangolo': area = new Triangolo(base,altezza).area();break;
}
    document.querySelector('#areaTesto').innerText ='Area: '+ area;
}