import React from 'react'

interface IProps { text: string; id: string }


const ListItem: React.FC<IProps> = ({ text }: IProps) => {
    return <li>{text}</li>
}

export default ListItem