import {useState} from 'react';
import {AddCategory} from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Fútbol']);

    const onAddCategory = () => {
        setCategories([ "Fortnite", ...categories ]);
    }

    return (
        <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory setCategories={ setCategories } />

        {/* Listado de gifs */}
        <ol>
            { categories.map( category => { return <li key={ category }>{category}</li>})}
        </ol>
        {/* Gif Item */}
        </>
    )
}
    