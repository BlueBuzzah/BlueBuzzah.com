<template>
	<main class="section">
		<div class="container">
			<div class="prose stack-lg">
				<a class="link-icon" href="/"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/arrow-left.svg#icon"/></svg>Back to home</a>
				<div class="stack">
					<h1 class="headline">Privacy policy</h1>
					<p class="body-s text-muted">Effective date: October 30, 2026</p>
				</div>
				<section class="stack">
					<h2 class="title-l">Who this policy covers</h2>
					<p class="body">This policy covers the BlueBuzzah apps: <strong>BuzzahBuddy</strong>, the companion app for iPhone and Android, and the <strong>BlueBuzzah Updater</strong>, the desktop app that installs firmware on the gloves. Both apps are developed and published by <strong>BlueBuzzah Partners</strong> for the BlueBuzzah open-source project. "We" in this policy means BlueBuzzah Partners.</p>
				</section>
				<section class="stack">
					<h2 class="title-l">Data collection and storage</h2>
					<p class="body">BuzzahBuddy keeps the following information on your phone only:</p>
					<ul class="body"><li>Therapy session records</li><li>Your Custom profile settings</li><li>The name and Bluetooth identifier of the gloves you last connected, so the app can reconnect to them</li><li>App preferences, such as theme and Demo Mode</li><li>The latest firmware version it found on GitHub, and when it checked</li></ul>
					<p class="body-strong">No data leaves your device. No cloud storage. No accounts. We never receive your information.</p>
				</section>
				<section class="stack">
					<h2 class="title-l">Data transmission</h2>
					<p class="body">BuzzahBuddy communicates with your BlueBuzzah gloves over Bluetooth. Its only use of the internet is asking GitHub for the latest firmware version, at most once a day after you connect your gloves, so it can tell you when they need an update. The request carries nothing about you, your gloves or your sessions, and BuzzahBuddy compares the versions on your phone. It doesn't make the request in Demo Mode.</p>
					<p class="body">The BlueBuzzah Updater connects to the gloves over USB. It uses the internet only to download firmware releases and check for new versions of itself, both from GitHub.</p>
					<p class="body">Like any web request, these requests show GitHub your IP address. GitHub handles that under the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub General Privacy Statement</a>. Neither app sends personal information.</p>
				</section>
				<section class="stack">
					<h2 class="title-l">Permissions</h2>
					<ul class="body"><li><strong>Bluetooth:</strong> BuzzahBuddy uses Bluetooth to find and connect to your gloves.</li><li><strong>Location (Android 11 and earlier only):</strong> these Android versions require location permission to scan for Bluetooth devices. BuzzahBuddy uses it only to find your gloves, and never reads or stores your location.</li></ul>
				</section>
				<section class="stack">
					<h2 class="title-l">Personal information</h2>
					<p class="body">The BlueBuzzah apps do not collect:</p>
					<ul class="body"><li>Names or email addresses</li><li>Contact information</li><li>Location data</li><li>Device identifiers</li><li>Analytics or usage metrics</li><li>Health records beyond locally stored session information</li></ul>
					<p class="body-strong">No account creation required. No sign-up process.</p>
				</section>
				<section class="stack">
					<h2 class="title-l">Third-party access</h2>
					<p class="body">No third parties receive information from the BlueBuzzah apps. Apart from the GitHub requests described above, the apps don't use:</p>
					<ul class="body"><li>Analytics services</li><li>Advertising networks</li><li>Social media platforms</li><li>Cloud storage providers</li><li>External APIs</li></ul>
				</section>
				<section class="stack">
					<h2 class="title-l">Data control</h2>
					<p class="body">You have complete control over your data:</p>
					<ul class="body"><li>In BuzzahBuddy, Settings › Clear All Data deletes everything the app has stored</li><li>Uninstalling an app removes all of its data</li></ul>
				</section>
				<section class="stack">
					<h2 class="title-l">Children's privacy</h2>
					<p class="body">The BlueBuzzah apps do not knowingly collect information from children under 13. Because everything stays on the device, no personal data is transmitted, whatever the user's age.</p>
				</section>
				<section class="stack">
					<h2 class="title-l">Security</h2>
					<p class="body">Data protection relies on your device's native security mechanisms. We recommend enabling device-level protections such as passcodes or biometric authentication to safeguard your therapy data.</p>
				</section>
				<section class="stack">
					<h2 class="title-l">Changes to this policy</h2>
					<p class="body">Policy updates will be posted on this page with revised effective dates. Continued use of the BlueBuzzah apps signals acceptance of any changes.</p>
				</section>
				<section class="stack">
					<h2 class="title-l">Compliance</h2>
					<p class="body">This policy addresses GDPR, CCPA, and applicable data protection regulations through our privacy-by-design architecture.</p>
				</section>
				<section class="stack">
					<h2 class="title-l">Contact</h2>
					<p class="body">For privacy inquiries, please contact BlueBuzzah Partners at: <a href="mailto:privacy@bluebuzzah.com">privacy@bluebuzzah.com</a></p>
				</section>
			</div>
		</div>
	</main>
</template>
