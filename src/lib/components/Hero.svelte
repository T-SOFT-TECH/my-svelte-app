<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let loaded = false;
	let mouseX = 0;
	let mouseY = 0;
	let rafId: number;
	let isMobile = false;

	function checkMobile() {
		isMobile = window.innerWidth < 768;
	}

	function handleMouseMove(e: MouseEvent) {
		if (isMobile) return;
		mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
		mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
	}

	function handleTouchMove(e: TouchEvent) {
		if (e.touches.length > 0) {
			mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 10;
			mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 10;
		}
	}

	function animateElements() {
		const heroImg = document.querySelector('.hero-image') as HTMLElement;
		const card1 = document.querySelector('.floating-card-1') as HTMLElement;
		const card2 = document.querySelector('.floating-card-2') as HTMLElement;

		if (heroImg && card1 && card2) {
			// Smaller movement on mobile
			const xFactor = isMobile ? 0.2 : 0.5;
			const yFactor = isMobile ? 0.2 : 0.5;

			heroImg.style.transform = `translate3d(${mouseX * xFactor}px, ${mouseY * yFactor}px, 0)`;
			card1.style.transform = `translate3d(${mouseX * -0.8 * xFactor}px, ${mouseY * -0.8 * yFactor}px, 0) rotate(-3deg)`;
			card2.style.transform = `translate3d(${mouseX * 0.6 * xFactor}px, ${mouseY * 0.6 * yFactor}px, 0) rotate(3deg)`;
		}

		rafId = requestAnimationFrame(animateElements);
	}

	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 100);

		checkMobile();
		window.addEventListener('resize', checkMobile);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('touchmove', handleTouchMove);
		rafId = requestAnimationFrame(animateElements);

		return () => {
			window.removeEventListener('resize', checkMobile);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('touchmove', handleTouchMove);
			cancelAnimationFrame(rafId);
		};
	});

	onDestroy(() => {
		if (rafId) cancelAnimationFrame(rafId);
	});
</script>

