<script lang="ts">
    import emblaCarouselSvelte from 'embla-carousel-svelte'
	import { fade, slide, fly, scale } from 'svelte/transition'
	import * as ease from 'svelte/easing'
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
    import { Sun, Moon } from "lucide-svelte"
	import ModeSwitch from '$lib/modeSwitch.svelte'
	import logoWhite from '$lib/images/SkøtmediaWhite.svg'
	import logoBlue from '$lib/images/SkøtmediaBlue.svg'
	import webLogo from '$lib/images/SkøtmediaWhiteWebBlue.png'
	import photoLogo from '$lib/images/SkøtmediaWhitePhotoBlue.png'
    import KohavenImg from '$lib/images/KohavenRoneklint.png'
    import HundePensionImg from '$lib/images/HundepensionV2.jpeg'
    import WordpressImg from '$lib/images/Wordpress.svg'
    import WixBlack from '$lib/images/Wix logoB.svg'
    import WixWhite from '$lib/images/Wix logoW.svg'
    import AirBorneImg from '$lib/images/AirBornesiteV2.jpeg'
    import WebflowImg from '$lib/images/Webflow.svg'

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

    let emblaApi
    let options = { loop: true }
  
    function onInit(event) {
      emblaApi = event.detail
      console.log(emblaApi.slideNodes()) // Access API
    }

	function redirect(target: string) {
		if(target == "web") {
			webActive = !webActive
		}
		else if(target == "photo") {
			window.location.href = "https://byjakobskoet.mypixieset.com/", "_blank"
		}
	}

	let darkMode: boolean

	let active: boolean = false
	let webActive: boolean = false
	let photoActive: boolean = false

</script>

