import React from 'react'
import ListItem from './ListItem'
import { IVisit } from '../Models/visit'

interface IProps {  data: IVisit[] }

const List : React.FC<IProps> = ({ data }: IProps) => {
    const items = data.map(item => <ListItem id={item._id} text={`${item.title} ${item.location}`} />)
    return (
        <ul>
            {items}
        </ul>
    )
}

export default List