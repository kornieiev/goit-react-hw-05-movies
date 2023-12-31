import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesWrap } from './Movies.styled';
import { fetchMoviesData } from '../../services/moviesService';
import MoviesSearchForm from '../../components/MoviesSearchForm/MoviesSearchForm';
import MoviesSearchList from '../../components/MoviesSearchList/MoviesSearchList';

export default function SearchMovie() {
  const [searchParams, setSearchParams] = useSearchParams('');
  let searchValue = searchParams.get('movie') ?? '';
  const [movie, setMovie] = useState(searchValue);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMoviesData(movie);
        setSearchList(moviesData);
      } catch (error) {
        console.error('Error setting cast data:', error);
      }
    };

    fetchData();
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();
    setMovie(e.target.searchQuery.value);
    setSearchParams({ movie: e.target.searchQuery.value });
  };

  return (
    <>
      <MoviesWrap>
        <MoviesSearchForm onSubmit={handleSubmit} />
        {searchList && <MoviesSearchList searchList={searchList.results} />}
      </MoviesWrap>
    </>
  );
}
