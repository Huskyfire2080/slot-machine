import { query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: { player: v.string() },
  handler: async ({ db }, args) => {
    return await db
      .query("history")
      .filter((q) => q.eq(q.field("player"), args.player))
      .order("desc")
      .take(10);
  },
});
