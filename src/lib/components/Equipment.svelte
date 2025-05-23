<script lang="ts">
	// Equipment-specific logic
	// Define types for equipment categories
	type CategoryColor = 'music' | 'tsoft';
	type CategoryId = 'music' | 'audio' | 'computers';

	let activeTab: CategoryId = 'music';

	interface EquipmentCategory {
		id: CategoryId;
		title: string;
		iconType: string;
		color: CategoryColor;
		features: string[];
		image: string;
	}

	interface FeaturedProduct {
		category: CategoryId;
		name: string;
		price: string;
		image: string;
		tag: string;
	}

	const equipmentCategories: EquipmentCategory[] = [
		{
			id: 'music',
			title: 'Musical Instruments',
			iconType: 'music-instrument',
			color: 'music',
			features: ['Guitars & Bass', 'Keyboards & Pianos', 'Drums & Percussion', 'DJ Equipment'],
			image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2098&auto=format&fit=crop'
		},
		{
			id: 'audio',
			title: 'Audio Equipment',
			iconType: 'microphone',
			color: 'music',
			features: ['Microphones', 'Audio Interfaces', 'Mixing Consoles', 'Monitors & Speakers'],
			image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop'
		},
		{
			id: 'computers',
			title: 'Computers & Accessories',
			iconType: 'computer',
			color: 'tsoft',
			features: ['Workstations & Laptops', 'Computer Components', 'Peripherals & Accessories', 'Networking Equipment'],
			image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2142&auto=format&fit=crop'
		}
	];

	// Featured products
	const featuredProducts: FeaturedProduct[] = [
		{
			category: 'music',
			name: 'Gibson Les Paul Studio',
			price: '$1,599',
			image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=2574&auto=format&fit=crop',
			tag: 'Best Seller'
		},
		{
			category: 'audio',
			name: 'Neumann U87 Microphone',
			price: '$3,299',
			image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2574&auto=format&fit=crop',
			tag: 'Professional'
		},
		{
			category: 'computers',
			name: 'Mac Studio M2 Ultra',
			price: '$3,999',
			image: 'https://images.unsplash.com/photo-1662947427378-b5f3a094ff93?q=80&w=2574&auto=format&fit=crop',
			tag: 'New'
		}
	];

	function setActiveTab(id: CategoryId): void {
		activeTab = id;
	}
</script>

