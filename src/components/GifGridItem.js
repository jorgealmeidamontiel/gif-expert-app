import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    // console.log( props.img );


    return (
        <div>
            <img className="card animate__animated animate__fadeInDown" src = { url } alt= { title } />
            <p>{ title }</p>            
        </div>
    )
}
