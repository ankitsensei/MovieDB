import React, {useEffect} from 'react'
import axios from 'axios'

const BASE_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=2d5a1d48"

const getMovieData = async () => {
  try{
    const response = await axios.get(BASE_URL);
    console.log(response.data)
  }
  catch (error) {
    console.log(error)
  }
}
const App = () => {
  useEffect(() => {
    getMovieData()
  },[])
  return (
    <div className="bg-zinc-900 w-full h-screen text-white">
      <h1>Hello</h1>  
    </div>
  )
}

export default App
