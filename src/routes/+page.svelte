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
	import hiPictire from '$lib/assets/WebP/SktmediaHi.webp'
	import Waving from '$lib/assets/WebP/Waving.webp'


	// Images for the web carousel
	import LinkZoneImg from '$lib/assets/WebP/LinkZoneImg.webp'
	import StudyZoneImg from '$lib/assets/WebP/StudyZoneImg.webp'
	import SparksImg from '$lib/assets/WebP/SparksImg.webp'
	import AirborneImg from '$lib/assets/WebP/AirbornesiteV2.webp'
	import BorderCollieImg from '$lib/assets/WebP/HundepensionV2.webp'
	import KohavenImg from '$lib/assets/WebP/KohavenRoneklint.webp'

	
	// Images for the photo carousel
	import bryllupImg from '$lib/assets/WebP/bryllupImg.webp'
	import bryllupImg2 from '$lib/assets/WebP/bryllupImg2.webp'
	import fodselsdag from '$lib/assets/WebP/DSCF6089.webp'
	import konfirmation1 from '$lib/assets/WebP/P1099023.webp'
	import konfirmation2 from '$lib/assets/WebP/P1099392.webp'
	import konfirmation3 from '$lib/assets/WebP/P1099581.webp'
	import konfirmation4 from '$lib/assets/WebP/P1099878.webp'
	import konfirmation5 from '$lib/assets/WebP/P1110097.webp'
	import barnedåb1 from '$lib/assets/WebP/P1121518.webp'
	import barnedåb2 from '$lib/assets/WebP/P1121624.webp'
	import barnedåb3 from '$lib/assets/WebP/P1122034-Enhanced-NR.webp'
	import pdi1 from '$lib/assets/WebP/P1133941.webp'
	import pdi2 from '$lib/assets/WebP/P1156963.webp'
	import pdi3 from '$lib/assets/WebP/P1156723.webp'
	import pdi4 from '$lib/assets/WebP/P1156852.webp'

	let webActive: boolean = false
	let darkMode: boolean = false
	
</script>

