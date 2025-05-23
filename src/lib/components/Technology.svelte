<script lang="ts">
	import { fade, } from 'svelte/transition';

	// Define TypeScript interfaces for our data
	interface Service {
		id: 'software' | 'web' | 'support';
		title: string;
		iconPath: string;
		description: string;
		features: string[];
	}

	// Technology-specific logic can go here
	let activeTab: 'software' | 'web' | 'support' = 'software';

	const services: Service[] = [
		{
			id: 'software',
			title: 'Software Development',
			iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
			description: 'Custom software solutions designed to address your specific business needs and challenges, built with cutting-edge technologies.',
			features: ['Custom Applications', 'Mobile Development', 'Legacy System Integration', 'AI & Machine Learning']
		},
		{
			id: 'web',
			title: 'Web Development',
			iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
			description: 'Responsive, user-friendly websites and web applications that engage your audience and drive results with modern UX/UI design.',
			features: ['Responsive Design', 'E-commerce Platforms', 'CMS Development', 'Progressive Web Apps']
		},
		{
			id: 'support',
			title: 'IT Support & Maintenance',
			iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
			description: 'Reliable IT support services to keep your systems running smoothly and efficiently with proactive monitoring and maintenance.',
			features: ['24/7 Technical Support', 'Network Management', 'Security Updates', 'Data Backup & Recovery']
		}
	];

	type TabId = 'software' | 'web' | 'support';

	const images: Record<TabId, string[]> = {
		'software': [
			'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop'
		],
		'web': [
			'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2574&auto=format&fit=crop'
		],
		'support': [
			'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2574&auto=format&fit=crop'
		]
	};

	// Helper function to ensure we always find a valid service
	function getActiveService(): Service {
		const service = services.find(s => s.id === activeTab);
		// This will never be undefined since activeTab is restricted to valid IDs
		return service!;
	}

	function setActiveTab(id: TabId): void {
		activeTab = id;
	}
</script>

