import {useState} from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
import SearchResultList from './Components/SearchResultList';
import { Searchbar } from './Components/Searchbar';



const App = () =>{
    const [Results,setResults] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');

    // const searchMovies = async (title) =>{
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();
    //     console.log(data.Search)
    //     setMovies(data.Search);
    // }
    


    return(
        <div className ='app'>
            <h1>NetFlex</h1>
            <div className='search-container'>
                <Searchbar setResults={setResults}/>
                <SearchResultList Results={Results}/>
            </div>
            {
                Results?.length > 0
                ? (
                <div className='container'>
                    {Results.map((Results)=>(
                        <MovieCard movie1={Results} />
                    ))}
                </div>
                ): (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    )
}

export default App;