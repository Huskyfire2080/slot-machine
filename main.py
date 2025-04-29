import os
from dotenv import load_dotenv
from convex import ConvexClient

load_dotenv(".env.local")
client = ConvexClient(os.getenv("CONVEX_URL"))

# Spin the slot machine
spin_result = client.mutation("spin:spin", {"player": "Alice"})
print("Spin Result:", spin_result)

# Get spin history
history = client.query("history:get", {"player": "Alice"})
print("History:")
for entry in history:
    print(entry)
