<script lang="ts">
	import Card from "./Card.svelte";
	import type { ActionData } from "./$types";
	import iconArrow from "$lib/images/icon-arrow.svg";
	import Leaflet from "./Leaflet.svelte";
	import Separator from "./Separator.svelte";
	import { browser } from "$app/environment";
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
		class="flex flex-col items-center pt-6 xl:pt-12 bg-[url('$lib/images/pattern-bg.png')] absolute top-0 left-0 w-screen h-2/5 xl:h-1/3 -z-10 bg-no-repeat bg-cover min-h-[350px] xl:min-h-[300px]"
	>
		<h1 class="text-3xl xl:text-4xl font-medium text-white">IP Address Tracker</h1>

		<form
			method="POST"
			action="/"
			class="w-[90vw] xl:w-[40vw] h-16 xl:h-14 rounded-2xl overflow-hidden relative top-6 xl:-mb-9 max-w-[450px] xl:max-w-none"
		>
			<input
				type="text"
				name="ipAddr"
				class="w-full h-full px-4 xl:px-8 placeholder:font-medium placeholder:text-sm"
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
			class="justify-self-end translate-y-1/2 grid grid-rows-[7] xl:grid-cols-7 bg-white gap-y-2 p-6 w-[90vw] xl:w-[75vw] text-center xl:text-left h-auto xl:h-48 xl:justify-between max-w-[450px] xl:max-w-none rounded-2xl absolute bottom-0"
		>
			<Card title="IP ADDRESS" content={display.ip} />
			<Separator />
			<Card title="LOCATION" content={display.location.region} />
			<Separator />
			<Card
				title="TIMEZONE"
				content={"UTC " + display.location.timezone}
			/>
			<Separator />
			<Card title="ISP" content={display.isp} />
		</div>
	</div>
	<div class="absolute top-1/3 -z-20 w-full h-2/3 min-h-[500px]">
		<Leaflet latLng={[display.location.lat, display.location.lng]} />
	</div>
</div>
