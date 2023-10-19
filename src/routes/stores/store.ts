// Import the `writable` store from Svelte
import { writable } from "svelte/store";

// Create a writable store named `messageStore` and initialize it with an empty array
export const messageStore = writable<any[]>([]);
