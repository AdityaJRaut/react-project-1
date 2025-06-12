import React from 'react'

const Button = (props) => {
const ButtonStyles={backgroundColor:props.color,margin:props.margin}
    return (
    <button style={ButtonStyles} onClick={props.handleClick}>{props.text}</button>
  )
}

export default Button