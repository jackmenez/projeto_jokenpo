console.clear();
const prompt = require("prompt-sync")();
console.log();
console.log(
  "----------========== Seja Bem vindo ao Jokenpô! ==========----------"
);
console.log();
let opcoes = [0, 1, 2];
let wins = 0;
let pcwins = 0;
let draw = 0;
var novamente = 1;
while (novamente == 1) {
  let jogadas = +prompt("Quantas vezes você quer jogar? ");
  if (isNaN(jogadas)) {
    console.log("Digite um número válido!");
    jogadas = +prompt("Quantas vezes você quer jogar? ");
  }
  for (var i = 0; i < jogadas; i++) {
    let pc = opcoes[Math.floor(Math.random() * 3)];
    user = +prompt("Escolha entre PEDRA(0), PAPEL(1), TESOURA(2): ");
    while (isNaN(user) || user > 2) {
      console.log("Digite uma opção válida!");
      user = +prompt("Escolha entre PEDRA(0), PAPEL(1), TESOURA(2): ");
    }
    if (user == 0 && pc == [0]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Pedra com Pedra da empate!");
      draw++;
      console.log("Deu empate ninguém venceu!");
      console.log(`Já deu empate em ${draw} rodadas!`);
    } else if (user == 0 && pc == [1]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Papel ganha de pedra!");
      pcwins++;
      console.log(`O computador venceu uma rodada!`);
      console.log(`O computador já venceu ${pcwins} rodadas!`);
    } else if (user == 0 && pc == [2]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Pedra ganha de Tesoura!");
      wins++;
      console.log(`O usuario venceu uma rodada!`);
      console.log(`O usuario já venceu ${wins} rodadas!`);
    } else if (user == 1 && pc == [0]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Papel ganha de pedra!");
      wins++;
      console.log(`O usuario venceu uma rodada!`);
      console.log(`O usuario já venceu ${wins} rodadas`);
    } else if (user == 1 && pc == [2]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Tesoura ganha de Papel!");
      pcwins++;
      console.log(`O computador venceu uma rodada!`);
      console.log(`O computador já venceu ${pcwins} rodadas`);
    } else if (user == 2 && pc == [0]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Pedra ganha de Tesoura!");
      pcwins++;
      console.log(`O computador venceu uma rodada!`);
      console.log(`O computador já venceu ${pcwins} rodadas`);
    } else if (user == 2 && pc == [1]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Tesoura ganha de Papel!");
      wins++;
      console.log(`O usuario venceu uma rodada!`);
      console.log(`O usuario já venceu ${wins} rodadas`);
    } else if (user == 1 && pc == [1]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Papel com papel da empate!");
      draw++;
      console.log("Deu empate ninguém venceu!");
      console.log(`Já deu empate em ${draw} rodadas!`);
    } else if (user == 2 && pc == [2]) {
      console.log(`O Computador escolheu ${pc}`);
      console.log("Tesoura com Tesoura da empate!");
      draw++;
      console.log("Deu empate ninguém venceu!");
      console.log(`Já deu empate em ${draw} rodadas!`);
    }
  }
  novamente = +prompt("Deseja jogar novamente? (0)Não (1)Sim: ");
  while (novamente >= 2) {
    console.log("Digite uma opção válida!");
    novamente = +prompt("Deseja jogar novamente? (0)Não (1)Sim: ");
  }
}
console.log();
console.log(`O usuario venceu ${wins} rodadas`);
console.log(`O computador venceu ${pcwins} rodadas`);
console.log(`Deu empate em ${draw} rodadas`);
console.log();
if (wins > pcwins) {
  console.log("----------========== O Usuario venceu mais vezes e foi o grande CAMPEÃO ==========----------");
} else if (pcwins > wins) {
  console.log("----------========== O Computador venceu mais vezes e foi o grande CAMPEÃO ==========----------");
} else {
  console.log("Deu empate mais vezes do que os jogadores veceram!!!");
}
