import type { Actions } from "./$types"
const apiKey = "at_htNswcsMu5zNNBHxExhTSoG5V7aY3"

export const actions:Actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${data.get('ipAddr')}`)
        const json = await response.json()
        console.log(json)
        return json
    }
}