import "./App.css";
import Row from "./Component/Row";
import requests from "./requests";
import Banner from "./Component/Banner";
import Nav from "./Component/Nav";

function App() {
  return (
    <>
      <div className="App">
        {/** Navbar */}
        <Nav />
        {/** banner */
        /*default give true */}
        <Banner />
        {/* Rows */}
        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default App;
/**
 * Research more on axios
 * async await and fetch
 * optional chaining
 * removeEventListener
 * behind working of isLargeRow && row_poster_larg
 * react-youtube
 * axios
 * npm i movie-trailer
 */
