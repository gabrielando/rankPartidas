const heroina = "Penitente Escarlate";
let rankHeroina = "";

function saldoPartidas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;

  if (saldoVitorias <= 10) {
    rankHeroina = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    rankHeroina = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    rankHeroina = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    rankHeroina = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    rankHeroina = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    rankHeroina = "Lendário";
  } else {
    rankHeroina = "Imortal";
  }

  return saldoVitorias;
}


const saldo = saldoPartidas(10, 5);

console.log(`A heroína ${heroina} tem saldo de ${saldo} vitórias e está no rank ${rankHeroina}`);
