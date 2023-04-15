import React from "react";

export default function Select({ options, onChange, defaultValue }) {
  return (
    <select onChange={onChange} value={defaultValue ? defaultValue : ""}>
      <option value="" disabled>
        Selecciona un/a enfermero/a
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
