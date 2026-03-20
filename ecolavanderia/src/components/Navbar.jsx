import logo from "../assets/imagens/logo.png";
import whatsapp from "../assets/imagens/whatsapp.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <img src={logo} alt="Logo" className="w-60" />

        <ul className="flex text-lg gap-6 font-semibold text-gray-600">
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
          href="https://wa.me/5551991342344"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center">
            <img src={whatsapp} className="w-10" alt="Whatsapp logo" />
            <span className="text-green-600 hover:text-gray-600 text-lg">
              (51) 99134-2344
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
