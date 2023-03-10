import { useState } from "react";
import Button from "react-bootstrap/Button";
import Input from "./Input";
import Joi from "joi-browser";

const Form = ({
  inputs = [],
  header = "",
  onSubmit = () => {},
  submitLabel = "Enviar",
  validSchema,
}) => {
  const [inputValues, setInputValues] = useState({});
  const [error, setError] = useState({});

  const handleChange = ({ target: input }) => {
    setInputValues((prevValue) => ({
      ...prevValue,
      [input.name]: input.value,
    }));
  };

  const validate = () => {
    const { error } = Joi.validate(inputValues, validSchema);
    if (!error) return null;

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      const { message, path } = error.details[0];
      return setError({ [path]: message });
    }

    setError({});
    onSubmit(inputValues);
  };

  return (
    <div className="bg-img">
    <form onSubmit={handleSubmit} className="loginForm">
      {inputs.map(({ name, label, ...rest }) => (
        <Input
          key={name}
          name={name}
          label={label}
          value={inputValues[name] || ""}
          errors={error}
          onChange={handleChange}
          {...rest}
        ></Input>
      ))}

      <Button disabled={validate()} type="submit">
        Submit
      </Button>
    </form>
    </div>
   
  );
};

export default Form;
