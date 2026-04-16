# Nexis – AI Game Memory Assistant

## Overview
This project is a focused prototype built for the OpenAI x Handshake Codex Creator Challenge.

Nexis is a **voice-based AI memory assistant for games**. Instead of tracking gameplay automatically or relying on overlays, Nexis allows players to **store, recall, and ask for information using natural voice commands**.

The system is designed to feel like a gaming version of “Hey Siri” or “Hey Alexa”, where the player can simply speak to Nexis and it will remember what matters.

---

## Core Idea

Nexis is built around a simple interaction model:

Store → Recall → Ask

- **Store** – The player tells Nexis to remember something  
- **Recall** – The player asks Nexis for stored information  
- **Ask** – The player asks Nexis general questions (e.g., recipes or help)

Nexis does not automatically track gameplay.  
It only knows what the user chooses to tell it.

---

## Purpose

Players often forget important details while playing games, such as:

- Where items are stored  
- Important locations (e.g., strongholds, bases)  
- Discoveries made during exploration  

Nexis solves this by acting as a **companion memory system**, allowing players to offload information through voice instead of relying on memory or notes.

---

## Problem

In games like Minecraft, players:

- Store items in multiple locations  
- Forget where important resources are  
- Lose track of discoveries and coordinates  
- Waste time searching or retracing steps  

There is currently no lightweight system that allows players to naturally store and recall this information using voice alone.

---

## Solution

Nexis introduces a **voice-first AI assistant** that:

- Listens to the player through microphone input  
- Converts speech into text  
- Interprets intent (store, recall, ask)  
- Stores user-provided information in memory  
- Responds primarily through voice  

The Nexis website acts as a **companion dashboard**, where stored memories and interactions can be viewed.

---

## How the AI Works

The system follows a simple pipeline:

1. The user speaks a command  
2. Speech is converted to text using browser-based speech recognition  
3. The system determines intent:
   - Store
   - Recall
   - Ask  
4. Information is saved or retrieved from memory (localStorage)  
5. Nexis responds using voice output  

---

## Example Usage (Minecraft Demo)

The following examples demonstrate how Nexis works within the Minecraft demo.

Each game supported by Nexis will have its own set of commands and interactions. These examples are specific to Minecraft and may differ in other games.

---

### Store Memory

User:  
"Hey Nexis, remember my diamonds are in my base"

Nexis:  
"Got it. I’ll remember that."

---

### Recall Memory

User:  
"Hey Nexis, where are my diamonds?"

Nexis:  
"Your diamonds are in your base."

---

### Ask for Knowledge

User:  
"Hey Nexis, what is the recipe for an iron pickaxe?"

Nexis:  
"An iron pickaxe requires 3 iron ingots and 2 sticks."

---

## Features (Current Prototype)

- Voice input (speech-to-text)
- Intent-based memory system (store / recall / ask)
- Voice response output (text-to-speech)
- Persistent memory using localStorage
- Conversation-style interaction interface
- Web-based companion dashboard

---

## Demo Scope (Minecraft)

This prototype demonstrates Nexis using Minecraft (Java Edition).

The demo assumes:
- A fresh world start  
- No villages or external loot sources  
- Player-driven discovery and memory  

The focus is on **remembering and recalling information**, not tracking inventory or counting resources.

---

## What This Project Is Designed To Do

- Act as a voice-based memory assistant  
- Allow players to store important information quickly  
- Reduce the need to remember or manually track details  
- Provide fast recall through natural language  

---

## What This Project Is NOT

- Not an inventory tracker  
- Not a resource counter  
- Not a screen-reading AI  
- Not an in-game overlay system  

Nexis does NOT automatically detect gameplay or track items without user input.

---

## Data Storage

Nexis uses:

- **localStorage** for persistent memory  
- Stores only user-provided information  
- No external databases required  

Example memory structure:

{
  "diamonds": "stored in base",
  "stronghold": "located at 120, -340"
}


---

## Privacy & Security

- Microphone access is user-controlled  
- No gameplay screen data is captured  
- No screenshots or recordings are stored  
- All data remains local to the user's browser  

---

## Limitations

- Depends on clear voice input  
- Limited contextual understanding in prototype form  
- No automatic gameplay tracking  
- No cross-device syncing  

---

## Future Vision

In a full desktop version, Nexis could:

- Access both microphone and screen data  
- Automatically verify player actions  
- Provide real-time contextual assistance  
- Expand to support multiple games  

---

## Design Approach

The system is designed to be:

- Simple  
- Modular  
- Voice-first  
- Easily expandable to other games  

---

## Built With

- OpenAI Codex (code generation)
- ChatGPT (system design and planning)
- React + Vite (frontend)
- Web Speech API (speech recognition)
- Browser Text-to-Speech (voice output)
- localStorage (data persistence)

---

## Author

KillerReaper