<!-- Equipment Section -->
<section id="equipment" class="py-20 md:py-28 bg-gradient-to-b from-tsoft-950 to-tsoft-900 relative overflow-hidden">
	<!-- Background elements -->
	<div class="absolute inset-0 -z-10">
		<!-- Grid pattern -->
		<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

		<!-- Glowing orbs -->
		<div class="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-music-500/5 blur-[100px]"></div>
		<div class="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-tsoft-500/5 blur-[100px]"></div>
	</div>

	<div class="container mx-auto px-4 md:px-6 relative z-10">
		<!-- Section header -->
		<div class="text-center mb-16 animate-on-scroll animate-fade-up">
			<div class="inline-flex items-center justify-center mb-4">
				<span class="h-px w-8 bg-gradient-to-r from-tsoft-500 to-transparent"></span>
				<span class="mx-4 text-tsoft-400 font-medium text-sm uppercase tracking-wider">Premium Gear</span>
				<span class="h-px w-8 bg-gradient-to-l from-tsoft-500 to-transparent"></span>
			</div>

			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
				Quality <span class="text-tsoft-400">Equipment</span> & <span class="text-music-400">Hardware</span>
			</h2>

			<p class="text-lg text-white/70 max-w-3xl mx-auto">
				We provide high-quality musical instruments, audio equipment, computers, and accessories for professionals and enthusiasts.
			</p>
		</div>

		<!-- Equipment category tabs -->
		<div class="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll animate-fade-up delay-100">
			{#each equipmentCategories as category (category.id)}
				<button
					class={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === category.id ?
            (category.color === 'music' ? 'bg-music-600 text-white shadow-lg shadow-music-500/20' : 'bg-tsoft-600 text-white shadow-lg shadow-tsoft-500/20') :
            'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
					on:click={() => setActiveTab(category.id)}
					type="button"
				>
					<span class="w-5 h-5">
						{#if category.iconType === 'music-instrument'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
							</svg>
						{:else if category.iconType === 'microphone'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
							</svg>
						{:else if category.iconType === 'computer'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						{/if}
					</span>
					<span>{category.title}</span>
				</button>
			{/each}
		</div>

		<!-- Featured product -->
		{#key activeTab}
			<div class="mb-16 animate-on-scroll animate-fade-up delay-200">
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
					<div class="grid md:grid-cols-2 gap-0">
						<!-- Product image -->
						<div class="relative h-64 md:h-auto overflow-hidden">
							<img
								src={featuredProducts.find(p => p.category === activeTab)?.image}
								alt={featuredProducts.find(p => p.category === activeTab)?.name}
								class="w-full h-full object-cover"
							>
							<div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

							<!-- Product info overlay -->
							<div class="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
								<div class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white mb-3">
									{featuredProducts.find(p => p.category === activeTab)?.tag}
								</div>
								<h3 class="text-2xl md:text-3xl font-bold text-white mb-2">{featuredProducts.find(p => p.category === activeTab)?.name}</h3>
								<div class="flex items-center gap-3">
									<span class="text-white/90 font-medium text-lg">{featuredProducts.find(p => p.category === activeTab)?.price}</span>
									<span class="h-1 w-1 rounded-full bg-white/30"></span>
									<span class="text-white/70 text-sm">Featured Product</span>
								</div>
							</div>
						</div>

						<!-- Product details -->
						<div class="p-6 md:p-10">
							<h4 class="text-xl font-bold text-white mb-6">{equipmentCategories.find(c => c.id === activeTab)?.title} Collection</h4>

							<ul class="space-y-4 mb-8">
								{#each equipmentCategories.find(c => c.id === activeTab)?.features || [] as feature, i (i)}
									<li class="flex items-start gap-3 animate-on-scroll animate-fade-up" style="animation-delay: {300 + (i * 100)}ms">
										<div class={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${equipmentCategories.find(c => c.id === activeTab)?.color === 'music' ? 'bg-music-900/50 text-music-400' : 'bg-tsoft-900/50 text-tsoft-400'}`}>
											<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
												<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
											</svg>
										</div>
										<div>
											<p class="text-white font-medium">{feature}</p>
											<p class="text-white/60 text-sm">Premium quality, expertly selected</p>
										</div>
									</li>
								{/each}
							</ul>

							<div class="flex flex-col sm:flex-row gap-4 mt-8 animate-on-scroll animate-fade-up delay-700">

								<a href="#contact"
								class={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-center ${equipmentCategories.find(c => c.id === activeTab)?.color === 'music' ?
								'bg-music-600 text-white hover:bg-music-500 shadow-lg shadow-music-600/20 hover:shadow-music-500/30 hover:-translate-y-0.5' :
								'bg-tsoft-600 text-white hover:bg-tsoft-500 shadow-lg shadow-tsoft-600/20 hover:shadow-tsoft-500/30 hover:-translate-y-0.5'}`}
								>
								Request Quote
								</a>
								<a href="#contact" class="px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 border border-white/20 text-white hover:bg-white/5 text-center">
									View All Products
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/key}

		<!-- Product cards grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
			{#each equipmentCategories as category, i (category.id)}
				<div class="animate-on-scroll animate-fade-up" style="animation-delay: {(i+3) * 100}ms">
					<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group">
						<!-- Card header with image -->
						<div class="h-48 overflow-hidden relative">
							<img
								src={category.image}
								alt={category.title}
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							>
							<div class="absolute inset-0 bg-gradient-to-t from-tsoft-950 to-transparent opacity-90"></div>

							<!-- Category icon -->
							<div class={`absolute top-4 right-4 rounded-full p-2 ${category.color === 'music' ? 'bg-music-600' : 'bg-tsoft-600'} text-white shadow-lg`}>
								<span class="w-6 h-6">
									{#if category.iconType === 'music-instrument'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
										</svg>
									{:else if category.iconType === 'microphone'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
										</svg>
									{:else if category.iconType === 'computer'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									{/if}
								</span>
							</div>

							<!-- Category name -->
							<div class="absolute bottom-0 left-0 right-0 p-4">
								<h3 class="text-xl font-bold text-white">{category.title}</h3>
							</div>
						</div>

						<!-- Card content -->
						<div class="p-6">
							<div class="space-y-2 mb-6">
								{#each category.features as feature, j (j)}
									<div class="flex items-center gap-2 text-white/70">
										<div class={`h-1.5 w-1.5 rounded-full ${category.color === 'music' ? 'bg-music-500' : 'bg-tsoft-500'}`}></div>
										<span>{feature}</span>
									</div>
								{/each}
							</div>

							<div class="pt-4 border-t border-white/10">

							<a	href="#contact"
								class={`inline-flex items-center font-medium transition-all duration-300 ${category.color === 'music' ? 'text-music-400 hover:text-music-300' : 'text-tsoft-400 hover:text-tsoft-300'} group-hover:translate-x-1`}
								>
								Browse {category.title}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
								</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Call to action -->
		<div class="mt-16 text-center animate-on-scroll animate-fade-up delay-600">
			<div class="inline-block p-1 rounded-xl bg-gradient-to-r from-tsoft-500 to-music-500">
				<a href="#contact" class="block px-8 py-4 bg-tsoft-900 text-white font-medium rounded-lg hover:bg-transparent transition-all duration-300 transform hover:-translate-y-0.5">
					Request Complete Equipment Catalog
				</a>
			</div>
		</div>
	</div>

	<!-- Equipment Showcase Section -->
	<div class="mt-24 mb-16 relative z-10">
		<div class="container mx-auto px-4 md:px-6">
			<div class="text-center mb-12 animate-on-scroll animate-fade-up">
				<div class="inline-flex items-center justify-center mb-4">
					<span class="h-px w-8 bg-gradient-to-r from-tsoft-500 to-transparent"></span>
					<span class="mx-4 text-tsoft-400 font-medium text-sm uppercase tracking-wider">Premium Selection</span>
					<span class="h-px w-8 bg-gradient-to-l from-tsoft-500 to-transparent"></span>
				</div>
				<h2 class="text-2xl md:text-3xl font-bold mb-4 text-white">
					Featured Equipment Brands
				</h2>
				<p class="text-white/70 max-w-2xl mx-auto">
					We partner with industry-leading manufacturers to provide you with the highest quality equipment for your creative and technical needs.
				</p>
			</div>

			<!-- Brands showcase -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll animate-fade-up delay-100">
				<!-- Brand 1 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-300 group">
					<div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
						</svg>
					</div>
					<h3 class="text-lg font-bold text-white mb-1">Gibson</h3>
					<p class="text-white/60 text-sm text-center">Premium guitars and string instruments</p>
				</div>

				<!-- Brand 2 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-300 group">
					<div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
						</svg>
					</div>
					<h3 class="text-lg font-bold text-white mb-1">Neumann</h3>
					<p class="text-white/60 text-sm text-center">Professional studio microphones</p>
				</div>

				<!-- Brand 3 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-300 group">
					<div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<h3 class="text-lg font-bold text-white mb-1">Apple</h3>
					<p class="text-white/60 text-sm text-center">Mac computers and audio workstations</p>
				</div>

				<!-- Brand 4 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-300 group">
					<div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.828 2.828m0 0a9 9 0 010-12.728m2.828 2.828a5 5 0 010 7.072M3 3l3.546 3.546m0 0a5 5 0 017.072 0m0 0l3.546-3.546M21 21l-3.546-3.546m0 0a5 5 0 01-7.072 0m0 0L3 21" />
						</svg>
					</div>
					<h3 class="text-lg font-bold text-white mb-1">Universal Audio</h3>
					<p class="text-white/60 text-sm text-center">Audio interfaces and processing equipment</p>
				</div>
			</div>

			<!-- Equipment services -->
			<div class="mt-16 grid md:grid-cols-3 gap-8 animate-on-scroll animate-fade-up delay-200">
				<!-- Service 1 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
					<div class="flex items-center mb-4">
						<div class="p-2 rounded-lg bg-tsoft-800/50 text-tsoft-400 mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-white">Equipment Sales</h3>
					</div>
					<p class="text-white/70 mb-4">Purchase high-quality equipment with expert guidance to ensure you get the right tools for your specific needs.</p>
					<ul class="space-y-2 mb-4">
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Competitive pricing</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Manufacturer warranty</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Expert recommendations</span>
						</li>
					</ul>
				</div>

				<!-- Service 2 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
					<div class="flex items-center mb-4">
						<div class="p-2 rounded-lg bg-tsoft-800/50 text-tsoft-400 mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
						</svg>
						</div>
						<h3 class="text-xl font-bold text-white">Equipment Rental</h3>
					</div>
					<p class="text-white/70 mb-4">Rent professional equipment for your projects without the commitment of purchasing, ideal for one-off productions or trying before buying.</p>
					<ul class="space-y-2 mb-4">
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Daily, weekly, monthly options</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Technical support included</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Delivery and setup available</span>
						</li>
					</ul>
				</div>

				<!-- Service 3 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
					<div class="flex items-center mb-4">
						<div class="p-2 rounded-lg bg-tsoft-800/50 text-tsoft-400 mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-white">Custom Setup & Training</h3>
					</div>
					<p class="text-white/70 mb-4">Get your equipment professionally configured and learn how to use it effectively with our personalized training sessions.</p>
					<ul class="space-y-2 mb-4">
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Professional installation</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>One-on-one training</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Ongoing technical support</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Equipment catalog button -->
			<div class="text-center mt-12 animate-on-scroll animate-fade-up delay-300">
				<a href="#contact" class="inline-block px-8 py-4 bg-gradient-to-r from-tsoft-600 to-music-600 text-white font-medium rounded-lg hover:from-tsoft-500 hover:to-music-500 transition-all duration-300 shadow-lg shadow-tsoft-600/20 hover:shadow-tsoft-500/30 transform hover:-translate-y-0.5">
					Request Equipment Catalog
				</a>
			</div>
		</div>
	</div>

	<!-- Bottom separator -->
	<div class="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
		<svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style="width: 100%; height: 120px;">
			<path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		</svg>
	</div>
</section>
