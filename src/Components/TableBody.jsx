import React, { useContext } from 'react';
import UserContext from '../UserContext/UserContext';

const TableBody = ({ userData = [] }) => {
  // const { data = [] } = useContext(UserContext);
  return (
    <>
      <tbody>
        {userData?.length > 0 &&
          userData.map(({ userId, id, title, body }, index) => (
            <tr key={`${userId}_${index}`}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
