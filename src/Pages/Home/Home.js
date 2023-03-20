import { Header } from '../../components/Headers'
import './Home.css'

import {AiOutlineHome, AiOutlineAppstore} from 'react-icons/ai'
import {SlScreenDesktop} from 'react-icons/sl'
import {BsCameraVideo} from 'react-icons/bs'
import {MdOutlineViewAgenda} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import langs from '../../Lang/Lang.json'

import { API } from "../../API/API"
import { Link } from 'react-router-dom'
import { changeTitle } from '../../components/ChangeTitle'

function Home(props) {


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
    
    changeTitle(source.navbar.dashboard)

  const data = API()
  console.log(data);

  const stats = [
    {
      'icon':<SlScreenDesktop />,
      'title': source.navbar.tv,
      'stat': data.series?.length,
      'link':'/tv_shows'
    },
    {
      'icon':<BsCameraVideo />,
      'title':source.navbar.movies,
      'stat':'',
      'link':'/movies'
    },
    {
      'icon':<AiOutlineAppstore />,
      'title':source.navbar.networks,
      'stat': data.networks?.length,
      'link':'/networks'
    },
    {
      'icon':<FiUsers />,
      'title':source.navbar.users,
      'stat': data.users?.length,
      'link':'/users'
    }
  ]

  return (
    <div className='home'>
      {Header(source.navbar.dashboard)}

      <div className='stats'>
        {stats.map((stat,key)=>(
          <div key={key} className="card">
            <div className='body'>
              <div className='icon'> {stat.icon} </div>
              <div className='details'>
                <h2> {stat.title} </h2>
                <h4> {stat.stat} </h4>
              </div>
            </div>
            <hr></hr>
            <Link className='link' to={stat.link}> See More </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home