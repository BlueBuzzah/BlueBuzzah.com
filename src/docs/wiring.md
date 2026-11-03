---
page: docs
title: Wire and test
description: "Stage 5 of building BlueBuzzah gloves: plug each tactor into the right port, test every finger in BuzzahBuddy, then secure the wires."
lead: Plug each glove's tactors into its board, test that every finger buzzes in the right place, then secure the wires. Do this for both gloves.
need:
  - { qty: 2, label: gloves with tactors fitted }
  - { qty: 2, label: boards from stage 2 }
tools:
  - A phone or tablet with BuzzahBuddy
---

## Which finger goes in which port

Switch the board off first. Plug each lead into the port in this table:

| Finger | Port on the board |
| --- | --- |
| Index | 5 |
| Middle | 4 |
| Ring | 3 |
| Little | 2 |
| Thumb (optional) | 1 |

The port numbers run opposite to the fingers, so follow the table, not the order on the board.

<Shot src="/docs/img/board-ports-labeled" alt="Top view of the BlueBuzzah v3 board with its five motor ports in a column down the right side, numbered 1 to 5 from the XIAO end and labeled Thumb, Little, Ring, Middle and Index." />

Leave the wires loose until you've tested them.

## Switch on

- Each connected tactor buzzes for about half a second.
- With fewer than four tactors connected, the light shows a red double blink and then a slow red blink, and sessions won't start. Switch the board off, reseat the connectors, and switch it on again.

## Test every finger

A tactor in the wrong port still buzzes, so the glove looks fine. This test catches it.

1. Power both gloves, and connect BuzzahBuddy to the primary glove.
2. If the light pulses green, a session is running, and Test Motors is unavailable. The primary starts one by itself 30 seconds after pairing if no phone is connected. Stop it on the **Session** tab.
3. Open the **Gloves** tab and tap **Test Motors**.
4. Go through **Pick a Strength** and **Pick a Buzz Length** to **Test Each Finger**.
5. Find this glove's row, **Primary Glove** or **Secondary Glove**. Tap each finger button (Index, Middle, Ring, Little, and Thumb if the glove has a thumb tactor) and feel the buzz on that finger.
6. If a buzz lands on the wrong finger, fix that connector before you go on.

The secondary's buttons work only while the primary is on and paired.

Check the other glove the same way. One glove tells you nothing about the other.

## Secure the wires

- Gather the wires into a single loom as they run from the fingertips toward the board.
- Leave slack at each finger joint, so a full curl doesn't pull on the connector.
- Anchor the loom at one or two points on the back of the hand, with stitching or fabric glue.
- Don't bend the wire sharply at the connector. Let it exit straight and curve gradually.
- Leave a small service loop near the board, so you can unplug a connector without tugging the harness.

<!-- planned-image: images/v3/assembly/glove-harness-routed.jpg | photo -->

Then [test every finger](#test-every-finger) again, to confirm nothing moved while you routed the wires.
