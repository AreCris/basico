print "Ingrese su nombre : "
nombre = gets.chomp
print "Ingrese su masa :"
masa = gets.chomp.to_f
print "Ingrese su altura :"
altura = gets.chomp.to_f
IMC = masa/(altura**2)


if IMC <18.5
    puts nombre,"Tu IMC  es bajo","IMC =",IMC
elsif IMC > 18.5 && IMC < 24.9
    puts nombre,"Tu IMC es Normal, IMC = ",IMC
elsif IMC > 25 && IMC < 29.9
    puts nombre,"Su tienes sobrepeso, IMC =",IMC
else
    puts nombre,"Tienes obesidad, IMC =", IMC
end