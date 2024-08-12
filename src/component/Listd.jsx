import React from 'react'

const Listd = (props) => {
 
  return (
    <div  >
      
        <li className='LLL'  onClick={()=>{
          props.onSelect(props.id)
        }}>  {props.text} </li>
      
    </div>
  )
}

export default Listd
