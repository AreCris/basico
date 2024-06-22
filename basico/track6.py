class Persona:
    def __init__(self,nombre,edad,genero):
        self.nombre = nombre
        self.edad = edad
        self.genero = genero

    def Presentar(self):
         print("Mi edad es :",self.nombre,"tengo",self.edad,"mi genero es",self.genero)
    
Persona1 = Persona("Cristofer",19,"masculino")
print(Persona1.Presentar()) 
