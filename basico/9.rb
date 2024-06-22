def numero(x)
    if x > 0
     return x,"Es un numero positivo"
    elsif x == 0
        return "Es cero"
    else
      return x,"Es un numero negativo"
    end
end

    resultado = numero(-8)
    puts resultado  