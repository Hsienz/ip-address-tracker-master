<script lang="ts">
	import L from "leaflet";
	import "leaflet/dist/leaflet.css";
	import { onDestroy, onMount } from "svelte";
    import iconLocation from '$lib/images/icon-location.svg'
	let map: L.Map
	let marker: L.Marker
	export let latLng: [number,number]
    let markerIcon = L.icon({
        iconUrl: iconLocation
    })
	onMount(() => {
		map = L.map("map",{zoomControl:false, attributionControl:false}).setView(latLng, 18);
		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 18,
			minZoom: 10,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);
        marker = L.marker(latLng,{icon:markerIcon}).addTo(map)
	});
	onDestroy(() => {
		if (map) map.remove();
	});
	const changeMarker = () => {
		marker?.remove();
		map = map?.setView(latLng);
		if (map) marker = L.marker(latLng,{icon:markerIcon}).addTo(map);
	};
    $: if(latLng) changeMarker()
</script>


<div id="map" class="w-full h-full"></div>