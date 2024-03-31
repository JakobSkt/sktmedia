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

		setTimeout(() => {
			if(target == "web") {
				goto('/web')
			}
			else if(target == "photo") {
				goto('/photo')
			}
		}, 200);
	}

	let darkMode: boolean

	let active: boolean = false
	let webActive: boolean = false
	let photoActive: boolean = false

	$: console.log(active)
</script>

<!-- {#if webActive}
	<div class="absolute bottom-0 z-50 h-2/3 p-20 flex flex-col items-center bg-primary">
		<svg on:click={() => webActive = false} class="absolute left-0 top-0 w-12 h-12 cursor-pointer stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
			<path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
		</svg>

		<img src={logoBlue} alt="Skøtmedia weblogo">
		<h1 class="font-black"> WEB </h1>
		
	</div>
{/if}

{#if photoActive}
	<div class="h-2/3 p-20 flex flex-col items-center bg-secondary">
		<svg on:click={() => photoActive = false} class="absolute right-0 top-0 w-12 h-12 cursor-pointer stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
			<path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
		</svg>
		  
		<img src={logoBlue} alt="Skøtmedia weblogo">
		<h1 class="font-black"> PHOTO </h1>
				  
	</div>
{/if} -->

<div on:mousemove={handleMouseMove} class="h-screen w-screen flex flex-col bg-base-100 bg-dotsSize {darkMode ? 'bg-darkDots' : 'bg-lightDots'}" id="hero">
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
		<div class="absolute w-screen h-1/2 cursor-pointer bg-base-200 " id="seperator">
			
			<div class:webActive={webActive} on:click={() => redirect('web')} class="bg-primary flex flex-col items-baseline *:mx-10 sm:*:mx-20 justify-evenly shadow-xl w-screen h-full grayscale-50 hover:scale-110 hover:grayscale-0 transition" id="webCard">
				<h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white"> WEB </h1>
			</div>

			<div class:photoActive={photoActive} on:click={() => redirect('photo')} class="bg-secondary absolute top-0 bg-base-300 *:mx-10 sm:*:mx-20 flex flex-col items-end justify-evenly shadow-xl w-screen h-full grayscale-50 hover:scale-105 hover:grayscale-0 transition" id="photoCard">
				<h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white"> PHOTO </h1>
			</div>
		</div>
	</div>	
</div>

<style>

	#webCard {
		-webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
		clip-path: polygon(0 0, 52.5% 0, 47.5% 100%, 0 100%);
	}

	#photoCard {
		-webkit-clip-path: polygon(100% 0, 0 100%, 100% 0);
		clip-path: polygon(52.5% 0, 100% 0, 100% 100%, 47.5% 100%);
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

