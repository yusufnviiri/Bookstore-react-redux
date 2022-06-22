import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './NewBook';
import Books from './Books';

const BookPage = () => {
  const bookList = [
    {
      booktitle: ' 10 Hour Diet',
      author: ' Jeannete Hyde',
      category: 'Health',
      id: uuidv4(),
    },
    {
      booktitle: 'The Godfather',
      author: ' Mario Puzzo',
      category: 'Crime',
      id: uuidv4(),
    },
  ];
  return (
    <div className="books">
      <Books bookList={bookList} />
      <AddNewBook />
    </div>
  );
};

export default BookPage;
