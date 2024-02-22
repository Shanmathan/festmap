import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import { validNames } from "src/constants/index.js";
import { useState, useEffect } from "react";
import { database } from "../config/AppWriteConfig.jsx";
import "leaflet/dist/leaflet.css";
import { NameProps, FacilityMap } from "src/interfaces/index.js";

function FacilitiesMap({ name }: NameProps) {
  const [markersData, setMarkersData] = useState<FacilityMap[]>([]);
  const [points, setPoints] = useState<[number, number][]>([]);
  const currentposition = [85.8437984, 19.7999601];
  const [listOfPoints, setListOfPoints] = useState<[number, number][]>([]);

  const baseUrl = "https://api.openrouteservice.org/v2/directions/driving-car";
  const apiKey = "5b3ce3597851110001cf62485846fae8b6944314bac24c3823764c37";

  async function getRouteUrl(startPoint: string, endPoint: string) {
    const url = `${baseUrl}?api_key=${apiKey}&start=${startPoint}&end=${endPoint}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
    if (!name || !validNames.includes(name)) {
      return;
    } else {
      database
        .listDocuments("65c9d2d07d6c45ae083a", "65c9d2da17e0bfb2a85a")
        .then((response) => {
          const filteredDocuments = response.documents.filter(
            (doc) => doc.name === name
          );
          const facilities = filteredDocuments.map((doc) => ({
            name: doc["name"],
            position: doc["position"],
            visible: doc["visible"],
          }));
          setMarkersData(facilities);
          console.log(filteredDocuments);
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  }, [name]);

  return (
    <>
      <h3 className="text-left lg:text-center text-3xl mt-5 mb-5 text-[#242565] font-medium leading-normal ml-5 underline">
        Event Map
      </h3>
      <MapContainer
        center={{ lat: 19.7999601, lng: 85.8437984 }}
        zoom={15}
        scrollWheelZoom={true}
        className="h-[80vh] w-screen"
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
          ></Marker>
        ))}
        <Marker
          position={[19.7999601, 85.8437984]}
          eventHandlers={{
            click: () => {
              getCoordinates(85.8437984, 19.7999601);
            },
          }}
        >
          <Popup> You are here </Popup>
        </Marker>
        {points.length > 0 && (
          <Polyline pathOptions={{ color: "blue" }} positions={points} />
        )}
      </MapContainer>
    </>
  );
}

export default FacilitiesMap;
