import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  //la raíz on hace referencia a emitir algo o a un evento
  const onInputChange=({target})=>{
      setInputValue(target.value);
  }

  const onSubmit=(event)=>{
      event.preventDefault();

      //Evitar menos de un caracter, return es como un break en este caso
      if (inputValue.trim().length <= 1  ) return;

      //setCategories trae implicito el valor de categories que se guardó en el componente GisfExpert
      //setCategories(categories=>[inputValue,...categories])

       onNewCategory(inputValue.trim());

      setInputValue('');
      //console.log(inputValue )
  }
  return (
    // onSubmit={ (event)=>onSubmit(event) } esto puede se puede escribir dejar solamente como onSubmit
    <form onSubmit={ onSubmit }>

      <input
        type={"text"}
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange }
    />  
    </form>
)
}
