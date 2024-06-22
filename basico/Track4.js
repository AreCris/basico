var nombre = "Cristofer";
var masa = 65;
var altura = 1.65;
let IMC = masa/(altura**2);

if(IMC < 18.5){
    console.log(nombre+" Tu IMC es bajo, IMC ="+IMC)
}else if(IMC > 18.5 && IMC < 24.9){
console.log(nombre+" Tu IMC es normal, IMC ="+IMC)
}else if(IMC > 25 && IMC < 29.9 ){
    console.log(nombre+" Tienes sobrepeso, IMC ="+IMC)
}else{
    console.log(nombre+" Tienes obesidad,IMC ="+IMC)
}