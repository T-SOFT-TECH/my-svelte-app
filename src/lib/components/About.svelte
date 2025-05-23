<script lang="ts">


	// Define a type for the tab values
	type TabType = 'mission' | 'vision' | 'values';

	let activeTab: TabType = 'mission';
	let showMoreStory = false;

	// Team members data
	interface TeamMember {
		id: string;
		name: string;
		role: string;
		bio: string;
		image: string;
	}

	const teamMembers: TeamMember[] = [
		{
			id: 'member1',
			name: 'Alex Johnson',
			role: 'Founder & CEO',
			bio: 'With over 15 years of experience in technology and music production, Alex founded TSOFT to bridge the gap between these two worlds.',
			image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop'
		},
		{
			id: 'member2',
			name: 'Sarah Williams',
			role: 'Audio Engineer',
			bio: 'Grammy-nominated audio engineer with expertise in recording, mixing, and mastering across multiple genres.',
			image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop'
		},
		{
			id: 'member3',
			name: 'Michael Chen',
			role: 'Lead Developer',
			bio: 'Full-stack developer specializing in creating innovative software solutions for creative professionals.',
			image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2670&auto=format&fit=crop'
		}
	];

	// Type-safe function for changing the active tab
	function setActiveTab(tab: TabType): void {
		activeTab = tab;
	}

	function toggleMoreStory(): void {
		showMoreStory = !showMoreStory;
	}
</script>

