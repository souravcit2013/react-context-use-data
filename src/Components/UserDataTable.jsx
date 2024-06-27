import React, { useContext, useEffect, useMemo, useState } from 'react';
import TableHead from '../Components/TableHead';
import TableBody from '../Components/TableBody';
import UserContext from '../UserContext/UserContext';
import { NO_DATA, PAGE_SIZE } from '../AppConstants/userConstant';
import Pagination from '../Components/Pagination';

const UserDataTable = () => {
  const { data = [] } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    if (data?.length > 0) {
      return data?.slice(firstPageIndex, lastPageIndex);
    } else {
      return [];
    }
  }, [currentPage]);

  return (
    <>
      {(currentTableData?.length > 0 && (
        <>
          <table>
            <TableHead />
            <TableBody userData={currentTableData} />
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data?.length}
            pageSize={PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )) ||
        NO_DATA}
    </>
  );
};

export default UserDataTable;
