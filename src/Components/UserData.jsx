import React, { useContext } from 'react';
import UserContext from '../UserContext/UserContext';
import UserDataTable from '../Components/UserDataTable';
import UserDataContainer from '../Components/UserDataContainer';

const UserData = () => {
  const contextData = useContext(UserContext);
  return <UserDataContainer />;
};

export default UserData;
