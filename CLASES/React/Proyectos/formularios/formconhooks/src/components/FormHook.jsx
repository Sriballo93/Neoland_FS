import React from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
  const { handleSubmit, register } = useForm();

  const onFormSubmit = (values) => {
    console.log(values);
  };

  const onFormErrors = (errors) => {
    console.error(errors);
  };

  return (
    <div>
      <h1>Formulario con hooks</h1>
      <form onSubmit={handleSubmit(onFormSubmit, onFormErrors)}>
        <h3>Coloca tu nombre</h3>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          {...register("username", {
            required: true,
            minLength: 5,
          })}
        ></input>
        <h3>Coloca tu password</h3>
        <input
          type="text"
          placeholder="password"
          id="password"
          name="password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHook;
