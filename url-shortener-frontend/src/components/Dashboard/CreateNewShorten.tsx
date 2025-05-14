import { useState } from "react";
import { useAuth } from "../../contextApi/AuthContext";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import api from "../../api/api";
import toast from "react-hot-toast";

export const CreateNewShorten = ({ setOpen, refetch }: { setOpen: (open: boolean) => void; refetch: any }) => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data: { originalUrl: string }) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      await refetch();
      setOpen(false);
      reset();

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${res.data.shortUrl}`;
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Link corto copiado con éxito", {
          position: "bottom-center",
          className: "mb-5",
          duration: 3000,
        });
      });
    } catch (error) {
      toast.error("Create ShortURL Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-white rounded-md">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[450px] w-[360px] relative shadow-custom pt-8 pb-5 sm:px-8 px-4 rounded-lg"
      >
        <h1 className="font-montserrat sm:mt-0 mt-3 text-center  font-bold sm:text-2xl text-[22px] text-slate-800 ">
          Crea un nuevo link corto
        </h1>

        <hr className="mt-2 sm:mb-5 mb-3 text-slate-950" />

        <div>
          <TextField
            label="Ingresa URL"
            required
            id="originalUrl"
            placeholder="https://example.com"
            type="url"
            message="La Url es requerida"
            register={register}
            errors={errors}
          />
        </div>

        <button
          className="bg-customRed font-semibold text-white w-32  bg-custom-gradient  py-2  transition-colors  rounded-md my-3"
          type="submit"
        >
          {loading ? "Cargando..." : "Crear"}
        </button>

        {!loading && (
          <Tooltip title="Cerrar">
            <button
              disabled={loading}
              onClick={() => setOpen(false)}
              className=" absolute right-2 top-2  "
            >
              <RxCross2 className="text-slate-800   text-3xl" />
            </button>
          </Tooltip>
        )}
      </form>
    </div>
  );
};
