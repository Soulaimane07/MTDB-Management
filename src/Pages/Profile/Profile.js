import { Header } from '../../components/Headers'
import './Profile.css'
import {BiUser} from 'react-icons/bi'
import {BsFillPencilFill} from 'react-icons/bs'
import {FaCamera} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import { useState } from 'react'
import { Cancel, CancelBtn, CreateBtn, UpdateBtn } from '../../components/Buttons'
import langs from '../../Lang/Lang.json'
import { LogoutAlert } from '../../components/Alerts'
import { changeTitle } from '../../components/ChangeTitle'

const langsobg = ['English','Frensh', 'Arabic']
const themeobg = ['Light','Dark']

function Profile(props) {
    changeTitle('Profile')
    const language = props.lang
    let source
    if(language == 'frensh'){
        source = langs.frensh
    }
    if(language == 'english'){
        source = langs.English
    }
    if(language == 'arabic'){
        source = langs.Arabic
    }


    const user = JSON.parse(localStorage.getItem('user'))
    const account = JSON.parse(localStorage.getItem('account'))


    
    const [ lang, setLang ] = useState(null)
    const [ theme, setTheme ] = useState(null)
    const newAccount = {
        lang: lang === null ? account?.lang : lang,
        theme: theme === null ? account?.theme : theme
    }
    const accountstat = lang == null && theme == null 


    const [image, setImage] = useState(null)
    const [fname, setFname] = useState(null)
    const [lname, setLname] = useState(null)
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [phone, setPhone] = useState(null)


    const updateObj = [
        image !== null ? { "propName": "profile", "value": image } : { "propName": null, "value": null },
        fname !== null ? { "propName": "fname", "value": fname } : { "propName": null, "value": null },
        lname !== null ? { "propName": "lname", "value": lname } : { "propName": null, "value": null },
        email !== null ? { "propName": "email", "value": email } : { "propName": null, "value": null },
        pass !== null ? { "propName": "pass", "value": pass } : { "propName": null, "value": null },
        phone !== null ? { "propName": "phone", "value": phone } : { "propName": null, "value": null },
    ]
    const profilestat = fname == null && lname == null && email == null && pass == null && phone == null
    const [url, setUrl] = useState()
    
    const selectImage = (e) => {
        setImage(e.target.files[0])
        setUrl(URL.createObjectURL(e.target.files[0]))
        console.log(url);
        console.log(image);
    }


    const [ profile, setProfile ] = useState(false)
    const [alert, setAlert] = useState(false)
    const urlImg = "http://localhost:3500/"

  return (
    <div className='profilePage'>
        {Header(source.account.account)}
        <hr></hr>
        <div className='content'>
            <div className='profile'> 
                <div className='user'>
                    <div className='image'> 
                        {user.profile !== 'profile' 
                            ? <img src={`${urlImg}${user.profile}`} /> 
                            : <span> <BiUser /> </span>
                        } 
                    </div>
                    <div className='body'>
                        <h1> {user.fname} {user.lname} </h1>
                        <h2> {user.email} </h2>
                    </div>
                </div>
                <button onClick={()=> setProfile(!profile)} className={`edit ${profile && "active"}`} > <BsFillPencilFill /> </button>
                <button onClick={()=> setAlert(true)} className='logOut'> <FiLogOut /> </button>

            </div>

            {profile ?
                <div className='form profileform'>
                    <div className='inputField'>
                        <label className="">
                            <div  htmlFor="dropzone-file" style={{backgroundImage:(`url(${urlImg}${user.profile})`)}}  className="image">
                                {user.profile !== 'profile' ? <img src={`${urlImg}${user.profile}`} /> : <span> <BiUser /> </span>}
                                <div className='edit'> <FaCamera /> </div>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={(e) => selectImage(e)} />
                        </label>
                    </div>

                    <img src={url} />

                    <div className='name'>
                        <div className='input'>
                            <label> {source.account.fname} </label> 
                            <input
                                onChange={(e)=> setFname(e.target.value)} 
                                name='first name'
                                type={'text'} defaultValue={user.fname} 
                            />
                        </div>
                        <div className='input'>
                            <label> {source.account.lname} </label> 
                            <input
                                onChange={(e)=> setLname(e.target.value)} 
                                name='last name' 
                                type={'text'} defaultValue={user.lname} 
                            />
                        </div>
                    </div>
                    <div className='input'>
                        <label> {source.account.phone} </label> 
                        <input onChange={(e)=> setPhone(e.target.value)} name='phone' type={'number'} defaultValue={user.phone} />
                    </div>
                    <div className='input'>
                        <label> {source.account.email} </label> 
                        <input onChange={(e)=> setEmail(e.target.value)} name='email' type={'email'} defaultValue={user.email} />
                    </div>
                    <div className='input'>
                        <label> {source.account.pass} </label> 
                        <input onChange={(e)=> setPass(e.target.value)} name='password' type={'password'} defaultValue={user.pass} />
                    </div>
                    <div className='buttons'>
                        {UpdateBtn(source.buttons.update, 'profile', updateObj, profilestat,)}
                        {Cancel(source.buttons.cancel, profilestat)}
                    </div>
                </div>
            :
                <div className='form'>
                    <div className='input'>
                    <label> {source.account.language} </label> 
                    <select onChange={(e) => {setLang(e.target.value)}}>
                        <option value={props.lang}> {account.lang} </option>
                        {langsobg.map((lang,key)=>(
                            lang.toLocaleLowerCase() !== props.lang &&
                            <option key={key} value={lang.toLocaleLowerCase()}> {lang} </option>
                        ))}
                    </select>
                    </div>
                    <div className='input'>
                    <label> {source.account.theme} </label> 
                    <select onChange={(e) => {setTheme(e.target.value)}}>
                        <option value={account.theme}> {account.theme} </option>
                        {themeobg.map((theme,key)=>(
                            account.theme !== theme.toLowerCase() &&
                            <option key={key} value={theme.toLocaleLowerCase()}> {theme} </option>
                        ))}
                    </select>
                    </div>
                    <div className='buttons'>
                        {UpdateBtn(source.buttons.update, 'account', newAccount, accountstat)}
                        {Cancel(source.buttons.cancel, accountstat )}
                    </div>
                </div>
            }
            {alert && LogoutAlert(props.lang, setAlert, user)}
        </div>
    </div>
  )
}

export default Profile