<script>
	import '../app.postcss'; // Import the app's postcss configuration
	import { LightSwitch } from '@skeletonlabs/skeleton';
  
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'; // Import various utilities for floating UI
	import { storePopup } from '@skeletonlabs/skeleton'; // Import a store for popups
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow }); // Set the popup store configuration
  </script>


<header>
	<div class="logo">
	  <img src="img/logo_clear.png" alt="Logo">
	 
	</div>
	<div class="Switch">
		
	<LightSwitch />
	</div>
	<nav>
	  <ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
	  </ul>
	</nav>
  </header>


<div>
	
	<!-- This is where the content of each page will be displayed -->
	<slot />
  </div>
  


  <style>

   header {
    background-color: #ffffff;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .logo img {
    width: 4%;
    height: auto;
  }

  .Switch{
position: absolute;
left: 4%;
  }


  nav ul {
    list-style: none;
    display: flex;
  }

  nav li {
    margin-right: 20px;
  }

  nav a {
    text-decoration: none;
    color: #000000;
    transition: color 0.3s; /* Fügt eine Farbübergangseffekt hinzu */
  }

  /* Hinzufügen der Hover-Animation */
  nav a:hover {
    color: #2d8c60; /* Ändert die Farbe beim Hover auf #2d8c60 */
  }
  </style>
  
  
  
  