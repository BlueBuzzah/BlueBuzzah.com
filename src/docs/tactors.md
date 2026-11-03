---
page: docs
title: Build the tactors
description: "Stage 3 of building BlueBuzzah gloves: build the eight tactors, the parts that buzz against your fingertips. Nothing is soldered."
lead: A tactor is the part that buzzes against your fingertip. You build 8, four per glove. Nothing in this stage is soldered.
need:
  - { qty: 8, label: LRA motors }
  - { qty: 24, label: compression springs }
  - { qty: 8, label: wire leads }
  - { qty: 8, label: sets of printed tactor parts }
tools: [Wire strippers, Flush trim wire cutters, Tweezers]
figure:
  src: /docs/img/tactor-exploded-labeled
  alt: Exploded view of one tactor with ten numbered parts in build order
  caption: The ten tactor parts, numbered in build order.
---

## The tactor parts

The LRA sled floats on three compression springs, so the shell doesn't absorb the buzz. The pin carries the buzz to the fingertip. The steps below use these part numbers.

- **1, LRA sled:** holds the motor.
- **2, LRA motor:** VLV101040A, the part that buzzes.
- **3, Wire plug:** presses the bare wires onto the motor.
- **4, Wire lead:** the lead you prepare in the next section.
- **5, Lid:** holds the pin and the finger cup.
- **6, Finger cup:** your fingertip rests in it.
- **7, Pin:** carries the buzz to your fingertip.
- **8, Compression springs:** three per tactor. 304 stainless steel, 3 mm OD, 0.3 mm wire, 5 mm free length.
- **9, Shell:** the outer body.
- **10, Finger support:** slides into the finger cup.

Build 8 tactors, 4 per glove: index, middle, ring and little. If you're adding the optional thumb tactors, build 2 more. A magnifying desk lamp helps.

## Prepare the wire leads

Each tactor uses one ready-made JST PH 2-pin female connector lead, about 6 in (150 mm) or longer. The connector plugs into a motor port on the board.

1. Cut each lead about 6 in (150 mm) from the connector. A longer lead leaves room to trim later.

   <Shot src="/docs/img/wire-lead" alt="A tactor wire lead with a white 2-pin JST-PH connector and bare ends" />

2. Strip 5 mm of insulation from both wires.
3. Leave the ends bare. The wire plug presses them onto the motor.

Keep the ends clean and straight. Tinning is optional.

Polarity doesn't matter, but wire every tactor the same way round. Then a flipped connector is never a suspect when you chase a fault.

## Connect the wire plug and LRA motor

The wire plug (3) holds the bare ends of the wire lead (4) on the LRA motor (2). It fits tightly, for good contact and strain relief. Its horizontal slot holds the insulation and ends in a vertical slot for the wire.

<Shot src="/docs/img/tactor-wire-plug-slots" alt="The wire plug seen from behind: the horizontal slot is a groove along the top of the plug, and it ends in a vertical slot that goes right through the plug." />

1. Push the bare ends through the slot until the insulation is flush with the bottom of the wire plug.

   <Shot src="/docs/img/tactor-wires-inserted" alt="The red and black wires enter the wire plug from below. Their insulation stops flat against the plug, and the two bare copper ends stick straight up out of its top face." />

2. Bend the bare wires around to each side of the wire plug and into the vertical side slots.

   <Shot src="/docs/img/tactor-wires-bent" alt="The two bare copper ends come up out of the wire plug's slot, bend outward along its top face, one to each side, and turn down into the vertical side slots." />

3. Bend the insulated wire down until it rests in the horizontal notch. The bare wires should be flush with the top of the wire plug. If they're too long, trim them flush with the flush trim wire cutters.

   If the wires are too short, they may not stay in place. They can then touch each other and cause a short circuit. The wires must be long enough to stay in the pockets.

   <Shot src="/docs/img/tactor-wire-plug-complete" alt="The finished wire plug. The red and black insulated wires lie side by side in the notch and run out the back, and the bare copper ends lie in their pockets on top, flush with the face, then turn down into the side slots." />

4. Slide the LRA motor (2) into the LRA sled (1) at an angle, forward until it stops. Press down gently on the edge until it's fully seated. It should sit flush with the top of the LRA sled.

   <Shot src="/docs/img/tactor-lra-in-sled" alt="The LRA motor seated in the LRA sled's pocket, pushed against the back wall with its black foam top flush with the top of the sled. The space in front of it is where the wire plug goes." />

5. Start pressing the wire plug into the LRA sled. Point the bare wire down, so it touches the LRA motor, and the insulation up. The fit is snug, so use slow, firm pressure. Keep the bare wire in the side slots as you push. If the bare wire sticks up past the top of the wire plug, trim it flush or the plug won't fit.

   <Shot src="/docs/img/wire-plug" alt="The printed wire plug" />

6. Once the wire is in place, press the wire plug in until it's flush with the back of the LRA sled.

   <Shot src="/docs/img/tactor-plug-insertion" alt="Two LRA sleds seen from the back. In the front one, the wire plug is half pushed into the opening in the back of the sled and sticks out. In the other, the plug is pushed in flush with the back of the sled, and the red and black wires leave through the opening." />

## Assemble the lid

The lid assembly is the pin (7), the lid (5) and the finger cup (6). The lid and finger cup join with dovetails. Slide them together until they're fully seated, then add the pin.

<Shot src="/docs/img/lid" alt="The printed lid" />

There are three pin options: short, standard and long. They differ by about 0.5 mm each. Start with the standard pin. After a session, you can swap the pin to change the fit.

1. Slide the lid into the finger cup's dovetail slots. The lid's locking tab faces the pin hole in the finger cup.

   <Shot src="/docs/img/tactor-lid-dovetail" alt="The underside of the blue finger cup with the grey lid partway in: the lid's edges ride in the two dovetail grooves, its locking tab leading toward the pin hole, and the rest of the lid still sticks out past the end of the cup." />

