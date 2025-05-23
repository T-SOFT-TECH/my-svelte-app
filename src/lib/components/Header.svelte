<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { page } from '$app/stores';

	let mobileMenuOpen = false;
	let scrolled = false;
	let activeSection = 'home';
	let headerHeight = 0;

	// Animation for side-sliding menu
	const menuPosition = spring(100, {
		stiffness: 0.1,
		damping: 0.8
	});

	function toggleMobileMenu(): void {
		mobileMenuOpen = !mobileMenuOpen;
		menuPosition.set(mobileMenuOpen ? 0 : 100);
	}

	function closeMobileMenu(): void {
		mobileMenuOpen = false;
		menuPosition.set(100);
	}

	// Update active section based on current route
	$: {
		const path = $page.url.pathname;
		if (path === '/') {
			activeSection = 'home';
		} else if (path === '/services') {
			activeSection = 'services';
		} else if (path === '/technology') {
			activeSection = 'technology';
		} else if (path === '/music') {
			activeSection = 'music';
		} else if (path === '/equipment') {
			activeSection = 'equipment';
		} else if (path === '/about') {
			activeSection = 'about';
		} else if (path === '/contact') {
			activeSection = 'contact';
		}
	}

	onMount(() => {
		// Get header height for offset calculations
		const header = document.getElementById('navbar');
		if (header) {
			headerHeight = header.offsetHeight;
		}

		// Handle scroll events
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};

		// Close mobile menu when clicking outside
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (mobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
				closeMobileMenu();
			}
		};

		// Handle escape key press
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && mobileMenuOpen) {
				closeMobileMenu();
			}
		};

		// Initial checks
		handleScroll();

		// Add event listeners
		window.addEventListener('scroll', handleScroll);
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	});

	const navItems = [
		{ id: 'home', label: 'Home', href: '/' },
		{ id: 'services', label: 'Services', href: '/services' },
		{ id: 'technology', label: 'Technology', href: '/technology' },
		{ id: 'music', label: 'Music & Audio', href: '/music' },
		{ id: 'equipment', label: 'Equipment', href: '/equipment' },
		{ id: 'about', label: 'About', href: '/about' },
		{ id: 'contact', label: 'Contact', href: '/contact' }
	];
</script>

<!-- Navigation Bar -->
<nav
	class="fixed w-full top-0 z-40 transition-all duration-300 {scrolled ? 'bg-tsoft-950/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}"
	id="navbar"
>
	<div class="container mx-auto px-4 md:px-6">
		<div class="flex justify-between items-center h-16 md:h-20">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center space-x-2 group">
					<div class="relative h-10 w-10 md:h-12 md:w-12 transition-all duration-500 group-hover:rotate-12">
						<!-- Main logo circle with gradient background -->
						<div class="absolute inset-0 bg-gradient-to-br from-tsoft-500 to-tsoft-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-tsoft-500/20">
							TS
						</div>
						<!-- Purple accent dot -->
						<div class="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-br from-music-500 to-music-700 rounded-full shadow-lg shadow-music-500/20"></div>

						<!-- Animated halo effect on hover -->
						<div class="absolute inset-0 -z-10 bg-tsoft-500/30 rounded-full blur-lg scale-0 group-hover:scale-150 transition-all duration-500"></div>
					</div>

					<div class="overflow-hidden">
						<div class="flex flex-col md:flex-row md:items-baseline transition-all duration-300
							{scrolled ? 'text-white' : 'text-gray-900 md:text-white'}"
						>
							<span class="text-xl md:text-2xl font-bold mr-1">TSOFT</span>
							<span class="text-lg md:text-xl font-light text-tsoft-500">TECHNOLOGIES</span>
						</div>
					</div>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-1">
				{#each navItems as item (item.id)}

				<a	href={item.href}
					class="relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
					{activeSection === item.id
						? 'text-white'
						: scrolled
							? 'text-gray-300 hover:text-white'
							: 'text-white/80 hover:text-white'}"
					>
					{item.label}
					{#if activeSection === item.id}
						<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-tsoft-500 to-music-500 rounded-full"></span>
					{/if}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-tsoft-500/50
					{scrolled ? 'text-white bg-tsoft-900/50' : 'text-gray-900 md:text-white bg-white/20 backdrop-blur-sm'}"
				id="mobile-menu-button"
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
				aria-expanded={mobileMenuOpen}
			>
				<div class="relative w-6 h-5">
					<span class="absolute top-0 left-0 w-6 h-0.5 rounded-full transition-all duration-300 ease-in-out
						{scrolled ? 'bg-white' : 'bg-gray-900 md:bg-white'}
						{mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"
					></span>
					<span class="absolute top-2 left-0 w-6 h-0.5 rounded-full transition-all duration-300 ease-in-out
						{scrolled ? 'bg-white' : 'bg-gray-900 md:bg-white'}
						{mobileMenuOpen ? 'opacity-0' : ''}"
					></span>
					<span class="absolute top-4 left-0 w-6 h-0.5 rounded-full transition-all duration-300 ease-in-out
						{scrolled ? 'bg-white' : 'bg-gray-900 md:bg-white'}
						{mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"
					></span>
				</div>
			</button>
		</div>
	</div>
</nav>

<!-- Overlay - moved outside the nav element -->
{#if mobileMenuOpen}
	<div
		class="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-50 transition-opacity duration-300"
		style="opacity: {1 - $menuPosition/100}"
		on:click={closeMobileMenu}
	></div>
{/if}

<!-- Mobile Menu - Side Slide - moved outside the nav element -->
<div
	class="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs md:hidden z-50 bg-tsoft-950/95 backdrop-blur-lg shadow-2xl shadow-black/20 border-l border-white/10 transition-transform duration-300 ease-in-out overflow-auto"
	style="transform: translateX({$menuPosition}%);"
	id="mobile-menu"
>
	<!-- Mobile Menu Header -->
	<div class="flex items-center justify-between p-4 border-b border-white/10">
		<div class="text-white font-medium">Menu</div>
		<button
			class="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
			on:click={closeMobileMenu}
			aria-label="Close menu"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>

	<!-- Mobile Menu Items -->
	<div class="py-3 px-4 space-y-1">
		{#each navItems as item (item.id)}

		<a	href={item.href}
			on:click={closeMobileMenu}
			class="flex items-center space-x-3 px-4 py-3 rounded-lg text-white {activeSection === item.id ? 'bg-white/10 border-l-2 border-tsoft-500' : 'hover:bg-white/5'}"
			>
			<span class="w-2 h-2 rounded-full {activeSection === item.id ? 'bg-tsoft-500' : 'bg-white/30'}"></span>
			<span>{item.label}</span>
			</a>
		{/each}

	</div>
</div>

<style>
    /* Add any additional styles here if needed */
</style>
