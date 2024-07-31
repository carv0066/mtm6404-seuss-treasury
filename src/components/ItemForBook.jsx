import React from 'react';
import { Link } from 'react-router-dom';

function ItemForBook({ id, cover_image, title }) {
  const bookDetailsUrl = `/books/${id}`;

  return (
    <div>
      <Link to={bookDetailsUrl}>
        <img src={cover_image} alt={title} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default ItemForBook;
