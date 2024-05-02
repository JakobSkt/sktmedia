<script lang="ts">
	import { fade, slide, fly, scale } from 'svelte/transition'
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
    import { Sun, Moon } from "lucide-svelte"
	import * as ease from 'svelte/easing'
	import ModeSwitch from '$lib/modeSwitch.svelte'

	// Generel images and assets
	import logoWhite from '$lib/assets/SkøtmediaWhite.svg'
	import logoBlue from '$lib/assets/SkøtmediaBlue.svg'
	import webLogo from '$lib/assets/SkøtmediaWhiteWebBlue.png'
	import photoLogo from '$lib/assets/SkøtmediaWhitePhotoBlue.png'
	import hiPictire from '$lib/assets/SktmediaHi.png'
	import Waving from '$lib/assets/Waving.png'


	// Images for the web carousel
	import LinkZoneImg from '$lib/assets/LinkZoneImg.png'
	import StudyZoneImg from '$lib/assets/StudyZoneImg.png'
	import SparksImg from '$lib/assets/SparksImg.png'
	import AirborneImg from '$lib/assets/AirbornesiteV2.jpeg'
	import BorderCollieImg from '$lib/assets/HundepensionV2.jpeg'
	import KohavenImg from '$lib/assets/KohavenRoneklint.png'

	
	// Images for the photo carousel
	import bryllupImg from '$lib/assets/bryllupImg.jpg'
	import bryllupImg2 from '$lib/assets/bryllupImg2.jpg'
	import fodselsdag from '$lib/assets/DSCF6089.jpg'
	import konfirmation1 from '$lib/assets/P1099023.jpg'
	import konfirmation2 from '$lib/assets/P1099392.jpg'
	import konfirmation3 from '$lib/assets/P1099581.jpg'
	import konfirmation4 from '$lib/assets/P1099878.jpg'
	import konfirmation5 from '$lib/assets/P1110097.jpg'
	import barnedåb1 from '$lib/assets/P1121518.jpg'
	import barnedåb2 from '$lib/assets/P1121624.jpg'
	import barnedåb3 from '$lib/assets/P1122034-Enhanced-NR.jpg'
	import pdi1 from '$lib/assets/P1133941.jpg'
	import pdi2 from '$lib/assets/P1156963.jpg'
	import pdi3 from '$lib/assets/P1156723.jpg'
	import pdi4 from '$lib/assets/P1156852.jpg'

	function redirect(target: string) {
		if(target == "web") {
			goto('/web')
		}
		else if(target == "photo") {
			window.location.href = "https://byjakobskoet.mypixieset.com/", "_blank"
		}
	}

	let webActive: boolean = false
	let darkMode: boolean = false
	
</script>

