import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";
import { useAuth } from "../contextApi/AuthContext";


export const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data: any) => {
    setLoader(true);
    try {
      const { data: response } = await api.post("/api/auth/public/login", data);
      // store token in local storage
      console.log(response.token);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Login Successful!");
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[360px]  shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
          Ingrese sus credenciales
        </h1>

        <hr className="mt-2 mb-5 text-black" />

        <div className="flex flex-col gap-3">
          <TextField
            label="Nombre de Usuario"
            required
            id="username"
            type="text"
            message="*El nombre de usuario es requerido"
            placeholder="Ingrese su nombre de usuario"
            register={register}
            errors={errors}
          />

          <TextField
            label="Contraseña"
            required
            id="password"
            type="password"
            message="*La contraseña es requerida"
            placeholder="Ingrese contraseña"
            register={register}
            min={6}
            errors={errors}
          />
        </div>

        <button
          disabled={loader}
          type="submit"
          className="bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
        >
          {loader ? "Cargando..." : "Ingresar"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-6">
          ¿No tiene una cuenta?
          <Link
            className="font-semibold underline hover:text-black ml-1"
            to="/register"
          >
            <button className="text-btnColor rounded-md w-25 font-semibold px-2 py-1 ml-1 outline-1">Registrarse</button>
          </Link>
        </p>
      </form>
    </div>
  );
};
