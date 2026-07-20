let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

const buttons = document.querySelectorAll("button[data-choice]");
const results = document.querySelector("#results");

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

function updateResults(message) {
  results.textContent = `${message}\nPlacar atual: Você ${humanScore} x ${computerScore} Computador`;
}

function announceWinner() {
  if (humanScore === winningScore) {
    updateResults("🏆 Você venceu o jogo!");
  } else if (computerScore === winningScore) {
    updateResults("💻 O computador venceu o jogo!");
  }

  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function playRound(humanChoice) {
  if (humanScore === winningScore || computerScore === winningScore) {
    return;
  }

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    updateResults(`Empate! Vocês escolheram ${humanChoice}.`);
  } else if (
    (humanChoice === "pedra" && computerChoice === "tesoura") ||
    (humanChoice === "papel" && computerChoice === "pedra") ||
    (humanChoice === "tesoura" && computerChoice === "papel")
  ) {
    humanScore++;
    updateResults(`Você ganhou! ${humanChoice} venceu ${computerChoice}.`);
  } else {
    computerScore++;
    updateResults(`Você perdeu! ${computerChoice} venceu ${humanChoice}.`);
  }

  if (humanScore === winningScore || computerScore === winningScore) {
    announceWinner();
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

updateResults("Escolha pedra, papel ou tesoura para começar.");


