import { useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";


export default function Searchbar(){
    const map = useMap();

    useEffect(() => {
        const control = GeoSearchControl({
        provider: new OpenStreetMapProvider(),
        style: "bar",
        resetButton: "🔍",
        });

        map.addControl(control);
        return () => {
        map.removeControl(control);
        };
    }, [map]);

    return null;
}