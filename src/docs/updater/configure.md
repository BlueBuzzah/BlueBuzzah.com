---
page: docs
title: Configure the gloves
description: "Choose a pattern, set your own Custom timing and strength, and turn the light off during sessions, with the BlueBuzzah Updater."
lead: Choose how your gloves buzz, then give both gloves the same settings.
---

<Notices />

## Choose a pattern

Open **Configure**. Under **Choose a Pattern**, pick one:

- **Regular:** the standard pattern. Fingers buzz one at a time at a steady pace. Each glove follows its own order.
- **Noisy:** like Regular, but the timing varies a little each time. Both gloves follow the same order. This is the research protocol.
- **Hybrid:** like Regular, but the timing varies a little each time. Each glove follows its own order.
- **Gentle:** softer buzzing. Fingers buzz one after another in a fixed order.
- **Custom:** set your own timing, strength and session length.

The Updater remembers your choice for next time.

<Shot src="/docs/img/updater/choose-pattern" alt="Choose a Pattern, with Regular selected above Noisy, Hybrid, Gentle and Custom." caption="The 5 patterns, with Regular selected." />

## Custom settings

Choosing **Custom** opens **Custom Pattern**. If your primary glove is plugged in and already uses Custom, the Updater loads its settings. Otherwise it shows the defaults.

Each box shows the range it accepts.

- **Buzz length:** how long each buzz lasts.
- **Pause between buzzes:** the gap between buzzes.
- **Timing variation:** how much the timing varies each time.
- **Lowest strength** and **Highest strength:** the softest and strongest buzz.
- **Session length:** how long a session runs.
- **Same order on both devices:** both gloves buzz the same fingers in the same order.

After you change a value, **Reset to Defaults** puts back the defaults. **Load from Device** reads the settings from your primary glove again.

Custom settings need the primary glove plugged in when you apply them.

<Shot src="/docs/img/updater/custom-pattern" alt="The Custom Pattern settings at their defaults, each box with its range below it." caption="The Custom settings, each with its range." />

You can also change the strength later in BuzzahBuddy, with the **Softest Buzz** and **Strongest Buzz** settings of the Custom profile, under **Edit Settings** on the **Gloves** tab.

## Device behavior

- **Turn off the light during sessions:** the glove's light stays off while it buzzes.
- **Debug output:** sends extra details over USB for troubleshooting. Leave it off unless someone helping you asks for it.

## Apply the settings

1. Connect the gloves with a USB-C data cable. Under **Choose Devices**, select both. Only gloves with firmware installed are listed.
2. Select **Apply to Devices**.
3. Keep the gloves plugged in until it finishes. They restart on their own when setup is done.

   <Shot src="/docs/img/updater/configure-progress" alt="Setup in progress: the first device is done and the second is setting up." caption="Setup in progress, 1 glove at a time." />

4. When the Updater shows the pattern is set, select **Done**.

   <Shot src="/docs/img/updater/configure-done" alt="The success banner says Custom is set on both devices, and both are marked Done." caption="The pattern is set on both gloves." />

Give both gloves the same settings so they work properly as a pair. If only 1 is plugged in, configure the other one the same way next.

If setup doesn't finish, see [Fix Updater problems](/docs/updater/troubleshooting).
