import { Map, Marker } from "pigeon-maps";

const MapContact = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32">
      <Map
        height={300}
        defaultCenter={[23.6620927, 90.4844778]}
        defaultZoom={11}
      >
        <Marker width={50} anchor={[23.6620927, 90.4844778]} />
      </Map>
    </div>
  );
};

export default MapContact;
