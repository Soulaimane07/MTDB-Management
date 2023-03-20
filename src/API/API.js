import axios from 'axios';
import { useEffect, useState } from 'react'

const baseURL = "http://localhost:3500/series";
const genreURL = "http://localhost:3500/genres";
const seasonsURL = "http://localhost:3500/seasons";
const networksURL = "http://localhost:3500/networks";
const usersURL = "http://localhost:3500/users";
const moviesURL = "http://localhost:3500/movies";

export const API = () => {
  const [series, setSeries] = useState()
  const [genres, setGenres] = useState()
  const [seasons, setSeasons] = useState()
  const [networks, setNetworks] = useState()
  const [users, setUsers] = useState()
  const [movies, setMovies] = useState()

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setSeries(response.data);
    });

    axios.get(genreURL).then((response) => {
      setGenres(response.data);
    });

    axios.get(seasonsURL).then((response) => {
      setSeasons(response.data);
    });

    axios.get(networksURL).then((response) => {
      setNetworks(response.data);
    });
    
    axios.get(usersURL).then((response) => {
      setUsers(response.data);
    });

    axios.get(moviesURL).then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    {series, movies, genres, seasons, networks, users}
  )
}

export const SeriesData = () => {
  const [series, setSeries] = useState()

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSeries(response.data);
    });
  }, []);

  return series
}

export const MoviesData = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    axios.get(moviesURL).then((response) => {
      setMovies(response.data);
    });
  }, []);

  return movies
}

export const UsersData = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    axios.get(usersURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return users
}

export const GenresData = () => {
  const [genres, setGenres] = useState()

  useEffect(() => {
    axios.get(genreURL).then((response) => {
      setGenres(response.data);
    });
  }, []);

  return genres
}

export const SeasonsData = () => {
  const [seasons, setSeasons] = useState()

  useEffect(() => {
    axios.get(seasonsURL).then((response) => {
      setSeasons(response.data);
    });
  }, []);

  return seasons
}