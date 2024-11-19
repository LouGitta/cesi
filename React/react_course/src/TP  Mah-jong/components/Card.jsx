import React from 'react'

export default function Card(props) {

  return (
    props.item.status !== 'found' ?
    <div className={props.item.isSelected ? 'green': ''}>
        <img  onClick={() => props.handleChangeSelected(props.item)}  src={`../public/${props.item.img}.webp`} width="80" />
    </div>
    : <div></div>
  )
}
