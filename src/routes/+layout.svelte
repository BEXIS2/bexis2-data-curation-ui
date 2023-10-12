<script>
	// Import the app's postcss configuration from the parent directory
	import '../app.postcss';
  
	// Import the LightSwitch module from '@skeletonlabs/skeleton'
	import { LightSwitch } from '@skeletonlabs/skeleton';
  
	// Floating UI for Popups
	// Import various utilities for the floating UI
	import {
	  computePosition,
	  autoUpdate,
	  flip,
	  shift,
	  offset,
	  arrow
	} from '@floating-ui/dom';
  
	// Import a store for popups
	import { storePopup } from '@skeletonlabs/skeleton';
  
	// Set the popup store configuration using imported utilities
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
  </script>
  
  <header>
	<div class="logo">
	  <img src="img/logo_clear.png" alt="Logo">
	</div>
	<div class="Switch">
	  <!-- Render the LightSwitch component here -->
	  <LightSwitch />
	</div>
	<nav>
	  <ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/Entry">Entry</a></li>
		<li><a href="/Curator">Curator</a></li>
		<li><a href="/User">User</a></li>

	  </ul>
	</nav>
  </header>
  
  <div>
	<!-- This is where the content of each page will be displayed -->
	<slot />
  </div>
  
  <style>
	/* CSS styles for the header */
	header {
	  background-color: #ffffff;
	  color: #000000;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 10px 20px;
	}
  
	/* CSS styles for the logo */
	.logo img {
	  width: 4%;
	  height: auto;
	}
  
	/* CSS styles for the Switch element */
	.Switch {
	  position: absolute;
	  left: 4%;
	}
  
	/* CSS styles for the navigation menu */
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
	  transition: color 0.3s; /* Adds a color transition effect */
	}
  
	/* Add hover animation */
	nav a:hover {
	  color: #2d8c60; /* Changes the color on hover to #2d8c60 */
	}
  </style>
  