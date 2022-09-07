import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {

    const {images, isLoading}= useFetchGifs( category ); 


  return (
    <>
        
        <h3>{category } </h3>
        
        {/*Condicional que se ejecuta solo si está en true */ isLoading && <h3>Cargando...</h3>}
        {/* no se usa la palabra class porque eso es de html y se está usando javascript, className se usa en react*/}
        <div className="card-grid">
            { 
                images.map( ( image ) =>(
                <GifItem key={image.id}

                    //Asi puedo enviar todas las propiedades de image, es decir title, url ...
                    {...image}
                />
                ))
                }
        </div>
    </>
    )
}

