import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSugg from './GptMovieSugg'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img 
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