import { ConvexHttpClient } from "https://cdn.skypack.dev/convex/browser";

const convex = new ConvexHttpClient("https://blessed-orca-65.convex.cloud");

const spinButton = document.getElementById("spinButton");
const resultDisplay = document.getElementById("result");
const resultMessage = document.getElementById("result-message");
const coinCountDisplay = document.getElementById("coin-count");

let coins = 10;

export async function spinSlot() {
  if (coins <= 0) {
    resultMessage.textContent = "🚫 No coins left! Reset to play again.";
    return;
  }

  const result = await convex.mutation("spin:spin", { player: "Alice" });
  resultDisplay.textContent = result.join("");

  if (result[0] === result[1] && result[1] === result[2]) {
    resultMessage.textContent = "🎉 You win!";
  } else {
    resultMessage.textContent = "😞 Try again!";
  }

  updateCoins(-1);
  updateHistory();
}

function updateCoins(change) {
  coins += change;
  coinCountDisplay.textContent = coins;
}

export function resetGame() {
  coins = 10;
  coinCountDisplay.textContent = coins;
  resultMessage.textContent = "";
  resultDisplay.textContent = "🍒🍒🍒";
}

window.resetGame = resetGame;
spinButton.addEventListener("click", spinSlot);
