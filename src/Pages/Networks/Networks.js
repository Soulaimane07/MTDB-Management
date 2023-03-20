import { API } from "../../API/API"
import { changeTitle } from "../../components/ChangeTitle"
import { Header } from "../../components/Headers"
import { NetworksTable } from "../../components/Table"
import langs from '../../Lang/Lang.json'

function Networks(props) {
  changeTitle("Networks")
    const data = API().networks

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
    <div className="networks">
        {Header(source.navbar.networks, data?.length, 'create', source.buttons.createNet)}
        {NetworksTable(data)}
    </div>
  )
}

export default Networks