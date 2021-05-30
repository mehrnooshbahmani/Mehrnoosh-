import React from 'react'

interface Iprops{
    labelName: string;
    children?: any;
}

const Label: React.FC<Iprops> = ({labelName, children} : Iprops) =>{
return (<label>{`${labelName}: ${children}`}</label>)
}

export default Label