import React from 'react';
import BookList from '../containers/BooksList';

const App = () => {
  <div className="App">
    <BookList books={[{ id: '1', title: 'Redux', category: 'Javascript' }]} />
  </div>;
};

export default App;
