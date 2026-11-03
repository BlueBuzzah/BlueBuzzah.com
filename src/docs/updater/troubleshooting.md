---
page: docs
title: Fix Updater problems
description: "What to do when a BlueBuzzah Updater flash or setup doesn't finish, and how to view, copy and share its log."
lead: When a flash or setup doesn't finish, the Updater says what went wrong and what to try. Its log has the details to share if you need help.
---

## When something goes wrong

The Updater shows what happened, with numbered steps to try. Follow them, then try again: select **Try Again** after a flash, or **Apply to Devices** after a setup. The exact error appears below the steps.

<!-- planned-image: /docs/img/updater/flash-failed | screenshot | a flash that didn't finish: the error banner with its steps and Copy Details, then Details and each glove marked Failed -->

Common messages and what to do are below.

## View and share the log

Every flash and setup keeps a log of each step. It's useful to anyone helping you.

1. Select **Show Log**, below the gloves.
2. Select **Copy Log** to copy it, or **Save Log** to save it as a text file.
3. Paste or attach it in an email or message to whoever is helping you, or in an issue on the [BlueBuzzah Updater's GitHub page](https://github.com/BlueBuzzah/BlueBuzzah-Updater/issues).

When a run doesn't finish, **Copy Details** copies the same log.

The log clears when you select **Done** or **Start Over**, so copy or save it first.

<!-- planned-image: /docs/img/updater/log | screenshot | the open log, with Copy Log and Save Log above its numbered lines -->

## Common messages

### No devices found

- Use a USB-C cable that carries data. Some cables only charge.
- Check that the glove is turned on.
- Try a different USB port.
- Unplug the glove, wait 5 seconds, then plug it back in. Select **Rescan**.

### You can't flash a v2 and a v3 device together

Flash one kind at a time.

### Can't reach GitHub, or GitHub asked us to wait

Check your internet connection. Wait a few minutes, then select **Try Again**. Firmware you downloaded before is still available.

### Firmware transfer stopped, or the flash failed after several tries

The USB connection dropped.

- Plug the glove straight into your computer, not into a hub.
- Try a shorter cable or a different port.
- Keep the glove still during the flash, then select **Try Again**.

### Firmware installed, but the role wasn't set

The firmware is on the glove. Unplug it, plug it back in, then flash it again. The firmware is already downloaded.

### Your computer blocked the device, or can't talk to the device

Another app may be using the glove's USB port. Close any app that uses it, such as a serial monitor. Unplug the glove, plug it back in, then restart the Updater.

### The device didn't accept the firmware

Check that you chose firmware for this glove. Then delete the download in **Change Version**, and flash again to get a fresh copy.

### A glove won't start after a flash stopped

Plug it back in and flash it again.

### Custom settings weren't applied

No glove answered as the primary. Plug in your primary glove, then select **Apply to Devices** again. If the Updater says your custom settings may not have saved, select **Apply to Devices** again too.

### The update didn't install

This is about updating the Updater itself. Check your internet connection, then select **Try Again**. **Copy Details** copies the error to share.
