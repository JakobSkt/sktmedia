<script lang="ts">
    import { onMount } from "svelte"
    import { Button } from "$lib/components/ui/button"
    import { Sun, Moon } from "lucide-svelte"
    
    let currentTheme = ''
    let themes = ['sunset', 'cmyk']
    let darkMode = false

    onMount(() => {
        if(typeof window !== 'undefined') {
            const theme = window.localStorage.getItem('theme')
            if(theme && themes.includes(theme)) {
                document.documentElement.setAttribute('data-theme', theme)
                theme == 'sunset' ? darkMode = true : darkMode = false
                currentTheme = theme
            } else {
                document.documentElement.setAttribute('data-theme', 'sunset')
                currentTheme = 'sunset'
            }
        }
    })

    function setTheme() {
        let newTheme = ''
        switch(currentTheme) {
            case 'sunset':
                newTheme = 'cmyk'
                break;
            
            case 'cmyk':
                newTheme = 'sunset'
                break;
        }
       
        const cookieAge = 60 * 60 * 24 * 365
        window.localStorage.setItem('theme', newTheme)
        document.cookie = `theme=${newTheme}; max-age=${cookieAge}; path=/; SameSite=Lax`
        document.documentElement.setAttribute('data-theme', newTheme)
        currentTheme = newTheme  
        currentTheme == 'sunset' ? darkMode = true : darkMode = false    
        console.log(newTheme)      
        
    }
</script>
  
<main>
    <button class="btn btn-ghost" on:click={setTheme}>
        {#if darkMode}
            <Sun class="stroke-amber-400 z-40"/>
        {:else}
            <Moon class="stroke-cyan-900 z-40"/>
        {/if}
    </button>
</main>
  