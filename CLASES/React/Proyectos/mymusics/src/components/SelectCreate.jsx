import React from "react";

const SelectCreate = ({ type, newMoto, setNewMoto }) => {
  const options = [
    Naked,
    Custom,
    Scooter,
    Sport,
    Trial,
    Supermotard,
    Enduro,
    Cross,
    Infantil,
  ];
  const carnets = [A2, A, B];

  return (
    <select
      onChange={(ev) => setNewMoto({ ...newMoto, type: ev.target.value })}
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectCreate;
