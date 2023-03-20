import './Create.css'
import { Header } from '../../../components/Headers'
import {GenresData} from '../../../API/API'
import { useState } from 'react'
import { CreateBtn, CancelBtn, Finish } from '../../../components/Buttons'

import {AiFillCheckCircle} from 'react-icons/ai'
import { ChangeSubTitle } from '../../../components/ChangeTitle'
import axios from 'axios'


function Create() {
  ChangeSubTitle('Create TV Show')

  const [step, setStep] = useState(0)

  const [serie, setSerie] = useState()
  const [genre, setGenre] = useState()
  const [logoImg, setlogoImg] = useState()

  const [year, setYear] = useState(null)
  const [story, setStory] = useState(null)
  const [cardImg, setCardimg] = useState(null)
  const [backImg, setbackImg] = useState(null)
  const [trailler, settrailler] = useState('hi')

  const serieobj = {
    'title': serie,
    'logo_Img': logoImg,
    'genreId': genre,
  }

  

  const [logourl, setLogoUrl] = useState()
  const [cardUrl, setCardUrl] = useState()
  const [bgurl, setBgUrl] = useState()

  const selectImage = (e, variable, urlimg) => {
    variable(e.target.files[0])
    urlimg(URL.createObjectURL(e.target.files[0]))
  }
  const genres = GenresData()


  const seasonobj = {
    'serieId': '',
    'bg_Img': backImg,
    'card_Img': cardImg,
    'story': story,
    'year': year,
    'trailer': trailler,
  }
  const seasonCondittion = backImg && cardImg && story && year && trailler

  const [series, setSeries] = useState()
  axios.get("http://localhost:3500/series").then((response) => {
      setSeries(response.data);
  });

  series?.map((item)=>(
    item.title === serie ? seasonobj.serieId = item._id : ""
  ))


  return (
    <div className='create'>
      {Header("Create New TV Show", null, null)}
      <hr></hr>

      <div className='content'>
        <div className='progress'>
          <h1 className={`finished ${step === 0 ? 'active' : 'inactive'}`}> TV Show <span> {step === 1 && <AiFillCheckCircle /> } </span> </h1>
          <h1 className={step === 1 ? 'active' : 'inactive'}> Seasons </h1>
        </div>

        {step == 0 ? 
            <div className='serie'>
              <div className="image-input flex items-center justify-center w-full">
                  {logourl ?  
                    <div className='logo'>
                      <img src={logourl} /> 
                    </div>
                  :
                    <label className="image flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm">Click to upload <span className="font-semibold">TV Show Logo</span></p>
                            <p className="text-sm"></p>
                        </div>
                        <input 
                          id="dropzone-file" 
                          type="file" 
                          className="hidden" 
                          accept="image/*" 
                          onChange={(e) => selectImage(e, setlogoImg, setLogoUrl)}
                        />
                    </label>
                  }
              </div>
              <div className='serieForm'>
                <div className='input'>
                  <input type={'text'} placeholder="TV Show Title" onChange={(e) => {setSerie(e.target.value)}} />
                </div>
                <select id="countries" className="" onChange={(e) => {setGenre(e.target.value)}}>
                  <option value={null}>TV Show Genre</option>
                  {genres?.map((genre,key)=>(
                    <option key={key} value={genre._id}> {genre.title} </option>
                  ))}
                </select>
              </div>
              <div className='buttons'>
                {CreateBtn('Next', serieobj ,setStep)}
                {CancelBtn('/tv_shows')}
              </div>
            </div>
          : 
            <div className='form'>
              <h1> Season 1  </h1>
              <div className='input'>
                <input type={'text'} placeholder="TV Show" value={serie} disabled />
              </div>
              <div className='input'>
                <input type={'number'} placeholder="Year" onChange={(e) => {setYear(e.target.value)}} />
              </div>
              <textarea 
                rows="3" 
                className="block p-2.5 w-full text-sm text-gray-900" 
                placeholder={`Write ${serie  ? serie : ''} tv show story here...`}
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

              <div className='buttons'>
                {Finish('Finish', seasonCondittion, seasonobj)}
                {CancelBtn('/tv_Shows')}
              </div>
            </div>
        }


      </div>

    </div>
  )
}

export default Create