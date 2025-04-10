import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function getTitle(title) {
  return title;
}


const list = [
  {
    title: "React",
    url: "http://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "http://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

function List() {
  return (
    <ul>
      {list.map(function(item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> {item.author} </span>
            <span> {item.num_comments} </span>
            <span> {item.points} </span>
          </li>
        );
      })}
    </ul>
  );
}


function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;