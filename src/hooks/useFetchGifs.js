import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading]=useState( true )

    const getImages= async() =>{
        const newImages=await getGifs( category );
        //Poner esas imágenes en el useState
        setImages( newImages );
        setLoading(false); 
        
    }
//useEffect es para disparar procesos cuando algo suceda
//En este caso es para que cada vez que se agregue una categoría no se redibuje todo
    useEffect(()=>{
       getImages();
        //al dejar las dependencias [] vacías solo se ejecuta la primera vez que se ejecuta
    },[ ])

  return {
    //si el valor es el mismo nombre se puede dejar solo una pabra, en este caso images y isLoading
    images,
    isLoading
  }
}