2. Check that the holes in the lid and finger cup are centered on each other. If they're off, the pin can bind and the buzz will feel weaker.

   <Shot src="/docs/img/tactor-holes-aligned" alt="The lid fitted to the finger cup, seen from the lid side. Through the lid's larger hole, the finger cup's smaller hole sits exactly in the middle, as an even blue ring." />

3. Put the pin in from the lid side. Its top points out of the finger cup, and its flange sits in the lid. Set the assembly aside.

   <Shot src="/docs/img/tactor-pin-options" alt="The three pins side by side, each a short cylinder on a wide flange: short on the left, standard in the middle and long on the right, each about 0.5 mm taller than the last." />

## Buzz-check

<Banner tone="warning" title="Test the tactor before you close it">

The lid's latching tab is hard to undo without breaking it. Do this buzz-check before you close the tactor.

</Banner>

1. Plug the wire lead's JST connector into a motor port on a board you set up in [stage 2](/docs/boards). Plug into the primary board, or keep both boards on, because the app reaches the secondary only through the primary.
2. In BuzzahBuddy, open the **Gloves** tab and tap **Test Motors**. Go on to **Test Each Finger**. If a session is running (the light pulses green), stop it on the **Session** tab first.
3. Tap the finger button for that port, in the **Primary Glove** or **Secondary Glove** row for the board's role. The [finger-to-port table](/docs/wiring#which-finger-goes-in-which-port) shows which finger button matches which port.
4. A strong, steady buzz means it's good.

## Close the tactor

The LRA sled (1) rests on three compression springs (8) inside the shell (9). The springs sit in pockets on the sled and center on pins inside the shell. Work with the LRA sled face down.

1. Put only one compression spring in each pocket. Springs tend to nest inside one another, so check each pocket.

   <Shot src="/docs/img/compression-spring" alt="A compression spring" />

2. Press each spring down. It must compress and spring back freely. If it sticks, the pocket isn't round and smooth. Smooth it with a small file, pen knife or sandpaper.

   <Shot src="/docs/img/tactor-springs-on-sled" alt="The LRA sled face down, with the wire lead leaving one end. One compression spring stands in each of its three pockets, the top coils sticking up above the surface." />

3. Set the shell on the LRA sled, with the wire notch on the same edge as the wires. Gently flip the unit over while supporting the LRA sled, so the springs stay in place. Or hold the sled and springs upside down on a fingertip, set the shell over them, then pinch and flip.

   <Shot src="/docs/img/tactor-shell-over-sled" alt="The shell held upside down just above the face-down LRA sled, its open side over the three springs and its wire notch on the same edge as the wires." />

4. Press gently on the LRA sled. It should move up and down freely. If it grinds or sticks, flip the unit back over, lift off the shell, check the springs, and reassemble with each spring centered over a pin.

   <Shot src="/docs/img/tactor-shell-pins" alt="The empty shell seen from above, with three small spring pins standing on its inner floor: one near the front and two near the back corners." />

5. The lid assembly goes onto the shell with another dovetail. The latching tab end slides into the dovetail slots at the wire notch end of the shell.

   <Shot src="/docs/img/tactor-lid-to-shell" alt="The lid assembly, with the blue finger cup and pin, entering the shell from the wire end. The lid's edges have just caught the shell's dovetail grooves, and its latching tab, the small slotted tab at the leading end, goes in first." />

6. Hold the lid assembly in one hand and the shell in the other. Tip both on their sides, pinching the pin in the lid and the sled in the shell so they stay seated. Gently slide the lid assembly into the shell's dovetail slots, and don't let the pin catch on the shell. Slide it forward until it's mostly seated but not latched.

   <Shot src="/docs/img/tactor-lid-sliding-in" alt="The lid assembly slid most of the way along the shell's dovetails, with the latching tab just short of the front of the shell and not yet latched." />

7. Install the finger support (10). Lift the wire lead out of the way. Slide the finger support into the finger cup's dovetails the same way as the lid, with the thicker end toward the shell. Check both dovetails are seated. One can be in while the other is loose.

   <Shot src="/docs/img/tactor-finger-support" alt="Seen from the back: the finger support sliding into the dovetails at the end of the blue finger cup, thicker end toward the shell, with the wire lead running under it." />

8. When the finger support touches the lid, pinch the back of the finger support and the front of the shell together. Keep pinching until the latching tab on the lid snaps onto the shell.

   <Shot src="/docs/img/tactor-latch-engaged" alt="Close-up of the front of the tactor: the lid's slotted latching tab is snapped down over the front edge of the shell." />

9. The finger cup may have shifted toward the latch at the front of the shell. Hold the shell and push the rounded end of the finger cup back toward the wire until it stops moving.
10. Press the pin down and release it. It should move freely.

    <Shot src="/docs/img/tactor-assembled" alt="The finished tactor: the shell with the blue finger cup and pin on top, the finger support at the back, and the red and black wire lead leaving from under it." />

To take the tactor apart, gently lift the latching tab at the front and push the lid toward the rear of the shell. Use slow, firm pressure until it releases. Too much force breaks the tab.

The slots and brackets on the sides of the shell are for securing it to the glove. Small zip ties fit through them. Other methods work too.

## Check each tactor

<Checklist :items="['Wire ends are stripped about 5 mm, clean and not frayed.', 'Both wires sit firmly in the JST connector.', 'Wire length is the same on every lead.', 'The wire plug is flush with the back of the LRA sled.', 'The sled and the pin move freely.', 'The buzz-check gave a strong, steady buzz.']" />

If something's wrong, see [Troubleshooting](/docs/troubleshooting).
