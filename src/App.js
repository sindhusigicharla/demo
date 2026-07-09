import logo from './logo.svg';
import './App.css';
import React from 'react';
import BookList from './BookList';

function App() {

  const books =[
        {
            author: 'J.K. Rowling',
            title: 'Harry Potter and the Sorcerer\'s Stone',
            year: 1997
        },
        {
            author: 'J.R.R. Tolkien',
            title: 'The Hobbit',
            year: 1937
        },
        {
            author: 'C.S. Lewis',
            title: 'The Lion, the Witch and the Wardrobe',
            year: 1950
        },
        {
            author: 'George Orwell',
            title: '1984',
            year: 1949
        },
        {
            author: 'Aldous Huxley',
            title: 'Brave New World',
            year: 1932
        }
    ]

 

  return (
    <>
      <BookList books={books}/>
    </>
  );
}

export default App;


// conditional rendering
