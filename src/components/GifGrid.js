import React, { Fragment }  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGif';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    const state  = useFetchGifs( category );
    // console.log(state);
    const { data:images, loading } = state;

    // useEffect( () => {
    //     getGif( category ).then (
    //         images => setImages(images)
    //     )
    // },[category]);

    

    // getGif();


    return (
        <Fragment>
            <h3> { category } </h3>
            <h1> { loading && <p> Cargando... </p>} </h1>
            <div className= "card-grid">
                

                
                    {
                       
                        images.map( image  => <GifGridItem key = { image.id } { ...image } />)
                    }
                
                
            </div>
        </Fragment>
    )
}
