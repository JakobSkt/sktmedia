<script lang="ts">
	import { gsap } from 'gsap';
	import { fade, slide, fly } from 'svelte/transition'
	import * as Card from '$lib/components/ui/card';
	import modeSwitch from '$lib/modeSwitch.svelte';
	import OwnCard from '$lib/card.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { Button } from "$lib/components/ui/button";
    import { Sun, Moon } from "lucide-svelte";
  
    import { toggleMode } from "mode-watcher";

    import logoWhite from '$lib/images/SkøtmediaWhite.svg'
    import logoBlue from '$lib/images/SkøtmediaBlue.svg'
	import webLogo from '$lib/images/SkøtmediaWhiteWebBlue.png'
	import photoLogo from '$lib/images/SkøtmediaWhitePhotoBlue.png'

    let logo: gsap.TweenTarget
	let cards: gsap.TweenTarget
	let webCard: gsap.TweenTarget
	let photoCard: gsap.TweenTarget
	let webLogoTarget: gsap.TweenTarget
	let photoLogoTarget: gsap.TweenTarget
	let webDesciption: gsap.TweenTarget
	let photoDesciption: gsap.TweenTarget
	let webButton: gsap.TweenTarget
	let photoButton: gsap.TweenTarget

	let tl: gsap.core.Timeline = gsap.timeline()

	let loaded: boolean = false

	let innerHeight: number
	let innerWidth: number
	
	onMount(async () => {
		gsap.set(logo, {scale: 200, x: -window.innerWidth*6.4, y: window.innerHeight*1.5})

		console.log("Screen size: " + innerWidth + "x" + innerHeight)
		gsap.set(webLogoTarget, {y: 50})
		gsap.set(webDesciption, {opacity: 0})
		gsap.set(webButton, {opacity: 0})

		gsap.set(photoLogoTarget, {y: 50})
		gsap.set(photoDesciption, {opacity: 0})
		gsap.set(photoButton, {opacity: 0})

		animate()
	}); 
	
	function animate() {
		tl.to(logo, {scale: 1, x: 0, y: 0, duration: 0.8, ease: "expo.out"})
		tl.to(logo, {y: -250, delay: 0.25, duration: 1, ease: "expo.out"})
		// tl.fromTo(cards, {opacity: 0, y: 500}, {opacity: 1, y: 0, duration: 1, ease: "expo.out"}, "-=0.9")
		setTimeout(() => {
			loaded = true
		}, 1100)
	}

	function hover(target: string | "undefined") {
		switch(target) {
			case "webCard":
				console.log("Clicked webCard!")
				gsap.to(webLogoTarget, {scale: 0.8, y: -50, duration: 0.4, ease: "circ.out"})
				gsap.to(webDesciption, {opacity: 1, y: -75, duration: 0.4, ease: "circ.out"})
				gsap.to(webButton, {opacity: 1, duration: 0.4, ease: "circ.out"})
				break;

			case "photoCard":
				console.log("Clicked photoCard!")
				gsap.to(photoLogoTarget, {scale: 0.8, y: -50, duration: 0.4, ease: "circ.out"})
				gsap.to(photoDesciption, {opacity: 1, y: -75, duration: 0.4, ease: "circ.out"})
				gsap.to(photoButton, {opacity: 1, duration: 0.4, ease: "circ.out"})
				break;
			
			case "undefined":
				console.log("Wow you found a bug!")
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight/>


<div class="h-screen w-screen bg-cyan-950 flex flex-col">
	<img class="w-96 h-96 m-auto" bind:this={logo} src={logoWhite}/>
	{#if loaded}
		<div bind:this={cards} transition:fly={{y: 200, duration: 300}} class="absolute flex flex-row w-screen m-auto h-fit p-16 bottom-0 inset-x-0 mb-8 justify-center gap-16">
			<OwnCard imgSrc={webLogo}/>
			<OwnCard imgSrc={photoLogo}/>
		</div>
	{/if}
</div>
 
<style>
	* {
		/* overflow: hidden; */
	}
	
</style>

