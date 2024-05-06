<script lang="ts">
    import { onMount } from "svelte"
    import { Button } from "$lib/components/ui/button"
    import { Sun, Moon } from "lucide-svelte"
    
    export let darkMode: boolean = false

    onMount(() => {
        if(typeof window !== 'undefined') {
            if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                toggleTheme()
                darkMode = true
            }
        }
    })

    function toggleTheme() {
        console.log('toggleTheme')
        if(!darkMode) {
            document.documentElement.setAttribute('class', 'dark')
        } else {
            document.documentElement.removeAttribute('class')
        }

        darkMode = !darkMode
    }

</script>
  
<main>
    <button class="btn btn-ghost z-50 rounded-2xl" on:click={toggleTheme}>
        {#if darkMode}
            <Sun class="stroke-amber-400 z-30"/>
        {:else}
            <Moon class="stroke-cyan-900 z-30"/>
        {/if}
    </button>
</main>
  