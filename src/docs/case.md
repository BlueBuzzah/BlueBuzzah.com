---
page: docs
title: Close the case
description: "Stage 6 of building BlueBuzzah gloves: put each board, battery and antenna in its printed case, close it and strap it to the glove."
lead: Each glove's electronics live in a small 3D-printed case that straps to the back of the hand. Each case holds the BlueBuzzah v3 PCB, the battery and the antenna.
need:
  - { qty: 2, label: "printed cases, each with its switch" }
  - { qty: 2, label: "gloves, wired and tested in stage 5" }
  - { qty: 4, label: M2×5 pan-head screws }
  - { qty: A few, label: straps or small zip ties }
tools:
  - Small Phillips screwdriver
figure:
  src: /docs/img/bluebuzzah-exploded-labeled
  alt: "Exploded view of the BlueBuzzah case and its contents, labeled in assembly order: number 1 lower shell, number 2 battery, number 3 BlueBuzzah v3 PCB, number 4 M2 screws, number 5 switch, number 6 antenna, number 7 upper shell"
  caption: The case and its contents, numbered in the order they go together.
---

## The case parts

### Lower shell (1)

<Shot src="/docs/img/lower-shell" alt="The lower shell: an open tray with 2 round standoffs on its floor, 2 notches in the front wall, and 5 notches along the back wall" />

- **2 standoffs** on the floor line up with the board's 2 mounting holes. The board sits 5.7 mm up, with room for the 5.6 mm-thick battery beneath.
- **2 notches in the front wall** clear the USB-C port and the slide switch.
- **5 notches in the back wall** line up with the 5 motor ports. Each tactor wire lead leaves through one.

### Upper shell (7)

<Shot src="/docs/img/upper-shell" alt="The upper shell: a rounded cover with a large USB-C opening at the front left, a small slot and a round window on top, and strap loops in each side" />

The upper shell presses on with a light compression fit. It needs no fasteners.

- **USB-C opening** at the front. It lets you charge and update firmware without opening the case.
- **Switch slot** in the roof, where the switch's knob comes through.
- **Status window**, a round hole above the status light.
- **Strap loops**, 2 in each side wall.

### Switch (5)

<Shot src="/docs/img/switch" alt="The printed switch: a small block with a raised knob on top and a hooked foot" />

The board's slide switch is tiny. The printed switch fits over its lever and reaches up through the roof slot, so you can work it from outside.

## What goes inside

| Number | Part | Notes |
| --- | --- | --- |
| 2 | **Battery** | PKCELL LP552035, 3.7 V LiPo, 350 mAh, 36 × 20 × 5.6 mm (1.42 × 0.79 × 0.22 in), 2-pin JST-PH (2.00 mm pitch). It lies under the board. Its lead comes up through the cutout in the board's edge to the battery port. |
| 3 | **Board** | The board you set up in [stage 2](/docs/boards). |
| 4 | **2 M2 screws** | M2×5 pan-head screws that hold the board on the standoffs. |
| 6 | **Antenna** | The board's required antenna, plugged into the XIAO's IPEX/U.FL socket. See [Get the parts](/docs/parts#buy-the-parts). |

## Put it together

Do this once per glove, with the board, battery and antenna already working from [stage 5](/docs/wiring).

1. **Battery.** Lay the battery (2) flat in the lower shell (1), between the 2 standoffs. Point its taped end and lead at the side wall below the cutout.
2. **Battery lead.** The battery port is at the front corner of the board (3), on the side away from the XIAO. It faces inward. Halfway along that edge is a small cutout. Bring the lead up through the cutout and plug it into the port. The lead tucks past the edge, not under the board.
3. **Board.** Lower the board onto the 2 standoffs, with the USB-C port and slide switch at the front-wall notches and the motor ports at the back-wall notches. Screw it down with the 2 M2×5 pan-head screws (4).
4. **Tactor wire leads.** Plug each lead into its port, as in the [finger-to-port table](/docs/wiring#which-finger-goes-in-which-port). Run each out through its own back-wall notch, without crossing or pinching another.
5. **Antenna.** Check that the antenna (6) is still plugged into the XIAO. Lay it and its cable inside so nothing is pinched when the case closes.
6. **Switch.** Fit the printed switch (5) over the slide switch's lever.
7. **Upper shell.** Press the upper shell (7) onto the lower shell. Guide the switch's knob up through the roof slot. Check that the USB-C port and status light line up with their openings. Slide the switch to check that it turns the glove on and off through the case.
8. **Mount.** Thread a strap or small zip ties through the strap loops and fasten the case to the back of the glove. Leave each lead enough slack for a full curl of the fingers.

   <Shot src="/docs/img/case-strapped" alt="The closed case with 2 straps. Each strap runs under the case, comes out through a strap loop on each side, and turns down to wrap around the hand." />

## Final check

If a session is running (the light pulses green), stop it on the **Session** tab before you open **Test Motors**. The full finger test is in [stage 5](/docs/wiring#test-every-finger), and the [finger-to-port table](/docs/wiring#which-finger-goes-in-which-port) shows where each lead goes.

<Checklist :items="['Charge: each glove charges over USB-C with the battery connected. The motors never run on USB alone.', 'Power on: with both gloves powered together, each tactor buzzes briefly and both lights turn solid green.', 'Battery: BuzzahBuddy shows a battery level for both gloves.', 'Fingers: in Test Motors on the Gloves tab, every finger button buzzes the right finger.']" />

If a light stays breathing blue, check that one board is primary and one is secondary, power-cycle both, and bring them closer together.

Your pair is done! Continue to [Your first session](/docs/first-session).
