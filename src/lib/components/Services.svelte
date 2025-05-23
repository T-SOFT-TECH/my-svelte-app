<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	// Service data
	const services = [
		{
			id: "it",
			title: "IT Solutions",
			image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
			description: "Expert IT solutions including software development, web applications, IT support, and digital transformation services.",
			tags: ["Software Development", "IT Support", "Web Solutions"],
			link: "#technology",
			color: "tsoft",
			iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
		},
		{
			id: "music",
			title: "Music & Audio",
			image: "https://images.unsplash.com/photo-1546058256-47154de4046c?q=80&w=2574&auto=format&fit=crop",
			description: "Professional audio and music production services, including recording, mixing, and mastering for artists and creators.",
			tags: ["Audio Engineering", "Music Production", "Recording"],
			link: "#music",
			color: "music",
			iconPath: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
		},
		{
			id: "equipment",
			title: "Equipment Sales",
			image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop",
			description: "Quality computer hardware, accessories, and musical equipment to meet your professional needs with expert advice.",
			tags: ["Musical Equipment", "Computers", "IT Hardware"],
			link: "#equipment",
			color: "gray",
			iconPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
		}
	];

	onMount(() => {
		// Small delay for animation start
		setTimeout(() => {
			visible = true;
		}, 200);
	});
</script>

<!-- Services Section -->
<section id="services" class="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-tsoft-950 to-tsoft-900">
	<!-- Background elements -->
	<div class="absolute inset-0 -z-10">
		<!-- Grid pattern -->
		<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

		<!-- Gradient orbs -->
		<div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tsoft-500/5 blur-[100px]"></div>
		<div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-music-500/5 blur-[100px]"></div>

		<!-- Diagonal divider -->
		<div class="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-tsoft-950 to-tsoft-900 transform -skew-y-2"></div>
	</div>

	<div class="container mx-auto px-4 md:px-6 relative z-10">
		<!-- Section header -->
		<div class="text-center mb-16 max-w-3xl mx-auto">
			<div class={`transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div class="inline-flex items-center justify-center mb-4">
					<span class="h-px w-8 bg-gradient-to-r from-tsoft-500 to-transparent"></span>
					<span class="mx-4 text-tsoft-400 font-medium text-sm uppercase tracking-wider">Our Expertise</span>
					<span class="h-px w-8 bg-gradient-to-l from-music-500 to-transparent"></span>
				</div>

				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
					Comprehensive <span class="text-tsoft-400">Solutions</span>
				</h2>

				<p class="text-lg text-white/70">
					Tailored technology and music services to elevate your creative and business endeavors
				</p>
			</div>
		</div>

		<!-- Services grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
			{#each services as service, i (service.id)}
				<div
					class={`group relative transition-all duration-1000 delay-${i*200} transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
				>
					<!-- Card with hover effects -->
					<div class="h-full relative bg-tsoft-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-${service.color}-500/10 group-hover:-translate-y-2">
						<!-- Service image with overlay -->
						<div class="h-48 overflow-hidden relative">
							<img
								src={service.image}
								alt={service.title}
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							>
							<!-- Color overlay with gradient -->
							<div class="absolute inset-0 bg-gradient-to-t from-tsoft-950 via-tsoft-950/80 to-transparent opacity-90"></div>

							<!-- Icon circle that moves on hover -->
							<div class="absolute -bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-${service.color}-500 to-${service.color}-700 shadow-lg shadow-${service.color}-500/30 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
								<div class="text-white">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={service.iconPath} />
									</svg>
								</div>
							</div>
						</div>

						<!-- Content area -->
						<div class="p-6 pt-8">
							<h3 class="text-xl font-bold text-white mb-4 group-hover:text-${service.color}-400 transition-colors duration-300">
								{service.title}
							</h3>

							<!-- Tags -->
							<div class="flex flex-wrap gap-2 mb-5">
								{#each service.tags as tag, tagIndex (tagIndex)}
                  <span class="px-3 py-1 bg-${service.color}-900/50 text-${service.color}-400 border border-${service.color}-700/30 rounded-full text-xs font-medium">
                    {tag}
                  </span>
								{/each}
							</div>

							<p class="text-white/70 mb-6">
								{service.description}
							</p>

							<!-- Learn more button -->

						<a	href={service.link}
							class="inline-flex items-center text-${service.color}-400 font-medium hover:text-${service.color}-300 transition-all duration-300 group-hover:translate-x-1"
							>
							Explore {service.title}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Bottom curved separator -->
	<div class="absolute bottom-0 left-0 right-0 z-0 transform rotate-180">
		<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 70C672 80 768 100 864 100C960 100 1056 80 1152 65C1248 50 1344 40 1392 35L1440 30V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z" fill="#fff" fill-opacity="0.02"/>
		</svg>
	</div>
</section>

<style>
    /* Add necessary styles to support the dynamic classes */
    .delay-0 { transition-delay: 0ms; }
    .delay-200 { transition-delay: 200ms; }
    .delay-400 { transition-delay: 400ms; }

    /* Classes for different service colors */
    .from-tsoft-500 { --tw-gradient-from: var(--color-tsoft-500); }
    .from-music-500 { --tw-gradient-from: var(--color-music-500); }
    .from-gray-500 { --tw-gradient-from: #6b7280; }

    .to-tsoft-700 { --tw-gradient-to: var(--color-tsoft-700); }
    .to-music-700 { --tw-gradient-to: var(--color-music-700); }
    .to-gray-700 { --tw-gradient-to: #374151; }

    .text-tsoft-400 { color: var(--color-tsoft-400); }
    .text-music-400 { color: var(--color-music-400); }
    .text-gray-400 { color: #9ca3af; }

    .text-tsoft-300 { color: var(--color-tsoft-300); }
    .text-music-300 { color: var(--color-music-300); }
    .text-gray-300 { color: #d1d5db; }

    .bg-tsoft-900\/50 { background-color: rgba(var(--color-tsoft-900-rgb), 0.5); }
    .bg-music-900\/50 { background-color: rgba(var(--color-music-900-rgb), 0.5); }
    .bg-gray-900\/50 { background-color: rgba(20, 20, 20, 0.5); }

    .shadow-tsoft-500\/10 { box-shadow: 0 4px 6px -1px rgba(var(--color-tsoft-500-rgb), 0.1), 0 2px 4px -1px rgba(var(--color-tsoft-500-rgb), 0.06); }
    .shadow-music-500\/10 { box-shadow: 0 4px 6px -1px rgba(var(--color-music-500-rgb), 0.1), 0 2px 4px -1px rgba(var(--color-music-500-rgb), 0.06); }
    .shadow-gray-500\/10 { box-shadow: 0 4px 6px -1px rgba(107, 114, 128, 0.1), 0 2px 4px -1px rgba(107, 114, 128, 0.06); }

    /* Add RGB variables for shadow support */
    :root {
        --color-tsoft-500-rgb: 34, 197, 94;
        --color-music-500-rgb: 139, 92, 246;
        --color-tsoft-900-rgb: 20, 83, 45;
        --color-music-900-rgb: 76, 29, 149;
    }
</style>