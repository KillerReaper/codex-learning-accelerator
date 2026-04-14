# Codex Game Companion (Nexis)

## Overview
This project is a focused prototype built for the OpenAI x Handshake Codex Creator Challenge.

Nexis is a voice-powered AI game companion designed to automatically track and remember where a player stores their items in Minecraft. Instead of relying on manual tracking, notes, or memory, Nexis allows players to simply speak naturally while playing, and the system organizes and stores that information for later use.

---

## Purpose
The goal of this project is to eliminate the need for players to manually track their items and storage locations.

Players often forget:
- Where items are stored
- How much they have
- Which container holds specific materials

Nexis solves this by acting as a memory assistant, allowing players to speak what they do while the system records and organizes that information.

---

## Problem
In games like Minecraft, players:
- Store items across multiple chests and shulker boxes
- Forget where items are located
- Lose track of quantities
- Waste time searching through storage systems

There is currently no simple, lightweight system that allows players to track this information naturally without mods or manual input.

---

## Solution
Nexis introduces a voice-based AI tracking system that:

- Listens to the player using microphone input
- Converts speech into text
- Extracts key information (items, amounts, locations)
- Stores that data in a structured memory system
- Allows the player to query it later

Instead of reading the game screen, Nexis relies on natural language input, making it lightweight, fast, and fully web-based.

---

## How the AI Works
The system uses a voice-driven pipeline:

1. The user speaks naturally while playing  
2. Speech is converted into text using browser-based speech recognition  
3. The system parses the sentence to extract:
   - Item name  
   - Quantity  
   - Container (e.g., shulker box, chest)  
   - Location (e.g., ender chest, base)  
4. The extracted data is stored in persistent memory (localStorage)  
5. The user can later ask questions about their items  

---

## Example Usage

Input (Voice):
"I put 2.5 stacks of purple stained glass in my light pink shulker box in my ender chest"

Stored Data:
{
  "purple_stained_glass": {
    "amount": 2.5,
    "unit": "stacks",
    "container": "light pink shulker box",
    "location": "ender chest"
  }
}

Query (Voice):
"Where is my purple stained glass?"

Output:
"You have 2.5 stacks in your light pink shulker box in your ender chest."

---

## Features (Current Prototype)

- Voice input tracking (speech-to-text)
- AI parsing of materials, amounts, and storage locations
- Persistent memory using localStorage
- Query system to locate stored items
- Designed specifically for Minecraft inventory behavior

---

## Tracking Scope

This prototype focuses on:

- Core Minecraft materials (e.g., ores, glass, wood)
- Basic containers:
  - Shulker boxes  
  - Chests  
  - Ender chests  

The system is intentionally scoped to ensure accuracy and clarity for the demo.

---

## What This Project Is Designed To Do

- Help players remember where items are stored  
- Reduce time spent searching through storage  
- Provide a simple, voice-driven tracking system  
- Act as an external memory assistant for gameplay  

---

## Data Storage

Nexis uses a hybrid data system:

Static Dataset:
A predefined list of Minecraft items used for recognition and matching.

Dynamic Memory:
User-specific data stored in localStorage, including:
- Item quantities  
- Storage locations  
- Containers  

This ensures persistence across sessions, even if the browser is closed or the PC restarts.

---

## Privacy & Security

- Microphone access is user-controlled and permission-based  
- No gameplay screen data is captured  
- No screenshots are stored  
- Only structured text data is saved  
- All data remains local to the user's browser  

---

## Planned Features

Future expansions may include:

- Goal tracking (e.g., "collect 64 diamonds")  
- Inventory tracking  
- Smart suggestions and reminders  
- Voice-based overlay responses  
- Multi-game support  

---

## What Could Be Completed in This Prototype

Due to time constraints, this prototype focuses on:

- One game (Minecraft)  
- One system (voice-based storage tracking)  
- A working demonstration of AI-powered natural language tracking  

---

## What Is Not Included

- Real-time screen tracking  
- Direct game integration  
- Computer vision-based detection  
- Fully automated tracking without user input  

---

## Known Limitations

- Voice recognition accuracy may vary  
- Parsing depends on clear sentence structure  
- Limited item dataset for the prototype  
- No cross-device syncing (localStorage only)  

---

## Design Approach

The system is designed to be:

- Lightweight  
- Modular  
- Expandable  

Each feature (voice input, parsing, memory) is separated, allowing future upgrades without rewriting the entire system.

---

## Prototype Note

This project is a concept prototype demonstrating how AI can assist players through natural interaction rather than direct game integration.

It is intentionally scoped for clarity, usability, and demonstration within the challenge timeframe.

---

## Built With

- OpenAI Codex (code generation and system development)
- ChatGPT (design guidance, system planning, and problem-solving)
- React + Vite (frontend)
- Web Speech API (voice recognition)
- Browser localStorage (data persistence)

---

## Author
KillerReaper
