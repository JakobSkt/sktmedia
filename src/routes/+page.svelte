<script lang="ts">
	import { gsap } from 'gsap';
	import { fade, slide, fly } from 'svelte/transition'
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import { Sun, Moon } from "lucide-svelte";
	import ModeSwitch from '$lib/modeSwitch.svelte'
	import logoWhite from '$lib/images/SkøtmediaWhite.svg'

</script>


<div class="h-screen w-screen flex flex-col bg-base-100" id="hero">
	<div class="absolute top-0 right-0 p-4">
		<ModeSwitch/>
	</div>
	
	<div class="top-0">
		<img class="w-96 h-96 m-auto" src={logoWhite}/>
	</div>
	
	<div class="w-screen h-2/3 bg-base-200">
		<div class="absolute flex flex-row w-screen m-auto h-2/3" id="seperator">
			<div class="bg-base-300 shadow-xl w-1/2 h-full" id="webCard">
				<!-- <figure><img class="w-3/4" alt="webLogo" /></figure>
				<div class="card-body text-center">
				  <p> Skøtmedia Web designer og vedligeholder moderne websystemer og apps med de nyeste teknologier. Fokus er at skabe en god brugeropvelese og et lækkert design.</p>
				  <div class="card-actions justify-center mt-4">
					<button class="btn btn-primary"> Se mere! </button>
			  	  </div>
				</div> -->
			</div>

			<div class="bg-base-300 shadow-xl w-1/2 h-full" id="photoCard">
				<!-- <figure><img class="w-3/4" alt="photoLogo" /></figure>
				<div class="card-body text-center">
				  <p> Skøtmedia Photo fanger de vigtigste øjeblikke i DIT liv og foreviger dem i foto- eller videoformat. Høj kvalitet, kundetilfredshed og kreativitet er vores nøgleord.</p>
				  <div class="card-actions justify-center mt-4">
					<button class="btn btn-primary"> Book nu! </button>
			  	  </div>
				</div> -->
			</div>
		</div>
	</div>	
</div>

<div class="absolute flex flex-row w-screen m-auto h-2/3" id="seperator">
	<div class="left"><span>left</span></div>
	<div class="right"><span>right</span></div>
</div>
 
<style>
	#webCard {
		float: left;
	}

	#photoCard {
		float: right;
	}

	#webCard:after, #photoCard:before {
		content:'';
		position: absolute;
		top: 0;
		width: 0;
		height: 0;
	}

	#webCard:after {
		left: 100%;
		border-top: 100px solid #D25A1E;
		border-right: 50px solid transparent;
	}

	#photoCard.before {
		right: 100%;
		border-bottom: 100px solid #D25A1E;
		border-left: 50px solid transparent;
	}

	/* #seperator .vertical {
		transform: rotateX(180deg);
	}

	#seperator::after {
		position: absolute;
		content: "";
  		width: 30%;
  		height: 100%;
		opacity: 30%;
		backdrop-filter: blur(4px);		
		clip-path: polygon(100% 0, 0 100%, 100% 100%);
	}

	#seperator::before {
		position: absolute;
		content: "";
		width: 30%;
		height: 100%;
		opacity: 30%;
		backdrop-filter: blur(4px);				
		clip-path: polygon(100% 0, 0 0, 0 100%);
	} */

	#webCard {
		background-image: url('https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-size: cover;
	}


.left,
.right {
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
}

.left::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  transform: skew(-25deg);
  z-index: 10;
}

.right {
  position: relative;
  text-align: right;
  /* background-image: url("https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); */
  background-size: cover;
}

.right::before {
  content: "";
  position: absolute;
  background: red;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  transform: skew(-25deg);
  z-index: 10;
}

span {
  z-index: 20;
}
	
</style>

