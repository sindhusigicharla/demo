import logo from './logo.svg';
import './App.css';
import React from 'react';
import BookList from './BookList';
import { useState } from 'react';
import IcrementDecrement from './IncrementDecrement';
import ToDoList from './ToDoList';

function App() {

    // useState --> returns an array with two elements
    // 1. is the current state value
    // 2. is a function that allows you to update the state value

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
    <div className="App">
        {/* <Button/> */}
        {/* <IcrementDecrement/> */}
        <ToDoList/>
    </div>
  );
}

export default App;


function Button() {


    const [count, setCount] = useState(0);


    function handleClick() {
        console.log('Button clicked!', count);
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <h1>{count}</h1>
        </div>
    )
}
