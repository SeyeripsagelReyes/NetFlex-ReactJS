import React from "react";
import {useState} from 'react';
import SearchIcon from './search.svg'
import './Searchbar.css'

const API_URL = 'http://www.omdbapi.com?apikey=172b2b32'

export const Searchbar = ({setResults}) => {

    const [searchTerm, setSearchTerm] = useState('');

    

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setResults(data.Search)

    }

    const handleChange =(value) =>{
        setSearchTerm(value);
        searchMovies(value);
    }
  return (
    <div className="search">
      <img
        src={SearchIcon}
        alt="Search"
        onClick={() => searchMovies(searchTerm)}
      ></img>
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
}
