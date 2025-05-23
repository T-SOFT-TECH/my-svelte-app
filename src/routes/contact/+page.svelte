<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	
	// Company data
	let companyEmail = 'info@tsoftechnologies.com';
</script>

<svelte:head>
	<title>Contact Us | TSOFT-TECHNOLOGIES</title>
	<meta name="description" content="Get in touch with TSOFT-TECHNOLOGIES for inquiries about our services, support, or partnership opportunities." />
</svelte:head>

<Contact email={companyEmail} />