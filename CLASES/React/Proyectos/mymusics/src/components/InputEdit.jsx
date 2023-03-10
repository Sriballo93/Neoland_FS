import React from "react";

const InputEdit = ({ type, editMoto, setEditMoto }) => {
  return (
    <input
      type="text"
      placeholder={type}
      value={editMoto.type}
      onChange={(ev) => setEditMoto({ ...editMoto, type: ev.target.value })}
    />
  );
};

export default InputEdit;
