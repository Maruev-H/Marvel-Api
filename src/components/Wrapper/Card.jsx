import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Wrapper.scss'

export default function Card({item,}) {
  const dispath = useDispatch()

  const person = useSelector((state)=> state.person)
  const fetchCard = (id) => {
      dispath({
        type: 'CARD_INFO',
        payload: {
          id: id
        }
      })
  };
  
  return (
      <div className={`card ${person.id === item.id ? 'da':'net'}`} onClick={()=>{fetchCard(item.id)}} key={item.id}>
        <img  className='image' src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt='img'/>
        <div className='charaster__name'>
          <h1>{item.name}</h1>
        </div>
      </div>
  )
}

// src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