<main class="w-screen h-screen" on:mousemove={handleMouseMove}>
	<div class="h-screen w-screen flex flex-col bg-base-100 bg-largeDots md:bg-smallDots bg-dotsPosition {darkMode ? 'bg-darkDots' : 'bg-lightDots'}" id="hero">
		<div class="absolute top-0 right-0 p-4">
			<ModeSwitch bind:darkMode={darkMode}/>
		</div>
	
		<div bind:this={circle} class="mouse z-50 bg-base-200"></div>
		
		<div class="absolute top-0 left-0 px-8 flex flex-row items-center">
            <svg class="h-10 w-10 {darkMode ? 'stroke-zinc-100' : 'stroke-zinc-700'} hover:stroke-zinc-400 cursor-pointer" on:click={() => goto('/')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
			<img class="w-2/3" src={webLogo} alt="hero logo"/>
        </div>

        <div class="px-8 mt-40 h-3/4 bg-base-200 p-4 mb-8 overflow">
            <h2 class="font-medium text-zinc-500 text-md pb-2"> Tidligere projekter </h2>
            
            <div class="embla" use:emblaCarouselSvelte="{{ options }}" on:emblaInit="{onInit}">
                <div class="embla__container">
                    
                    <div class="embla__slide">
                        <div class="min-w-full min-h-full lg:card-side bg-base-200 flex flex-row">
                            <h1 class="absolute font-medium text-zinc-100 bg-neutral w-full py-2 text-2xl px-4"> Wordpress-side til grundejerforening</h1>
                            <div class="min-h-full">
                                <img class="bg-zinc-100 min-h-full object-cover" src={KohavenImg} alt="Album"/>
                            </div>
                            <div class="card-body bg-base-300">
                                <p class="mt-8"> Brugerdreven designproces med fokus på et moderne og overskueligt look. Side er leveret komplet funktionel med debat-system som alternativ til Facebook samt kalender, galleri og events.  </p>
                                <div class="card-actions justify-center">
                                    <span class="badge p-6 flex flex-row text-zinc-500 w-full text-left justify-center items-center">
                                        <p class="font-medium"> Tech og links </p>
                                        <div class="flex flex-row items-center justify-evenly gap-2 w-1/3">
                                            <a href="https://www.wordpress.com" target="_blank">
                                                <img src={WordpressImg} alt="wordpress logo" class="w-6 bg-zinc-100 rounded-full stroke-zinc-200 fill-zinc-200">
                                            </a>
                                            <a href="https://www.kohaven-roneklint.dk" target="_blank">
                                                <svg class="w-6 stroke-zinc-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                    <div class="embla__slide">
                        <div class="min-w-full min-h-full lg:card-side bg-base-200 drop-shadow-xl flex flex-row">
                            <h1 class="absolute font-medium text-zinc-100 bg-neutral w-full py-2 text-2xl px-4"> CMS-side til hundepension </h1>
                            <div class="min-h-full">
                                <img class="bg-zinc-100 min-h-full object-cover" src={HundePensionImg} alt="Album"/>
                            </div> 
                            <div class="card-body bg-base-200">
                                <p class="mt-8"> Brugerdreven designproces med fokus på et moderne og overskueligt look. Side er leveret komplet funktionel med debat-system som alternativ til Facebook samt kalender, galleri og events.  </p>
                                <div class="card-actions justify-center">
                                    <span class="badge p-6 flex flex-row text-zinc-500 w-full text-left justify-center items-center">
                                        <p class="font-medium"> Tech og links </p>
                                        <div class="flex flex-row items-center justify-evenly gap-2 w-1/3">
                                            <a href="https://www.wix.com" target="_blank">
                                                <img src={WixBlack} alt="wordpress logo" class="w-8 stroke-zinc-200 fill-zinc-200">
                                            </a>
                                            <a href="https://www.bordercolliepension.dk/" target="_blank">
                                                <svg class="w-6 stroke-zinc-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div class="embla__slide">
                        <div class="min-w-full min-h-full lg:card-side bg-base-200 drop-shadow-xl flex flex-row">
                            <h1 class="absolute font-medium text-zinc-100 bg-neutral w-full py-2 text-2xl px-4"> CMS-side til hundepension </h1>
                            <div class="min-h-full">
                                <img class="bg-zinc-100 min-h-full object-cover" src={HundePensionImg} alt="Album"/>
                            </div> 
                            <div class="card-body bg-base-200">
                                <p class="mt-8"> Brugerdreven designproces med fokus på et moderne og overskueligt look. Side er leveret komplet funktionel med debat-system som alternativ til Facebook samt kalender, galleri og events.  </p>
                                <div class="card-actions justify-center">
                                    <span class="badge p-6 flex flex-row text-zinc-500 w-full text-left justify-center items-center">
                                        <p class="font-medium"> Tech og links </p>
                                        <div class="flex flex-row items-center justify-evenly gap-2 w-1/3">
                                            <a href="https://www.wix.com" target="_blank">
                                                <img src={WixBlack} alt="wordpress logo" class="w-8 stroke-zinc-200 fill-zinc-200">
                                            </a>
                                            <a href="https://www.bordercolliepension.dk/" target="_blank">
                                                <svg class="w-6 stroke-zinc-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div class="embla__slide">
                        <div class="min-w-full min-h-full lg:card-side bg-base-200 drop-shadow-xl flex flex-row">
                            <h1 class="absolute font-medium text-zinc-100 bg-neutral w-full py-2 text-2xl px-4"> CMS-side til innovativ startup </h1>
                            <div class="min-h-full">
                                <img class="bg-zinc-100 min-h-full object-cover" src={AirBorneImg} alt="Album"/>
                            </div> 
                            <div class="card-body bg-base-200">
                                <p class="mt-8"> Brugerdreven designproces med fokus på et moderne og overskueligt look. Side er leveret komplet funktionel med debat-system som alternativ til Facebook samt kalender, galleri og events.  </p>
                                <div class="card-actions justify-center">
                                    <span class="badge p-6 flex flex-row text-zinc-500 w-full text-left justify-center items-center">
                                        <p class="font-medium"> Tech og links </p>
                                        <div class="flex flex-row items-center justify-evenly gap-2 w-1/3">
                                            <a href="https://www.wix.com" target="_blank">
                                                <img src={WixBlack} alt="wordpress logo" class="w-8 stroke-zinc-200 fill-zinc-200">
                                            </a>
                                            <a href="https://www.bordercolliepension.dk/" target="_blank">
                                                <svg class="w-6 stroke-zinc-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
	</div>
</main>

<style>
    .embla {
      overflow: hidden;
    }
    .embla__container {
      display: flex;
    }
    .embla__slide {
      flex: 0 0 75%;
      margin-right: 20px;
      margin-left: 20px;
      min-width: 0;
    }

	#webCard {
		-webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
		clip-path: polygon(0 0, 52.5% 0, 47.5% 100%, 0 100%);
		transition: 750ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	#photoCard {
		-webkit-clip-path: polygon(100% 0, 0 100%, 100% 0);
		clip-path: polygon(52.5% 0, 100% 0, 100% 100%, 47.5% 100%);
		transition: 750ms cubic-bezier(0.22, 1, 0.36, 1);
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

