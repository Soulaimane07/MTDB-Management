import { Logo, NavItem } from '../../components/Buttons'
import './Navbar.css'
import {AiOutlineHome, AiOutlineAppstore} from 'react-icons/ai'
import {SlScreenDesktop} from 'react-icons/sl'
import {BsCameraVideo} from 'react-icons/bs'
import {MdOutlineViewAgenda} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import langs from '../../Lang/Lang.json'

const user = JSON.parse(localStorage.getItem('user'))

function Navbar(props) {
  const lang = props.lang
  let source
  if(lang == 'frensh'){
    source = langs.frensh.navbar
  }
  if(lang == 'english'){
    source = langs.English.navbar
  }
  if(lang == 'arabic'){
    source = langs.Arabic.navbar
  }


  const navItems = [ 
    {
      title: source.dashboard,
      icon: <AiOutlineHome />,
      path: "/",
    },
    {
      title: source.tv,
      icon: <SlScreenDesktop />,
      path: "/tv_shows",
    },
    {
      title: source.movies,
      icon: <BsCameraVideo />,
      path: "/movies",
    },
    {
      title: source.genres,
      icon: <MdOutlineViewAgenda />,
      path: "/genres",
    },
    {
      title: source.networks,
      icon: <AiOutlineAppstore />,
      path: "/networks",
    },
    {
      title: source.users,
      icon: <FiUsers />,
      path: "/users",
    },
    
  ]

  const urlImg = "http://localhost:3500/"

  return (
    <div className='navbar'>
      <div className='container'>
        {Logo()}
        <ul>
          {navItems.map((item,key)=>(
            NavItem(key, item.title, item.path, item.icon)
          ))}
        </ul>
        {/* <Link to={'/account'} className='profile'>
          <div className='image'> 
            {user.profile !== 'profile'
              ? <img src={`${urlImg}${user.profile}`} /> 
              : <span><BiUser /></span>
            } 
          </div>
          <div className='details'>
            <h1> {user.fname} </h1>
          </div>
        </Link> */}
      </div>
    </div>
  )
}

export default Navbar