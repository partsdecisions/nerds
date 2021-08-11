import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Sidebar from "./components/Sidebar/Sidebar";
import Series from "./components/Series/Series";
import Home from "./components/Home/Home";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


function App() {

  // State variables holding movies & likes
  const [movies, setMovies] = useState([]);
  const [likes, setLikes] = useState(0);
  const [search, setSearch] = useState('');
  const [alphabetSort, setAlphabetSort] = useState('None');
  const [ratingSort, setRatingSort] = useState('None');

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
        <Header
          likes={likes}
        />
        <Route path="/" exact component={Home}/>
        <Route path="/movies"> 
          <Sidebar
            setSearch={setSearch}
            setAlphabetSort={setAlphabetSort}
            setRatingSort={setRatingSort}
          />
          <Movies
            movies={movies}
            search={search}
            alphabetSort={alphabetSort}
            ratingSort={ratingSort}
            setLikes={setLikes}
            likes={likes}
         />
        </Route>
        <Route path="/series" component={Series}/>
      </div>
    </Router>
    
  );
}

export default App;
