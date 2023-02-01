import React from 'react'
import './Button.scss'

export function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  )
}
