import React from 'react'
import { useEffect,} from 'react';
import { useDispatch } from 'react-redux';
import RandomCard from '../RandomCard/RandomCard'
import Wrapper from '../Wrapper/Wrapper'

export default function HomePage() {
    const dispatch = useDispatch()

  const fetchAPI = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?limit=99&apikey=1c9cf65b61735976e916305bad81565d`
    );

    const resJS = await res.json()

    dispatch({
      type: "GET_CARDS",
      payload: {
        characters:  resJS.data.results
      }
    })

  };
  useEffect(()=>{
    fetchAPI()
  }, [])
  return (
    <div>
    <RandomCard />
    <Wrapper />
    </div>
  )
}
