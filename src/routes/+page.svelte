<script lang="ts">
	import { gsap } from 'gsap';
	import { fade, slide, fly } from 'svelte/transition'
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import { Sun, Moon } from "lucide-svelte";
	import ModeSwitch from '$lib/modeSwitch.svelte'
	import logoWhite from '$lib/images/SkøtmediaWhite.svg'
	import webLogo from '$lib/images/SkøtmediaWhiteWebBlue.png'

</script>


<div class="h-screen w-screen flex flex-col bg-base-100" id="hero">
	<div class="absolute top-0 right-0 p-4">
		<ModeSwitch/>
	</div>
	
	<div class="top-0">
		<img class="w-96 h-96 m-auto" src={logoWhite} alt="hero logo"/>
	</div>
	
	<div class="absolutew-screen h-1/2 bg-base-200 mt-48">
		<div class="absolute w-screen h-1/2 overflow-hidden cursor-pointer" id="seperator">
			<div class="bg-base-400 flex flex-col items-baseline justify-evenly shadow-xl w-screen h-full transition bg-dots bg-dotsSize dark:bg-darkDots" id="webCard">
				<img class="w-2/4" src={webLogo} alt="webLogo" />
				<p class="px-12"> Skøtmedia Web designer og vedligeholder moderne websystemer og apps med de nyeste teknologier. Fokus er at skabe en god brugeropvelese og et lækkert design.</p>
				<button class="btn btn-primary"> Se mere! </button>
			</div>

			<div class="absolute top-0 bg-base-300 shadow-xl w-screen h-full  grayscale-50  hover:grayscale-0 transition" id="photoCard">
				<img class="" alt="photoLogo" />
				<div class="text-center">
				  <p> Skøtmedia Photo fanger de vigtigste øjeblikke i DIT liv og foreviger dem i foto- eller videoformat. Høj kvalitet, kundetilfredshed og kreativitet er vores nøgleord.</p>
				  <div class="">
					<button class="btn btn-primary"> Book nu! </button>
			  	  </div>
				</div>
			</div>
		</div>
	</div>	
</div>
 
<style>

	#webCard {
		/*background-image: url('https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */
		background-size: 100%;

		-webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
		clip-path: polygon(0 0, 52.5% 0, 47.5% 100%, 0 100%);
	}

	#photoCard {
		/* background-image: url('https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */
		background-size: 100%;
		background-position: 100% 50%;

		-webkit-clip-path: polygon(100% 0, 0 100%, 100% 0);
		clip-path: polygon(52.5% 0, 100% 0, 100% 100%, 47.5% 100%);
	}
	
</style>

