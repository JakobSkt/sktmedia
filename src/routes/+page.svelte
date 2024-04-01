<script lang="ts">
	import { gsap } from 'gsap';
	import { fade, slide, fly } from 'svelte/transition'
	import * as ease from 'svelte/easing'
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import { Sun, Moon } from "lucide-svelte";
	import ModeSwitch from '$lib/modeSwitch.svelte'
	import logoWhite from '$lib/images/SkøtmediaWhite.svg'
	import logoBlue from '$lib/images/SkøtmediaBlue.svg'
	import webLogo from '$lib/images/SkøtmediaWhiteWebBlue.png'
	import photoLogo from '$lib/images/SkøtmediaWhitePhotoBlue.png'

	let m = { x: 0, y: 0 }
	let circle: HTMLDivElement
	let delay = 6
	let revisedMousePosX = 0
    let revisedMousePosY = 0

	function handleMouseMove(event: MouseEvent) {
		requestAnimationFrame(() => {
			m.x = event.clientX
			m.y = event.clientY
	
			revisedMousePosX += (m.x - revisedMousePosX) / delay;
			revisedMousePosY += (m.y - revisedMousePosY) / delay; 
			
			circle.style.left = revisedMousePosX + 'px'
			circle.style.top = revisedMousePosY + 'px'
		})
	}

	function redirect(target: string) {
		if(target == "web") {
			webActive = !webActive
		}
		else if(target == "photo") {
			photoActive = !photoActive
		}

		// setTimeout(() => {
		// 	if(target == "web") {
		// 		goto('/web')
		// 	}
		// 	else if(target == "photo") {
		// 		goto('/photo')
		// 	}
		// }, 200);
	}

	let darkMode: boolean

	let active: boolean = false
	let webActive: boolean = false
	let photoActive: boolean = false

	$: console.log(active)
</script>

<main class="w-screen h-screen overflow-hidden" on:mousemove={handleMouseMove}>
	
	{#if webActive}
		<div transition:fly={{x: -1000, y: 1000, duration: 300}} class="absolute top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-start bg-primary">
			<img src={webLogo} alt="Skøtmedia weblogo">
			<p class="font-light text-neutral text-center w-2/3"> Skøtmedia WEB designer og vedligeholder moderne websystemer og apps med de nyeste teknologier. Fokus er at skabe en god brugeropvelese og et lækkert design.</p>

			<div class="flex flex-col items-center justify-center gap-2 w-full p-12">
				<h2 class="font-black text-neutral place-self-start mx-10"> Arbejde </h2>
				<div class="w-full p-4 rounded-2xl grid grid-cols-2 text-center bg-neutral text-white">
					<div> First </div>
					<div> Second </div>
					<div> Third </div>
					<div> Fourth </div>
					<div> Fifth </div>
					<div> Sixth </div>
				</div>
			</div>
			
			<div class="absolute top-0 right-0 p-8 cursor-pointer hover:*:stroke-zinc-300 transition" on:click={() => webActive = !webActive}>
				<svg class="h-10 w-10 stroke-zinc-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
				  </svg>	  
			</div>
		</div>
	{/if}
	
	{#if photoActive}
	<div transition:fly={{x: 1000, y: 1000, duration: 300}} class="absolute top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-start bg-secondary">
		<img src={photoLogo} alt="Skøtmedia photologo">
		<p class="font-light text-neutral text-center w-2/3"> Skøtmedia Photo fanger de vigtigste øjeblikke i DIT liv og foreviger dem i foto- eller videoformat. Høj kvalitet, kundetilfredshed og kreativitet er vores nøgleord.</p>

		<div class="flex flex-col items-center justify-center gap-2 w-full p-12">
			<h2 class="font-black text-neutral place-self-start mx-10"> Arbejde </h2>
			<div class="w-full p-4 rounded-2xl grid grid-cols-2 text-center bg-neutral text-white">
				<div> First </div>
				<div> Second </div>
				<div> Third </div>
				<div> Fourth </div>
				<div> Fifth </div>
				<div> Sixth </div>
			</div>
		</div>

		<div class="absolute top-0 left-0 p-8 cursor-pointer hover:*:stroke-zinc-300 transition" on:click={() => photoActive = !photoActive}>
			<svg class="h-10 w-10 stroke-zinc-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
			</svg>	
		</div>
	</div>
	{/if}
	
	<div class="h-screen w-screen flex flex-col bg-base-100 bg-dotsSize {darkMode ? 'bg-darkDots' : 'bg-lightDots'}" id="hero">
		<div class="absolute top-0 right-0 p-4">
			<ModeSwitch bind:darkMode={darkMode}/>
		</div>
	
		<div bind:this={circle} class="mouse z-50 bg-base-200"></div>
		
		<div class="top-0">
			{#if darkMode}
				<img class="h-60 mx-auto my-16" src={logoWhite} alt="hero logo"/>
			{:else}
				<img class="h-60 mx-auto my-16" src={logoBlue} alt="hero logo"/>
			{/if}
		</div>
		
		<div class=" w-screen h-1/2 mt-8">
			<div class="absolute w-screen h-1/2 cursor-pointer overflow-hidden" id="seperator">
				
				<div class:webActive={webActive} on:click={() => redirect('web')} class="bg-primary flex flex-col items-baseline *:mx-10 sm:*:mx-20 justify-evenly shadow-xl w-screen h-full grayscale-50 hover:scale-110 hover:grayscale-0 transition" id="webCard">
					<h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white"> WEB </h1>
				</div>
	
				<div class:photoActive={photoActive} on:click={() => redirect('photo')} class="bg-secondary absolute top-0 bg-base-300 *:mx-10 sm:*:mx-20 flex flex-col items-end justify-evenly shadow-xl w-screen h-full grayscale-50 hover:scale-105 hover:grayscale-0 transition" id="photoCard">
					<h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white"> PHOTO </h1>
				</div>
			</div>
		</div>	
	</div>
</main>

<style>
	#webCard {
		-webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
		clip-path: polygon(0 0, 52.5% 0, 47.5% 100%, 0 100%);
		transition: 1s cubic-bezier(0.19, 1, 0.22, 1)
	}

	#photoCard {
		-webkit-clip-path: polygon(100% 0, 0 100%, 100% 0);
		clip-path: polygon(52.5% 0, 100% 0, 100% 100%, 47.5% 100%);
		transition: 1s cubic-bezier(0.19, 1, 0.22, 1)
	}
	
	.mouse {
		position: absolute;
		width: 50px;
		height: 50px;
		margin: -12.5px 0 0 -25px;
		border-radius: 50%;
		pointer-events: none;
		mix-blend-mode: multiply;
		mask: radial-gradient(circle, black 40%, rgba(0, 0, 0, 0.2) 0%);	
	}
	
	.webActive {
		transform: scale(10) translateX(20%);
	}

	.photoActive {
		transform: scale(10) translateX(-10%);
	}

</style>

