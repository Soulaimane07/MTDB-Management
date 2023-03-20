import {IoMdClose} from 'react-icons/io'
import {BiUser} from 'react-icons/bi'
import langs from '../Lang/Lang.json'

export const LogoutAlert = (lang, alert, user) => {
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
    
    const urlImg = "http://localhost:3500/"
    
    const Remove = () => {
        localStorage.removeItem("user")
        window.location.reload(false)
    }

    return (
        <div className="alert">
            <div className="alertBox">
                <button  onClick={()=> alert(false)} className="close"> <IoMdClose /> </button>
                <div className='image'> 
                    {user.profile !== 'profile'
                    ? <img src={`${urlImg}${user.profile}`} />
                    : <span> <BiUser /> </span>
                    }
                </div>
                <p>{source.alerts.logout}</p>
                <div className="buttons">
                    <button onClick={()=> alert(false) } className='edit'>{source.alerts.no}</button>
                    <button onClick={()=> Remove()} className='logOut'>{source.alerts.yes}</button>
                </div>
            </div>
        </div>
    )
}