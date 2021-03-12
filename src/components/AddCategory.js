import React, { useState } from 'react'
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        const value = e.target.value;
        setInputValue(value); 
    }
    
    const handleSudmit = (e) => {
        e.preventDefault();
        setInputValue(inputValue.trim());

        if ( inputValue.length > 1 && inputValue != null ) {
            
            setCategories( values => [ inputValue, ...values ] );
            setInputValue('');
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Should add an input value!',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }       
    }



    return (
        <div>
            <form onSubmit = { handleSudmit }>
                <h2>Add Category</h2>

                <input 
                    type="text" 
                    value = { inputValue }
                    onChange = { handleInputValue }
                    />
           </form> 
        </div>
    )
}

AddCategory.propTypes  = {
    setCategories: PropTypes.func.isRequired  
}
