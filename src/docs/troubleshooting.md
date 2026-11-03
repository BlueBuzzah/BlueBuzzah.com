---
page: docs
title: Troubleshooting
description: "Fixes for common problems with BlueBuzzah gloves: the lights, the tactors, pairing with BuzzahBuddy, the Updater, and fit."
lead: Find the symptom, then follow the fix under it.
---

Every light pattern is in [What the lights mean](/docs/lights).

## Lights

### Breathing blue, never solid green

Switch on both gloves, bring them closer, and power-cycle both. Check that 1 is primary and the other secondary (see [Firmware and glove roles](/docs/firmware)). A glove switched on alone stays breathing blue, which is normal.

### Purple, flashing

The gloves lost their link. Bring them closer, and power-cycle both if they don't reconnect. After 30 seconds the light returns to breathing blue.

### Red double blink at power-on, then a slow red blink

The glove found fewer than 4 tactors. Switch it off, push each JST connector fully into its port, and switch it on with the battery connected. With no tactors yet, this is expected (see [Check the boards](/docs/boards#check-the-boards) in stage 2).

### Orange, slow blink

The glove has no role. Set it to primary or secondary with the Updater (see [Install the firmware](/docs/boards#install-the-firmware) in stage 2).

### Orange (breathing, solid, or pulsing)

The battery is too low to start a 2-hour session. Charge both gloves. A running session continues.

### Red, fast blink, motors stopped

The battery is critical. Charge the glove.

### A glove reads low right after a full charge

Recheck the battery connection. Check that the USB-C cable and port are giving power.

## Tactors

### No buzz on any motor

Connect the battery. The motor drivers run from the battery, so USB power alone never drives them.

### 1 finger is dead in Test Motors

Tap each finger button to find it. Reseat its wire plug so the bare wire touches the LRA motor (see [stage 3](/docs/tactors#connect-the-wire-plug-and-lra-motor)), then reseat its JST connector (see [stage 5](/docs/wiring#which-finger-goes-in-which-port)).

### The buzz lands on the wrong finger

Move the connector to the right port using the [port table in stage 5](/docs/wiring#which-finger-goes-in-which-port). The port numbers on the board run backwards from the finger order.

### Weak or intermittent buzz

Reseat the wire plug and the JST connector. If a wire has pulled out of the connector, replace the wire lead (see [stage 3](/docs/tactors#prepare-the-wire-leads)).

### Weak buzz that started after routing the wires

A wire is strained or pinched. Loosen the routing and add slack at the joint under tension (see [stage 5](/docs/wiring#route-the-wires)).

### Buzz was right before routing and wrong after

A connector worked loose or swapped. Reseat it, then tap each finger button in **Test Motors** again.

### The pin binds, or the buzz feels dull

The lid and finger cup holes weren't lined up. Reopen the tactor and center the holes before you push the pin in, or try a different pin length (see [stage 3](/docs/tactors#assemble-the-lid)).

### Bare wire won't seat in the wire plug

The strands splayed when you stripped it. Re-strip the end cleanly and keep the strands together (see [stage 3](/docs/tactors#prepare-the-wire-leads)).

### Grinding, or the LRA sled doesn't move freely

A compression spring isn't seated, or 2 are nested in the same pocket. Reopen the shell and fit exactly 1 spring in each pocket (see [stage 3](/docs/tactors#close-the-tactor)).

## Pairing and the app

### The primary is missing in the scan

Switch on the primary and turn on Bluetooth on your phone. Open the **Gloves** tab and tap **Scan for Gloves**. The secondary never appears, because the app reaches it through the primary.

### Secondary finger buttons don't buzz

The app relays these buttons through the primary, so the primary must be on and paired. Wait for solid green on both, then try again.

### The pattern lands on the wrong hand

Swap the roles with the Updater (see [Swap which glove is primary](/docs/firmware#swap-which-glove-is-primary)), then check with **Test Motors** on the **Gloves** tab.

### Test Motors is unavailable

A session is running. Stop it on the **Session** tab first.

## Updater

### The board isn't in the Updater

Use a USB-C cable that carries data, not a charge-only one. Try another port, or select **Rescan**.

### A flash fails or stops

Keep the board plugged in, and don't close the Updater during a flash (see [Firmware and glove roles](/docs/firmware)).

## Fit and comfort

### The tactor shifts on the glove or drifts off the fingertip

The glove is too loose. Use a snugger glove or a smaller size (see [Pick and label the gloves](/docs/gloves#pick-and-label-the-gloves) in stage 4).

### The tactor moves under the fabric

Re-route the wire with more slack, and reseat the tactor under the fabric.

### The glove tears at the hole

Keep the hole tiny, just big enough for the JST connector (see [Place each tactor](/docs/gloves#place-each-tactor) in stage 4).

### The tactor is uncomfortable

The tactor presses on your finger. Move it until it sits clear.
