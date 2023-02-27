import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous skycrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Aerial_view_of_New_York%2C_New_York_LCCN2011632578.tif/lossy-page1-1157px-Aerial_view_of_New_York%2C_New_York_LCCN2011632578.tif.jpg?20161007113850',
    address: '20 W 34th St., New York, NY 10001, United ',
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous skycrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Aerial_view_of_New_York%2C_New_York_LCCN2011632578.tif/lossy-page1-1157px-Aerial_view_of_New_York%2C_New_York_LCCN2011632578.tif.jpg?20161007113850',
    address: '20 W 34th St., New York, NY 10001, United ',
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: 'u2',
  },
];

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
