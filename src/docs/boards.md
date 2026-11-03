---
page: docs
title: Set up the boards
description: "Stage 2 of building BlueBuzzah gloves: fit the antennas, connect the batteries, install the firmware and check that BuzzahBuddy connects."
lead: "Fit the antenna, connect the battery and install the firmware on both boards. Then check that BuzzahBuddy connects."
need:
  - { qty: 2, label: boards }
  - { qty: 2, label: antennas }
  - { qty: 2, label: batteries }
  - { qty: 1, label: USB-C data cable }
tools:
  - A computer with the BlueBuzzah Updater (Windows or macOS)
  - A phone or tablet with BuzzahBuddy
  - Tape and a marker
figure:
  src: /docs/img/bluebuzzah-v3-pcb
  alt: "The assembled BlueBuzzah v3 PCB with the XIAO ESP32-S3 at the front left, the slide switch at the front edge, and 5 motor ports along the back"
  caption: The assembled board.
---

## Fit the antenna

**The antenna is required.** Without it, the gloves can't reach each other or your phone. A board with no antenna looks dead, and it isn't.

<Shot src="/docs/img/antenna" alt="The flat black antenna with its thin white cable ending in a small gold IPEX/U.FL plug" />

1. Press the antenna's IPEX/U.FL plug straight down onto the socket on the XIAO module.

   <Shot src="/docs/img/board-antenna-fitted" alt="Close-up of the board's XIAO module. The antenna's small gold plug is pressed flat-side up onto the socket at the back corner of the module's metal shield, and its white cable runs off the board." />

2. Fit the other antenna to the other board the same way.

To remove a plug, pull on the plug body, never the cable.

## Connect the battery

1. Plug a battery into the battery connector on each board.

   <Shot src="/docs/img/battery" alt="The PKCELL LP552035 battery with its red and black lead ending in a white 2-pin JST PH plug" />

The board charges the battery whenever USB-C is connected.

The motors run only from the battery, never from USB. A board on USB alone flashes fine but can't buzz a motor.

## Install the firmware

The BlueBuzzah Updater runs on Windows and macOS. Follow its [Getting Started](https://github.com/BlueBuzzah/BlueBuzzah-Updater/wiki/Getting-Started) page to download and install it.

Use a USB-C cable that carries data. Some cables only charge, and the Updater won't see the board through them.

Flash both boards in one run, or one at a time.

1. Connect the board over USB-C. The Updater lists it as **BlueBuzzah v3**, with its port shown beside it.
2. Open **Firmware**. Under **Choose Devices**, select the board. Choose primary for 1 board and secondary for the other. With 2 boards selected, the Updater suggests one of each. [Understanding Device Roles](https://github.com/BlueBuzzah/BlueBuzzah-Updater/wiki/Understanding-Device-Roles) explains what each role does.
3. Keep the latest version, then select **Update Firmware**. The Updater writes the firmware and sets the role in the same run.
4. Label each board with its role, using tape and a marker.

The firmware is the same on both boards. It doesn't matter yet which board gets which role. You pair each role with a glove in [stage 4, Fit the tactors in the gloves](/docs/gloves).

Therapy profiles, later updates and swapping roles are in [Firmware and glove roles](/docs/firmware).

## Check the boards

With no tactors connected yet, the light shows a red double blink for about 5 seconds, then a slow red blink. That's expected here.

1. Power both boards on with the slide switch.
2. Wait a few seconds for the boards to find each other.
3. Install BuzzahBuddy from [BuzzahBuddy.com](https://buzzahbuddy.com). It's in early testing: on iPhone it installs through TestFlight, and on Android through a Google Play test listing.
4. Open the **Gloves** tab and tap **Scan for Gloves**. Connect to the glove in the list.

Only the primary appears in the scan. The app reaches the secondary through the primary.

An orange slow blink means the board has no role yet. Go back to the Updater and set one.

## Pass check

Don't move on until both boards pass. You pass when all of these are true:

<Checklist :items="['Both boards flashed without errors.', 'Each board has a role, 1 primary and 1 secondary, and a label.', 'BuzzahBuddy connects.', 'The Gloves tab shows a Primary card and a Secondary card.', 'Both cards show the badge Connected and a battery level.']" />

If the **Secondary** card shows **Not Connected**, the secondary isn't linked to the primary. Check that it's powered on and close to the primary. If it shows **No Reading**, the primary is connected but isn't reporting on the secondary.

You test the motors later: in the [buzz-check](/docs/tactors#buzz-check) in stage 3, and again in [stage 5](/docs/wiring). Each tactor plugs in and unplugs, so a bad port costs you nothing to find then.
