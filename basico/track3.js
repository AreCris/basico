class Persona{
    constructor(nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    Presentar(){
        return "Mi nombre es :"+" "+this.nombre+" tengo "+this.edad+" años "+"mi genero es "+this.genero;
    }
}

Persona1 = new Persona("Cristofer",19,"masculino");
console.log(Persona1.Presentar());