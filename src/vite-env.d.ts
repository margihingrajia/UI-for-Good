/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.svelte' {
	import { SvelteComponent } from 'svelte';
	export default class Component extends SvelteComponent<any> {}
}

// Add this line to fix the error:
declare const L: any;