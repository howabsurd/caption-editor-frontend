import React, { useState, useEffect } from 'react';
import Player from './Player';
import './App.css';
import Header from './Header';
import FormCaptions from "./FormCaptions"
import Banner1 from './Banner1';
import TwoCardComponent from './TwoCard';

function App() {
  const [URL, setURL] = useState("");
  const [captions , setCaptions] = useState([]);  
  // const captions = [
  //   {
  //     text: 'Caption 1',
  //     startTime: 0,
  //     endTime: 5
  //   },
  //   {
  //     text: 'Caption 1',
  //     startTime: 0,
  //     endTime: 5
  //   }, 
  //   {
  //     text: 'Caption 2',
  //     startTime: 6,
  //     endTime: 10
  //   },
  //   // Add more captions as needed
  // ];

  useEffect(() => {
    console.log("URL in App:", URL);
  }, [URL]);
  useEffect(()=>{
    console.log(captions)
  },[captions])
 
  return (
    <div className="app">
      <Header />
      <Banner1 />
      <TwoCardComponent />
      <Player captions={captions} URL={URL} />
      <FormCaptions URL={URL} setURL={setURL} setCaptions={setCaptions}/>
    </div>
  );
}

export default App;
