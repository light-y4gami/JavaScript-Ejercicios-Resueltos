let count = 0;
function cc(card) {
  // Only change code below this line
  switch (card) { // Verifica el valor de cada tarjeta a traves de la declaracion switch
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; // La variable count aumenta en 1 si la carta es 2, 3, 4, 5, 6, dado que 7, 8, 9 no valen nada la ignoramos.
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; // Disminuye en 1 si la carta es un 10, J, Q, K o A
      break;
  }
  if (count > 0) { // Verifica si coun es mayor a 0
    return count + " Bet"; // Si es asi, se retorna el valor de count concatenado con la cadena "Bet"
  } else {
    return count + " Hold"; // De lo contrario se retorna count y la cadena "Hold"
  }
  // Only change code above this line
}

cc(2); // Aqui entra inmediantamente al case 2 salta abajo y aumenta en 1 la variable count
cc(3); // Aqui salta al case 3 y continua asi hasta llegar a la llamada final
cc(7);
cc("K");
cc("A");

