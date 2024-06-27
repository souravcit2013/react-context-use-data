import React from 'react';
import { TABLE_COLS_MAP } from '../AppConstants/userConstant';

const TableHead = () => {
  const tableCols = TABLE_COLS_MAP;
  return (
    <>
      <thead>
        <tr>
          {tableCols.map(({ label = '', value = '' }) => (
            <th key={label}>{value}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
