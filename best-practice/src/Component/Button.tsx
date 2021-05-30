import React from 'react'

interface Iprops{
  btnName: string
}

const Button: React.FC<Iprops>=(btnName: Iprops)=>{
 return <button>{btnName}</button>
}

export default Button