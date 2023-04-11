import { useState } from "react";

export const Selector = ({ options, selectedOption, onChange, className, required }) => {
    const [isValid, setIsValid] = useState(true);

    const handleOnChange = (event) => {
      setIsValid(true);
      onChange(event.target.value);
    };
  
    return (
      <div className="relative">
        <select
          value={selectedOption}
          onChange={handleOnChange}
          className={`${className}`}
          required={required}
        >
          <option value="" disabled hidden>
            Please select one option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {!isValid && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0 1 1 0 012 0zm-.5-4a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    );
  }