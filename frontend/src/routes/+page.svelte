<script>
	const fetchTime = async () => {
		const response = await fetch('/api/time')
		return await response.json()
	}

	const getCurrentTime = (data, options) => {
		const currentTime = new Date(data.time * 1000)
		return currentTime.toLocaleString('en-GB', options)
	}

	const options = { hour: 'numeric', minute: 'numeric' }
</script>

<div class="grid h-screen place-content-center justify-items-center gap-8">
	<div>
		<h1 class="text-3xl font-bold underline">Welcome to the frontend!</h1>
	</div>

	<div class="card w-96 bg-midnight shadow-xl">
		<div class="card-body">
			<p>Powered by Tailwind CSS and DaisyUI.</p>
		</div>
	</div>

	<div>
		{#await fetchTime()}
			<p class="text-red-400">Looking on my watch...</p>
		{:then data}
			<p class="text-red-400">The current time is {getCurrentTime(data, options)}.</p>
		{/await}
	</div>
</div>

<style lang="postcss">
	.card-body {
		color: theme(colors.bermuda);
	}
</style>
