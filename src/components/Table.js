import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API, GenresData, SeasonsData } from '../API/API'
import { AlineBtn, DetailsLink, Show } from './Buttons'

import { AiFillEye, AiOutlineAlignLeft, AiOutlineAppstore } from 'react-icons/ai'
import Searchbar from './Search/Searchbar'
import langs from '../Lang/Lang.json'

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'


const alineBtns = [ <AiOutlineAlignLeft />, <AiOutlineAppstore /> ]
const url = "http://localhost:3500/"

let account = {
    "lang":"english",
    "theme": "light"
}
// account = JSON.parse(localStorage.getItem('account'))

const lang = account?.lang
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





const manage = (aline, setAline, setSearch) => {
    return(
        <div className='manage'>
            <Searchbar setSearch={setSearch} />
            {aline !== null &&
            <div className='aline'>
                {alineBtns.map((btn,key)=>(
                    AlineBtn(btn, setAline, key , key === aline && 'active')
                ))}
            </div>
            }
        </div>
    )
}

const SeriesTable = (data, searchOp) => {
    const genres = GenresData()
    const seasons = SeasonsData()

    const [aline, setAline] = useState(0)
    const [search, setSearch] = useState('')
    
    const season = (serie) => {
        let se = 0

        {seasons?.map((season, key)=>(
            season.serie == serie ? se = se+1 : 0 
        ))}

        return se
    }

    const [plus, setPlus] = useState(20)
    const [min, setMin] = useState(0)

    console.log(data);

    return (
        <div className='tablecom'>
            {manage(aline, setAline, setSearch)}
            {aline === 0 ?
                <>
                <table className='table'>
                    <thead>
                        <tr>
                            <td className='id'>#</td>
                            <td className='id'>{source.table.id}</td>
                            <td className='title'>{source.table.title}</td>
                            <td>{source.table.genre}</td>
                            <td className='id'>{source.table.seasons}</td>
                            <td className='button'></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.filter((val)=>{
                            if(search === ""){
                                return val
                            }else if(val.title.toLowerCase().includes(search.toLowerCase()) || val._id.toLowerCase().includes(search.toLowerCase())){
                                return val
                            }
                        }).map((val,key)=>(
                            key > min-1 & key < plus ?
                            <tr key={key}>
                                <td className='id'>{key+1}</td>
                                <td className='id'> {DetailsLink(val._id, val._id, 'link')} </td>
                                <td className='title'> <strong> {val.title} </strong></td>
                                <td> 
                                    {genres?.map((genre)=>(
                                        genre._id === val.genre && genre.title 
                                    ))} 
                                </td>
                                <td className='season id'>
                                    {season(val._id)}
                                </td>
                                <td className='button'> {Show(<AiFillEye /> ,"details", val._id)} </td>
                            </tr>
                            :""
                        ))}
                    </tbody>
                </table>
                {data?.length > 0 && data?.length > 20 &&
                <div className='list'>
                    <button 
                        onClick={()=> setPlus(plus-20) & setMin(min-20)}
                        disabled={min <= 0 && true}
                        className={min <= 0 && 'disabled'}
                    > <span> <HiOutlineChevronLeft /> </span> PREVIOUS </button>
                    <h1> {min+1} to {plus > data?.length ? data?.length : plus} </h1>
                    <button 
                        onClick={()=> setPlus(plus+20) & setMin(min+20)}
                        disabled={plus > data?.length && true}
                        className={plus >= data?.length && 'disabled'}
                    > NEXT <span> <HiOutlineChevronRight /> </span> </button>
                </div>
                }
                </>
                :
                <div className='cards'>
                    {data?.filter((val)=>{
                            if(search === ""){
                                return val
                            }else if(val.title.toLowerCase().includes(search.toLowerCase()) || val._id.toLowerCase().includes(search.toLowerCase())){
                                return val
                            }
                        }).map((val,key)=>(
                        <div key={key} className='card serieCard'>
                                {DetailsLink(val._id, <img src={`${url}${val.logo_Img}`} />, 'image')}
                                {console.log(`${url}${val.logo_Img}`)}
                                <div className='details'>
                                    <h1> {val.title} </h1>
                                    {/* <Link to="details" className='link'> <span> <AiOutlineLink /> </span> {val._id}</Link> */}
                                    {/* {DetailsLink(val._id, val._id, 'link')} */}
                                    <h2> 
                                        {genres?.map((genre)=>(
                                            genre._id === val.genre && genre.title 
                                        ))}  
                                    </h2>
                                    <h2> 
                                        <span>{season(val._id)}</span>
                                        seasons
                                    </h2>
                                </div>
                        </div> 
                    ))}
                </div>
            }
        </div>
    )
}

const GenresTable = (data) => {
    const [search, setSearch] = useState('')
    
    return (
        <div className='tablecom'>
            {manage(null, null, setSearch)}
            <div className='cards'>
                {data?.filter((val)=>{
                    if(search === ""){
                        return val
                    }else if(val.title.toLowerCase().includes(search.toLowerCase()) || val._id.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                }).map((val,key)=>(
                    <div key={key} className='card'>
                        {DetailsLink(val._id, <img src={`${url}${val.bg_Img}`} />, 'image')}
                        <div className='details'>
                            <h1> {val.title} </h1>
                            {/* <Link to="details" className='link'> <span> <AiOutlineLink /> </span> {val._id}</Link> */}
                            {DetailsLink(val._id, val._id, 'link')}
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}

const NetworksTable = (data) => {
    const [search, setSearch] = useState('')

    return (
        <div className='tablecom'>
            {manage(null, null, setSearch)}
            
        </div>
    )
}

const UsersTable = (data) => {
    const [aline, setAline] = useState(0)
    const [search, setSearch] = useState('')

    return (
        <div className='tablecom'>
            {manage(aline, setAline, setSearch)}
            {aline === 0 ?
                <table className='table'>
                    <thead>
                        <tr>
                            <td className='id'>#</td>
                            <td className='id'>{source.table.id}</td>
                            <td>{source.table.fullName}</td>
                            <td className='title'>{source.account.email}</td>
                            <td>{source.account.pass}</td>
                            <td>{source.table.status}</td>
                            <td className='button'></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.filter((val)=>{
                            if(search === ""){
                                return val
                            }else if(val.email.toLowerCase().includes(search.toLowerCase()) || val._id.toLowerCase().includes(search.toLowerCase())){
                                return val
                            }
                        }).map((val,key)=>(
                        <tr key={key}>
                            <td className='id'> {key+1} </td>
                            <td className='id'><Link to="details" className='link'>{val._id}</Link></td>
                            <td><strong> {val.fname} {val.lname} </strong></td>
                            <td className='title'>{val.email}</td>
                            <td> {val.pass} </td>
                            <td> {val.status} </td>
                            <td className='button'> {Show( <AiFillEye /> ,"details")} </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            :'hello'
            }
        </div>
    )
}

export { SeriesTable, GenresTable, NetworksTable, UsersTable }