<script>
    import emblaCarouselSvelte from 'embla-carousel-svelte'
    import KohavenImg from '$lib/images/KohavenRoneklint.png'
    import HundePensionImg from '$lib/images/Hundepension.png'
    import WordpressImg from '$lib/images/Wordpress.svg'
    import WixBlack from '$lib/images/Wix logoB.svg'
    import WixWhite from '$lib/images/Wix logoW.svg'
    import AirBorneImg from '$lib/images/AirBorneSite.png'
    import WebflowImg from '$lib/images/Webflow.svg'
  
    let emblaApi
    let options = { loop: true }
  
    function onInit(event) {
      emblaApi = event.detail
      console.log(emblaApi.slideNodes()) // Access API
    }


  </script>
  
  <div class="embla" use:emblaCarouselSvelte="{{ options }}" on:emblaInit="{onInit}">
        <div class="embla__container">
            <div class="embla__slide">
              <div class="card lg:card-side bg-base-200 drop-shadow-xl">
                <h1 class="absolute font-medium text-zinc-100 bg-neutral w-full py-2 text-2xl px-4"> Wordpress-side til grundejerforening</h1>
                <figure><img class="bg-zinc-100 aspect-auto" src={KohavenImg} alt="Album"/></figure>
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
              <div class="card lg:card-side bg-base-200 drop-shadow-xl">
                <h1 class="absolute font-medium text-zinc-100 bg-neutral w-full py-2 text-2xl px-4"> CMS-side til hundepension </h1>
                <figure><img class="bg-zinc-100 aspect-auto" src={HundePensionImg} alt="Album"/></figure>
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
              <div class="card lg:card-side bg-base-200 drop-shadow-xl">
                <h1 class="absolute font-medium text-zinc-100 bg-neutral w-full py-2 text-2xl px-4"> CMS-side til innovativ startup </h1>
                <figure><img class="bg-zinc-100 aspect-auto" src={AirBorneImg} alt="Album"/></figure>
                <div class="card-body bg-base-200">
                  <p class="mt-8"> Brugerdreven designproces med fokus på et moderne og overskueligt look. Side er leveret komplet funktionel med debat-system som alternativ til Facebook samt kalender, galleri og events.  </p>
                  <div class="card-actions justify-center">
                    <span class="badge p-6 flex flex-row text-zinc-500 w-full text-left justify-center items-center">
                        <p class="font-medium"> Tech og links </p>
                        <div class="flex flex-row items-center justify-evenly gap-2 w-1/3">
                            <a href="https://www.webflow.com" target="_blank">
                                <img src={WebflowImg} alt="wordpress logo" class="w-6 stroke-zinc-200 fill-zinc-200">
                            </a>
                        </div>
                    </span>
                </div>
                </div>
            </div>  
            </div>
        </div>
  </div>
  
<style>
    .embla {
      overflow: hidden;
    }
    .embla__container {
      display: flex;
    }
    .embla__slide {
      flex: 0 0 100%;
      min-width: 0;
    }
</style>
  