import {useState} from 'react';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Fútbol']);

    const onAddCategory = () => {
        setCategories([ "Fortnite", ...categories ]);
        //setCategories( cat => [...categories, "Fortnite"]);
    }

    return (
        <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        
        
        {/* Listado de gifs */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { categories.map( category => { return <li key={ category }>{category}</li>})}
        </ol>
        {/* Gif Item */}
        </>
    )
}
    