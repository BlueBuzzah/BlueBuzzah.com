<template>
	<main>
		<section class="hero">
			<div class="container hero__inner">
				<div class="stack hero__text">
					<h1 class="display-xl">Open vCR Stimulation System</h1>
					<p class="body-l prose">BlueBuzzah is an open-source vibrotactile coordinated reset (vCR) stimulation system: a pair of gloves that deliver gentle, precisely timed patterns
					of vibration to your fingertips. It is inspired by peer-reviewed research into vCR stimulation for people with Parkinson's disease.</p>
					<div class="button-row">
						<a class="bb-btn bb-btn--primary" href="#about"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/circle-question-mark.svg#icon"/></svg><span class="bb-btn__label">What is BlueBuzzah?</span></a>
						<a class="bb-btn bb-btn--secondary" href="/docs/"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/hammer.svg#icon"/></svg><span class="bb-btn__label">Build a pair</span></a>
					</div>
				</div>
				<img class="hero__mark" src="/assets/bluebuzzah-mark-512.png" alt="" width="200" height="193">
			</div>
		</section>

		<section id="about" class="section section--sunken">
			<div class="container">
				<h2 class="display-l section__title">What is BlueBuzzah?</h2>
				<div class="about-grid">
					<div class="prose stack">
						<p class="body-l">BlueBuzzah is a community-driven, open-source project creating accessible vibrotactile stimulation gloves for people living with Parkinson's disease. BlueBuzzah is inspired by groundbreaking research on vibrotactile coordinated reset (vCR) stimulation.</p>
						<p class="body-l">In published studies, patterned fingertip vibration stimulated sensory pathways linked to movement, and researchers reported it may help with tremor, rigidity and movement. BlueBuzzah is an open design inspired by that work.</p>
						<p class="body-l">Built on readily available hardware and open-source software, BlueBuzzah lets people with Parkinson's, caregivers, and makers build their own gloves.</p>
					</div>
					<ul class="list-reset grid-2 about-features">
						<li class="feature"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/zap.svg#icon"/></svg><div><p class="body-strong">Bluetooth Low Energy</p><p class="body-s text-muted">Wireless device sync</p></div></li>
						<li class="feature"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/clock.svg#icon"/></svg><div><p class="body-strong">8+ Hours Battery</p><p class="body-s text-muted">Long sessions on one charge</p></div></li>
						<li class="feature"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/settings.svg#icon"/></svg><div><p class="body-strong">Configurable Patterns</p><p class="body-s text-muted">Customizable sessions</p></div></li>
						<li class="feature"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/square-terminal.svg#icon"/></svg><div><p class="body-strong">Open Source</p><p class="body-s text-muted">Free, open licenses</p></div></li>
					</ul>
				</div>
			</div>
		</section>

		<section id="how-it-works" class="section">
			<div class="container">
				<h2 class="display-l section__title">How it works</h2>
				<!-- cards mirror bundle.js Card (DS import 1793729877-6a2e) -->
				<ol class="list-reset grid-3">
					<li class="bb-card bb-card--lg" aria-labelledby="step-build">
						<header class="bb-card__head"><div><h3 class="bb-card__title title-with-icon" id="step-build"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/hand.svg#icon"/></svg>Build your gloves</h3></div></header>
						<p class="body">Follow the open build guide to put together a pair of gloves. Each fingertip gets a small vibration motor.</p>
					</li>
					<li class="bb-card bb-card--lg" aria-labelledby="step-firmware">
						<header class="bb-card__head"><div><h3 class="bb-card__title title-with-icon" id="step-firmware"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/usb.svg#icon"/></svg>Load the firmware</h3></div></header>
						<p class="body">Plug each glove into your computer. BlueBuzzah Updater loads the firmware and sets which glove is primary and which is secondary.</p>
					</li>
					<li class="bb-card bb-card--lg" aria-labelledby="step-session">
						<header class="bb-card__head"><div><h3 class="bb-card__title title-with-icon" id="step-session"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/smartphone.svg#icon"/></svg>Start a session</h3></div></header>
						<p class="body">The gloves pulse each fingertip in a changing order. The BuzzahBuddy phone app, coming soon, will let you start, stop and adjust sessions.</p>
					</li>
				</ol>
			</div>
		</section>

		<section id="science" class="section section--sunken">
			<div class="container">
				<h2 class="display-l section__title">The science behind it</h2>
				<div class="prose stack">
					<p class="body-l">BlueBuzzah is inspired by groundbreaking clinical research on vibrotactile coordinated reset (vCR) stimulation conducted
					by leading neuroscience researchers.</p>
				</div>
				<!-- cards mirror bundle.js Card (DS import 1793729877-6a2e) -->
				<ul class="list-reset grid-2 section-block">
					<li class="bb-card bb-card--lg" aria-labelledby="paper-tass">
						<header class="bb-card__head">
							<div><p class="bb-card__eyebrow">NEURAL REGENERATION RESEARCH · 2021</p><h3 class="bb-card__title" id="paper-tass" data-verbatim><a class="title-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8771098/">Vibrotactile Coordinated Reset Stimulation for the Treatment of Parkinson's Disease <svg class="bb-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/external-link.svg#icon"/></svg></a></h3></div>
							
						</header>
						<p class="body-s text-muted">Tass PA, Stanford University School of Medicine</p>
						<p class="body">A review of vCR research so far. People in early studies reported fewer movement symptoms. Larger studies are still needed.</p>
					</li>
					<li class="bb-card bb-card--lg" aria-labelledby="paper-pfeifer">
						<header class="bb-card__head">
							<div><p class="bb-card__eyebrow">FRONTIERS IN PHYSIOLOGY · 2021</p><h3 class="bb-card__title" id="paper-pfeifer" data-verbatim><a class="title-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8055937/">Coordinated Reset Vibrotactile Stimulation Induces Sustained Cumulative Benefits in Parkinson's Disease <svg class="bb-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/external-link.svg#icon"/></svg></a></h3></div>
							
						</header>
						<p class="body-s text-muted">Pfeifer KJ, Kromer JA, Cook AJ, et al.</p>
						<p class="body">A small study that followed people for 6 months. People reported easier movement over 3 months that lasted to the 6-month check-in. Brain recordings also changed.</p>
					</li>
				</ul>
				<!-- mirrors bundle.js Banner (DS import 1793729877-6a2e) -->
				<div class="bb-banner bb-banner--info section-block">
					<svg class="bb-icon bb-banner__icon" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/info.svg#icon"/></svg>
					<div class="bb-banner__body">
						<p class="bb-banner__title">Disclaimer</p>
						<div class="bb-banner__text"><p>BlueBuzzah devices are not FDA cleared or approved medical devices and not intended to diagnose, treat, cure, mitigate, or prevent any disease. The information provided through BlueBuzzah is for general wellness purposes only and not a substitute for professional medical advice, diagnosis, or treatment.</p></div>
					</div>
				</div>
			</div>
		</section>

		<section id="parts" class="section">
			<div class="container">
				<h2 class="display-l section__title">The system components</h2>
				<ul class="list-reset grid-2">
					<li class="bb-card bb-card--lg" aria-labelledby="part-hardware">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title title-with-icon" id="part-hardware"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/cpu.svg#icon"/></svg>Hardware</h3></div>
							<div class="bb-card__actions"><span class="bb-badge bb-badge--brand"><svg class="bb-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/info.svg#icon"/></svg><span>In Progress</span></span></div>
						</header>
						<p class="body">Open-source hardware specification utilizing precise LRAs (Linear Resonant Actuators), commodity circuit board
						components, and 3D-printable enclosures. The battery typically lasts 8 hours or more.</p>
						<a class="bb-btn bb-btn--quiet card-action" href="/docs/"><span class="bb-btn__label">Build guide</span></a>
					</li>
					<li class="bb-card bb-card--lg" aria-labelledby="part-firmware">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title title-with-icon" id="part-firmware"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/code.svg#icon"/></svg>Firmware</h3></div>
							
						</header>
						<p class="body">The code that operates the gloves. It keeps the primary and secondary gloves in sync and allows for custom control and configuration.</p>
						<a class="bb-btn bb-btn--quiet card-action" href="https://github.com/BlueBuzzah/BlueBuzzah-Firmware/wiki"><span class="bb-btn__label">Firmware docs</span></a>
					</li>
					<li class="bb-card bb-card--lg" aria-labelledby="part-updater">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title title-with-icon" id="part-updater"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/hard-drive-download.svg#icon"/></svg>BlueBuzzah Updater</h3></div>
							
						</header>
						<p class="body">Device management Desktop application. Intuitive step-by-step wizards to update and configure your devices over USB on macOS and Windows.</p>
						<a class="bb-btn bb-btn--quiet card-action" href="#download"><span class="bb-btn__label">Download</span></a>
					</li>
					<li class="bb-card bb-card--lg" aria-labelledby="part-buzzahbuddy">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title title-with-icon" id="part-buzzahbuddy"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/smartphone.svg#icon"/></svg>BuzzahBuddy</h3></div>
							<div class="bb-card__actions"><span class="bb-badge bb-badge--brand"><svg class="bb-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/flask-conical.svg#icon"/></svg><span>Early Access</span></span></div>
						</header>
						<p class="body">The smartphone companion app for session control and progress monitoring.
						Start, stop, and customize your sessions from your phone.</p>
						<a class="bb-btn bb-btn--quiet card-action" href="https://buzzahbuddy.com"><span class="bb-btn__label">Visit BuzzahBuddy.com</span><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/external-link.svg#icon"/></svg></a>
					</li>
				</ul>
				<!-- mirrors bundle.js Banner (DS import 1793729877-6a2e) -->
				<div class="bb-banner bb-banner--warning section-block">
					<svg class="bb-icon bb-banner__icon" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/triangle-alert.svg#icon"/></svg>
					<div class="bb-banner__body">
						<p class="bb-banner__title">Important</p>
						<div class="bb-banner__text"><p>People with implanted electrodes from deep brain stimulation (DBS), heart pacemakers, or other internal electronic devices should take special precautions around all electronic devices, including BlueBuzzah. Consult your physician before use.</p></div>
					</div>
				</div>
			</div>
		</section>

		<section id="download" class="section section--sunken">
			<div class="container">
				<h2 class="display-l section__title">Downloads</h2>
				<!-- cards mirror bundle.js Card (DS import 1793729877-6a2e) -->
				<ul class="list-reset grid-2">
					<li class="bb-card bb-card--lg" aria-labelledby="dl-updater">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title title-with-icon" id="dl-updater"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/hard-drive-download.svg#icon"/></svg>BlueBuzzah Updater</h3></div>
						</header>
						<p class="body">BlueBuzzah Updater downloads and updates the firmware on your devices, and allows you to customize their configuration from your computer.</p>
						<UpdaterDownloads />
						<a class="bb-btn bb-btn--quiet card-action" href="/docs/updater/"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/book.svg#icon"/></svg><span class="bb-btn__label">Read the guide</span></a>
					</li>
					<li class="bb-card bb-card--lg" aria-labelledby="dl-buzzahbuddy">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title title-with-icon" id="dl-buzzahbuddy"><svg class="bb-icon icon-brand" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/smartphone.svg#icon"/></svg>BuzzahBuddy</h3></div>
							<!-- mirrors bundle.js StatusBadge tone="brand" icon="flask-conical" (DS import 1793729877-6a2e) -->
							<div class="bb-card__actions"><span class="bb-badge bb-badge--brand"><svg class="bb-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/flask-conical.svg#icon"/></svg><span>Early Access</span></span></div>
						</header>
						<p class="body">BuzzahBuddy lets you control sessions, adjust and customize settings, and track usage, all from your phone.</p>
						<!-- web.md Download pages: official store badges, equal weight, no platform detection -->
						<div class="button-row">
							<a class="download-badge store-badge" href="https://testflight.apple.com/join/DMuPNBGA" aria-describedby="early-access-note"><img src="/assets/apple-appstore.png" alt="Download on the App Store" width="512" height="171"></a>
							<a class="download-badge store-badge" href="https://play.google.com/store/apps/details?id=com.rbonestell.buzzahbuddy"><img src="/assets/google-playstore.png" alt="Get it on Google Play" width="478" height="142"></a>
						</div>
						<p class="body-s text-muted" id="early-access-note">On iPhone, BuzzahBuddy is an early test version that installs through Apple's TestFlight app, so expect some rough edges. Features may change before the full release.</p>
						<a class="bb-btn bb-btn--quiet card-action" href="https://buzzahbuddy.com"><span class="bb-btn__label">Visit BuzzahBuddy.com</span><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/external-link.svg#icon"/></svg></a>
					</li>
				</ul>
			</div>
		</section>

		<section id="community" class="section">
			<div class="container">
				<h2 class="display-l section__title">Community</h2>
				<p class="body-l prose">BlueBuzzah exists thanks to the dedication of researchers, contributors, community members, and people living with Parkinson's who share what they learn.</p>
				<ul class="list-reset grid-2 section-block">
					<li class="bb-card bb-card--lg bb-card--flat" aria-labelledby="thanks-tass">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title" id="thanks-tass">Dr. Peter Tass and Tass Lab, Stanford</h3></div>
							
						</header>
						<p class="body">For all their dedicated work in inventing and studying vibrotactile coordinated reset stimulation for Parkinson's.</p>
					</li>
					<li class="bb-card bb-card--lg bb-card--flat" aria-labelledby="thanks-community">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title" id="thanks-community">The Parkinson's community</h3></div>
							
						</header>
						<p class="body">Community members from Health Unlocked, GitHub, YouTube, and beyond for their participation, feedback, and suggestions.</p>
					</li>
					<li class="bb-card bb-card--lg bb-card--flat" aria-labelledby="thanks-partners">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title" id="thanks-partners">The founding BlueBuzzah Partners</h3></div>
							
						</header>
						<p class="body">PWPInnovator898 and TactileDesign on GitHub, for their tireless efforts in research, development, prototyping, testing,
						and open-sourcing the BlueBuzzah project.</p>
					</li>
					<li class="bb-card bb-card--lg bb-card--flat" aria-labelledby="thanks-wilk">
						<header class="bb-card__head">
							<div><h3 class="bb-card__title" id="thanks-wilk">Kris Wilk</h3></div>
							
						</header>
						<p class="body">For the development and contribution of the original <a href="https://github.com/kriswilk/buzzah">Buzzah!</a> wired device and software.</p>
					</li>
				</ul>
				<div class="button-row section-block">
					<a class="bb-btn bb-btn--primary" href="https://github.com/BlueBuzzah"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/git-pull-request-arrow.svg#icon"/></svg><span class="bb-btn__label">Contribute on GitHub</span></a>
				</div>
			</div>
		</section>
	</main>
</template>
