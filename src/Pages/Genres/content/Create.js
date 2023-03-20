import React, { useState } from 'react'
import { CancelBtn, CreateBtn, CreateGenre, CreateGenrebtn } from '../../../components/Buttons'
import { ChangeSubTitle } from '../../../components/ChangeTitle'
import { Header } from '../../../components/Headers'

function Create() {
  ChangeSubTitle("Create Genre")
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState(null)

    const [url, setUrl] = useState()

    const selectImage = (e) => {
        setImage(e.target.files[0])
        setUrl(URL.createObjectURL(e.target.files[0]))
        console.log(url);
    }

    const genre = {
        bg_Img: image,
        title: title,
    }
    console.log(genre);

  return (
    <div className='create'>
        {Header("Create New Genre", null, null)}
        <hr></hr>

        <div className='content'>
            <div className="image-input flex items-center justify-center w-full">
                  {url ?  
                    <div className='logo'>
                      <img src={url} /> 
                    </div>
                  :
                    <label className="image flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> </p>
                            <p className="text-xs">SVG, PNG, JPG</p>
                        </div>
                        <input 
                          id="dropzone-file" 
                          type="file" 
                          className="hidden" 
                          accept="image/*" 
                          onChange={(e) => selectImage(e)}
                        />
                    </label>
                  }
            </div>
            <div className='serieForm'>
                <div className='input'>
                  <input type={'text'} placeholder="Genre Title" onChange={(e) => {setTitle(e.target.value)}} />
                </div>
            </div>
            <div className='buttons'>
                {CreateGenrebtn('Create', genre)}
                {CancelBtn('/genres')}
              </div>
        </div>
    </div>
  )
}

export default Create