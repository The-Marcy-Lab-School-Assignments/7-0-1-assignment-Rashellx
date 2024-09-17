import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import API_KEY from '../config';
import { useState, useEffect } from 'react';

function App() {
  const [gifs, setGifs] = useState([]) // making a set to hold the gifs that we are going to fetch 
  const [fetchError, setFetchError] = useState(); // that state is going to hold an error 
  const [query, setQuery] = useState(''); // creating a state called query, this holds the input of the users search

  useEffect(() => { // using useEffect to fetch data
    // you cannot use async on the useEffect callback function
    // we would have create a new function inside this callback function and run it after 
    const doFetch = async () => {
      // if query fetch with searching url else fecth with the trending url 
      const url = query ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g` :
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;
      const [data, error] = await handleFetch(url); //fetching to trending url 
      if (data) setGifs(data.data)
      if (error) setFetchError(error.message)
    };
    doFetch()
  }, [query]);


  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setQuery={setQuery} />
        <br />
        <GifContainer gifs={gifs} />
      </div>
    </div>
  );
}

export default App;
