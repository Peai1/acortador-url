import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">Linklytics</h2>
          <p>Simplificando el acortamiento de URL para compartir de forma eficiente</p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2024 Linklytics. Todos los derechos reservados.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="#" className="hover:text-gray-200">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
