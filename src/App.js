import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
       <Nav/>
       <Banner/>
       <Row isLargeRow={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>  
    </div>
  );
}

export default App;
