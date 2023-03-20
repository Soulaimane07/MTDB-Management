import axios from "axios";
import { useEffect, useState } from "react";

export const FindSerie = (id) => {
    const [data, setData] = useState()
    
    useEffect(() => {
        axios.get(`http://localhost:3500/series/${id}`)
            .then(res => {
                setData(res.data)
            }
        )
    }, []);

    return {data}
}