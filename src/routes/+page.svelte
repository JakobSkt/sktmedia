<script lang="ts">
	import { fade, slide, fly, scale } from 'svelte/transition'
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
    import { Sun, Moon } from "lucide-svelte"
	import * as ease from 'svelte/easing'
	import ModeSwitch from '$lib/modeSwitch.svelte'
	import logoWhite from '$lib/assets/SkøtmediaWhite.svg'
	import logoBlue from '$lib/assets/SkøtmediaBlue.svg'
	import webLogo from '$lib/assets/SkøtmediaWhiteWebBlue.png'
	import photoLogo from '$lib/assets/SkøtmediaWhitePhotoBlue.png'
	import hiPictire from '$lib/assets/SktmediaHi.png'
	import AirborneImg from '$lib/assets/AirbornesiteV2.jpeg'
	import BorderCollieImg from '$lib/assets/HundepensionV2.jpeg'
	import KohavenImg from '$lib/assets/KohavenRoneklint.png'
	import Waving from '$lib/assets/Waving.png'


	function redirect(target: string) {
		if(target == "web") {
			goto('/web')
		}
		else if(target == "photo") {
			window.location.href = "https://byjakobskoet.mypixieset.com/", "_blank"
		}
	}

	let darkMode: boolean
	
</script>

<main class="w-screen h-screen overflow-clip bg-white">
	<div class="absolute inset-2 border border-cyan-900 rounded-2xl"></div>

	<div id="hero" class="mx-auto w-7/12 p-28 bg-lightDots dark:bg-darkDots bg-dotsPosition bg-smallDots flex flex-col">
		{#if darkMode}
			<img class="h-60 mx-auto" src={logoWhite} alt="hero logo white"/>
		{:else}
			<img class="h-60 mx-auto" src={logoBlue} alt="hero logo blue"/>
		{/if}

		<div id="workPill" class="flex flex-row items-center justify-center w-fit px-4 mx-auto -mt-20 h-6 border border-cyan-700 rounded-xl gap-2">
			<div class="w-3 h-3 rounded-full bg-green-400 justify-self-start"></div>
			<p class="text-zinc-600 text-xs cursor-default"> Open to work </p>
		</div>
	</div>
	<div id="selectionContainer" class="flex flex-row mx-auto items-center justify-center w-48 h-12 p-1 rounded-full border border-cyan-700 z-50 cursor-pointer">
		<p id="webPill" class="bg-green-400 w-full h-full text-cyan-900 font-black italic text-3xl rounded-l-3xl px-4"> WEB </p>
		<p id="photoPill" class="bg-zinc-200 w-full h-full text-zinc-100 font-black italic text-xl rounded-r-3xl p-1"> PHOTO </p>
	</div>

	<div class="absolute ml-16 -mt-20 rounded-xl w-48 h-12 bg-zinc-50 border-t-0 border border-zinc-200 drop-shadow-xl flex items-center justify-center z-50">
		<img id="hiPicture" src={hiPictire} alt="jakob waving" class="absolute bottom-0 w-40">
		<div class="absolute -bottom-3 -right-6 bg-cyan-950 outline outline-zinc-900 border border-zinc-300/20 rounded-full">
			<p class="italic font-black text-xl bg-gradient-to-r from-yellow-400 to-amber-400 text-transparent inline-block bg-clip-text px-2"> SAY HI! </p>
			<img src={Waving} alt="waving hand" class="absolute w-8 -scale-x-100 -top-5 -right-5 -z-50">
		</div>
	</div>

	<div id="carouselContainer" class="w-11/12 mt-4 h-72 border border-cyan-900 rounded-2xl mx-auto flex flex-row overflow-hidden">
		<div class="h-72 w-fit">
			<img src={AirborneImg} alt="airborne site" class="object-cover h-full">
		</div>
		<div class="h-72 w-fit">
			<img src={BorderCollieImg} alt="BorderColliePension site" class="object-cover h-full">
		</div>
		<div class="h-72 w-fit">
			<img src={KohavenImg} alt="Kohaven Roneklint site" class="object-cover h-full">
		</div>
	</div>
</main>

<style>
	#hero {
		mask-image: radial-gradient(black 5%, #777777 20%, transparent 70%)
	}

	#hiPicture {
		mask-image: linear-gradient(black 80%, #afafaf 80%, transparent 100%)
	}
</style>

