import React, { useEffect, useState } from 'react'
import { FindSerie } from '../../../components/Find'
import {AiFillCaretRight} from 'react-icons/ai'
import { API, GenresData, SeasonsData } from '../../../API/API'
import { useLocation, useParams } from 'react-router-dom'
import {CancelBtn, Delete, Finish} from '../../../components/Buttons'
import { ChangeSubTitle } from '../../../components/ChangeTitle'


function Details() {

  const params = useParams()
  
  const data = FindSerie(params.id).data
  ChangeSubTitle(data?.doc.title)
  const genres = GenresData()
  const seasons = SeasonsData()
  
  console.log(seasons);
  
  const [deletebox, setDeleteBox] = useState(false)
  const url = "http://localhost:3500/"



  /*** Create Season ***/

  const [year, setYear] = useState(null)
  const [story, setStory] = useState(null)
  const [cardImg, setCardimg] = useState(null)
  const [backImg, setbackImg] = useState(null)
  const [trailler, settrailler] = useState('hi')

  const seasonobj = {
    'serieId': data?.doc._id,
    'bg_Img': backImg,
    'card_Img': cardImg,
    'story': story,
    'year': year,
    'trailer': trailler,
  }

  console.log(seasonobj);

  const [logourl, setLogoUrl] = useState()
  const [cardUrl, setCardUrl] = useState()
  const [bgurl, setBgUrl] = useState()

  const selectImage = (e, variable, urlimg) => {
    variable(e.target.files[0])
    urlimg(URL.createObjectURL(e.target.files[0]))
  }
  const seasonCondittion = backImg && cardImg && story && year && trailler

  let s = 1
  const [addSeason, setAddSeason] = useState(false)
  
  return (
    <div className='detailspage'>
      <div className='body'>
        <div className='row1'>
          <div>
            <div className='header'>
              <h1> {data?.doc.title} </h1>
            </div>

            <div className='item'>
              <label> <span> <AiFillCaretRight /> </span> TV Show Logo </label>
              <div className='itemcon image'>
                <img src={`${url}${data?.doc.logo_Img}`} />
              </div>
            </div>
            <div className='item'>
              <label> <span> <AiFillCaretRight /> </span> TV Show Title </label>
              <div className='itemcon'> {data?.doc.title} </div>
            </div>
            <div className='item'>
              <label> <span> <AiFillCaretRight /> </span> TV Show Id </label>
              <div className='itemcon'> {data?.doc._id} </div>
            </div>
            <div className='item'>
              <label> <span> <AiFillCaretRight /> </span> TV Show Genre </label>
              <div className='itemcon'>
                {genres?.map((item)=>{
                  return data?.doc.genre === item._id && item.title
                })} 
              </div>
            </div>
          </div>

          <div className='buttons'>
            <button onClick={()=> setDeleteBox(true)} className='btn delete'>Delete</button>
            <button className='btn edit'>Update</button>
          </div>

          {deletebox && 
            <div className='deletebox'>
              <div className='box'>
                <h1> {data?.doc.title} </h1>
                <p> Are you sure ! </p>
                <div className='buttons'>
                  {Delete('Yes', params.id)}
                  <button className='btn edit' onClick={()=> setDeleteBox(false)}>No</button>
                </div>
              </div>
            </div>
          }
        </div>

        <div className='row seasons'>
          {seasons?.map((item, key)=>(
            item.serie === data?.doc._id && 
            <div className='season' key={key}>
              <h1> Season {s} </h1>
              <div className='images'>
                <div className='item'>
                  <label> <span> <AiFillCaretRight /> </span> Season {s} Background image </label>
                  <div className='bg'> <img src={`${url}${item.bg_Img}`} /> </div>
                </div>
                <div className='item'>
                  <label> <span> <AiFillCaretRight /> </span> Season {s} Card image </label>
                  <div className='cardImg'> <img src={`${url}${item.card_Img}`} /> </div>
                </div>
              </div>
              <div className='item'>
                <label> <span> <AiFillCaretRight /> </span> Season {s} Id </label>
                <div className='itemcon'> { item._id} </div>
              </div>
              <div className='item'>
                <label> <span> <AiFillCaretRight /> </span> Season {s} Year </label>
                <div className='itemcon'> { item.year} </div>
              </div>
              <div className='item'>
                <label> <span> <AiFillCaretRight /> </span> Season {s} Story </label>
                <div className='itemcon'> { item.story} </div>
              </div>
              <div className='item'>
                <label> <span> <AiFillCaretRight /> </span> Season {s} Trailler </label>
              </div>
              {s += 1}
            </div>
          ))}
          <button onClick={()=> setAddSeason(true)} className='btn add'> Add New Season </button>
        </div>

        {addSeason &&
          <div className='addSeasonBox'>
            <div className='addSeason'>
              <h1> Create New Season </h1>
              
              <div className='form'>
                <div className='input'>
                  <input type={'text'} value={data?.doc.title} placeholder="TV Show" disabled />
                </div>
                <div className='input'>
                  <input onChange={(e) => {setYear(e.target.value)}} type={'number'} placeholder="Year" />
                </div>
                <textarea 
                  rows="3" 
                  className="block p-2.5 w-full text-sm text-gray-900" 
                  placeholder={`Write Season story here...`}
                  onChange={(e) => {setStory(e.target.value)}}
                ></textarea>
                <div className='input select'>
                  <h2> Card Image </h2>
                  <div className='inputimg'>
                    <img src={cardUrl} /> 
                  </div>
                  <input accept="image/*" onChange={(e) => selectImage(e, setCardimg, setCardUrl)} className="block w-full text-sm rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none" type="file" />
                </div>
                <div className='input select'>
                  <h2> Background Image </h2>
                  <div className='inputimg'>
                    <img src={bgurl} /> 
                  </div>
                  <input accept="image/*" onChange={(e) => selectImage(e, setbackImg, setBgUrl)} className="block w-full text-sm rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none" type="file" />
                </div>
                <div className='input select'>
                  <h2> Trailler </h2>
                  <input className="block w-full text-sm rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none" accept='video/*' type="file" />
                </div>
              </div>

              <div className='buttons'>
                  {Finish('Create', seasonCondittion, seasonobj, setAddSeason)}
                </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Details