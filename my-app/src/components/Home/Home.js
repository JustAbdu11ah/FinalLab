import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMetrics } from '../../slices/metricDeetsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector((state) => state.metrics);

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <h2>Categories</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className="list-group">
          {categories.map((category) => (
            <li className="list-group-item" key={category.id}>
              <Link to={`/details/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
