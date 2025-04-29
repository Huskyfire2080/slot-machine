import { mutation } from "./_generated/server";
import { v } from "convex/values";

const symbols = ["🍒", "🍋", "🔔", "⭐", "💎"];
const reels = 3;

function randomSpin() {
  return Array.from({ length: reels }, () =>
    symbols[Math.floor(Math.random() * symbols.length)]
  );
}

export const spin = mutation({
  args: { player: v.string() },
  handler: async ({ db }, args) => {
    const result = randomSpin();

    await db.insert("history", {
      player: args.player,
      result,
      timestamp: Date.now(),
    });

    return result;
  },
});
