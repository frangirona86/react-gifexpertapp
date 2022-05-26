import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertAPP = ()=>{

    const [categories, setCategorias] = useState(['One Punch']);

    // const handleAdd = ()=>{
    //     // setCategorias([...categories, 'Simpsons']);
    //     setCategorias(cats => [...cats,'Simpsons']);
        

    // }
    return(
        <>
            <h2>Gif Expert APP</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr></hr>
           
            <ol>
                { 
                categories.map( category => (  
                <GifGrid 
                key={category}
                category={category}
                />
                ))
                }
            </ol>
        </>
    );
  }
  
  
  export default GifExpertAPP;