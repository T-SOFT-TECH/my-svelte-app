<script lang="ts">
	// Footer-specific logic can go here
	const currentYear = new Date().getFullYear();

	// Footer links
	const footerLinks = {
		services: [
			{ id: 'service-it', title: 'IT Solutions', href: '#technology' },
			{ id: 'service-software', title: 'Software Development', href: '#technology' },
			{ id: 'service-music', title: 'Music Production', href: '#music' },
			{ id: 'service-audio', title: 'Audio Engineering', href: '#music' },
			{ id: 'service-equipment', title: 'Equipment Sales', href: '#equipment' }
		],
		quickLinks: [
			{ id: 'link-home', title: 'Home', href: '#home' },
			{ id: 'link-about', title: 'About Us', href: '#about' },
			{ id: 'link-services', title: 'Services', href: '#services' },
			{ id: 'link-contact', title: 'Contact', href: '#contact' },
			{ id: 'link-privacy', title: 'Privacy Policy', href: '#' }
		]
	};

	// Contact information
	const contactInfo = {
		address: ['4, Thank-God Street, Jajo Estate', 'Mowo-Nla, Ikorodu', 'Lagos State. Nigeria'],
		email: 'info@tsoftechnologies.com',
		phone: '+234 913 503 8422'
	};

	// Footer bottom links
	const legalLinks = [
		{ id: 'legal-terms', title: 'Terms', href: '#' },
		{ id: 'legal-privacy', title: 'Privacy', href: '#' },
		{ id: 'legal-cookies', title: 'Cookies', href: '#' }
	];
</script>

<!-- Footer -->
<footer class="bg-tsoft-950 text-white pt-16 pb-8 relative overflow-hidden">
	<!-- Background decorative elements -->
	<div class="absolute inset-0 -z-10">
		<!-- Grid pattern -->
		<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

		<!-- Subtle glow -->
		<div class="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-tsoft-500/5 blur-[100px]"></div>
	</div>

	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
			<!-- Company information - 5 columns -->
			<div class="lg:col-span-5 animate-on-scroll animate-fade-up">
				<div class="flex items-center mb-6">
					<div class="relative h-12 w-12 mr-3">
						<div class="absolute inset-0 bg-gradient-to-br from-tsoft-500 to-tsoft-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-tsoft-500/20">
							TS
						</div>
						<div class="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-br from-music-500 to-music-700 rounded-full shadow-lg shadow-music-500/20"></div>
					</div>
					<div>
						<span class="text-2xl font-bold">TSOFT</span>
						<span class="text-xl font-light text-tsoft-400">TECHNOLOGIES</span>
					</div>
				</div>

				<p class="text-white/70 mb-8 max-w-md">
					Your trusted partner for technology and equipment solutions, offering IT services, software development, music production, and audio equipment, bridging the gap between tech and creative industries.
				</p>

				<!-- Social media links -->
				<div class="flex space-x-3 mb-8">
					<a href="#" class="w-10 h-10 bg-white/5 hover:bg-tsoft-600/30 border border-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 group" aria-label="facebook">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
							<path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
						</svg>
					</a>
					<a href="#" class="w-10 h-10 bg-white/5 hover:bg-tsoft-600/30 border border-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 group" aria-label="twitter">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
						</svg>
					</a>
					<a href="#" class="w-10 h-10 bg-white/5 hover:bg-tsoft-600/30 border border-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 group" aria-label="Instagram">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
						</svg>
					</a>
					<a href="#" class="w-10 h-10 bg-white/5 hover:bg-tsoft-600/30 border border-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 group" aria-label="Linkedin">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
							<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
						</svg>
					</a>
				</div>

				<!-- Newsletter -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 animate-on-scroll animate-fade-up delay-200">
					<h4 class="font-medium text-white mb-2">Subscribe to our Newsletter</h4>
					<p class="text-white/60 text-sm mb-4">Stay updated with our latest news and offers.</p>

					<div class="flex items-center">
						<input
							type="email"
							placeholder="Your email address"
							class="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder-white/40 focus:ring-2 focus:ring-tsoft-500/50 focus:border-tsoft-500/50 transition-colors"
						>
						<button class="px-4 py-2 bg-tsoft-600 text-white font-medium rounded-r-lg hover:bg-tsoft-500 transition-colors">
							Subscribe
						</button>
					</div>
				</div>
			</div>

			<!-- Our Services - 2 columns -->
			<div class="lg:col-span-2 animate-on-scroll animate-fade-up delay-100">
				<h4 class="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">Our Services</h4>
				<ul class="space-y-3">
					{#each footerLinks.services as link (link.id)}
						<li>
							<a href={link.href} class="text-white/70 hover:text-tsoft-400 transition-colors duration-200 flex items-center group">
								<span class="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-tsoft-500 mr-2 transition-colors"></span>
								{link.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Quick Links - 2 columns -->
			<div class="lg:col-span-2 animate-on-scroll animate-fade-up delay-200">
				<h4 class="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">Quick Links</h4>
				<ul class="space-y-3">
					{#each footerLinks.quickLinks as link (link.id)}
						<li>
							<a href={link.href} class="text-white/70 hover:text-tsoft-400 transition-colors duration-200 flex items-center group">
								<span class="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-tsoft-500 mr-2 transition-colors"></span>
								{link.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Information - 3 columns -->
			<div class="lg:col-span-3 animate-on-scroll animate-fade-up delay-300">
				<h4 class="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2">Contact Info</h4>

				<ul class="space-y-4">
					<li class="flex">
						<div class="mt-1 mr-3 text-tsoft-400">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div class="text-white/70">
							{#each contactInfo.address as line, i (i)}
								<p>{line}</p>
							{/each}
						</div>
					</li>

					<li class="flex">
						<div class="mt-1 mr-3 text-tsoft-400">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div class="text-white/70">{contactInfo.email}</div>
					</li>

					<li class="flex">
						<div class="mt-1 mr-3 text-tsoft-400">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div class="text-white/70">{contactInfo.phone}</div>
					</li>
				</ul>

				<!-- Support badge -->
				<div class="mt-8 bg-gradient-to-r from-tsoft-900 to-tsoft-800 p-4 rounded-lg border border-white/5 flex items-center animate-on-scroll animate-fade-up delay-500">
					<div class="w-12 h-12 rounded-full bg-gradient-to-br from-tsoft-500 to-tsoft-600 flex items-center justify-center mr-4 shadow-lg shadow-tsoft-500/20">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					</div>
					<div>
						<h4 class="font-bold text-white">24/7 Support</h4>
						<p class="text-white/70 text-sm">We're here to help anytime</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom footer -->
		<div class="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
			<p class="text-white/50 text-center md:text-left">© {currentYear} TSOFT-TECHNOLOGIES. All rights reserved.</p>

			<div class="mt-4 md:mt-0">
				<ul class="flex space-x-6">
					{#each legalLinks as link (link.id)}
						<li><a href={link.href} class="text-white/50 hover:text-tsoft-400 transition-colors duration-200 text-sm">{link.title}</a></li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</footer>