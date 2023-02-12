import { writable } from "svelte/store";

interface ITracker {
    ipAddr: string,
    location: string, 
    timezone: string,
    isp: string,
}

const createTracker = () => {
    const {subscribe,update} = writable<ITracker>({
        ipAddr: '192.212.174.101',
        location: 'Brooklyn, NY 10001',
        timezone: 'UTC -08:00',
        isp: 'SpaceX Starlink',
    })
    return {
        subscribe,
        update: (key:keyof ITracker, value:string) => update(state=>({...state, key:value} ) )
    }
}

export const tracker = createTracker()