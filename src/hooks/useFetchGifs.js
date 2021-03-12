import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

   useEffect(() => {
       getGif( category )
        .then(
            images => {
                setTimeout(() => {
                    setState(
                        {
                            data: images,
                            loading: false
                        }
                    );
                }, 3000);
            }        
            )
   }, [ category ]);

    return state;
}
