import Form from "../components/common/Form";
import http from "../services/httpService";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import AuthConsumer from "../hooks/useAuth";
import user from "../services/userService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [, dispatch] = AuthConsumer();
  const navigate = useNavigate();

  const schema = {
    name: Joi.string().required(),
    surname: Joi.string().required(),
    legalID: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),

  };

  const handleSubmit = async (account) => {
    try {
      const jwt = await user.register(account);
      const { isAdmin } = user.loginWithToken(jwt);

      dispatch({ type: isAdmin ? "admin" : "login" });
      navigate(-1);
    } catch (err) {
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <Form
      inputs={[
        { name: "name", label: "Nombre" },
        {name: "surname", label: "surname"},
        { name: "email", label: "email" },
        {name: "legalID", label: "legalID"},
        { name: "password", label: "Contraseña", type: "password" },
      ]}
      onSubmit={handleSubmit}
      header="Crear una cuenta"
      submitLabel="Registrarse"
      validSchema={schema}
    />
  );
};

export default SignUp;
