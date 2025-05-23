<script lang="ts">
	export let email: string;

	// Form handling logic
	let formData = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		service: '',
		message: ''
	};

	let formSubmitted = false;

	function handleSubmit(event: Event): void {
		event.preventDefault();

		// Here you would implement your form submission logic
		// For example, sending data to your backend or a form service
		console.log('Form submitted:', formData);

		// Show success message
		formSubmitted = true;

		// Reset form after submission
		setTimeout(() => {
			formData = {
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				service: '',
				message: ''
			};
			formSubmitted = false;
		}, 5000);
	}

	// Contact info
	const contactInfo = [
		{
			id: 'location',
			icon: 'location',
			title: 'Our Location',
			content: ['4, Thank-God Street, Jajo Estate', 'Mowo-Nla, Ikorodu', 'Lagos State. Nigeria']
		},
		{
			id: 'email',
			icon: 'email',
			title: 'Email Us',
			content: [email]
		},
		{
			id: 'phone',
			icon: 'phone',
			title: 'Call Us',
			content: ['+234 913 503 8422']
		},
		{
			id: 'hours',
			icon: 'clock',
			title: 'Business Hours',
			content: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM']
		}
	];
</script>

<!-- Contact Section -->
<section id="contact" class="py-20 md:py-28 bg-gradient-to-b from-tsoft-950 to-tsoft-900 relative overflow-hidden">
	<!-- Background elements -->
	<div class="absolute inset-0 -z-10">
		<!-- Grid pattern -->
		<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

		<!-- Glowing orbs -->
		<div class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-tsoft-500/5 blur-[100px]"></div>
		<div class="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-music-500/5 blur-[100px]"></div>
	</div>

	<div class="container mx-auto px-4 md:px-6 relative z-10">
		<!-- Section header -->
		<div class="text-center mb-16 animate-on-scroll animate-fade-up">
			<div class="inline-flex items-center justify-center mb-4">
				<span class="h-px w-8 bg-gradient-to-r from-tsoft-500 to-transparent"></span>
				<span class="mx-4 text-tsoft-400 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
				<span class="h-px w-8 bg-gradient-to-l from-tsoft-500 to-transparent"></span>
			</div>

			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
				Let's Start a <span class="text-tsoft-400">Conversation</span>
			</h2>

			<p class="text-lg text-white/70 max-w-3xl mx-auto">
				Have a question or ready to get started? Contact our team for expert advice and personalized solutions.
			</p>
		</div>

		<!-- Contact cards -->
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
			{#each contactInfo as info, i (info.id)}
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center animate-on-scroll animate-fade-up" style="animation-delay: {i * 100}ms">
					<div class="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-tsoft-600 to-tsoft-700 flex items-center justify-center text-white shadow-lg shadow-tsoft-600/20 mb-4">
						{#if info.icon === 'location'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						{:else if info.icon === 'email'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						{:else if info.icon === 'phone'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{/if}
					</div>
					<h3 class="text-lg font-bold text-white mb-2">{info.title}</h3>
					<div class="text-white/70 text-sm">
						{#each info.content as line, lineIndex (lineIndex)}
							<p>{line}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="grid lg:grid-cols-5 gap-8">
			<!-- Contact form - 3 columns -->
			<div class="lg:col-span-3 animate-on-scroll animate-slide-right">
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-xl">
					<div class="p-8">
						<h3 class="text-2xl font-bold mb-6 text-white">Send us a message</h3>

						{#if formSubmitted}
							<div class="bg-tsoft-900/50 border border-tsoft-700/50 rounded-lg p-6 text-center">
								<div class="w-16 h-16 mx-auto bg-tsoft-500/20 rounded-full flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-tsoft-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<h4 class="text-xl font-bold text-white mb-2">Message Sent!</h4>
								<p class="text-white/70">Thank you for your message. We will get back to you shortly.</p>
							</div>
						{:else}
							<form on:submit={handleSubmit}>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
									<div>
										<label for="first-name" class="block text-sm font-medium text-white/80 mb-2">First Name</label>
										<input
											type="text"
											id="first-name"
											bind:value={formData.firstName}
											required
											class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-tsoft-500/50 focus:border-tsoft-500/50 transition-colors"
											placeholder="Enter your first name"
										>
									</div>
									<div>
										<label for="last-name" class="block text-sm font-medium text-white/80 mb-2">Last Name</label>
										<input
											type="text"
											id="last-name"
											bind:value={formData.lastName}
											required
											class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-tsoft-500/50 focus:border-tsoft-500/50 transition-colors"
											placeholder="Enter your last name"
										>
									</div>
								</div>

								<div class="mb-6">
									<label for="email" class="block text-sm font-medium text-white/80 mb-2">Email Address</label>
									<input
										type="email"
										id="email"
										bind:value={formData.email}
										required
										class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-tsoft-500/50 focus:border-tsoft-500/50 transition-colors"
										placeholder="Enter your email address"
									>
								</div>

								<div class="mb-6">
									<label for="phone" class="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
									<input
										type="tel"
										id="phone"
										bind:value={formData.phone}
										class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-tsoft-500/50 focus:border-tsoft-500/50 transition-colors"
										placeholder="Enter your phone number (optional)"
									>
								</div>

								<div class="mb-6">
									<label for="service" class="block text-sm font-medium text-white/80 mb-2">Service of Interest</label>
									<select
										id="service"
										bind:value={formData.service}
										required
										class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-tsoft-500/50 focus:border-tsoft-500/50 transition-colors"
									>
										<option value="" disabled selected class="bg-tsoft-900 text-white">Select a service</option>
										<option value="it" class="bg-tsoft-900 text-white">IT Solutions</option>
										<option value="software" class="bg-tsoft-900 text-white">Software Development</option>
										<option value="music" class="bg-tsoft-900 text-white">Music & Audio</option>
										<option value="equipment" class="bg-tsoft-900 text-white">Equipment Purchase</option>
										<option value="training" class="bg-tsoft-900 text-white">Training</option>
										<option value="other" class="bg-tsoft-900 text-white">Other</option>
									</select>
								</div>

								<div class="mb-6">
									<label for="message" class="block text-sm font-medium text-white/80 mb-2">Message</label>
									<textarea
										id="message"
										rows="4"
										bind:value={formData.message}
										required
										class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-tsoft-500/50 focus:border-tsoft-500/50 transition-colors"
										placeholder="Tell us about your project or inquiry"
									></textarea>
								</div>

								<button
									type="submit"
									class="w-full bg-gradient-to-r from-tsoft-600 to-tsoft-700 text-white font-medium py-3 px-4 rounded-lg hover:from-tsoft-500 hover:to-tsoft-600 transition-all duration-300 shadow-lg shadow-tsoft-600/20 hover:shadow-tsoft-500/30 transform hover:-translate-y-0.5"
								>
									Send Message
								</button>
							</form>
						{/if}
					</div>
				</div>
			</div>

			<!-- Map and social - 2 columns -->
			<div class="lg:col-span-2 animate-on-scroll animate-slide-left">
				<!-- Map -->
				<div class="rounded-xl overflow-hidden shadow-xl mb-8 bg-white/5 backdrop-blur-sm border border-white/10 h-96">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjciTiA3M8KwNTknMTUuNCJX!5e0!3m2!1sen!2sus!4v1616603891663!5m2!1sen!2sus"
						width="100%"
						height="100%"
						style="border:0;"
						loading="lazy"
						title="Office Location">
					</iframe>
				</div>

				<!-- Connect box -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 animate-on-scroll animate-fade-up delay-300">
					<h3 class="text-xl font-bold text-white mb-4">Connect With Us</h3>
					<p class="text-white/70 mb-6">Follow us on social media to stay updated with our latest news, events, and projects.</p>

					<div class="grid grid-cols-4 gap-3">
						<a href="#" class="flex items-center justify-center h-12 bg-white/10 hover:bg-tsoft-600/20 border border-white/5 rounded-lg transition-all duration-300 group" aria-label="link">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-tsoft-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
							</svg>
						</a>
						<a href="#" class="flex items-center justify-center h-12 bg-white/10 hover:bg-tsoft-600/20 border border-white/5 rounded-lg transition-all duration-300 group" aria-label="link">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-tsoft-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
							</svg>
						</a>
						<a href="#" class="flex items-center justify-center h-12 bg-white/10 hover:bg-tsoft-600/20 border border-white/5 rounded-lg transition-all duration-300 group" aria-label="link">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-tsoft-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
							</svg>
						</a>
						<a href="#" class="flex items-center justify-center h-12 bg-white/10 hover:bg-tsoft-600/20 border border-white/5 rounded-lg transition-all duration-300 group"  aria-label="link">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-tsoft-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
							</svg>
						</a>
					</div>

					<!-- Newsletter -->
					<div class="mt-8 pt-6 border-t border-white/10">
						<h4 class="text-lg font-medium text-white mb-3">Subscribe to Newsletter</h4>
						<p class="text-white/70 text-sm mb-4">Get updates on our latest services and offers directly to your inbox.</p>

						<div class="flex items-center">
							<input
								type="email"
								placeholder="Enter your email address"
								class="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder-white/40 focus:ring-2 focus:ring-tsoft-500/50 focus:border-tsoft-500/50 transition-colors"
							>
							<button class="px-4 py-2 bg-tsoft-600 text-white font-medium rounded-r-lg hover:bg-tsoft-500 transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Support Options Section -->
	<div class="py-16 bg-gradient-to-r from-tsoft-950/50 to-tsoft-900/50 mt-16 rounded-3xl shadow-lg border border-white/10 backdrop-blur-sm animate-on-scroll animate-fade-up">
		<div class="container mx-auto px-4 md:px-6">
			<div class="text-center mb-12">
				<span class="inline-block px-4 py-1 bg-tsoft-900/50 text-tsoft-400 rounded-full text-sm font-semibold mb-4 border border-tsoft-800/50">Customer Support</span>
				<h2 class="text-2xl md:text-3xl font-bold mb-4 text-white">
					Dedicated Support Options
				</h2>
				<p class="text-white/70 max-w-2xl mx-auto">
					We're committed to providing exceptional support to ensure your success with our services and products.
				</p>
			</div>

			<!-- Support options grid -->
			<div class="grid md:grid-cols-3 gap-8">
				<!-- Support option 1 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
					<div class="flex items-center mb-4">
						<div class="p-2 rounded-lg bg-tsoft-800/50 text-tsoft-400 mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-white">Personal Account Manager</h3>
					</div>
					<p class="text-white/70 mb-4">For enterprise clients and ongoing projects, we assign a dedicated account manager who understands your specific needs and ensures seamless service delivery.</p>
					<ul class="space-y-2 mb-4">
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Direct point of contact</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Regular progress updates</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Strategic planning assistance</span>
						</li>
					</ul>
				</div>

				<!-- Support option 2 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
					<div class="flex items-center mb-4">
						<div class="p-2 rounded-lg bg-tsoft-800/50 text-tsoft-400 mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-white">Technical Support Team</h3>
					</div>
					<p class="text-white/70 mb-4">Our expert technical support team is available to help troubleshoot issues, answer questions, and provide guidance on using our products and services.</p>
					<ul class="space-y-2 mb-4">
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Email and phone support</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Remote troubleshooting</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Extended business hours</span>
						</li>
					</ul>
				</div>

				<!-- Support option 3 -->
				<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
					<div class="flex items-center mb-4">
						<div class="p-2 rounded-lg bg-tsoft-800/50 text-tsoft-400 mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-white">Knowledge Base & Resources</h3>
					</div>
					<p class="text-white/70 mb-4">Access our comprehensive knowledge base, tutorials, and documentation to find answers to common questions and learn how to get the most from our offerings.</p>
					<ul class="space-y-2 mb-4">
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Detailed documentation</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>Video tutorials</span>
						</li>
						<li class="flex items-center text-white/70">
							<div class="h-1.5 w-1.5 rounded-full bg-tsoft-500 mr-2"></div>
							<span>FAQ section</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Support plans -->
			<div class="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-on-scroll animate-fade-up delay-200">
				<h3 class="text-xl font-bold text-white mb-6 text-center">Support Plans</h3>
				<div class="grid md:grid-cols-3 gap-6">
					<!-- Basic plan -->
					<div class="bg-tsoft-900/50 rounded-xl p-6 border border-white/5">
						<div class="text-center mb-4">
							<h4 class="text-lg font-bold text-white">Basic Support</h4>
							<div class="text-2xl font-bold text-tsoft-400 my-2">Free</div>
							<p class="text-white/60 text-sm">Included with all purchases</p>
						</div>
						<div class="space-y-3 mb-6">
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>Email support</span>
							</div>
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>Knowledge base access</span>
							</div>
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>Standard response time</span>
							</div>
						</div>
					</div>

					<!-- Premium plan -->
					<div class="bg-gradient-to-br from-tsoft-800/50 to-tsoft-900/50 rounded-xl p-6 border border-tsoft-700/30 shadow-lg relative">
						<div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tsoft-600 text-white text-xs font-bold px-3 py-1 rounded-full">
							POPULAR
						</div>
						<div class="text-center mb-4">
							<h4 class="text-lg font-bold text-white">Premium Support</h4>
							<div class="text-2xl font-bold text-tsoft-400 my-2">$99<span class="text-sm font-normal text-white/60">/month</span></div>
							<p class="text-white/60 text-sm">For businesses and professionals</p>
						</div>
						<div class="space-y-3 mb-6">
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>Priority email & phone support</span>
							</div>
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>Remote troubleshooting</span>
							</div>
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>4-hour response time</span>
							</div>
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>Monthly consultation call</span>
							</div>
						</div>
					</div>

					<!-- Enterprise plan -->
					<div class="bg-tsoft-900/50 rounded-xl p-6 border border-white/5">
						<div class="text-center mb-4">
							<h4 class="text-lg font-bold text-white">Enterprise Support</h4>
							<div class="text-2xl font-bold text-tsoft-400 my-2">Custom</div>
							<p class="text-white/60 text-sm">For large organizations</p>
						</div>
						<div class="space-y-3 mb-6">
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>Dedicated account manager</span>
							</div>
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>24/7 emergency support</span>
							</div>
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>On-site support available</span>
							</div>
							<div class="flex items-center text-white/70">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-tsoft-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span>Custom SLA</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact support button -->
			<div class="text-center mt-10 animate-on-scroll animate-fade-up delay-300">
				<a href="#" class="inline-block px-8 py-4 bg-gradient-to-r from-tsoft-600 to-tsoft-700 text-white font-medium rounded-lg hover:from-tsoft-500 hover:to-tsoft-600 transition-all duration-300 shadow-lg shadow-tsoft-600/20 hover:shadow-tsoft-500/30 transform hover:-translate-y-0.5">
					Contact Support Team
				</a>
			</div>
		</div>
	</div>
</section>
