<script lang="ts">
	// Define types for audio services
	type AudioServiceId = 'recording' | 'production' | 'training';

	let currentAudioService: AudioServiceId = 'recording';

	interface AudioService {
		id: AudioServiceId;
		title: string;
		description: string;
		iconType: string;
	}

	const audioServices: AudioService[] = [
		{
			id: 'recording',
			title: 'Recording Services',
			description: 'Professional recording services in our state-of-the-art studio with expert sound engineers.',
			iconType: 'microphone'
		},
		{
			id: 'production',
			title: 'Music Production',
			description: 'Comprehensive music production including arranging, mixing, and mastering for all genres.',
			iconType: 'music-note'
		},
		{
			id: 'training',
			title: 'Audio Engineering Training',
			description: 'Training programs for aspiring audio engineers and music producers, from beginner to advanced levels.',
			iconType: 'plus'
		}
	];

	interface GalleryImage {
		src: string;
		alt: string;
	}

	const galleryImages: GalleryImage[] = [
		{ src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop', alt: 'Mixing Console' },
		{ src: 'https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=2670&auto=format&fit=crop', alt: 'Microphone' },
		{ src: 'https://images.unsplash.com/photo-1512053459797-38c3a066cabd?q=80&w=2670&auto=format&fit=crop', alt: 'Audio Equipment' }
	];

	function setCurrentService(id: AudioServiceId): void {
		currentAudioService = id;
	}

	function getRandomHeight(i: number): number {
		// Using seed to ensure consistent heights
		return ((i * 7) % 12) + 4;
	}
</script>

<!-- Music & Audio Section -->
<section id="music" class="py-20 md:py-28 bg-gradient-to-b from-tsoft-950 to-tsoft-900 relative overflow-hidden">
	<!-- Background elements -->
	<div class="absolute inset-0 -z-10">
		<!-- Audio waveform pattern -->
		<div class="absolute top-0 left-0 right-0 h-32 bg-music-950 transform -skew-y-2 -translate-y-10 z-0"></div>

		<!-- Decorative elements -->
		<div class="absolute top-1/3 right-10 w-96 h-96 bg-music-500/10 rounded-full blur-[100px]"></div>
		<div class="absolute bottom-1/3 left-10 w-64 h-64 bg-music-500/10 rounded-full blur-[100px]"></div>

		<!-- Sound wave pattern -->
		<div class="absolute inset-0 opacity-5">
			<div class="h-full flex items-center">
				<div class="w-full h-20 flex justify-around items-center">
					{#each Array(30) as _, i (i)}
						<div class={`h-${getRandomHeight(i)} w-1 bg-music-600 rounded-full`}></div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="container mx-auto px-4 md:px-6">
		<!-- Section header -->
		<div class="text-center mb-16 animate-on-scroll animate-fade-up">
			<div class="inline-flex items-center justify-center mb-4">
				<span class="h-px w-8 bg-gradient-to-r from-music-500 to-transparent"></span>
				<span class="mx-4 text-music-600 font-medium text-sm uppercase tracking-wider">Sound Perfection</span>
				<span class="h-px w-8 bg-gradient-to-l from-music-500 to-transparent"></span>
			</div>

			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-music-700 to-music-900 bg-clip-text text-transparent">
				Professional Audio Engineering
			</h2>

   <p class="text-lg text-white/70 max-w-3xl mx-auto">
				Our music and audio department offers professional services for artists, producers, and content creators looking for high-quality sound production.
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left content - Studio images -->
			<div class="order-2 lg:order-1 animate-on-scroll animate-slide-left">
				<!-- Main studio image -->
				<div class="relative rounded-2xl overflow-hidden shadow-2xl group">
					<img
						src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2670&auto=format&fit=crop"
						alt="Music Studio"
						class="w-full h-auto transition-transform duration-700 group-hover:scale-105"
					>
					<!-- Overlay with gradient -->
					<div class="absolute inset-0 bg-gradient-to-t from-music-900/90 to-transparent/30 flex items-end">
						<div class="p-6 text-white">
							<p class="font-bold text-xl">Professional Studio</p>
							<p>State-of-the-art equipment</p>
						</div>
					</div>

					<!-- Floating audio controls element -->
					<div class="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
						<div class="flex items-center space-x-3">
							<div class="w-3 h-3 rounded-full bg-music-500 animate-pulse"></div>
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
								</svg>
								<div class="text-white text-sm">Now Recording</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Equipment gallery -->
				<div class="grid grid-cols-3 gap-3 mt-3">
					{#each galleryImages as item, i (i)}
						<div class="aspect-square rounded-lg overflow-hidden shadow-lg group animate-on-scroll animate-fade-up" style="animation-delay: {i * 100}ms">
							<div class="h-full w-full relative overflow-hidden">
								<img src={item.src} alt={item.alt} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
								<div class="absolute inset-0 bg-gradient-to-t from-music-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
									<div class="p-3 text-white text-sm">{item.alt}</div>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Audio equipment specs -->
    <div class="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-sm animate-on-scroll animate-fade-up delay-400">
					<div class="flex items-start gap-3">
						<div class="p-2 rounded-lg bg-music-50 text-music-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-900">Premium Audio Equipment</h4>
							<p class="text-sm text-gray-600">Our studio features top-of-the-line microphones, monitors, and recording equipment from industry-leading brands.</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right content - Services -->
			<div class="order-1 lg:order-2 animate-on-scroll animate-fade-up">
				<span class="inline-block px-3 py-1 bg-music-100 text-music-700 rounded-full text-sm font-semibold mb-4 border border-music-200">Music & Audio Services</span>

				<!-- Audio services tabs -->
				<div class="flex flex-wrap gap-2 mb-8">
					{#each audioServices as service (service.id)}
						<button
							class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentAudioService === service.id ? 'bg-music-600 text-white shadow-md' : 'bg-music-50 text-music-700 hover:bg-music-100'}`}
							on:click={() => setCurrentService(service.id)}
							type="button"
						>
							{service.title}
						</button>
					{/each}
				</div>

				<!-- Service details -->
				{#key currentAudioService}
					<div class="space-y-8">
						<!-- Current service -->
						<div class="flex items-start">
							<div class="rounded-lg p-3 bg-music-100 text-music-600 mr-4 shadow-sm">
								{#if audioServices.find(s => s.id === currentAudioService)?.iconType === 'microphone'}
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
									</svg>
								{:else if audioServices.find(s => s.id === currentAudioService)?.iconType === 'music-note'}
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
									</svg>
								{:else}
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
									</svg>
								{/if}
							</div>
							<div>
								<h3 class="text-2xl font-bold mb-2 text-gray-900">{audioServices.find(s => s.id === currentAudioService)?.title || ''}</h3>
								<p class="text-gray-600">{audioServices.find(s => s.id === currentAudioService)?.description || ''}</p>
							</div>
						</div>

						<!-- Process timeline for current service -->
						<div class="relative pl-8 space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-music-200">
							{#if currentAudioService === 'recording'}
								<div class="relative animate-on-scroll animate-fade-up delay-100">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Initial Consultation</h4>
									<p class="text-gray-600">We discuss your project goals, preferences, and artistic vision to ensure we capture exactly what you want.</p>
								</div>
								<div class="relative animate-on-scroll animate-fade-up delay-200">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Studio Session</h4>
									<p class="text-gray-600">Record in our soundproofed studio with premium equipment and expert sound engineers guiding you.</p>
								</div>
								<div class="relative animate-on-scroll animate-fade-up delay-300">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Post-Production</h4>
									<p class="text-gray-600">Professional editing, mixing, and mastering to perfect your recorded material.</p>
								</div>
							{:else if currentAudioService === 'production'}
								<div class="relative animate-on-scroll animate-fade-up delay-100">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Concept Development</h4>
									<p class="text-gray-600">We help shape your musical ideas into a cohesive vision, developing arrangement concepts and production styles.</p>
								</div>
								<div class="relative animate-on-scroll animate-fade-up delay-200">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Production & Arrangement</h4>
									<p class="text-gray-600">Our producers work with you to build tracks from the ground up with professional instrumentation and arrangements.</p>
								</div>
								<div class="relative animate-on-scroll animate-fade-up delay-300">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Mixing & Mastering</h4>
									<p class="text-gray-600">Professional audio engineering to ensure your tracks sound polished and ready for distribution.</p>
								</div>
							{:else}
								<div class="relative animate-on-scroll animate-fade-up delay-100">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Fundamentals Course</h4>
									<p class="text-gray-600">Learn the basics of audio engineering, recording techniques, and industry-standard software.</p>
								</div>
								<div class="relative animate-on-scroll animate-fade-up delay-200">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Advanced Techniques</h4>
									<p class="text-gray-600">Dive deeper into professional mixing, mastering, and production techniques with hands-on training.</p>
								</div>
								<div class="relative animate-on-scroll animate-fade-up delay-300">
									<div class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-music-600 shadow-md shadow-music-600/20"></div>
									<h4 class="text-lg font-bold text-gray-900">Industry Mentorship</h4>
									<p class="text-gray-600">One-on-one guidance from industry professionals to help you develop your unique style and career path.</p>
								</div>
							{/if}
						</div>
					</div>
				{/key}

				<!-- CTA -->
				<div class="mt-10">
					<a href="#contact" class="inline-block px-6 py-3 bg-music-600 text-white font-medium rounded-lg hover:bg-music-500 transition-all duration-300 shadow-lg shadow-music-600/20 hover:shadow-music-500/30 hover:-translate-y-0.5 animate-on-scroll animate-fade-up delay-400">
						Book {audioServices.find(s => s.id === currentAudioService)?.title || 'Services'}
					</a>
				</div>
			</div>
		</div>

		<!-- Testimonial -->
		<div class="max-w-4xl mx-auto mt-20 bg-gradient-to-br from-music-50 to-white rounded-2xl p-8 shadow-xl border border-music-100 animate-on-scroll animate-scale">
			<div class="flex flex-col md:flex-row items-center gap-8">
				<div class="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
					<img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" class="w-full h-full object-cover">
				</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-music-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
					</svg>
					<p class="text-lg text-gray-700 italic mb-4">
						"The audio engineering team at TSOFT transformed our rough recordings into a professional album that exceeded our expectations. Their attention to detail and creative input were invaluable."
					</p>
					<div class="flex items-center">
						<div>
							<p class="font-bold text-gray-900">Michael Roberts</p>
							<p class="text-sm text-gray-500">Lead Singer, The Midnight Echo</p>
						</div>
						<div class="ml-auto flex">
							{#each Array(5) as _, i (i)}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Portfolio Section -->
	<div class="py-16 bg-gradient-to-r from-music-50 to-white mt-16 rounded-3xl shadow-lg animate-on-scroll animate-fade-up">
		<div class="container mx-auto px-4 md:px-6">
			<div class="text-center mb-12">
				<span class="inline-block px-4 py-1 bg-music-100 text-music-700 rounded-full text-sm font-semibold mb-4">Our Work</span>
				<h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Music Production Portfolio</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">Explore our diverse portfolio of music and audio production projects across various genres and mediums.</p>
			</div>

			<!-- Portfolio grid -->
			<div class="grid md:grid-cols-3 gap-6">
				<!-- Portfolio item 1 -->
				<div class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
					<div class="relative h-48 overflow-hidden">
						<img 
							src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop" 
							alt="Music Album Cover" 
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						>
						<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<button class="p-3 bg-music-600 text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
						</div>
					</div>
					<div class="p-5">
						<div class="flex items-center justify-between mb-2">
							<h3 class="font-bold text-gray-900">Ethereal Dreams</h3>
							<span class="text-xs font-medium text-music-600 bg-music-50 px-2 py-1 rounded-full">Album</span>
						</div>
						<p class="text-sm text-gray-600 mb-3">Full album production including recording, mixing, and mastering for indie electronic artist.</p>
						<div class="flex items-center text-gray-500 text-xs">
							<span>2023</span>
							<span class="mx-2">•</span>
							<span>Electronic</span>
						</div>
					</div>
				</div>

				<!-- Portfolio item 2 -->
				<div class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
					<div class="relative h-48 overflow-hidden">
						<img 
							src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=2574&auto=format&fit=crop" 
							alt="Podcast Studio" 
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						>
						<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<button class="p-3 bg-music-600 text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
						</div>
					</div>
					<div class="p-5">
						<div class="flex items-center justify-between mb-2">
							<h3 class="font-bold text-gray-900">Tech Insights Podcast</h3>
							<span class="text-xs font-medium text-music-600 bg-music-50 px-2 py-1 rounded-full">Podcast</span>
						</div>
						<p class="text-sm text-gray-600 mb-3">Audio production and post-processing for weekly technology podcast series.</p>
						<div class="flex items-center text-gray-500 text-xs">
							<span>2022-Present</span>
							<span class="mx-2">•</span>
							<span>Podcast</span>
						</div>
					</div>
				</div>

				<!-- Portfolio item 3 -->
				<div class="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
					<div class="relative h-48 overflow-hidden">
						<img 
							src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop" 
							alt="Commercial Audio" 
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						>
						<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<button class="p-3 bg-music-600 text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
						</div>
					</div>
					<div class="p-5">
						<div class="flex items-center justify-between mb-2">
							<h3 class="font-bold text-gray-900">Brand Sonic Identity</h3>
							<span class="text-xs font-medium text-music-600 bg-music-50 px-2 py-1 rounded-full">Commercial</span>
						</div>
						<p class="text-sm text-gray-600 mb-3">Created complete sonic branding package including jingles and sound design for major retail brand.</p>
						<div class="flex items-center text-gray-500 text-xs">
							<span>2023</span>
							<span class="mx-2">•</span>
							<span>Commercial</span>
						</div>
					</div>
				</div>
			</div>

			<!-- View more button -->
			<div class="text-center mt-10">
				<a href="#contact" class="inline-block px-6 py-3 bg-music-600 text-white font-medium rounded-lg hover:bg-music-500 transition-all duration-300 shadow-lg shadow-music-600/20 hover:shadow-music-500/30 hover:-translate-y-0.5">
					View Full Portfolio
				</a>
			</div>
		</div>
	</div>

	<!-- Wave separator -->
	<div class="absolute bottom-0 left-0 right-0 transform rotate-180">
		<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 70C672 80 768 100 864 100C960 100 1056 80 1152 65C1248 50 1344 40 1392 35L1440 30V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z" fill="#166534" fill-opacity="0.05"/>
		</svg>
	</div>
</section>
