import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSugg from './GptMovieSugg'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10 inset-0">
            <img 
            className="w-full h-full object-cover"
            alt='GPT Background'
            src={BG_URL}
            />
        </div>
        <GptSearchBar/>
        <GptMovieSugg/>
    </div>
  )
}

export default GptSearch