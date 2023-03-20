import './Series.css'
import { Header } from '../../components/Headers'
import { SeriesTable } from '../../components/Table'
import { SeriesData } from '../../API/API';
import langs from '../../Lang/Lang.json'
import { useEffect, useState } from 'react';
import { changeTitle } from '../../components/ChangeTitle';

function Series(props) {
  const lang = props.lang
  let source
  if(lang == 'frensh'){
    source = langs.frensh
  }
  if(lang == 'english'){
    source = langs.English
  }
  if(lang == 'arabic'){
    source = langs.Arabic
  }
  
  changeTitle(source.navbar.tv)
  const data = SeriesData()

  const [search, setSearch] = useState('_id')
  
  return (
    <div className='series'>
      {Header(source.navbar.tv, data?.length, 'create', source.buttons.createTv)}
      {SeriesTable(data, search)}
    </div>
  )
}

export default Series