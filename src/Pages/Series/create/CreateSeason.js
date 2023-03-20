import axios from 'axios'
import React, { useState } from 'react'
import { Finish } from '../../../components/Buttons'

function CreateSeason(props) {
    /*** Create Season ***/
    const serie = props.serie

    const [year, setYear] = useState(null)
    const [story, setStory] = useState(null)
    const [cardImg, setCardimg] = useState(null)
    const [backImg, setbackImg] = useState(null)
    const [trailler, settrailler] = useState('hi')

    const seasonobj = {
        'serieId': serie._id,
        'bg_Img': backImg,
        'card_Img': cardImg,
        'story': story,
        'year': year,
        'trailer': trailler,
    }

    const [cardUrl, setCardUrl] = useState()
    const [bgurl, setBgUrl] = useState()

    const selectImage = (e, variable, urlimg) => {
        variable(e.target.files[0])
        urlimg(URL.createObjectURL(e.target.files[0]))
    }
    const seasonCondittion = backImg && cardImg && story && year && trailler

    console.log(seasonobj);

    

  return (
    <>
    <div className='form'>
        <div className='input'>
            <input type={'text'} value={serie.title} placeholder="TV Show" disabled />
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
            <input accept="image/*" onChange={(e) => selectImage(e, setCardimg, setCardUrl)} className="block w-full text-sm rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none" type="file" />
        </div>
        <div className='input select'>
            <h2> Background Image </h2>
            <input accept="image/*" onChange={(e) => selectImage(e, setbackImg, setBgUrl)} className="block w-full text-sm rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none" type="file" />
        </div>
        <div className='input select'>
            <h2> Trailler </h2>
            <input className="block w-full text-sm rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none" accept='video/*' type="file" />
        </div>
    </div>
    <div className='buttons'>
        {Finish('Create', seasonCondittion, seasonobj, props.setAddSeason)}
        <button className="btn cancelbtn" onClick={()=> props.setAddSeason(false)}> Cancel </button>
    </div>
    </>
  )
}

export default CreateSeason