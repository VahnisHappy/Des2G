import Geocoding from '@mapbox/mapbox-sdk/services/geocoding'
import {ChangeEvent, FormEvent, FormEventHandler, useEffect, useState} from "react";

const geocoding = Geocoding({accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || ''})

async function search(query: string) {
    if (!query) return;
    const request = geocoding.forwardGeocode({
        query
    })
    const response = await request.send()
    const features = response.body.features;
    for (const feature of features) {

    }
}

export function GeocoderSearch() {
    const [input, setInput] = useState('')

    async function onSubmit(event: FormEvent) {
        event.preventDefault()
        await search(input)
    }

    function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setInput(event.target.value);
    }

    return <form onSubmit={onSubmit}>
        <input type="text" placeholder="enter location" onChange={onChangeInput}/>
        <input type="submit"/>

    </form>
}