<main class="w-screen h-screen overflow-clip bg-white dark:bg-zinc-900">
	<div class="absolute inset-2 border border-cyan-800/50 dark:border-cyan-900/50 rounded-2xl"></div>

	<div class="absolute p-4 rounded-2xl z-100 right-0">
		<ModeSwitch bind:darkMode={darkMode} />
	</div>

	<div id="hero" class="mx-auto w-screen lg:w-8/12 py-16 md:py-20 bg-lightDots dark:bg-darkDots bg-dotsPosition bg-smallDots flex flex-col">
		{#if darkMode}
			<img class="h-60 mx-auto" src={logoWhite} alt="hero logo white"/>
		{:else}
			<img class="h-60 mx-auto" src={logoBlue} alt="hero logo blue"/>
		{/if}

		<div id="workPill" class="flex flex-row items-center justify-center w-fit px-4 mx-auto -mt-16 lg:-mt-12 xl:-mt-20 h-6 border border-cyan-700 dark:border-cyan-900 bg-zinc-50 dark:bg-zinc-900 rounded-xl gap-2">
			<div class="w-3 h-3 rounded-full bg-green-400 dark:bg-green-300 justify-self-start animate-pulse"></div>
			<p class="text-zinc-600 dark:text-zinc-200 text-xs cursor-default"> Open to work </p>
		</div>
	</div>

	<div id="selectionContainer" class="flex flex-col mx-auto items-center justify-center mt-8 sm:mt-8 lg:-mt-4 2xl:mt-28 w-48 h-12">
		<div class="flex flex-row p-1 rounded-full border border-cyan-700 dark:border-cyan-900 z-50 cursor-pointer">
			<p id="webPill" class:active={webActive} class="bg-zinc-200 dark:bg-zinc-600 cursor-pointer z-50 w-full h-full font-black italic text-xl rounded-l-3xl p-1 text-zinc-600 dark:text-zinc-400 duration-[125] hover:text-zinc-400 dark:hover:text-zinc-200" on:click={() => webActive = true}> WEB </p>
			<p id="photoPill" class:active={!webActive} class="bg-zinc-200 dark:bg-zinc-600 cursor-pointer z-50 w-full h-full font-black italic text-xl rounded-r-3xl p-1 text-zinc-600 dark:text-zinc-400 duration-[125] hover:text-zinc-400 dark:hover:text-zinc-200" on:click={() => webActive = false}> PHOTO </p>		
		</div>
	</div>

	<div id="carouselContainer" class="w-11/12 md:mt-8 mt-12 lg:mt-8 h-72 2xl:h-96 border border-cyan-900 rounded-2xl mx-auto overflow-clip z-100">
		<p class="absolute font-medium text-xs -mt-4 ml-8 text-zinc-400 dark:text-zinc-600"> Hover to pause </p>
		{#if !webActive}
		<a href="https://byjakobskoet.mypixieset.com/" target="_blank" class="absolute right-0 mr-10 sm:mr-16 lg:mr-28 flex flex-row -mt-4 items-center gap-1 cursor-pointer">
			<p class="text-zinc-400 text-xs font-medium"> View more photos in my portfolio </p>
			<svg class="w-3 h-3 stroke-zinc-400 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
			</svg>
		</a>
		{/if}
		{#if webActive}
		<div id="webContainer" class="flex flex-row transition animate-webScrollSm sm:animate-webScrollMd lg:animate-webScrollLg motion-reduce:animate-none">
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={LinkZoneImg} alt="airborne site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={StudyZoneImg} alt="BorderColliePension site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={AirborneImg} alt="airborne site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={SparksImg} alt="Kohaven Roneklint site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={BorderCollieImg} alt="BorderColliePension site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={KohavenImg} alt="Kohaven Roneklint site" class="object-cover h-full">
			</div>

			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={LinkZoneImg} alt="airborne site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={StudyZoneImg} alt="BorderColliePension site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={AirborneImg} alt="airborne site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={SparksImg} alt="Kohaven Roneklint site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={BorderCollieImg} alt="BorderColliePension site" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={KohavenImg} alt="Kohaven Roneklint site" class="object-cover h-full">
			</div>

		</div>
			
		{:else}

		<div id="photoContainer" class="flex w-full flex-row-reverse transition animate-photoScroll motion-reduce:animate-none">
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={bryllupImg} alt="bryllup image1" class="object-cover h-full">
			</div>	
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={bryllupImg2} alt="bryllup image2" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={fodselsdag} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={konfirmation1} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={konfirmation2} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={konfirmation3} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={konfirmation4} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={konfirmation5} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={barnedåb1} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={barnedåb2} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={barnedåb3} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={pdi1} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={pdi2} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={pdi3} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={pdi4} alt="fødselsdag image1" class="object-cover h-full">
			</div>

			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={bryllupImg} alt="bryllup image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={bryllupImg2} alt="bryllup image2" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={fodselsdag} alt="fødselsdag image1" class="object-cover h-full">
			</div>
			<div class="h-72 2xl:h-96 min-w-fit">
				<img src={konfirmation1} alt="fødselsdag image1" class="object-cover h-full">
			</div>

		</div>
		{/if}
	</div>

	<div id="hiContainer" class="absolute bottom-0 left-1/3 mb-12 mx-auto rounded-xl w-20 sm:w-28 lg:w-40 sm:left-auto sm:ml-4 sm:mb-4 h-6 sm:h-8 lg:h-12 bg-zinc-50 dark:bg-zinc-800 border-t-0 border border-zinc-200 dark:border-zinc-600 drop-shadow-xl flex flex-row items-center justify-center z-50">
		<img id="hiPicture" src={hiPictire} alt="jakob waving" class="absolute bottom-0 w-40">
		<div class="group absolute -bottom-3 -right-6 bg-cyan-950 outline outline-zinc-900 border border-zinc-300/20 rounded-full cursor-pointer hover:bg-cyan-900 hover:border-zinc-200/20 hover:outline-zinc-600">
			<a href="mailto:kontakt@sktmedia.dk">
				<p class="italic font-black text-xl bg-gradient-to-r from-yellow-400 to-amber-400 text-transparent inline-block bg-clip-text px-2"> SAY HI! </p>
				<img src={Waving} alt="waving hand" class="absolute w-8 -top-5 -right-6 -z-50 group-hover:animate-wiggle transition">
			</a>
		</div>
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
	
	.active {
		color: white;
	}

	#webContainer:hover {
		animation-play-state: paused;
	}

	#photoContainer:hover {
		animation-play-state: paused;
	}

</style>

