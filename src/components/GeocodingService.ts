import mbxClient from '@mapbox/mapbox-sdk'
export class MapboxClient {
    private static _instance: MapboxClient
    private _client:
    private constructor() {
    }

    public static getInstance(): MapboxClient {
        if (!MapboxClient._instance)
            MapboxClient._instance = new MapboxClient()
        return MapboxClient._instance
    }
}