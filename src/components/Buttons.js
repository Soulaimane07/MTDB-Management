import { Link, NavLink } from "react-router-dom"
import {AiFillPlusCircle} from 'react-icons/ai'
import { CreateGenre, CreateSeason, CreateSerie } from "./Create"
import { UpdateAccount, UpdateProfile } from "./Update"
import { DeleteSerie } from "./Delete"

const Logo = () => {
    return(
        <Link to='/' className="logo">
            <img src="../assets/images/hulu.png" />
        </Link>
    )
}

const NavItem = (key, title, link, icon) => {
    return (
        <NavLink activateclassname='active' className="link" key={key} to={link}>
            <span> {icon} </span>
            <h2> {title} </h2>
        </NavLink>
    )
}

const Show = (inside, link, id) => {
    return(
        <Link to={`${link}/${id}`} className="show">
            {inside}
        </Link>
    )
}

const AddItem = (create) => {
    return(
        <Link className="addItem" to="create" >
            <span> <AiFillPlusCircle /> </span>
            <h3> {create} </h3>
        </Link>
    )
}

const CreateBtn = (item, serie, step) => {
    return (
        <button 
            disabled={serie.title && serie.logo_Img && serie.genreId ? false : true}
            onClick={()=> CreateSerie(serie, step)} 
            className={`btn  ${serie.title && serie.logo_Img && serie.genreId ? 'createbtn' : 'dis'}`} 
        >
            <h3> {item} </h3>
        </button>
    )
}

const CancelBtn = (link) => {
    return (
        <Link to={link} className="btn cancelbtn">
            <h3> Cancel </h3>
        </Link>
    )
}

const AlineBtn = (icon, setAline, key, active) => {
    return (
        <button key={key} onClick={()=> setAline(key)} className={`alinebtn ${active}`}>
            {icon}
        </button>
    )
}

export const DetailsLink = (id, content, classname) => {
    return( 
        <Link to={`details/${id}`} className={classname}>
            {content}
        </Link>
    )
}

export const UpdateBtn = (update, btn, data, stat) => {
    return(
        <button 
            onClick={()=> btn == 'account' ? UpdateAccount(data) : UpdateProfile(data)}
            disabled={stat && true} 
            className={`btn ${stat ? 'dis' : 'createbtn'}`}
        >
            {update}
        </button>
    )
}

export const Cancel = (Cancel, stat) => {
    return(
        <button 
            onClick={()=> window.location.reload(false)}
            disabled={stat && true} 
            className={`btn cancelbtn ${stat && 'dis'}`}
        >
            {Cancel}
        </button>
    )
}

export const CreateGenrebtn = (item, genre) => {
    return(
        <button 
            onClick={()=> CreateGenre(genre)}
            disabled={genre.title && genre.bg_Img ? false : true}
            className={`btn  ${genre.title && genre.bg_Img ? 'createbtn' : 'dis'}`} 
        >
            <h3> {item} </h3>
        </button>
    )
}

export {NavItem, Logo, Show, AddItem, CreateBtn, CancelBtn, AlineBtn}

export const Finish = (item, condittion, data, step) => {
    return (
        <button 
            disabled={condittion ? false : true}
            onClick={()=> CreateSeason(data, step)} 
            className={`btn ${condittion ? 'createbtn' : 'dis'}`} 
        >
            <h3> {item} </h3>
        </button>
    )
}

export const Delete = (string, id) => {
    return(
        <button className="btn cancelbtn" onClick={()=> DeleteSerie(id)}>
            {string}
        </button>
    )
}