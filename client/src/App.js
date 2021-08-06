import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function App() {

  // State variables holding movies & likes
  const [movies, setMovies] = useState([]);
  const [likes, setLikes] = useState(0);


  // useEffect will run this code on page render
  useEffect(() => {
    const getMovies = async () => {
      const incomingMovies = await fetchMovies();
      setMovies(incomingMovies.movies);
      console.log(incomingMovies.movies);
    }
    getMovies();
  }, [])

  // Fetchin Movies from json server
  const fetchMovies = async () => {
    const res = await fetch('http://localhost:5000/data/');
    const data = await res.json();
    console.log(data);
    return data;
  }



  return (
    <Router>
      <div className="App">
        <Header/>
        <Movies
          movies={movies}
        />
      </div>
    </Router>
    
  );
}

export default App;
