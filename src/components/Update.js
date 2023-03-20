import axios from "axios"

export const UpdateAccount = (data) => {
    localStorage.setItem('account', JSON.stringify(data))
    window.location.reload(false)
}

export const UpdateProfile = (data) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user._id
    alert(userId)

    axios.patch(`http://localhost:3500/users/${userId}`, data ,{headers:{"Content-Type" : "application/json"}})
      .then(res => {
        console.log(res);
        console.log(res.data);
        // {localStorage.setItem('user', JSON.stringify())}
    })
}