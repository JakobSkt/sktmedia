<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

    import logoWhite from '$lib/images/SkøtmediaWhite.svg'
    import logoBlue from '$lib/images/SkøtmediaBlue.svg'
	import webLogo from '$lib/images/SkøtmediaWhiteWebBlue.png'
	import photoLogo from '$lib/images/SkøtmediaWhitePhotoBlue.png'

    /**
	 * @type {gsap.TweenTarget}
	 */
    let logo


	onMount(async () => {
		gsap.set(logo, {scale: 100, x: -25500, y: 2500})

		animate()
	}); 
	
	function animate() {
		gsap.to(logo, {scale: 0.2, x: 0, y: 0, duration: 0.6, ease: "expo.out"})
	}
</script>
<!-- <img src={logoWhite}/> -->

<div class="h-screen w-screen bg-cyan-900 flex flex-col">
	<img class="w-96 h-96 m-auto" bind:this={logo} src={logoWhite}/>

	<div class="flex flex-row w-screen m-auto h-fit p-4 justify-center gap-20">
		<div class="bg-zinc-900/70 py-40 px-32 text-white"> 
			<img class=" m-auto" src={webLogo}/>
		</div>
		<div class="bg-zinc-900/70 py-40 px-32 text-white"> 
			<img class=" m-auto" src={photoLogo}/>
		</div>
	</div>
</div>
 
<style>
	* {
		overflow: hidden;
	}
</style>

