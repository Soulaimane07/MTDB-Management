import axios from "axios";

export const DeleteSerie = (id) => {
    axios.delete(`http://localhost:3500/series/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
}