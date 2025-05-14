import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { useAuth } from "../contextApi/AuthContext";

export const LandingPage = () => {

  const navigate = useNavigate();
  const { token } = useAuth();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  const dashBoardNavigateHandler = () => {
    navigate("/dashboard");
  }

  const description =
    `Linklytics agiliza el proceso de acortamiento de URL, 
    haciendo que compartir enlaces sea fácil y eficiente. 
    Con su interfaz facil de usar, Linklytics te permite generar URL concisas y fáciles de compartir en segundos. 
    Simplifica tu experiencia de compartir enlaces con Linklytics hoy mismo.`

    return (
      <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
        <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
          <div className=" flex-1">
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
            >
              Linklytics simplifica el acortamiento de URL para compartirlo de forma eficiente.
            </motion.h1>
            <p className="text-slate-700 text-sm my-5">
              {description}
            </p>
            <div className="flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={dashBoardNavigateHandler}
                className="bg-custom-gradient  w-40 text-white rounded-md  py-2"
              >
                Administrar Links
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={dashBoardNavigateHandler}
                className="border-btnColor border w-40 text-btnColor rounded-md  py-2 "
              >
                Crear un link corto
              </motion.button>
            </div>
          </div>
          <div className="   flex-1 flex   justify-center w-full">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sm:w-[480px] w-[400px] object-cover rounded-md"
              src="/images/img2.png"
              alt=""
            />
          </div>
        </div>
        <div className="sm:pt-12 pt-7">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
          >
            Confiado por individuos y equipos en las mejores empresas del mundo{" "}
          </motion.p>
          <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
            <Card
              title="Acortamiento de URL sencillo"
              desc="Experimenta la facilidad de crear URL cortas y memorables en solo unos clics. Nuestra interfaz intuitiva y proceso de configuración rápida garantizan que puedas comenzar a acortar URL sin complicaciones."
            />
            <Card
              title="Analítica potente"
              desc="Obtén información sobre el rendimiento de tus enlaces con nuestro completo panel de análisis. Rastrea clics, datos geográficos y fuentes de referencia para optimizar tus estrategias de marketing."
            />
            <Card
              title="Seguridad mejorada"
              desc="Ten la tranquilidad de contar con nuestras sólidas medidas de seguridad. Todas las URL acortadas están protegidas con cifrado avanzado, garantizando que tus datos permanezcan seguros."
            />
            <Card
              title="Rápido y confiable"
              desc="Disfruta de redirecciones ultrarrápidas y alta disponibilidad con nuestra infraestructura confiable. Tus URL acortadas siempre estarán disponibles y receptivas, garantizando una experiencia fluida para tus usuarios."
            />
          </div>
        </div>
      </div>
    );
  };