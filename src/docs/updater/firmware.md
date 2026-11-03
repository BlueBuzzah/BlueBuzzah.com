---
page: docs
title: Update the firmware
description: "Install or update the firmware on BlueBuzzah gloves with the BlueBuzzah Updater, set each glove's role, and swap which glove is primary."
lead: Install the firmware on your gloves, keep it current, and choose which glove is primary.
---

Use these steps for the first install and for every update after it. When a new version comes out, the Updater lists it for you.

## Choose your gloves

1. Connect the gloves to your computer with a USB-C data cable. You can do 2 at once, or 1 at a time.
2. Open **Firmware**. Under **Choose Devices**, select each glove. It's listed as **BlueBuzzah v3**, with its port. Older v2 gloves are listed as **BlueBuzzah v2**.
3. Choose a **Role** for each glove: **Primary** or **Secondary**. With 2 gloves selected, the Updater gives them one of each. Check that each matches the label on its board, and change it if not.

The primary glove connects to the BuzzahBuddy app. The secondary glove follows it.

When you update, give each glove the role it had before, so the gloves stay on the same hands.

If a glove isn't listed, select **Rescan**. See [Fix Updater problems](/docs/updater/troubleshooting#no-devices-found) if it still isn't there.

<!-- planned-image: /docs/img/updater/choose-devices | screenshot | Choose Devices with 2 BlueBuzzah v3 gloves selected, one set to Primary and one to Secondary -->

## Choose a version

**Choose a Version** shows the newest version, marked **Latest**. Keep it unless someone helping you asks for another.

To pick a different one, select **Change Version**. Each version has its **Release Notes**, and may have a badge:

- **Latest:** the newest regular version.
- **Downloaded:** already on this computer, so it works without the internet. **Delete Download** removes it.
- **Experimental:** an early build for testing, which may have bugs. These are hidden until you turn on **Show experimental versions**.

<!-- planned-image: /docs/img/updater/choose-version | screenshot | the Choose a Version dialog, listing versions with the Latest and Downloaded badges -->

## Install it

1. Select **Update Firmware**.
2. Keep the gloves plugged in until it finishes. Unplugging during a flash can leave a glove unable to start.

The Updater checks the gloves, downloads the firmware, writes it to each glove, then sets each role. Each glove shows its own progress.

<!-- planned-image: /docs/img/updater/flash-progress | screenshot | a flash in progress, with the overall progress bar and each glove's progress -->

To stop a flash, select **Stop**, then **Stop Flash**. A stopped glove may not start until you flash it again.

When it's done, the Updater shows that the firmware is on your gloves. Select **Done**, then unplug them. Turn both gloves on and they find each other on their own.

<!-- planned-image: /docs/img/updater/flash-done | screenshot | the finished flash, saying the firmware is on both devices, with each glove marked Done -->

If the flash doesn't finish, see [Fix Updater problems](/docs/updater/troubleshooting).

## Swap which glove is primary

Swapping re-flashes both gloves. You don't rewire anything. The old primary becomes the secondary, and the old secondary becomes the primary.

1. Connect both gloves, then open **Firmware** and select both.
2. Give each glove the other role.
3. Select **Update Firmware**.
4. Update the labels on the boards.

Then check it in BuzzahBuddy:

1. Stop any running session on the **Session** tab first.
2. On the **Gloves** tab, open **Test Motors** and tap a **Primary Glove** finger button. The glove that buzzes is the primary.
