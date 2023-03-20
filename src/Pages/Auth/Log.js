import axios from "axios"
import { UsersData } from "../../API/API"
import { useNavigate } from "react-router-dom";

export const Log = (user, setLogged) => {
  const users = UsersData()
  const navigate = useNavigate();
    
    users?.map((item,key)=>(
        item.email === user.email & item.pass === user.pass &&
            <>    
            {localStorage.setItem('user', JSON.stringify(item))}
            {setLogged(true)}
            {navigate('/', {replace: true})}
            {window.location.reload(false)}
            </>
    ))
}

export const Signfun = (user, setLogged) => {
    axios.post(`http://localhost:3500/users/`, user ,{headers:{"Content-Type" : "application/json"}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    {localStorage.setItem('user', JSON.stringify(user))}
    {setLogged(true)}
    {window.location.reload(false)}
}