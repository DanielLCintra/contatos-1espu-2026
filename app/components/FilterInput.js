"use client";

// Componente FilterInput
const FilterInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Filtrar por nome ou email..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-3 py-2 text-gray-900"
    />
  );
};

export default FilterInput;