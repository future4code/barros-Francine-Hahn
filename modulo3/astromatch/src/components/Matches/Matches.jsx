import React from 'react'


export function Matches(props) {
    const listOfMatches = () => {
        props.matches.map((item, index) => {
            return (
                <div key={index}>
                    <img src={item.photo} alt={item.photo_alt}/>
                    <p>{item.name}</p>
                </div>
            )
        })
    }
    
    return listOfMatches()
}