import React from "react";

const InputCreate = ({ type}) => {
  return (
    <input
      type="text"
      placeholder={type}
      onChange={(ev) => setNewMoto({ ...newMoto, type: ev.target.value })}
    />
  );
};

export default InputCreate;
