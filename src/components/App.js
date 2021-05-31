import React from 'react';
import BookList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => {
  <div className="App">
    <BookList books={[{ id: '1', title: 'Redux', category: 'Javascript' }]} />
    <BooksForm />
  </div>;
};

export default App;
