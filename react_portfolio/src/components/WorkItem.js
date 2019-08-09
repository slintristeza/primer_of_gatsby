import React from 'react'
import './Works.css'

const WorkItem = props => {
  return (
    <>
      <li className="workItem">
        <img
          className="workItem-image"
          src="https://dummyimage.com/600x300/eee/ccc"
          alt="work 1"
        />
        <h3 className="workItem-category">{props.category}</h3>
        <h3 className="workItem-title">{props.title}</h3>
      </li>
    </>
  )
}

export default WorkItem
