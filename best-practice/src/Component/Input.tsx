import React from 'react'


interface IProps {
    name: string;
    onInputchange: (e:any)=>void
}

const Input: React.FC<IProps> = ({name,onInputchange}:IProps) => {
    return (<input name={name}  onChange={onInputchange} />)
}

export default Input