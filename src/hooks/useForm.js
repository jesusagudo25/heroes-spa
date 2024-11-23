import React from 'react'

export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = React.useState(initialForm);
    
    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
        ...formState,
        [name]: value
        });
    }

    const handleReset = () => {
        setFormState(initialForm);
    }
    
    return { 
        ...formState,
        formState, 
        handleInputChange,
        handleReset
    };
}
