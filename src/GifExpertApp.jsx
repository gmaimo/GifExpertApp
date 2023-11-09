import {useState} from 'react';
import {AddCategory} from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Fútbol']);

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;
        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ (value) => onAddCategory(value) }
        />

        {/* Listado de gifs */}
        <ol>
            { categories.map( category => { return <li key={ category }>{category}</li>})}
        </ol>
        {/* Gif Item */}
        </>
    )
}
    