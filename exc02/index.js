const eleitores = [ {eleitoresTotais: 11000,
                    votosBrancos: 2000,
                    votosNulos:1000,
                    votosValidos:8000}];

eleitores.forEach((votos)=> {

  let validosPorcentagem  = ((votos.votosValidos / votos.eleitoresTotais ) * 100).toFixed(2);
  let brancosPorcentagem  = ((votos.votosBrancos / votos.eleitoresTotais ) * 100).toFixed(2);
  let nulosPorcentagem  = ((votos.votosNulos / votos.eleitoresTotais ) * 100).toFixed(2);
   

  console.log(`O percentual de votos nulos foram de ${nulosPorcentagem}% , de votos brancos foram de ${brancosPorcentagem}% e o total de votos válidos foram de ${validosPorcentagem}% de um total de ${votos.eleitoresTotais} eleitores. `);

});