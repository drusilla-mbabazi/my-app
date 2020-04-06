import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Drusilla and Lauren";
  const [imageUrl, setImageUrl] = useState(
    "https://media3.giphy.com/media/11wsZr0jbXc15m/giphy.gif?cid=790b76110b2799c8c87b11e5add6f9ce623997dd1fe0852e&rid=giphy.gif"
  );
  function handleClick() {
    fetch(
      "http://api.giphy.com/v1/gifs/random?api_key=aHi5kZ49h4esZTalKqyvkBO2llvuHeJr&tag=funny"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        const newImageUrl = myJson.data.images.original.url;
        setImageUrl(newImageUrl);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>{name}'s Shuffle app!</h1>
        <img src={imageUrl} className="App-logo" alt="logo" />
        <p>This app was created by {name}</p>
         
        <button onClick={handleClick}>Shuffle!</button>
      </header>
    </div>
  );
}

export default App;
