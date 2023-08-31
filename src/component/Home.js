import React, { useEffect } from 'react'
import MovieListing from '../component/MovieListing'
import {ApiKey} from '../common/api/MovieApiKey'
import MovieApi from '../common/api/moviApi'
const Home = () => {

    useEffect(()=>{
      const fetchMovie = async()=>{
        console.log(1111)
        const movieText ="Harry"
        //  const response = await MovieApi
        //                   .get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
        //                   .catch((err)=>{
        //                     console.log('error fetching movie:', err)
        //                   })
        //                   console.log(response)
      }
      fetchMovie()
    },[])
  return (
    <main>
     <img src={require('../images/logo.jpg')} alt=''/>
      <MovieListing/>
     </main>
  )
}

export default Home