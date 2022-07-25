import React, { useEffect, useState } from 'react'

export default function ListCategories(props) {
    const [cat, setCat] = useState('')

    useEffect(() => {
        props.onClick(cat);
    });

    return (
        <div>
            {props.categories.map((cat) => { return (<div onClick={() => setCat(cat.id)}>{cat.name}</div>) })}
        </div>
    )
}