<!-- Technology Section -->
<section id="technology" class="py-20 md:py-28 bg-gradient-to-b from-tsoft-950 to-tsoft-900 relative overflow-hidden">
	<!-- Background elements -->
	<div class="absolute inset-0 -z-10">
		<!-- Grid pattern -->
		<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

		<!-- Glowing orbs -->
		<div class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-tsoft-500/5 blur-[100px]"></div>
		<div class="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-tsoft-500/10 blur-[100px]"></div>
	</div>

	<div class="container mx-auto px-4 md:px-6 relative z-10">
		<!-- Section header -->
		<div class="text-center mb-16 animate-on-scroll animate-fade-up">
			<div class="inline-flex items-center justify-center mb-4">
				<span class="h-px w-8 bg-gradient-to-r from-tsoft-500 to-transparent"></span>
				<span class="mx-4 text-tsoft-400 font-medium text-sm uppercase tracking-wider">Technology Solutions</span>
				<span class="h-px w-8 bg-gradient-to-l from-tsoft-500 to-transparent"></span>
			</div>

			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
				Cutting-Edge <span class="text-tsoft-400">IT Services</span>
			</h2>

			<p class="text-lg text-white/70 max-w-3xl mx-auto">
				We deliver innovative IT solutions to help businesses of all sizes transform, grow, and optimize their operations.
			</p>
		</div>

		<!-- Tab navigation -->
		<div class="flex flex-wrap gap-2 mb-8 p-1 bg-white/5 backdrop-blur-sm rounded-xl max-w-xl mx-auto animate-on-scroll animate-fade-up">
			{#each services as service, i (service.id)}
				<button
					class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === service.id ? 'bg-tsoft-600 text-white shadow-md' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
					on:click={() => setActiveTab(service.id)}
				>
					{service.title}
				</button>
			{/each}
		</div>

		<!-- Main content area -->
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left content column -->
			<div class="animate-on-scroll animate-slide-right">
				{#key activeTab}
					<div transition:fade={{ duration: 300 }}>
						<!-- Service header -->
						<div class="flex items-start gap-5">
							<div class="rounded-xl p-3 bg-tsoft-800/50 text-tsoft-400 border border-tsoft-700/50 shadow-lg">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={getActiveService().iconPath} />
								</svg>
							</div>
							<div>
								<h3 class="text-2xl font-bold text-white mb-2">{getActiveService().title}</h3>
								<p class="text-white/70">{getActiveService().description}</p>
							</div>
						</div>

						<!-- Service features -->
						<div class="bg-tsoft-800/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 space-y-4 mt-8">
							<h4 class="text-lg font-medium text-white">Key Features</h4>
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{#each getActiveService().features as feature, i (i)}
									<div class="flex items-center space-x-3 group animate-on-scroll animate-fade-up" style="animation-delay: {i * 100}ms">
										<div class="h-2 w-2 rounded-full bg-tsoft-500 group-hover:scale-150 transition-all duration-300"></div>
										<span class="text-white/80 group-hover:text-white transition-colors duration-300">{feature}</span>
									</div>
								{/each}
							</div>
						</div>

						<!-- Testimonial/highlight box -->
						<div class="bg-gradient-to-br from-tsoft-700/20 to-tsoft-800/20 backdrop-blur-sm border border-tsoft-600/20 rounded-xl p-6 animate-on-scroll animate-fade-up mt-8">
							<div class="flex items-start">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-tsoft-500 opacity-40 -ml-2" fill="currentColor" viewBox="0 0 24 24">
									<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
								</svg>
								<div class="ml-2">
									<p class="text-white/80 italic">"{getActiveService().title} from TSOFT has transformed how we operate. The attention to detail and innovative approach exceeded our expectations."</p>
									<div class="mt-3 flex items-center">
										<div class="h-8 w-8 rounded-full bg-tsoft-700 flex items-center justify-center text-white font-medium">JD</div>
										<div class="ml-2">
											<p class="text-white text-sm font-medium">Jane Doe</p>
											<p class="text-white/60 text-xs">CEO, Example Company</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- CTA Button -->
						<a href="#contact" class="inline-block px-6 py-3 bg-tsoft-600 text-white font-medium rounded-lg hover:bg-tsoft-500 transition-all duration-300 shadow-lg shadow-tsoft-600/20 hover:shadow-tsoft-500/30 hover:-translate-y-0.5 animate-on-scroll animate-fade-up mt-8">
							Get {getActiveService().title} Consultation
						</a>
					</div>
				{/key}
			</div>

			<!-- Right content column - Images -->
			<div class="relative animate-on-scroll animate-fade-up">
				{#key activeTab}
					<div transition:fade={{ duration: 300 }}>
						<div class="grid grid-cols-12 gap-4">
							<!-- Image 1 - Main large image -->
							<div class="col-span-8 relative overflow-hidden rounded-xl shadow-2xl group animate-on-scroll animate-scale">
								<img
									src={images[activeTab][0]}
									alt={getActiveService().title}
									class="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
								>
								<div class="absolute inset-0 bg-gradient-to-t from-tsoft-950 to-transparent opacity-80"></div>
								<div class="absolute bottom-0 left-0 p-6">
									<div class="flex items-center space-x-2 mb-3">
										<span class="w-2 h-2 rounded-full bg-tsoft-400 animate-pulse"></span>
										<span class="text-tsoft-400 text-sm font-medium uppercase tracking-wider">Featured</span>
									</div>
									<h3 class="text-xl md:text-2xl font-bold text-white">{getActiveService().title}</h3>
								</div>
							</div>

							<!-- Image 2 - Secondary image -->
							<div class="col-span-4 relative overflow-hidden rounded-xl shadow-2xl group animate-on-scroll animate-scale delay-100">
								<img
									src={images[activeTab][1]}
									alt={`${getActiveService().title} secondary`}
									class="w-full h-full object-cover aspect-[3/4] transform group-hover:scale-105 transition-transform duration-700"
								>
								<div class="absolute inset-0 bg-gradient-to-t from-tsoft-950 to-transparent opacity-60"></div>
							</div>

							<!-- Stats row -->
							<div class="col-span-12 grid grid-cols-3 gap-4 mt-4">
								{#each ['Projects Completed', 'Client Satisfaction', 'Support Response'] as stat, i (i)}
									<div class="bg-tsoft-800/50 backdrop-blur-sm border border-white/5 rounded-xl p-4 text-center animate-on-scroll animate-fade-up" style="animation-delay: {(i+2) * 100}ms">
										<div class="text-2xl font-bold text-white mb-1">
											{i === 0 ? '100+' : i === 1 ? '98%' : '< 2h'}
										</div>
										<div class="text-sm text-white/60">{stat}</div>
									</div>
								{/each}
							</div>

							<!-- Technology logos -->
							<div class="col-span-12 flex flex-wrap items-center justify-between mt-4 bg-tsoft-800/30 backdrop-blur-sm border border-white/5 rounded-xl p-5 animate-on-scroll animate-fade-up delay-300">
								<div class="text-xs text-white/50 pr-4 mb-2 sm:mb-0">Technologies:</div>
								{#each ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'] as tech, i (i)}
									<div class="text-white/70 text-sm font-medium px-3 py-1 rounded-md bg-white/5 animate-on-scroll animate-scale" style="animation-delay: {(i+5) * 100}ms">{tech}</div>
								{/each}
							</div>
						</div>
					</div>
				{/key}
			</div>
		</div>
	</div>

	<!-- Curved bottom separator -->
	<div class="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
		<svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style="width: 100%; height: 120px;">
			<path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		</svg>
	</div>
</section>