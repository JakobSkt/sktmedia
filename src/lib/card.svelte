<script lang="ts">

    export let imgSrc

    let description: string = 'Whoops, the description didnt get set!'
    let photoCard: boolean = false
    let svgWhite:boolean = false

    console.log(imgSrc.split('/')[4])
    $: switch (imgSrc.split('/')[4]) {
        case 'SkøtmediaWhiteWebBlue.png':
            console.log('Web card!')
            description = 'Skøtmedia Web designer og vedligeholder moderne websystemer og apps med de nyeste teknologier. Fokus er at skabe en god brugeropvelese og et lækkert design.'
            break

        case 'SkøtmediaWhitePhotoBlue.png':
            console.log('Photo card!')
            photoCard = true
            description = 'Skøtmedia Photo fanger de vigtigste øjeblikke i DIT liv og foreviger dem i foto- eller videoformat. Høj kvalitet, kundetilfredshed og kreativitet er vores nøgleord.'
            break
    }

    let active: boolean = false

    function handleInfo(event) {
        if(event.target.tagName == 'svg') {
            active = false
            console.log('clicked svg')
            return
        } else if (!active) {
            active = true
            console.log('clicked card')
            return
        }
    }
</script>
<main>
    <div on:click={handleInfo} class="group cursor-pointer relative px-40 py-64 bg-zinc-200 backdrop-blur-xl rounded-xl drop-shadow-sm grayscale-60 hover:grayscale-0 hover:shadow-2xl hover:scale-105 fisrt:grayscale-0 transition duration-300 bg-cover" id="card">
        <div class:active={active} class="absolute flex flex-col gap-2 px-4 py-4 bg-zinc-400/50 backdrop-blur-sm bottom-0 inset-x-0 rounded-xl" id="cardInfo">
            {#if svgWhite}
                <svg on:click={() => active = false} class:active={active} class="z-40 absolute w-12 h-12 stroke-white self-center -mt-20 opacity-0 transition duration-200 hover:scale-105" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            {:else}
                <svg on:click={() => active = false} class:active={active} class="z-40 absolute w-12 h-12 stroke-zinc-700 self-center -mt-20 opacity-0 transition duration-200 hover:scale-105" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            {/if}
            <img class="m-auto" src={imgSrc}/>

            <div class="flex flex-col mt-8 p-4 bg-zinc-500/50 rounded-xl items-center justify-center">
                <div>
                    <p class="text-zinc-200 mb-4 text-center"> {description} </p>
                </div>
                <button on:click={handleInfo} class="mt-4 px-12 py-2 text-white rounded-full font-bold text-xl bg-gradient-to-r from-red-400 to-orange-400 drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all"> Læs mere! </button>
            </div>
    </div>
</main>

<style>
    #card {
        overflow: hidden;
    }

    #cardInfo {
        transform: translateY(300px);
        transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    #cardInfo.active {
        transform: translateY(0px);
    }

    svg.active {
        opacity: 1;
    }

</style>