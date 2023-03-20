import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateSerie = (serie, step) => {
    axios.post(`http://localhost:3500/series/`, serie ,{ headers: {'Content-Type': 'multipart/form-data'}})
    .then(res => {
        console.log(serie);
        console.log(res);
        console.log(res.data);
        step(1)
    })
}

export const CreateSeason = (season, step) => {
    axios.post(`http://localhost:3500/seasons/`, season ,{ headers: {'Content-Type': 'multipart/form-data'}})
    .then(res => {
        console.log(season);
        console.log(res);
        console.log(res.data);

        step && window.location.reload(false)
        // step && step(false) 
    })
}

export const CreateGenre = (data) => {
    axios.post(`http://localhost:3500/genres/`, data ,{ headers: {'Content-Type': 'multipart/form-data'}})
    .then(res => {
        console.log(data);
        console.log(res);
        console.log(res.data);
    })
}