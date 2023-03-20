import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import langs from '../../Lang/Lang.json'

function Auth(props) {
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
    <div className='auth'>
        <div className='background'>
          <h1> {source.auth.box.title} </h1>
          <p>{source.auth.box.text}</p>
          <Link target={'_blank'} className='link' to={'//guileless-snickerdoodle-b0b217.netlify.app/'}> 
            {source.auth.box.button}
            <span><BsArrowRight /> </span>
          </Link>
        </div>
    </div>
  )
}

export default Auth