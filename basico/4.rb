#1. Realizar un programa que determine si un número es positivo, negativo o cero.
puts "Ingrese un numero"
numero = gets.chomp.to_i

if numero > 0
    puts numero,"Es positivo"
elsif numero < 0
    puts numero,"Es negativo"
else
    puts "ES cero"
end 