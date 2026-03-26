import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/imagens/logo.png";
import whatsapp from "../assets/imagens/whatsapp.png";
import whatsapp_gray from "../assets/imagens/whatsapp_gray.png";

const mensagem = encodeURIComponent(
  "Olá, vim pelo site e gostaria de mais informações sobre os serviços!",
);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <img src={logo} alt="Logo" className="w-60" />

        <ul className=" hidden md:flex text-lg gap-6 font-semibold text-gray-600">
          <li className="hover:text-green-600 transition-colors">
            <a href="#">Serviços</a>
          </li>
          <li className="hover:text-green-600 transition-colors">
            <a href="#">Como Funciona</a>
          </li>
          <li className="hover:text-green-600 transition-colors">
            <a href="#">Preços</a>
          </li>
          <li className="hover:text-green-600 transition-colors">
            <a href="#">Localização</a>
          </li>
          <li className="hover:text-green-600 transition-colors">
            <a href="#">Contatos</a>
          </li>
        </ul>

        <a
          href={`https://wa.me/555199012797?text=${mensagem}`}
          rel="noopener noreferrer"
          target="_blank"
          className="hidden md:block"
        >
          <div className="flex items-center group">
            <img
              src={whatsapp}
              className="w-6 block group-hover:hidden"
              alt="Whatsapp verde"
            />
            <img
              src={whatsapp_gray}
              className="w-6 hidden group-hover:block"
              alt="Whatsapp cinza"
            />
            <span className="text-green-600 group-hover:text-gray-600 text-lg ml-2.5 font-semibold">
              (51) 9901-2797
            </span>
          </div>
        </a>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white px-6 shadow-md overflow-hidden transform transition-all duration-400 ease-linear]
    ${
      menuOpen
        ? "opacity-100 translate-y-0 py-6"
        : "opacity-0 -translate-y-4 pointer-events-none"
    }
  `}
      >
        <ul className="flex flex-col gap-4 text-lg font-semibold text-gray-600">
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Como Funciona
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Preços
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Localização
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Contatos
            </a>
          </li>
        </ul>
        <a
          href={`https://wa.me/555199012797?text=${mensagem}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block"
        >
          <div className="flex items-center">
            <img src={whatsapp} className="w-6" />
            <span className="text-green-600 text-lg ml-2.5 font-semibold">
              (51) 9901-2797
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
