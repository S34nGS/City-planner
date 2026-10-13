import { MapContainer, TileLayer } from 'react-leaflet';
import Searchbar from './Searchbar';

export default function CityMap() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
    //   scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Searchbar />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}