---
page: docs
title: Get the parts
description: "Stage 1 of building BlueBuzzah gloves: order the 2 boards, buy the parts and print the tactor parts and cases for 1 pair."
lead: "Everything here is for 1 pair: 2 boards, 8 tactors, 2 cases and 2 batteries. Order the boards first. They're made to order, so start them before you buy the rest."
buy:
  - { qty: 2, name: Antennas, spec: "Internal 2.4/5 GHz dual-band, IPEX/U.FL plug, model U4-WIFI-R-A0-HB; required", store: "Amazon (5-pack)", href: "https://www.amazon.com/Internal-Antenna-Built-Durable-Lightweight/dp/B08VSJPY7V" }
  - { qty: 8, name: LRA motors, spec: "Vybronics VLV101040A; 4 per glove", store: Digi-Key, href: "https://www.digikey.com/en/products/detail/vybronics-inc/VLV101040A/12323590" }
  - { qty: "24, buy extra", name: Compression springs, spec: "304 stainless steel, 3 mm OD, 0.3 mm wire, 5 mm free length; 3 per tactor", store: Amazon, href: "https://a.co/d/02bOUyps" }
  - { qty: 2, name: Batteries, spec: "PKCELL LP552035, 3.7 V LiPo, 350 mAh, 36 × 20 × 5.6 mm (1.42 × 0.79 × 0.22 in), 2-pin JST PH plug (2.00 mm pitch)", store: Digi-Key, href: "https://www.digikey.com/en/products/detail/adafruit-industries-llc/2750/6612470" }
  - { qty: 8, name: Wire leads, spec: "Ready-made JST PH 2-pin female leads, 6 in (150 mm) or longer; 1 per tactor", store: Amazon, href: "https://www.amazon.com/daier-Micro-2-Pin-Connector-Female/dp/B01DUC1O68" }
  - { qty: 2, name: Gloves, spec: "1 left-hand and 1 right-hand, snug; stretchy nitrile-dipped work gloves may work best; size down if between sizes", store: Your choice }
  - { qty: 1, name: USB-C cable, spec: "Carries data, not charge-only", store: Any store }
  - { qty: 4, name: M2×5 pan-head screws, spec: "2 per case", store: Any hardware store }
  - { qty: a few, name: Straps or small zip ties, spec: "To fasten each case to its glove, and each tactor if needed", store: Any store }
---

## Order the boards

Order 2 boards, fully assembled, from [JLCPCB](https://jlcpcb.com). Every part comes fitted, so you solder nothing onto the board.

1. Download the PCB files.

   <FileButton href="https://github.com/BlueBuzzah/BlueBuzzah-Hardware/releases/download/v3.0.0-beta.0/BlueBuzzah-v3-PCB.zip" label="PCB files (.zip)" early-access />

   These are early test files. They may change before the full release.

   <Shot src="/docs/img/bluebuzzah-v3-pcb" alt="The assembled BlueBuzzah v3 PCB with the ESP32-S3 module on the left, the slide switch at the front edge, and 5 motor ports along the back" caption="The assembled board." />

2. Unzip it and open the `JLCPCB` folder. It holds the 3 order files, and `ORDERING-JLCPCB.md` has the full ordering notes.
3. Start a PCB assembly order at JLCPCB and upload the board files, `BlueBuzzah_v3_JLCPCB_gerbers.zip`. Don't unzip it.
4. Upload the parts list (`BlueBuzzah_v3_JLCPCB_BOM.csv`) and placement file (`BlueBuzzah_v3_JLCPCB_CPL.csv`) when it asks for assembly.
5. Set the quantity to 2.
6. Check that the parts JLCPCB sources match the parts list before you pay.

To order from PCBWay instead, use the `PCBWay` folder and follow its `ORDERING-PCBWAY.md`. Don't mix the two folders' files.

## Buy the parts

Quantities are for 1 pair of gloves. Each link is a suggestion. Any listing that matches the description works.

<BuyList />

The antenna is required, because the app and the glove-to-glove link both need it.

Wait to buy the gloves until you've built a tactor in [stage 3](/docs/tactors), so you can test the fit. If you buy them sooner, choose a store with easy returns. See [Find the right gloves](/docs/gloves#find-the-right-gloves).

## Print the parts

Every print model is in 1 download: the print file (`BlueBuzzah-v3-parts.3mf`) and an STL file for each part.

<FileButton href="https://github.com/BlueBuzzah/BlueBuzzah-Hardware/releases/download/v3.0.0-beta.0/BlueBuzzah-v3-parts.zip" label="3D-printed parts (.zip)" early-access />

These are early test files. They may change before the full release.

Print everything from the `.3mf` file. It has 3 plates:

- **Plate 1:** every tactor part except the finger cups, in PLA or PETG.
- **Plate 2:** the finger cups, in TPU. We tested TPU 95A and flexible PLA, and we advise TPU.
- **Plate 3:** 2 cases with their switches.

<!-- planned-image: images/v3/print/plate-1.png | render -->
<!-- planned-image: images/v3/print/plate-2.png | render -->
<!-- planned-image: images/v3/print/plate-3.png | render -->

Use these settings. Other settings may give parts that don't fit.

- 0.4 mm nozzle.
- 0.12 mm layer height.
- Tested on Bambu Lab P1S and A1 printers.

The parts use 0.2 mm fit tolerances. A smooth plate is best, and a textured plate also works.

To change a design, start from the STEP files in the [BlueBuzzah-Hardware repository](https://github.com/BlueBuzzah/BlueBuzzah-Hardware/tree/main/models/STEP).

## Tools

- Wire strippers, to strip the wire leads.
- Flush trim wire cutters, to trim wire ends.
- Tweezers, to place small parts.
- A magnifier or magnifying lamp, to see the small terminals.
- Fabric scissors, to cut the glove.
- A marker, to mark where to cut the holes.
- Tape, to label the boards and gloves.
- A small file, pen knife or sandpaper, to smooth a spring pocket if needed.
- A cutting mat, to cut the glove on.
- Small Phillips screwdriver, to fasten the board in the case.
- A 3D printer or print service.
- A phone or tablet with BuzzahBuddy.
- A computer for the [BlueBuzzah Updater](/docs/updater/) (Windows or macOS).
- Optional: a soldering iron to tin wire ends, and a multimeter for fault-finding.
- Optional: long needle-nose pliers, to place a tactor in a glove finger.

## Cost

These are rough ranges per pair. They change with supplier, quantity and shipping.

| Category | Estimated range | Why it varies |
| --- | --- | --- |
| Boards (2) | $100–250 | JLCPCB's assembly setup fees dominate at low quantity. |
| LRA motors (8) | $15–35 | Pricing varies by distributor and quantity. |
| Compression springs, printed tactor parts and cases | $10–150 | It costs little if you own a printer, and more with a print service. |
| Batteries (2) | $10–30 | Capacity and connector options change the price. |
| Gloves (2) | $10–30 | Brand and size change the price. |
| Wire leads, zip ties | $15–35 | Pack sizes vary. |
| USB-C cable | $5–15 | Quality varies. |
| **Total, excluding tools you own** | **roughly $165–545** | |

## Optional thumb tactors

The standard build has 4 tactors per glove. The board has 5 motor ports, and the extra one is for a thumb tactor.

For each thumb tactor, get:

- 1 more LRA motor.
- 3 more compression springs.
- 1 more wire lead.

Also print 1 more of each tactor part, from plates 1 and 2.
