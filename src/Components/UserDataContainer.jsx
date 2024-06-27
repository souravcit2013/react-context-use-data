import React, { useContext } from 'react';
import UserDataTable from '../Components/UserDataTable';
import UserContext from '../UserContext/UserContext';

const UserDataContainer = () => {
  const { data = [] } = useContext(UserContext);
  return <>{(data?.length > 0 && <UserDataTable />) || ''}</>;
};

export default UserDataContainer;
