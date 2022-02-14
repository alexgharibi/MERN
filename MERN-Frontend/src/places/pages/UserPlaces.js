import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

export const DUMMY = [
  {
    id: "p1",
    title: "ottawa",
    description: "my home town",
    imageUrl: "https://picsum.photos/seed/picsum/200/300",
    address: "10 E 34th St, New York, NY 10016",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
