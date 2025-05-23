<script lang="ts">
	import { onMount } from 'svelte';
	import { setupScrollAnimations, setupStickyHeader } from '$lib/utils/animations';

	// Import all components
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Technology from '$lib/components/Technology.svelte';
	import Music from '$lib/components/Music.svelte';
	import Equipment from '$lib/components/Equipment.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Company data
	let companyEmail = 'info@tsoftechnologies.com';

	onMount(() => {
		console.log("Page mounted, setting up animations and functionality");

		// Small delay to ensure DOM is fully rendered
		setTimeout(() => {
			const cleanupAnimations = setupScrollAnimations();
			const cleanupHeader = setupStickyHeader();

			// Smooth scrolling for anchor links
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.addEventListener('click', (e) => {
					e.preventDefault();
					const href = anchor.getAttribute('href');
					if (!href) return;

					const targetId = href.substring(1);
					const targetElement = document.getElementById(targetId);

					if (targetElement) {
						targetElement.scrollIntoView({
							behavior: 'smooth'
						});
					}
				});
			});

			// Back to top button visibility
			const backToTopButton = document.getElementById('back-to-top');

			const handleBackToTopVisibility = () => {
				if (backToTopButton) {
					if (window.scrollY > 500) {
						backToTopButton.classList.add('visible');
					} else {
						backToTopButton.classList.remove('visible');
					}
				}
			};

			window.addEventListener('scroll', handleBackToTopVisibility);
			handleBackToTopVisibility(); // Initial check

			// Clean up event listeners when component is destroyed
			return () => {
				if (cleanupAnimations) cleanupAnimations();
				if (cleanupHeader) cleanupHeader();
				window.removeEventListener('scroll', handleBackToTopVisibility);
			};
		}, 200);
	});
</script>

<svelte:head>
	<title>TSOFT-TECHNOLOGIES | IT Solutions & Music Production</title>
	<meta name="description" content="Your trusted partner for technology and equipment solutions, offering IT services, software development, music production, and audio equipment." />
</svelte:head>

<div class="overflow-x-hidden">
	<!-- Main website sections -->
	<Header />
	<main>
		<Hero />
		<Services />
		<Technology />
		<Music />
		<Equipment />
		<About />
		<Contact email={companyEmail} />
	</main>
	<Footer />

	<!-- Back to top button - Fixed at bottom right -->
	<button
		id="back-to-top"
		class="fixed bottom-8 right-8 p-3 rounded-full bg-tsoft-600 text-white shadow-lg hover:bg-tsoft-700 transition-all duration-300 opacity-0 invisible z-50"
		aria-label="Back to top"
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
		</svg>
	</button>
</div>

<style>
    /* Style for back-to-top button visibility */
    :global(#back-to-top.visible) {
        opacity: 1;
        visibility: visible;
    }
</style>