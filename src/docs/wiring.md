---
page: docs
title: Wire and test
description: "Stage 5 of building BlueBuzzah gloves: plug each tactor into the right port, test every finger in BuzzahBuddy, then route the wires."
lead: Plug each glove's tactors into its board, test that every finger buzzes in the right place, then route the wires. Do this for both gloves.
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
| Index | 1 |
| Middle | 2 |
| Ring | 3 |
| Little | 4 |
| Thumb (optional) | 5 |

<Shot src="/docs/img/board-ports-labeled" alt="Top view of the BlueBuzzah v3 board with its 5 motor ports in a column down the right side, numbered 1 to 5 from the top and labeled Index, Middle, Ring, Little and Thumb." />

Leave the wires loose until you've tested them.

## Switch on

- Each connected tactor buzzes for about half a second.
- With fewer than 4 tactors connected, the light shows a red double blink and then a slow red blink, and sessions won't start. Switch the board off, reseat the connectors, and switch it on again.

## Test every finger

A tactor in the wrong port still buzzes, so the glove looks fine. This test catches it.

1. Power both gloves, and connect BuzzahBuddy to the primary glove.
2. If the light pulses green, a session is running, and Test Motors is unavailable. The primary starts one by itself 30 seconds after pairing if no phone is connected. Stop it on the **Session** tab.
3. Open the **Gloves** tab and tap **Test Motors**.
4. Go through **Pick a Strength** and **Pick a Buzz Length** to **Test Each Finger**.
5. Find this glove's row, **Primary Glove** or **Secondary Glove**. Tap each finger button (Index, Middle, Ring, Little, and Thumb if the glove has a thumb tactor) and feel the buzz on that finger.
6. If a buzz lands on the wrong finger, fix that connector before you go on.

The secondary's buttons work only while the primary is on and paired.

Check the other glove the same way. Testing 1 glove tells you nothing about the other.

## Route the wires

Each lead runs inside its finger and leaves through a hole between the fingers.

- Run each lead from its hole to the case.
- Leave a little slack so the fingers can curl fully without pulling on a connector.
- Don't bend a wire sharply at the connector.
- Leave a small service loop near the board.

<!-- planned-image: images/v3/assembly/glove-harness-routed.jpg | photo -->

Then [test every finger](#test-every-finger) again, to confirm nothing moved while you routed the wires.
