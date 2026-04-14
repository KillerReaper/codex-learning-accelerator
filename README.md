# Codex Game Companion

## Overview
This project is a focused prototype built for the OpenAI x Handshake Codex Creator Challenge. It demonstrates an AI-powered game companion designed to automatically track and organize in-game data using on-screen information.

The current version focuses on Minecraft and introduces a storage tracking system that helps players manage items across multiple chests within a defined area, without needing to manually track or remember where everything is.

---

## Purpose
The goal of this project is to create a system that removes the need for players to manually track their progress, items, and storage.

Instead of relying on memory, notes, or external tools, this system uses AI to read what is already visible on the screen and convert it into structured, useful information.

---

## Problem
In many games, especially sandbox and inventory-heavy games like Minecraft, players:
- Store items across many different chests
- Forget where items are located
- Lose track of how much they have
- Waste time searching through storage systems

There is currently no simple, automatic way to track this information without mods or manual input.

---

## Solution
This project provides an AI-powered tracking system that:
- Reads on-screen game data
- Extracts relevant item information
- Organizes it into a clean, structured interface

Instead of recreating the full in-game inventory, the system simplifies the data into:
- Item names
- Item quantities
- Items detected within a specific visible storage area

The system focuses on tracking items within a defined area (such as a storage room or open chest view), rather than attempting to track items across an entire game world.

---

## How the AI Works
The system uses a screen-sharing approach similar to tools like Discord or Zoom.

The user grants permission to share a specific screen or game window with the application. This is similar to sharing your screen with a friend in a call.

Instead of a person watching, the AI acts like a viewer whose only job is to:
- Observe the game screen
- Read visible information
- Extract relevant data (items, counts, layout)

The process works like this:
1. The user shares their game window with the application
2. The system captures a frame at set intervals
3. AI reads only the visible on-screen information
4. Relevant data is extracted and structured
5. The data is sent to the website/app dashboard
6. The frame is immediately discarded

The AI does not attempt to understand the entire game, only specific UI elements relevant to tracking.

---

## Privacy & Security Design
A key concern in this project is user privacy and security.

To prevent any risk of sensitive data exposure:
- The system does NOT store screenshots
- The system does NOT record gameplay
- Screen data is processed in real-time only
- Only extracted information (item names, counts, etc.) is stored
- Images are immediately discarded after processing
- Users choose which screen or window is shared

This ensures that no visual data from the user’s screen is saved or accessible.

---

## Features (Current Prototype)
- Minecraft storage tracking (single area focus)
- Multi-chest item organization within a visible storage setup
- Simplified item display (name + quantity)
- Relative chest positioning within the scanned area (e.g., top-left, middle, etc.)
- Manual scan system for accuracy

---

## Tracking Scope
This prototype focuses on tracking items within a specific, user-defined area rather than the entire game world.

For example:
- In Minecraft, the system tracks items within a visible storage room or chest layout
- In other games (planned), this would map naturally to centralized storage systems such as stashes or inventories

This design keeps the system accurate, lightweight, and practical, while avoiding the complexity of tracking items across large or dynamic game environments.

---

## What This Project Is Designed To Do
- Help players quickly understand what items they have
- Help players locate items within a storage area
- Reduce time spent searching through chests
- Provide a clean, external view of in-game storage

---

## Planned Features
This project is designed as a scalable system with multiple AI tracking modes.

Future features may include:
- Goal tracking (track progress toward item targets)
- Inventory tracking (track currently held items)
- Route tracking (help players navigate caves and return to locations)
- Real-time overlay showing progress while playing
- Support for additional games such as extraction shooters (loot tracking)

---

## What Could Be Completed in This Prototype
Due to time constraints, this prototype focuses on:
- One game (Minecraft)
- One tracking system (storage tracking)
- A working demonstration of AI-based screen reading and data organization

---

## What Is Planned But Not Fully Implemented
- Multiple tracking modes (goal tracking, inventory tracking)
- Multi-game support (Arc Raiders, Delta Force, etc.)
- Fully functional real-time overlay system
- Advanced automation and real-time scanning improvements

---

## Known Challenges & Limitations
- Different games have different inventory systems, requiring separate tracking logic
- AI must rely only on visible on-screen data
- Fast-changing screens may cause missed detections
- Accurate parsing depends on clear UI visibility

---

## Design Approach
The system uses a modular design:
- Each game has its own tracking system
- Each tracking mode is handled by a separate AI system

This allows the platform to scale without forcing one system to handle all use cases.

---

## Prototype Note
This project is a focused prototype designed to demonstrate the core concept of AI-assisted game tracking.

It is intentionally limited in scope to ensure a working, clear, and testable system, while being designed for future expansion into a full platform.

---

## Built With
- OpenAI Codex (code generation and system development)
- Web technologies (frontend and backend)
- AI-based screen reading (conceptual implementation)

---

## Author
KillerReaper
