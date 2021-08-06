import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import { useState, useEffect } from 'react';


function App() {

  // State variables holding movies & likes
  const [movies, setMovies] = useState([]);
  const [likes, setLikes] = useState(0);


  // useEffect will run this code on page render
  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      console.log(movies);
      setMovies(movies);
    }
    getMovies();
  }, [])

  const fetchMovies = async () => {
    const res = await fetch('http://localhost:5000/data');
    const data = await res.json();
    console.log(data);
    return data;
  }



  return (
    <div className="App">
        <Header/>
        
    </div>
  );
}

export default App;