<main class="w-screen h-screen overflow-clip bg-white">
	<div class="absolute inset-2 border border-cyan-800/50 rounded-2xl"></div>

	<div id="hero" class="mx-auto w-7/12 p-28 bg-lightDots dark:bg-darkDots bg-dotsPosition bg-smallDots flex flex-col">
		{#if darkMode}
			<img class="h-60 mx-auto" src={logoWhite} alt="hero logo white"/>
		{:else}
			<img class="h-60 mx-auto" src={logoBlue} alt="hero logo blue"/>
		{/if}

		<div id="workPill" class="flex flex-row items-center justify-center w-fit px-4 mx-auto -mt-20 h-6 border border-cyan-700 bg-zinc-50 rounded-xl gap-2">
			<div class="w-3 h-3 rounded-full bg-green-400 justify-self-start animate-pulse"></div>
			<p class="text-zinc-600 text-xs cursor-default"> Open to work </p>
		</div>
	</div>
	<div id="selectionContainer" class="flex flex-row mx-auto items-center justify-center w-48 h-12 p-1 rounded-full border border-cyan-700 z-50 cursor-pointer">
		<p id="webPill" class:active={webActive} class="bg-zinc-200 cursor-pointer z-50 w-full h-full font-black italic text-xl rounded-l-3xl p-1 text-zinc-600 duration-[125] hover:text-zinc-400" on:click={() => webActive = true}> WEB </p>
		<p id="photoPill" class:active={!webActive} class="bg-zinc-200 cursor-pointer z-50 w-full h-full font-black italic text-xl rounded-r-3xl p-1 text-zinc-600 duration-[125] hover:text-zinc-400" on:click={() => webActive = false}> PHOTO </p>
	</div>

	<div id="hiContainer" class="absolute ml-16 -mt-20 rounded-xl w-48 h-12 bg-zinc-50 border-t-0 border border-zinc-200 drop-shadow-xl flex items-center justify-center z-50">
		<img id="hiPicture" src={hiPictire} alt="jakob waving" class="absolute bottom-0 w-40">
		<div class="group absolute -bottom-3 -right-6 bg-cyan-950 outline outline-zinc-900 border border-zinc-300/20 rounded-full cursor-pointer hover:bg-cyan-900 hover:border-zinc-200/20 hover:outline-zinc-600">
			<a href="mailto:kontakt@sktmedia.dk">
				<p class="italic font-black text-xl bg-gradient-to-r from-yellow-400 to-amber-400 text-transparent inline-block bg-clip-text px-2"> SAY HI! </p>
				<img src={Waving} alt="waving hand" class="absolute w-8 -top-5 -right-6 -z-50 group-hover:animate-wiggle transition">
			</a>
		</div>
	</div>

	<div id="carouselContainer" class="w-11/12 mt-4 h-72 border border-cyan-900 rounded-2xl mx-auto overflow-hidden motion-reduce:overflow-scroll">
		{#if webActive}
		<div id="webContainer" class="flex flex-row transition animate-webScroll">
			<div class="h-72 min-w-fit">
				<img src={LinkZoneImg} alt="airborne site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={StudyZoneImg} alt="BorderColliePension site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={AirborneImg} alt="airborne site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={SparksImg} alt="Kohaven Roneklint site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={BorderCollieImg} alt="BorderColliePension site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={KohavenImg} alt="Kohaven Roneklint site" class="object-cover h-full">
			</div>

			<div class="h-72 min-w-fit">
				<img src={LinkZoneImg} alt="airborne site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={StudyZoneImg} alt="BorderColliePension site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={AirborneImg} alt="airborne site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={SparksImg} alt="Kohaven Roneklint site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={BorderCollieImg} alt="BorderColliePension site" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={KohavenImg} alt="Kohaven Roneklint site" class="object-cover h-full">
			</div>

		</div>
			
		{:else}

		<div id="photoContainer" class="flex w-full flex-row-reverse transition animate-photoScroll">
			<div class="h-72 min-w-fit">
				<img src={bryllupImg} alt="bryllup image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={bryllupImg2} alt="bryllup image2" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={fodselsdag} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={konfirmation1} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={konfirmation2} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={konfirmation3} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={konfirmation4} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={konfirmation5} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={barnedåb1} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={barnedåb2} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={barnedåb3} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={pdi1} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={pdi2} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={pdi3} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 min-w-fit">
				<img src={pdi4} alt="fødselsdag image1" class="object-cover h-full">
			</div>

		</div>
		{/if}
	</div>
</main>

<style lang="postcss">
	#hero {
		mask-image: radial-gradient(black 5%, #777777 20%, transparent 70%);
		-webkit-mask-image: radial-gradient(black 5%, #777777 20%, transparent 70%);
	}

	#hiPicture {
		mask-image: linear-gradient(black 80%, #afafaf 80%, transparent 100%);
		-webkit-mask-image: linear-gradient(black 80%, #afafaf 80%, transparent 100%);
	}

	.active {
		background-color: #03ff67;
		font-size: 1.875rem;
		color: #164e63;
		padding: 0.2rem 0.75rem;
		transition: 125ms
	}
	
	.active:hover {
		color: white;
	}

	#webContainer:hover {
		animation-play-state: paused;
		filter: grayscale(0) !important;
	}

	#photoContainer:hover {
		animation-play-state: paused;
		filter: grayscale(0) !important;
	}

</style>

