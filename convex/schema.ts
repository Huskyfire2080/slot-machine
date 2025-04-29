import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  history: defineTable({
    player: v.string(),
    result: v.array(v.string()),
    timestamp: v.number(),
  }),
});
