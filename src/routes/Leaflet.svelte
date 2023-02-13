<script lang="ts">
	import "leaflet/dist/leaflet.css";
	import { onDestroy, onMount } from "svelte";
	import iconLocation from "$lib/images/icon-location.svg";
	let map: any;
	let marker: any;
	export let latLng: [number, number] = [0, 0];
    let markerIcon: any
	let L:any
	onMount(async () => {
		L = await import ('leaflet')
		markerIcon = L.icon({
			iconUrl: iconLocation,
		});
		map = L.map("map", {
			zoomControl: false,
			attributionControl: false,
		}).setView(latLng, 18);
		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 18,
			minZoom: 10,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);
		marker = L.marker(latLng, { icon: markerIcon }).addTo(map);
	});
	onDestroy(() => {
		if (map) map.remove();
	});
	const changeMarker = () => {
		marker?.remove();
		map = map?.setView(latLng);
		if (map) marker = L.marker(latLng, { icon: markerIcon }).addTo(map);
	};
	$: if (L && latLng) changeMarker();
</script>

<div id="map" class="w-full h-full" />
