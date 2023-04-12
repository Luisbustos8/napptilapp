import React from "react";

export const ButtonGroup = ({ options, onSelect, label, selected }) => {
  return (
    <>
    <label>Choose your favorite {label}</label>
    <div className="flex flex-row space-x-4 mx-2 my-2">
      {options.map((option) => (
        <button
          key={option.code}
          className={`${selected === option.code ? 'bg-black px-4 py-2 rounded-md shadow-md text-white' : 'bg-white px-4 py-2 rounded-md shadow-md hover:bg-gray-300'}`}
          onClick={() => onSelect(option.code)}
        >
          {option.name}
        </button>
      ))}
    </div>
    </>
  );
};

export default ButtonGroup;