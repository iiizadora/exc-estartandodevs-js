function apples(quantity){
if (quantity < 12){
  const retailFruit = 1.30 * quantity;
  return retailFruit;
  
}else {
  const wholesaleFruit = 1 * quantity;
  return wholesaleFruit;
}
}

console.log(`O custo total das compras de maçãs será de ${apples(10).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`);

