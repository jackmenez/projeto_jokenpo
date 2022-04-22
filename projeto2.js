console.clear();
const prompt = require("prompt-sync")();
console.log();
console.log(
  "----------========== Seja Bem vindo ao Jokenpô! ==========----------"
);
console.log();
let opcoes = [0, 1, 2];
let jogadas = +prompt("Quantas vezes você quer jogar? ");
let user = +prompt("Escolha entre PEDRA(0), PAPEL(1), TESOURA(2): ");
let wins = 0;
let pcwins = 0
let draw = 0
// let pc = opcoes[Math.floor(Math.random()*3)]
// while (isNaN(user) || (user > 2)){
//     console.log('Digite uma opção válida!')
//     user = +prompt("Escolha entre PEDRA(0), PAPEL(1), TESOURA(2): ");
// }
for (let i = 0; i < jogadas; i++){
    let pc = opcoes[Math.floor(Math.random()*3)]
    while (isNaN(user) || (user > 2)){
        console.log('Digite uma opção válida!')
        user = +prompt("Escolha entre PEDRA(0), PAPEL(1), TESOURA(2): ");
    }if (user == 0 && pc == [0]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Pedra com Pedra da empate!')
        draw++
    }else if (user == 0 && pc == [1]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Papel ganha de pedra!')
        pcwins++
    }else if (user == 0 && pc == [2]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Pedra ganha de Tesoura!')
        wins++
    }else if (user == 1 && pc == [0]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Papel ganha de pedra!')
        wins++
    }else if (user == 1 && pc == [2]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Tesoura ganha de Papel!')
        pcwins++
    }else if (user == 2 && pc == [0]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Pedra ganha de Tesoura!')
        pcwins++
    }else if (user == 2 && pc == [1]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Tesoura ganha de Papel!')
        wins++
    }else if (user == 1 && pc == [1]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Papel com papel da empate!')
        draw++
    }else if (user == 2 && pc == [2]){
        console.log(`O Computador escolheu ${pc}`)
        console.log('Tesoura com Tesoura da empate!')
        draw++
    }
}
console.log()
console.log(`O usuario venceu ${wins} rodadas`)
console.log(`O computador venceu ${pcwins} rodadas`)
console.log(`Deu empate em ${draw} rodadas`)