function getComputerChoice() {
  const random = Math.random();

  if (random < 0.33) {
    return "pedra";
  } else if (random < 0.66) {
    return "papel";
  } else {
    return "tesoura";
  }
}

function getHumanChoice() {
  const choice = prompt("Digite sua escolha: pedra, papel ou tesoura").toLowerCase();
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Empate!");
    } else if (
      (humanChoice === "pedra" && computerChoice === "tesoura") ||
      (humanChoice === "papel" && computerChoice === "pedra") ||
      (humanChoice === "tesoura" && computerChoice === "papel")
    ) {
      humanScore++;
      console.log(`Você ganhou! ${humanChoice} venceu ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`Você perdeu! ${computerChoice} venceu ${humanChoice}`);
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log(`\nPlacar final: Você ${humanScore} x ${computerScore} Computador`);

  if (humanScore > computerScore) {
    console.log("🏆 Você venceu o jogo!");
  } else if (computerScore > humanScore) {
    console.log("💻 O computador venceu o jogo!");
  } else {
    console.log("🤝 O jogo terminou em empate!");
  }
}

playGame();
