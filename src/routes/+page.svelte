<script lang="ts">
	import Card from "./Card.svelte";
	import { tracker } from "./store";
	import type { ActionData } from "./$types";
	import iconArrow from "$lib/images/icon-arrow.svg";
	import Leaflet from "./Leaflet.svelte";
	export let form: ActionData;
	let display: any = {
		ip: "192.212.174.101",
		location: {
			country: "US",
			region: "California",
			city: "South San Gabriel",
			lat: 34.04915,
			lng: -118.09462,
			postalCode: "",
			timezone: "-08:00",
			geonameId: 5397771,
		},
		as: {
			asn: 7127,
			name: "SCE",
			route: "192.212.0.0/15",
			domain: "",
			type: "",
		},
		isp: "Southern California Edison",
	};
	$: if (form) display = form;
</script>

<div class="font-sans text-lg text-Very_Dark_Gray">
	<div
		class="flex flex-col items-center justify-between pt-12 bg-[url('$lib/images/pattern-bg.png')] absolute top-0 left-0 w-screen h-1/3 -z-10 bg-no-repeat bg-cover"
	>
		<h1 class="text-4xl font-medium text-white">IP Address Tracker</h1>

		<form
			method="POST"
			action="/"
			class="w-[40vw] h-14 rounded-2xl overflow-hidden relative top-8"
		>
			<input
				type="text"
				name="ipAddr"
				class="w-full h-full px-8 placeholder:font-medium"
				placeholder="Search for any IP address or domain"
			/>
			<button
				type="submit"
				class="h-full hover:brightness-125 duration-300 aspect-square bg-Very_Dark_Gray absolute top-0 right-0"
			>
				<img src={iconArrow} alt="" class="m-auto" />
			</button>
		</form>

		<div
			class="translate-y-1/2 grid grid-cols-4 bg-white p-8 w-[75vw] h-36 justify-between rounded-2xl"
		>
			<Card title="IP ADDRESS" content={display.ip} />
			<Card title="LOCATION" content={display.location.region} />
			<Card
				title="TIMEZONE"
				content={"UTC " + display.location.timezone}
			/>
			<Card title="ISP" content={display.isp} />
		</div>
	</div>
	<div class="absolute top-1/3 -z-20 w-full h-2/3">
		<Leaflet latLng={[display.location.lat, display.location.lng]} />
	</div>
</div>
