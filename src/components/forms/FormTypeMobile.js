import { useState } from "react";
import { Selector } from "../selectorTypeMobile/Selector";



export const FormTypeMobile = ({options}) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);
  
    console.log(options)
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!selectedOption) {
        setIsFormValid(false);
        return;
      }
  
      // Envía el formulario
      console.log("Formulario enviado");
      setIsFormValid(true);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Selector
          options={options.colors}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          className=""
          required={true}
        />
         <Selector
          options={options.storages}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          className="rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 appearance-none pr-8"
          required={true}
        />
        {!isFormValid && (
          <p className="text-red-500">Debe seleccionar una opción.</p>
        )}
        <button type="submit" className="btn btn-primary mt-2">
          Enviar
        </button>
      </form>
    );
  }