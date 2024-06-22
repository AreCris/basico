{function Hola(x){
    return "Hola mundo";
}

console.log(Hola("hola"));}

//Calcular el área de un círculo dado su radio (A = π * r^2)
{function Area(r){
    return 3.1416*r**2;
}
console.log("El area = "+" "+Area(3));}

//Calcular el promedio de 3 números ingresados por el usuario
{function Promedio(x,y,z){
    return (x+y+z)/3;
}
console.log("El promedio ="+" "+Promedio(7,9,6));}

//Crear un programa que determine si un número ingresado por el usuario es par o impar
{function Par_o_impar(w){
    if (w %2 == 0){
        return w+" "+"es par";
    }else{
        return w+" "+"es impar"
    }
}
console.log(Par_o_impar(1));}

//Crear un programa que convierta grados Celsius a Fahrenheit (F = (C * 9/5) + 32)
{function Conv(C){
    return ((C*9/5)+32);
}
console.log(Conv(100)+" "+"grados");}

//Crea un programa que calcule el factorial de un numero

{function factorial(n){
    if (n == 0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(4));}

//Crea un programa que calcule el factorial de un numero pero sin funciones

{var n = 3;
    let factorial = 1

if(n < 0){
  console.log("no existe factorial de un numero negativo");
}else{
   for(i = 1; i<= n;i++){
    factorial *=i
   }
}
console.log(factorial);}

//Programa que indica si un numero es capícua
{var numero = 2922;
var p1 = 29;
var p2 = 22;
if (p1%2 != p2%2){
    console.log(numero+" "+"es capicua");
}else{
    console.log(numero+" "+"no es capicua")
}}

//Crear un programa que calcule el indice de masa corporal
{let masa = 65;
let altura = 1.68;
let imc = masa/(altura**2);

if (imc>18.5 && imc<24.9){
    console.log("Tu IMC es normal");
}else if(imc>25 && imc<29.9){
    console.log("Tienes sobrepeso");
}else if(imc>30 && imc<34.9){
    console.log("Tienes obesidad 1");
}else{
    console.log("Tienes obesidad 2");
}}

//7. Verificar si un número es par
{function Num(x){
    if (x%2 == 0){
        return x+" "+ "Es par";
    }else{
        return x+" "+ "Es impar";
    }
}
console.log(Num(727));}


//Crear un programa que calcule el factorial de un número.

var numero = 2;
var factorial = 1
for(i = 1;i <= numero ; i=i+1){
    factorial = factorial * i;
}
console.log("El factorial de:"+numero+"="+factorial);