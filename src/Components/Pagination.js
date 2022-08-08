import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query/';
import User from './User';

const fetchUsers = async (page) => {
  const res = await fetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=03de891ee8139363`
  );

  return res.json();
};

const Pagination = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['users', page],
    () => fetchUsers(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>Paginated View</h2>

      {data && (
        <div className='card'>
          {data?.results?.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}

      <button
        onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
        disabled={page === 1}
      >
        Next Page
      </button>

      <div>{isFetching ? 'Fetching...' : null}</div>
    </div>
  );
};

export default Pagination;
