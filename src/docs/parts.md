---
page: docs
title: Get the parts
description: "Stage 1 of building BlueBuzzah gloves: order the two boards, buy the parts and print the tactor parts and cases for one pair."
lead: "Everything here is for one pair: two boards, eight tactors, two cases and two batteries. Order the boards first. They're made to order, so start them before you buy the rest."
buy:
  - { qty: 2, name: Antenna, spec: "Internal 2.4/5 GHz dual-band, IPEX/U.FL plug, model U4-WIFI-R-A0-HB; required", store: "Amazon (5-pack)", href: "https://www.amazon.com/Internal-Antenna-Built-Durable-Lightweight/dp/B08VSJPY7V" }
  - { qty: 8, name: LRA motor, spec: "Vybronics VLV101040A; four per glove", store: Digi-Key, href: "https://www.digikey.com/en/products/detail/vybronics-inc/VLV101040A/12323590" }
  - { qty: "24, buy extra", name: Compression springs, spec: "304 stainless steel, 3 mm OD, 0.3 mm wire, 5 mm free length; three per tactor", store: Amazon, href: "https://a.co/d/02bOUyps" }
  - { qty: 2, name: Battery, spec: "PKCELL LP552035, 3.7 V LiPo, 350 mAh, 36 × 20 × 5.6 mm (1.42 × 0.79 × 0.22 in), 2-pin JST-PH plug (2.00 mm pitch)", store: Digi-Key, href: "https://www.digikey.com/en/products/detail/adafruit-industries-llc/2750/6612470" }
  - { qty: 8, name: Wire leads, spec: "Ready-made JST PH 2-pin female leads, 6 in (150 mm) or longer; one per tactor", store: Amazon, href: "https://www.amazon.com/daier-Micro-2-Pin-Connector-Female/dp/B01DUC1O68" }
  - { qty: 2, name: Gloves, spec: "Stretchy nitrile-dipped work gloves, one left and one right, snug; size down if between sizes", store: Your choice }
  - { qty: 1, name: USB-C cable, spec: "Carries data, not charge-only", store: Any store }
  - { qty: 4, name: M2×5 pan-head screws, spec: "Two per case", store: Any hardware store }
  - { qty: a few, name: Straps or small zip ties, spec: "To fasten each case to its glove", store: Any store }
---

## Order the boards

Order 2 boards, fully assembled, from [JLCPCB](https://jlcpcb.com). Every part comes fitted, so you solder nothing onto the board.

1. Download the three order files.

   <FileButtons :files="[{ href: 'https://github.com/BlueBuzzah/BlueBuzzah-Hardware/raw/main/PCB/v3/jlc_pcb_gerbers.zip', label: 'Board files (.zip)' }, { href: 'https://github.com/BlueBuzzah/BlueBuzzah-Hardware/raw/main/PCB/v3/BOM_JCLPCB_BlueBuzzah_v3.csv', label: 'Parts list (.csv)' }, { href: 'https://github.com/BlueBuzzah/BlueBuzzah-Hardware/raw/main/PCB/v3/CPL_JLCPCB_BlueBuzzah_v3-all-pos.csv', label: 'Placement file (.csv)' }]" />

   <Shot src="/docs/img/bluebuzzah-v3-pcb" alt="The assembled BlueBuzzah v3 PCB with the XIAO ESP32-S3 at the front left, the slide switch at the front edge, and five motor ports along the back" caption="The assembled board." />

2. Start a PCB assembly order at JLCPCB and upload the board files.
3. Upload the parts list and placement file when it asks for assembly.
4. Set the quantity to 2.
5. Check that the parts JLCPCB sources match the parts list before you pay.

Any other board maker that assembles boards from these three files (gerbers, BOM and CPL) works too.

## Buy the parts

Quantities are for one pair of gloves. Each link is a suggestion. Any listing that matches the description works.

<BuyList />

The antenna is required, because the app and the glove-to-glove link both need it.

## Print the parts

Print everything from one file. It has three plates:

- **Plate 1:** every tactor part except the finger cups, in PLA or PETG.
- **Plate 2:** the finger cups, in TPU. We tested TPU 95A and flexible PLA, and we advise TPU.
- **Plate 3:** two cases with their switches.

<FileButton href="https://github.com/BlueBuzzah/BlueBuzzah-Hardware/raw/main/models/BlueBuzzah-v3.3mf" label="Print file (.3mf)" />

<!-- planned-image: images/v3/print/plate-1.png | render -->
<!-- planned-image: images/v3/print/plate-2.png | render -->
<!-- planned-image: images/v3/print/plate-3.png | render -->

Use these settings. Other settings may give parts that don't fit.

- 0.4 mm nozzle.
- 0.12 mm layer height.
- Tested on Bambu Lab P1S and A1 printers.

The parts use 0.2 mm fit tolerances. A smooth plate is best, and a textured plate also works.

To change a design, start from the STEP files.

<FileButtons :files="[{ href: 'https://github.com/BlueBuzzah/BlueBuzzah-Hardware/raw/main/models/BlueBuzzah-v3-tactor.step', label: 'Tactor (.step)' }, { href: 'https://github.com/BlueBuzzah/BlueBuzzah-Hardware/raw/main/models/BlueBuzzah-v3-shell.step', label: 'Case (.step)' }]" />

## Tools

- Wire strippers, to strip the wire leads.
- Flush trim wire cutters, to trim wire ends.
- Tweezers, to place small parts.
- A magnifier or magnifying lamp, to see the small terminals.
- Fabric scissors, to cut the glove.
- A needle, thread and thimble, to sew the tactors in.
- A marker and ruler, to mark tactor positions.
- A cutting mat, to cut the glove on.
- A 3D printer or print service.
- A phone or tablet with BuzzahBuddy.
- A computer for the BlueBuzzah Updater (Windows or macOS).
- Optional: a soldering iron to tin wire ends, and a multimeter for fault-finding.

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

The standard build has 4 tactors per glove. The board has five motor ports, and the extra one is for a thumb tactor.

For each thumb tactor, get:

- 1 more LRA motor.
- 3 more compression springs.
- 1 more wire lead.

Also print one more of each tactor part, from plates 1 and 2.
