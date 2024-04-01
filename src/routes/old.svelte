<script lang="ts">
	import { gsap } from 'gsap';
	import { fade, slide, fly } from 'svelte/transition'
	import OwnCard from '$lib/card.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import { Sun, Moon } from "lucide-svelte";
	import ModeSwitch from '$lib/modeSwitch.svelte'

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

	let bgImages = 
	['https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1596483941348-cb6d15e0fd60?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	]
	
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


<div class="h-screen w-screen flex flex-col bg-base-100" id="hero">
	<div class="absolute top-0 right-0 p-4">
		<ModeSwitch/>
	</div>
	<img class="w-96 h-96 m-auto" bind:this={logo} src={logoWhite}/>
	{#if loaded}
		<div bind:this={cards} transition:fly={{y: 200, duration: 300}} class="absolute flex flex-row w-screen m-auto h-fit p-16 bottom-0 inset-x-0 mb-8 justify-center gap-16">
			<OwnCard imgSrc={webLogo} bgSrc={bgImages[0]}/>
			<OwnCard imgSrc={photoLogo} bgSrc={bgImages[1]}/>
			<!-- <div class="card w-96 bg-base-200 shadow-xl" id="webcard">
				<figure><img class="w-3/4" src={webLogo} alt="webLogo" /></figure>
				<div class="card-body text-center">
				  <p> Skøtmedia Web designer og vedligeholder moderne websystemer og apps med de nyeste teknologier. Fokus er at skabe en god brugeropvelese og et lækkert design.</p>
				  <div class="card-actions justify-center mt-4">
					<button class="btn btn-primary"> Se mere! </button>
			  	  </div>
				</div>
			</div>

			<div class="card w-96 bg-base-200 shadow-xl" id="photoCard">
				<figure><img class="w-3/4" src={photoLogo} alt="photoLogo" /></figure>
				<div class="card-body text-center">
				  <p> Skøtmedia Photo fanger de vigtigste øjeblikke i DIT liv og foreviger dem i foto- eller videoformat. Høj kvalitet, kundetilfredshed og kreativitet er vores nøgleord.</p>
				  <div class="card-actions justify-center mt-4">
					<button class="btn btn-primary"> Book nu! </button>
			  	  </div>
				</div>
			</div> -->
		</div>
	{/if}
</div>
 
<style>
	* {
		/* overflow: hidden; */
		/* --bg-color: theme(colors.cyan.950) */
	}

	#hero {
		background-color: var(--bg-color);
	}

	[data-theme="dim"] {
		--bg-color: theme(colors.cyan.500)
	}

	[data-theme="emerald"] {
		--bg-color: theme(colors.zinc.100)
	}

	#webCard {
		transition: all 2s;
	}

	#webcard:hover {
		background-image: url('https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-size: cover;
		backdrop-filter: blur(4px);
		transition: all 2s;

	}

	/* .card-body {
        transform: translateY(300px);
        transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .card-body:hover {
        transform: translateY(0px);
    } */
	
</style>

