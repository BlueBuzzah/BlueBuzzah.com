---
page: docs
title: What the lights mean
description: "What each color and blink of the status light on a BlueBuzzah glove means, from starting up to a low battery or a fault."
lead: Each glove has a status light. Its color and blink tell you what the glove is doing.
---

## Starting up and connecting

### Blue, then cyan, fast blink

The glove is starting up.

### Orange, slow blink

The glove has no role yet, so set one with the Updater. See [Install the firmware](/docs/boards#install-the-firmware) in stage 2.

### Breathing blue

The glove is on but hasn't found the other glove.

### Solid green

The gloves have found each other and are ready.

### Purple, flashing

The gloves lost their link. The light flashes for 30 seconds, then returns to breathing blue while they keep looking.

## During a session

### Pulsing green

A session is running.

### Solid yellow

The session is paused.

If you turn on **Turn Off the Glove Light during Sessions** in BuzzahBuddy, the light stays dark while a session runs.

## Battery

### Orange (breathing, solid, or pulsing)

The battery is too low for a 2-hour session.

### Red, fast blink

The battery is critical. The motors are off and a running session stops.

## Faults at power-on

### Red, double blink for 5 seconds at power-on

The glove found fewer than 4 tactors. A slow red blink follows the double blink.

### Red, slow blink

The glove found a fault at power-on, so sessions won't start until you fix it and switch the glove off and on.

If the light shows a fault, see [Troubleshooting](/docs/troubleshooting#lights).
