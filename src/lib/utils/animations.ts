export function setupScrollAnimations(): (() => void) {
	if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
		return () => {};
	}



	const observer: IntersectionObserver = new IntersectionObserver(
		(entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry: IntersectionObserverEntry) => {


				if (entry.isIntersecting) {
					entry.target.classList.add("show");

					// Verify the class was added

				} else {
					// Optional: Uncomment if you want elements to animate again when scrolled out of view
					// entry.target.classList.remove("show");
				}
			});
		},
		{
			root: null,
			rootMargin: "0px",
			threshold: 0.15
		}
	);

	// Select all elements with the animate-on-scroll class
	const hiddenElements: NodeListOf<Element> = document.querySelectorAll(".animate-on-scroll");


	// Observe each element
	hiddenElements.forEach((element: Element) => {
		observer.observe(element);
	});

	// Return cleanup function
	return () => {
		hiddenElements.forEach((element: Element) => {
			observer.unobserve(element);
		});
		observer.disconnect();
	};
}

export function setupStickyHeader(): (() => void) {
	if (typeof window === 'undefined') {
		return () => {};
	}

	const navbar = document.getElementById('navbar');

	if (!navbar) {
		return () => {};
	}

	const handleScroll = () => {
		if (window.scrollY > 100) {
			navbar.classList.add('shadow-md');
			navbar.classList.add('h-16');
			navbar.classList.remove('h-20');
		} else {
			navbar.classList.remove('shadow-md');
			navbar.classList.remove('h-16');
			navbar.classList.add('h-20');
		}
	};

	// Initial check
	handleScroll();

	// Add event listener
	window.addEventListener('scroll', handleScroll);

	// Return cleanup function
	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
}