<!-- Hero Section -->
<section id="home" class="relative min-h-screen overflow-hidden">
	<!-- Split Background -->
	<div class="absolute inset-0 -z-20">
		<div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-tsoft-950 to-tsoft-800"></div>
		<!-- Modified clip path angle for better mobile display -->
		<div class="absolute top-0 right-0 w-full md:w-3/5 h-full bg-gradient-to-bl from-music-950 to-music-800
			clip-path-[polygon(40%_0,_100%_0,_100%_100%,_0%_100%)]"></div>

		<!-- Decorative grid lines -->
		<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

		<!-- Glowing orbs -->
		<div class="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 rounded-full bg-tsoft-500/10 blur-[100px] animate-pulse"></div>
		<div class="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 rounded-full bg-music-500/10 blur-[100px] animate-pulse" style="animation-delay: 1.5s;"></div>
	</div>

	<div class="container mx-auto relative z-10 h-screen flex flex-col justify-center">
		<div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center px-4 md:px-6">
			<!-- Left content: Text and CTAs (3 columns on lg) -->
			<div class="lg:col-span-3 py-8 md:py-12">
				<div class="space-y-8 md:space-y-10">
					<!-- Animated tag line -->
					<div class={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
						<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-tsoft-500/20 to-music-500/20 backdrop-blur-md border border-white/10">
							<div class="flex gap-1.5">
								<span class="h-1.5 w-1.5 rounded-full bg-tsoft-400 animate-pulse"></span>
								<span class="h-1.5 w-1.5 rounded-full bg-music-400 animate-pulse" style="animation-delay: 0.3s;"></span>
								<span class="h-1.5 w-1.5 rounded-full bg-white/50 animate-pulse" style="animation-delay: 0.6s;"></span>
							</div>
							<span class="text-sm font-medium text-white/70">Where Technology Meets Creativity</span>
						</div>
					</div>

					<!-- Main headline - responsive sizing -->
					<div class={`transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
						<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
							<span class="block">The Future of</span>
							<span class="relative">
								<span class="relative z-10 bg-gradient-to-r from-tsoft-300 via-white to-music-300 text-transparent bg-clip-text">Tech & Music</span>
								<span class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-tsoft-500 to-music-500 rounded-full"></span>
							</span>
							<span class="block">Solutions</span>
						</h1>
					</div>

					<!-- Description -->
					<div class={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
						<p class="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
							Discover the perfect harmony between cutting-edge technology and immersive audio experiences. From software development to studio production, we deliver excellence across the digital spectrum.
						</p>
					</div>

					<!-- Stats - adjust to vertical on very small screens -->
					<div class={`grid grid-cols-1 xs:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
						<div class="text-center xs:border-r xs:border-white/10 pr-0 xs:pr-4 border-b xs:border-b-0 border-white/10 pb-4 xs:pb-0 last:border-0">
							<p class="text-2xl md:text-3xl font-bold text-white">10+</p>
							<p class="text-sm text-white/50">Years Experience</p>
						</div>
						<div class="text-center xs:border-r xs:border-white/10 pr-0 xs:pr-4 border-b xs:border-b-0 border-white/10 pb-4 xs:pb-0 last:border-0">
							<p class="text-2xl md:text-3xl font-bold text-white">250+</p>
							<p class="text-sm text-white/50">Projects Delivered</p>
						</div>
						<div class="text-center last:border-0">
							<p class="text-2xl md:text-3xl font-bold text-white">24/7</p>
							<p class="text-sm text-white/50">Support Available</p>
						</div>
					</div>

					<!-- CTA Buttons - center on mobile, left on desktop -->
					<div class={`flex flex-wrap gap-5 justify-center sm:justify-start transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
						<a href="#contact" class="group relative overflow-hidden rounded-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-tsoft-950 font-medium hover:bg-white/90 transition-all shadow-xl shadow-white/5">
							<span class="relative z-10">Get Started</span>
							<span class="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-tsoft-300 to-music-300"></span>
						</a>

						<a href="#services" class="relative overflow-hidden rounded-full px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/20 text-white font-medium hover:border-white/40 transition-all backdrop-blur-sm">
							Our Services
							<span class="absolute bottom-0 left-0 right-0 h-px w-0 bg-gradient-to-r from-tsoft-500 to-music-500 group-hover:w-full transition-all duration-500"></span>
						</a>
					</div>
				</div>
			</div>

			<!-- Right content: 3D-style visual elements (2 columns on lg) -->
			<div class="lg:col-span-2 relative flex items-center justify-center mt-4 lg:mt-0">
				<div class={`relative transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
					<!-- Main image with 3D effect -->
					<div class="relative z-10 rounded-2xl overflow-hidden hero-image transition-transform duration-100 shadow-2xl mx-auto max-w-sm md:max-w-md lg:max-w-full">
						<img
							src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop"
							alt="Music and Technology"
							class="w-full h-auto object-cover"
						>
						<!-- Overlay with gradient -->
						<div class="absolute inset-0 bg-gradient-to-br from-tsoft-950/50 to-music-950/50 mix-blend-multiply"></div>

						<!-- Overlay text -->
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="text-center">
								<div class="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<p class="text-white font-medium text-base md:text-lg">Watch Demo Reel</p>
							</div>
						</div>
					</div>

					<!-- Floating card 1 - Tech (repositioned for small screens) -->
					<div class="absolute -top-4 sm:-top-8 md:-top-10 -left-4 sm:-left-8 md:-left-10 floating-card-1 transition-transform duration-100">
						<div class="bg-black/30 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 border border-tsoft-500/30 shadow-xl shadow-tsoft-500/10">
							<div class="flex items-center gap-2 md:gap-3">
								<div class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-tsoft-500/20 border border-tsoft-500/30">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6 text-tsoft-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<p class="font-semibold text-sm md:text-base text-white">IT Solutions</p>
									<p class="text-xs text-white/60">Custom Software Development</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Floating card 2 - Music (repositioned for small screens) -->
					<div class="absolute -bottom-4 sm:-bottom-8 md:-bottom-10 -right-4 sm:-right-8 md:-right-10 floating-card-2 transition-transform duration-100">
						<div class="bg-black/30 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 border border-music-500/30 shadow-xl shadow-music-500/10">
							<div class="flex items-center gap-2 md:gap-3">
								<div class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-music-500/20 border border-music-500/30">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6 text-music-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
									</svg>
								</div>
								<div>
									<p class="font-semibold text-sm md:text-base text-white">Music Production</p>
									<p class="text-xs text-white/60">Professional Studio Equipment</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Curved separator -->
	<div class="absolute bottom-0 left-0 right-0 z-0">
		<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 70C672 80 768 100 864 100C960 100 1056 80 1152 65C1248 50 1344 40 1392 35L1440 30V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z" fill="white" fill-opacity="0.05"/>
			<path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 70C672 80 768 100 864 100C960 100 1056 80 1152 65C1248 50 1344 40 1392 35L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V120Z" fill="white" fill-opacity="0.02"/>
		</svg>
	</div>
</section>

<style>
    /* Special styling for clip path that may not be directly supported in Tailwind */
    .clip-path-\[polygon\(40\%_0\,_100\%_0\,_100\%_100\%\,_0\%_100\%\)\] {
        clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
    }

    /* Extra small screens breakpoint - Tailwind doesn't have this by default */
    @media (min-width: 480px) {
        .xs\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .xs\:border-r {
            border-right-width: 1px;
        }
        .xs\:border-b-0 {
            border-bottom-width: 0px;
        }
        .xs\:pr-4 {
            padding-right: 1rem;
        }
        .xs\:pb-0 {
            padding-bottom: 0;
        }
    }
</style>