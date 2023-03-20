import React, { useState } from 'react'
import { MoviesData, SeriesData } from '../../API/API'
import { Header } from '../../components/Headers'
import { SeriesTable } from '../../components/Table'

function Movies(props) {
    const data = MoviesData()
  const [search, setSearch] = useState('_id')

  return (
    <div>
        {Header("Movies", 10, 'create', "Create Movie")}
        {SeriesTable(data, search)}
    </div>
  )
}

export default Movies