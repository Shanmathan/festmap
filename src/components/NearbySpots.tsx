import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { database } from "../config/AppWriteConfig.jsx";
import "leaflet/dist/leaflet.css";
import { Facility } from "src/interfaces/index.js";

function NearbySpots() {
  const [markersData, setMarkersData] = useState<Facility[]>([]);
  const [points, setPoints] = useState<[number, number][]>([]);
  const currentposition = [85.8437984, 19.7999601];
  const [listOfPoints, setListOfPoints] = useState<[number, number][]>([]);

  const baseUrl = "https://api.openrouteservice.org/v2/directions/driving-car";
  const apiKey = import.meta.env.VITE_OPENROUTESERVICE_API_KEY;

  async function getRouteUrl(startPoint: string, endPoint: string) {
    const url = `${baseUrl}?api_key=${apiKey}&start=${startPoint}&end=${endPoint}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setListOfPoints(data["features"][0]["geometry"]["coordinates"]);
      setPoints(listOfPoints.map((e) => [e[1], e[0]]));
    } else {
      console.error("Error:", response.status);
    }
  }

  function getCoordinates(longi: number, lati: number) {
    if (currentposition) {
      getRouteUrl(
        `${currentposition[0]},${currentposition[1]}`,
        `${longi},${lati}`
      );
    }
  }

  useEffect(() => {
    database
      .listDocuments(
        import.meta.env.VITE_APPWRITE_NEARBYSPOTS_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_NEARBYSPOTS_COLLECTION_ID
      )
      .then((response) => {
        const facilities = response.documents.map((doc) => ({
          name: doc["name"],
          position: doc["position"],
        }));
        setMarkersData(facilities);
        console.log(facilities);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h3 className="text-left lg:text-center text-3xl mt-5 mb-5 text-[#242565] font-medium leading-normal ml-5 underline">
        Nearby Tourist Spots
      </h3>
      <MapContainer
        center={{ lat: 19.79995, lng: 85.84379 }}
        zoom={8}
        scrollWheelZoom={true}
        doubleClickZoom={false}
        className="h-[80vh] w-screen "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markersData.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            eventHandlers={{
              click: () => {
                getCoordinates(marker.position[1], marker.position[0]);
              },
            }}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        {points.length > 0 && (
          <Polyline pathOptions={{ color: "blue" }} positions={points} />
        )}
      </MapContainer>
    </>
  );
}

export default NearbySpots;
