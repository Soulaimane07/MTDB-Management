import { useState } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../Auth'
import { Signfun } from '../Log'
import './Sign.css'
import langs from '../../../Lang/Lang.json'
import { changeTitle } from '../../../components/ChangeTitle'


function Sign(props) {
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
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [pass, setPASS] = useState()

    const user = {
        email: email,
        fname: fname,
        lname: lname,
        pass: pass
    }

  return (
    <div className='signup'>
        <Auth lang={lang} />


        <div className='form'>
            <div className='image'> <img src='../assets/images/hulu.png' /> </div>
            <h1> {source.auth.signup.title} </h1>
            <form>
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
                        name='first name'
                        type={'text'} 
                        placeholder={source.account.fname}
                        onChange={(e) => {setFname(e.target.value)}}
                    />
                </div>
                <div className='input'>
                    <input 
                        name='last name'
                        type={'text'} 
                        placeholder={source.account.lname}
                        onChange={(e) => {setLname(e.target.value)}}
                    />
                </div>
                <div className='input'>
                    <input 
                        name='password'
                        type={'password'} 
                        placeholder={source.account.pass}
                        onChange={(e) => {setPASS(e.target.value)}}
                    />
                </div>
                <button
                    type={'submit'}
                    disabled={email && pass && fname && lname ? false : true}
                    className={`loginBtn ${email && pass && fname && lname ? 'active' : 'dis'}`} 
                    onClick={() => Signfun(user, props.setLogged)}
                > {source.auth.signup.button} </button>
                <p> {source.auth.signup.have} <Link to={'/login'} className='link'> {source.auth.signup.login} </Link> </p>
            </form>
        </div>
    </div>
  )
}

export default Sign