---
page: docs
title: Your first session
description: "Stage 7 of building BlueBuzzah gloves: run a session with your finished pair, check which glove is primary, and keep the batteries charged."
lead: Run a session with your finished pair, check which glove is primary, and keep both gloves charged.
need:
  - { qty: 2, label: "charged gloves, 1 primary and 1 secondary" }
  - { qty: 1, label: phone or tablet with BuzzahBuddy }
figure:
  src: /docs/img/bluebuzzah-pair
  alt: "A finished pair seen from the front and above: 2 closed cases side by side, each with 4 tactors fanned out above it, 1 per finger, on red and black leads that leave the back of the case"
  caption: Your finished pair, ready for its first session.
---

## Before you use the gloves

<Notices />

## Get BuzzahBuddy

Install BuzzahBuddy from [BuzzahBuddy.com](https://buzzahbuddy.com). On Android, it installs from Google Play. On iPhone, it's in early testing and installs through TestFlight.

## Every session

1. Switch on both gloves. Make sure Bluetooth is on on your phone.
2. Wait for solid green on both.
3. Open BuzzahBuddy. It connects by itself. If it doesn't, open the **Gloves** tab and tap **Scan for Gloves**.
4. Start a session on the **Session** tab with **Start Session**.

Don't start unless both lights are solid green.

## How to stop

- **The sure way:** switch off both gloves. Each glove's power switch turns it off without the app.
- **In BuzzahBuddy:** tap **Stop** on the **Session** tab.
- **Closing the app doesn't stop the gloves.** If your phone disconnects or the connection drops, a running session keeps going.
- **The gloves can start by themselves.** If no phone connects within 30 seconds of the gloves pairing, the primary starts a session.

## Check which hand is primary

Do this once.

1. If a session is running (the light pulses green), stop it on the **Session** tab first. Test Motors is unavailable during a session.
2. Open **Test Motors** on the **Gloves** tab.
3. Tap a **Primary Glove** finger button and see which glove buzzes. That glove is the primary.

If it's the wrong hand, swap the roles. See [Swap which glove is primary](/docs/updater/firmware#swap-which-glove-is-primary).

## Charging and battery

Charge each glove over USB-C. BuzzahBuddy shows each glove's battery level.

- **Orange:** the battery is too low for a 2-hour session. A running session continues, but a new one won't start until both gloves are charged.
- **Red, fast blink:** the battery is critical. The motors stop and a running session ends. Charge the glove.

## Where to go next

- Every light pattern is in [What the lights mean](/docs/lights).
- Patterns are in [Configure the gloves](/docs/updater/configure), and firmware updates in [Update the firmware](/docs/updater/firmware).
- If something's wrong, see [Troubleshooting](/docs/troubleshooting).
