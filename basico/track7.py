nombre = input("Ingrese su nombre :")
masa = float(input("Ingrese su masa o peso :"))
altura = float(input("Ingrese su altura :"))
IMC = masa/(altura**2)

if IMC < 18.5:
    print(nombre,"Su IMC es bajo, IMC =",IMC)
elif IMC > 18.5 and IMC < 24.9:
    print(nombre,"Su IMC  es normal, IMC =",IMC)
elif IMC > 25 and IMC < 29.9:
    print(nombre,"Tienes sobrepeso, IMC =",IMC)
else:
    print(nombre,"Tienes obesidad, IMC =",IMC)