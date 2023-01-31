import React from 'react';
import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    {
      id: 'U1',
      name: 'Mark Whitehead',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
export default Users;
