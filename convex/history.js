import { ConvexHttpClient } from "https://cdn.skypack.dev/convex/browser";

const convex = new ConvexHttpClient("https://blessed-orca-65.convex.cloud");
const historyList = document.getElementById("history");

export async function updateHistory() {
  const spins = await convex.query("history:get", { player: "Alice" });
  historyList.innerHTML = "";
  spins.forEach((spin) => {
    const li = document.createElement("li");
    li.textContent = `${spin.result.join("")} - ${new Date(spin.timestamp).toLocaleTimeString()}`;
    historyList.appendChild(li);
  });
}

// Load history on page load
updateHistory();