<!-- About Section -->
<section id="about" class="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
	<!-- Background decorative elements -->
	<div class="absolute top-0 left-0 right-0 h-32 bg-tsoft-950 transform -skew-y-2 -translate-y-16 z-0"></div>
	<div class="absolute top-0 right-0 w-96 h-96 bg-tsoft-500/5 rounded-full blur-3xl -z-10"></div>
	<div class="absolute bottom-0 left-0 w-80 h-80 bg-music-500/5 rounded-full blur-3xl -z-10"></div>

	<div class="container mx-auto px-4 md:px-6 relative z-10">
  <!-- Section header -->
		<div class="text-center mb-16 animate-on-scroll animate-fade-up">
			<span class="inline-block px-4 py-1 bg-tsoft-50 text-tsoft-700 rounded-full text-sm font-semibold mb-4 border border-tsoft-100">About Us</span>
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-tsoft-700 to-tsoft-900 bg-clip-text text-transparent">
				Your Trusted Partner Since 2015
			</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				TSOFT-TECHNOLOGIES is a dynamic tech company specializing in software/web development, IT solutions, music and audio engineering, and the procurement and sale of musical equipment. With a decade of experience, we've established ourselves as a leader in providing integrated technology and creative solutions.
			</p>
		</div>

		<!-- Main content grid -->
		<div class="grid lg:grid-cols-5 gap-8 md:gap-12">
			<!-- Left column - Company story and mission -->
			<div class="lg:col-span-3 animate-on-scroll animate-slide-right">
				<!-- Company story card -->
				<div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
					<div class="p-8">
						<div class="flex items-center mb-6">
							<div class="w-10 h-10 rounded-full bg-gradient-to-r from-tsoft-500 to-tsoft-600 flex items-center justify-center text-white shadow-lg">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-gray-900 ml-4">Our Story</h3>
						</div>

						<p class="text-gray-600 mb-4">
							Founded in 2015, TSOFT-TECHNOLOGIES began with a vision to combine cutting-edge technology with creative audio solutions. What started as a small IT consulting firm quickly expanded to include music production and equipment sales.
						</p>

						<div class={`text-gray-600 mb-4 transition-opacity duration-500 ${showMoreStory ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
							<p class="mb-4">
								Throughout our journey, we've helped hundreds of businesses optimize their technology infrastructure while simultaneously supporting artists and creators with professional audio engineering services.
							</p>
							<p>
								Today, we're proud to be a multifaceted technology partner offering comprehensive solutions across both the tech and music industries, with a team of passionate experts dedicated to delivering excellence in every project.
							</p>
						</div>

						<button
							class="text-tsoft-600 font-medium hover:text-tsoft-700 flex items-center transition-colors duration-300 focus:outline-none"
							on:click={toggleMoreStory}
							type="button"
						>
							{showMoreStory ? 'Read Less' : 'Read More'}
							<svg xmlns="http://www.w3.org/2000/svg" class={`h-4 w-4 ml-1 transition-transform duration-300 ${showMoreStory ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
					</div>
				</div>

				<!-- Mission, Vision, Values tabs -->
				<div class="bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll animate-fade-up delay-200">
					<div class="border-b border-gray-100">
						<div class="flex">
							<button
								class={`relative py-4 px-6 text-sm font-medium transition-all duration-300 ${activeTab === 'mission' ? 'text-tsoft-700' : 'text-gray-500 hover:text-tsoft-600'}`}
								on:click={() => setActiveTab('mission')}
								type="button"
							>
								Mission
								{#if activeTab === 'mission'}
									<span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-tsoft-400 to-tsoft-600"></span>
								{/if}
							</button>
							<button
								class={`relative py-4 px-6 text-sm font-medium transition-all duration-300 ${activeTab === 'vision' ? 'text-tsoft-700' : 'text-gray-500 hover:text-tsoft-600'}`}
								on:click={() => setActiveTab('vision')}
								type="button"
							>
								Vision
								{#if activeTab === 'vision'}
									<span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-tsoft-400 to-tsoft-600"></span>
								{/if}
							</button>
							<button
								class={`relative py-4 px-6 text-sm font-medium transition-all duration-300 ${activeTab === 'values' ? 'text-tsoft-700' : 'text-gray-500 hover:text-tsoft-600'}`}
								on:click={() => setActiveTab('values')}
								type="button"
							>
								Values
								{#if activeTab === 'values'}
									<span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-tsoft-400 to-tsoft-600"></span>
								{/if}
							</button>
						</div>
					</div>

					<div class="p-6">
						{#if activeTab === 'mission'}
							<div class="animate-on-scroll animate-fade-up">
								<h4 class="text-xl font-bold text-gray-900 mb-4">Our Mission</h4>
								<p class="text-gray-600 mb-4">
									To deliver high-quality, innovative solutions that cater to the diverse needs of our clients, ensuring growth and efficiency in every project we undertake.
								</p>
								<div class="flex items-start mt-6">
									<div class="rounded-lg p-2 bg-tsoft-50 text-tsoft-600 mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
									</div>
									<div>
										<h5 class="font-medium text-gray-900">Commitment to Excellence</h5>
										<p class="text-sm text-gray-600">We strive for excellence in every service we provide, from software development to audio production.</p>
									</div>
								</div>
							</div>
						{:else if activeTab === 'vision'}
							<div class="animate-on-scroll animate-fade-up">
								<h4 class="text-xl font-bold text-gray-900 mb-4">Our Vision</h4>
								<p class="text-gray-600 mb-4">
									To become the leading provider of integrated technology and music solutions, revolutionizing how businesses and creatives harness the power of both worlds.
								</p>
								<div class="flex items-start mt-6">
									<div class="rounded-lg p-2 bg-tsoft-50 text-tsoft-600 mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									</div>
									<div>
										<h5 class="font-medium text-gray-900">Innovation Forward</h5>
										<p class="text-sm text-gray-600">We continuously explore new technologies and methodologies to stay ahead of industry trends.</p>
									</div>
								</div>
							</div>
						{:else}
							<div class="animate-on-scroll animate-fade-up">
								<h4 class="text-xl font-bold text-gray-900 mb-4">Our Values</h4>
								<p class="text-gray-600 mb-4">
									Our core values guide everything we do, from client interactions to product development and team collaboration.
								</p>
								<div class="grid grid-cols-2 gap-4 mt-6">
									<div class="flex items-start">
										<div class="w-2 h-2 rounded-full bg-tsoft-500 mt-2 mr-2"></div>
										<p class="text-gray-600 text-sm">Integrity & Transparency</p>
									</div>
									<div class="flex items-start">
										<div class="w-2 h-2 rounded-full bg-tsoft-500 mt-2 mr-2"></div>
										<p class="text-gray-600 text-sm">Innovation & Creativity</p>
									</div>
									<div class="flex items-start">
										<div class="w-2 h-2 rounded-full bg-tsoft-500 mt-2 mr-2"></div>
										<p class="text-gray-600 text-sm">Excellence & Quality</p>
									</div>
									<div class="flex items-start">
										<div class="w-2 h-2 rounded-full bg-tsoft-500 mt-2 mr-2"></div>
										<p class="text-gray-600 text-sm">Client Success Focus</p>
									</div>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Right column - Company stats and team -->
			<div class="lg:col-span-2">
				<!-- Stats cards -->
				<div class="grid grid-cols-2 gap-4 mb-8 animate-on-scroll animate-fade-up delay-100">
					<div class="bg-white p-5 rounded-xl shadow-lg border-l-4 border-tsoft-500">
						<div class="text-3xl font-bold text-tsoft-600 mb-1">10+</div>
						<div class="text-gray-700 text-sm">Years of Experience</div>
					</div>
					<div class="bg-white p-5 rounded-xl shadow-lg border-l-4 border-tsoft-500">
						<div class="text-3xl font-bold text-tsoft-600 mb-1">500+</div>
						<div class="text-gray-700 text-sm">Projects Completed</div>
					</div>
					<div class="bg-white p-5 rounded-xl shadow-lg border-l-4 border-music-500">
						<div class="text-3xl font-bold text-music-600 mb-1">200+</div>
						<div class="text-gray-700 text-sm">Satisfied Clients</div>
					</div>
					<div class="bg-white p-5 rounded-xl shadow-lg border-l-4 border-music-500">
						<div class="text-3xl font-bold text-music-600 mb-1">24/7</div>
						<div class="text-gray-700 text-sm">Technical Support</div>
					</div>
				</div>

				<!-- Team showcase -->
				<div class="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll animate-fade-up delay-200">
					<img
						src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
						alt="TSOFT Team"
						class="w-full h-auto object-cover"
					>
					<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 flex flex-col justify-end">
						<div class="p-6 text-white">
							<div class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">Our Team</div>
							<p class="font-bold text-2xl mb-2">Experts Who Care</p>
							<p class="text-white/80">A diverse team of professionals with passion and expertise in technology and music.</p>
						</div>
					</div>
				</div>

				<!-- Team members cards -->
				<div class="mt-4 space-y-4">
					{#each teamMembers as member, i (member.id)}
						<div class="bg-white rounded-xl shadow-md overflow-hidden animate-on-scroll animate-fade-up" style="animation-delay: {(i+3) * 100}ms">
							<div class="flex items-center p-4">
								<div class="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
									<img src={member.image} alt={member.name} class="w-full h-full object-cover">
								</div>
								<div>
									<h4 class="font-medium text-lg text-gray-900">{member.name}</h4>
									<p class="text-sm text-tsoft-600 mb-2">{member.role}</p>
									<p class="text-xs text-gray-600">{member.bio}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Social media links -->
				<div class="flex justify-center mt-8 animate-on-scroll animate-fade-up delay-600">
					<div class="flex space-x-3">
						<a href="#" class="p-3 bg-tsoft-50 text-tsoft-600 rounded-full hover:bg-tsoft-100 transition-colors duration-200 shadow-sm" aria-label="facebook">
							<svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
							</svg>
						</a>
						<a href="#" class="p-3 bg-tsoft-50 text-tsoft-600 rounded-full hover:bg-tsoft-100 transition-colors duration-200 shadow-sm" aria-label="twitter">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
							</svg>
						</a>
						<a href="#" class="p-3 bg-tsoft-50 text-tsoft-600 rounded-full hover:bg-tsoft-100 transition-colors duration-200 shadow-sm" aria-label="instagram">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
							</svg>
						</a>
						<a href="#" class="p-3 bg-tsoft-50 text-tsoft-600 rounded-full hover:bg-tsoft-100 transition-colors duration-200 shadow-sm" aria-label="linkedin">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Achievements and Milestones Section -->
	<div class="py-16 bg-gradient-to-r from-tsoft-50 to-gray-50 mt-16 rounded-3xl shadow-lg animate-on-scroll animate-fade-up">
		<div class="container mx-auto px-4 md:px-6">
			<div class="text-center mb-12">
				<span class="inline-block px-4 py-1 bg-tsoft-100 text-tsoft-700 rounded-full text-sm font-semibold mb-4">Our Journey</span>
				<h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Achievements & Milestones</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">A decade of innovation, growth, and excellence in technology and music production.</p>
			</div>

			<div class="grid md:grid-cols-4 gap-6">
				<!-- Milestone 1 -->
				<div class="bg-white rounded-xl shadow-md p-6 border-t-4 border-tsoft-500 hover:shadow-lg transition-shadow duration-300">
					<div class="text-tsoft-600 font-bold text-xl mb-1">2015</div>
					<div class="font-medium text-gray-900 mb-2">Company Founded</div>
					<p class="text-gray-600 text-sm">TSOFT-TECHNOLOGIES was established with a vision to bridge technology and creative industries.</p>
				</div>

				<!-- Milestone 2 -->
				<div class="bg-white rounded-xl shadow-md p-6 border-t-4 border-tsoft-500 hover:shadow-lg transition-shadow duration-300">
					<div class="text-tsoft-600 font-bold text-xl mb-1">2017</div>
					<div class="font-medium text-gray-900 mb-2">Music Division Launch</div>
					<p class="text-gray-600 text-sm">Expanded our services to include professional audio engineering and music production.</p>
				</div>

				<!-- Milestone 3 -->
				<div class="bg-white rounded-xl shadow-md p-6 border-t-4 border-music-500 hover:shadow-lg transition-shadow duration-300">
					<div class="text-music-600 font-bold text-xl mb-1">2019</div>
					<div class="font-medium text-gray-900 mb-2">100th Client</div>
					<p class="text-gray-600 text-sm">Reached a significant milestone of serving 100 clients across various industries.</p>
				</div>

				<!-- Milestone 4 -->
				<div class="bg-white rounded-xl shadow-md p-6 border-t-4 border-music-500 hover:shadow-lg transition-shadow duration-300">
					<div class="text-music-600 font-bold text-xl mb-1">2023</div>
					<div class="font-medium text-gray-900 mb-2">International Expansion</div>
					<p class="text-gray-600 text-sm">Expanded our services globally, serving clients across multiple countries.</p>
				</div>
			</div>

			<!-- Recognition section -->
			<div class="mt-12 bg-white rounded-xl shadow-md p-8 border border-gray-100">
				<h3 class="text-xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
				<div class="grid md:grid-cols-2 gap-6">
					<div class="flex items-start gap-3">
						<div class="p-2 rounded-full bg-tsoft-100 text-tsoft-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-900">Tech Innovator Award 2022</h4>
							<p class="text-sm text-gray-600">Recognized for our innovative approach to integrating technology solutions with creative industries.</p>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<div class="p-2 rounded-full bg-music-100 text-music-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
							</svg>
						</div>
						<div>
							<h4 class="font-medium text-gray-900">Audio Excellence Certificate 2021</h4>
							<p class="text-sm text-gray-600">Awarded for outstanding contributions to audio engineering and music production quality.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom separator -->
	<div class="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
		<svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style="width: 100%; height: 120px; transform: rotate(180deg);">
			<path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		</svg>
	</div>
</section>
