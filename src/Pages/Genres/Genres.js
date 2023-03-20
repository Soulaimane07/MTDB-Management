import './Genres.css'
import { GenresData } from "../../API/API"
import { Header } from "../../components/Headers"
import { GenresTable } from "../../components/Table"
import { changeTitle } from '../../components/ChangeTitle'
import langs from '../../Lang/Lang.json'

function Genres(props) {
  changeTitle("Genres")
    const data = GenresData()

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

  return (
    <div className='genres'>
        {Header(source.navbar.genres, data?.length, 'create', source.buttons.createGenre)}
        {GenresTable(data)}
    </div>
  )
}

export default Genres