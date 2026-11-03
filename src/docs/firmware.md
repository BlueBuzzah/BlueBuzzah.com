---
page: docs
title: Firmware and glove roles
description: "Choose a therapy profile, update the firmware and swap which BlueBuzzah glove is primary, using the BlueBuzzah Updater."
lead: Use the BlueBuzzah Updater to choose a therapy profile, keep the firmware current and swap which glove is primary.
---

<Notices />

The Updater runs on Windows and macOS. Use a USB-C cable that carries data. Getting the Updater and the first install are in [Install the firmware](/docs/boards#install-the-firmware), in stage 2.

## Therapy profiles

Open **Configure** in the Updater, pick a profile and apply it to both boards. Give both boards the same profile.

- **Regular:** steady timing.
- **Noisy:** both gloves buzz the same finger, with varied timing. This is the research protocol.
- **Hybrid:** each glove buzzes in its own order, with varied timing.
- **Gentle:** lower strength.
- **Custom:** your own settings.

[Therapy Profiles](https://github.com/BlueBuzzah/BlueBuzzah-Updater/wiki/Therapy-Profiles) on the Updater wiki explains what each one does and how to set Custom.

Adjust intensity in BuzzahBuddy with the **Softest Buzz** and **Strongest Buzz** settings of the Custom profile, under **Edit Settings** on the **Gloves** tab.

## Update the firmware

Update the firmware with the Updater when a new version comes out. Use the same app and the same cable as the first install.

1. Connect the board.
2. Open **Firmware** and choose a version.
3. Set the role again. Choose the same role the board had before, so it keeps its role.
4. Select **Update Firmware**.

The [User Guide](https://github.com/BlueBuzzah/BlueBuzzah-Updater/wiki/User-Guide) walks through every step.

## Swap which glove is primary

Swapping re-flashes both boards. You don't rewire anything. The old primary becomes the secondary, and the old secondary becomes the primary.

Do this for both boards, one at a time:

1. Connect the board.
2. Open **Firmware** and choose its new role.
3. Select **Update Firmware**.

Then check it in BuzzahBuddy:

1. Stop any running session on the **Session** tab first.
2. On the **Gloves** tab, open **Test Motors** and tap a **Primary Glove** finger button. The glove that buzzes is the primary.
