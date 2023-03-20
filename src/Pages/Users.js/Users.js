import './Users.css'
import { Header } from '../../components/Headers'
import { UsersData } from '../../API/API'
import { UsersTable } from '../../components/Table'
import { changeTitle } from '../../components/ChangeTitle'
import langs from '../../Lang/Lang.json'

function Users(props) {
  changeTitle("Users")
    const data = UsersData()

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
    <div className='users'>
        {Header(source.navbar.users, data?.length, 'create', source.buttons.createUser)}
        {UsersTable(data)}
    </div>
  )
}

export default Users