import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();


  return (
    <div>
      <h2>Details for Category: {id}</h2>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Details;
