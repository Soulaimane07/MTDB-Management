import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Login.css'
import { Log } from '../Log'
import Auth from '../Auth'
import langs from '../../../Lang/Lang.json'
import { changeTitle } from '../../../components/ChangeTitle'

function Login(props) {
  changeTitle(null)
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



  const [email, setEmail] = useState()
  const [pass, setPASS] = useState()

  const user = {
    email: email,
    pass: pass
  }

  return (
    <div className='login'>
      <div className='form'>
        <div className='image'> <img src='../assets/images/hulu.png' /> </div>
        <h1> {source.auth.login.title} </h1>
        <div>
          <div className='input'>
            <input 
              name='email'
              type={'email'} 
              placeholder={source.account.email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className='input'>
            <input 
              name='pass'
              type={'password'} 
              placeholder={source.account.pass}
              onChange={(e) => {setPASS(e.target.value)}}
            />
          </div>
          <button
            type={'submit'}
            disabled={email && pass ? false : true}
            className={`loginBtn ${email && pass ? 'active' : 'dis'}`} 
            onClick={Log(user, props.setLogged)}
          > {source.auth.login.login} </button>
          <p> {source.auth.login.dont} <Link to={'/signup'} className='link'> {source.auth.login.signup} </Link> </p>
        </div>
      </div>


      <Auth lang={lang} />
    </div>
  )
}

export default Login