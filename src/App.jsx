import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <label htmlFor="search">search: </label>
      <input id="search" type="text"></input>
      <hr />
      <ul>{list.map(function(item) {
        return <li key={item.objectID}><span><a href={item.url}>{item.title}</a></span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span></li>;
      })}
      </ul>
    </div>
  );
}
export default App;
const list = [{
  title:"React" ,
  url : "https://reactifsorg/" ,
  author: "jordan walke" ,
  num_comments : 2,
  points: 5,
  objectID: 1,
},
];
    