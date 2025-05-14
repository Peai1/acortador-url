import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

export const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8 flex justify-center items-center flex-col">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic  mb-3">
          Acerca de Linklytics
        </h1>
        <p className="text-gray-700 text-sm  mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          Linklytics simplifica el acortamiento de URL para un intercambio eficiente. 
          Genera, gestiona y rastrea fácilmente tus enlaces acortados. Linklytics 
          simplifica el acortamiento de URL para un intercambio eficiente. Genera, 
          gestiona y rastrea fácilmente tus enlaces acortados. Linklytics simplifica 
          el acortamiento de URL para un intercambio eficiente. Genera, gestiona y 
          rastrea fácilmente tus enlaces acortados. Linklytics simplifica el acortamiento 
          de URL para un intercambio eficiente. Genera, gestiona y rastrea fácilmente 
          tus enlaces acortados.
        </p>
        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Acortamiento de URL sencillo
              </h2>
              <p className="text-gray-600">
                Experimenta la facilidad de crear URL cortas y memorables en solo 
                unos clics. Nuestra interfaz intuitiva y proceso de configuración 
                rápida garantizan que puedas comenzar a acortar URL sin complicaciones.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Analítica potente
              </h2>
              <p className="text-gray-600">
                Obtén información sobre el rendimiento de tus enlaces con nuestro 
                completo panel de análisis. Rastrea clics, datos geográficos y fuentes 
                de referencia para optimizar tus estrategias de marketing.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Seguridad mejorada
              </h2>
              <p className="text-gray-600">
                Ten la tranquilidad de contar con nuestras sólidas medidas de seguridad. 
                Todas las URL acortadas están protegidas con cifrado avanzado, garantizando 
                que tus datos permanezcan seguros.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Rápido y confiable
              </h2>
              <p className="text-gray-600">
                Disfruta de redirecciones ultrarrápidas y alta disponibilidad con nuestra 
                infraestructura confiable. Tus URL acortadas siempre estarán disponibles y 
                receptivas, garantizando una experiencia fluida para tus usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};