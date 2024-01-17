<script lang="ts">
    import { onMount } from 'svelte'

    export let imgSrc
    export let bgSrc

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
    $: console.log('Data theme on card: ' + document.documentElement.getAttribute('data-theme'))

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
    <div on:click={handleInfo} class:active={active} class="group cursor-pointer relative bg-zinc-200 backdrop-blur-xl rounded-xl drop-shadow-sm grayscale-60 hover:grayscale-0 hover:shadow-2xl hover:scale-105 fisrt:grayscale-0 transition duration-300 bg-cover" id="card">
        <div class:active={active} class="absolute flex flex-col gap-2 px-4 py-4 bg-zinc-400/50 backdrop-blur-sm bottom-0 inset-x-0 rounded-xl" id="cardInfo">
            {#if svgWhite}
                <!-- <svg on:click={() => active = false} class:active={active} class="z-40 absolute w-12 h-12 stroke-white self-center -mt-20 opacity-0 transition duration-200 hover:scale-105" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> -->
                <svg on:click={() => active = false} class:active={active} class="lucide lucide-x-circle z-40 absolute w-8 h-8 stroke-white self-center opacity-0 transition duration-200 hover:scale-105 fill-none stroke-zinc-500 mt-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
            {:else}
                <!-- <svg on:click={() => active = false} class:active={active} class="z-40 absolute w-12 h-12 stroke-zinc-700 self-center -mt-20 opacity-0 transition duration-200 hover:scale-105" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> -->
                <svg on:click={() => active = false} class:active={active} class="lucide lucide-x-circle z-40 absolute w-12 h-12 stroke-white self-center opacity-0 transition duration-200 hover:scale-105 fill-none stroke-zinc-500 mt-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>

            {/if}
            <div class="flex flex-col" id="imgDiv">
                <img class="m-auto" src={imgSrc}/>
                <svg class="lucide lucide-arrow-down-from-line w-8 h-8 self-center stroke-zinc-400 -mt-8 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M19 3H5"/><path d="M12 21V7"/><path d="m6 15 6 6 6-6"/></svg>
            </div>

            {#if active}
                <div class="flex flex-col mt-8 p-4 bg-zinc-500/50 rounded-xl items-center justify-center">
                    <div>
                        <p class="text-zinc-200 mb-4 text-center"> {description} </p>
                    </div>
                    <button on:click={handleInfo} class="btn btn-neutral text-white w-40 rounded-lg hover:scale-105 hover:drop-shadow-md"> Læs mere! </button>
                </div>
            {/if}

    </div>
</main>

<style>
	
    #card {
        overflow: hidden;
        padding-top: theme(spacing.16);
        padding-bottom: theme(spacing.16);
        padding-right: theme(spacing.40);
        padding-left: theme(spacing.40);

        transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    #card.active {
        padding-top: theme(spacing.52);
        padding-bottom: theme(spacing.52);
        
    }

    /* #card::before{
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url('https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        background-size: cover;
        background-position: 60%;
        filter: grayscale(0%);
    } */
/* 
    #cardInfo {
        transform: translateY(300px);
        transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    #cardInfo.active {
        transform: translateY(0px);
    } */

    svg.active {
        opacity: 1;
    }

    .active #imgDiv svg {
        opacity: 0;
    }



</style>