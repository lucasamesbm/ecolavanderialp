import {
  Sparkles,
  Facebook,
  Instagram,
  MessageCircle,
  CreditCard,
} from "lucide-react";

import img from "../assets/imagens/logo.png";

const mensagem = encodeURIComponent(
  "Olá, vim pelo site e gostaria de mais informações sobre os serviços!",
);

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={img}
                alt="Logo Eco Lavanderia"
                className=" h-10 max-w-full"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Lavanderia ecológica com tecnologia Wet-Cleaning. Cuidando das
              suas roupas e do meio ambiente.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contatos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Formas de Pagamento</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <CreditCard className="w-6 h-6" />
                <span>Visa</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <CreditCard className="w-6 h-6" />
                <span>Mastercard</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <CreditCard className="w-6 h-6" />
                <span>BanriCompras</span>
              </div>
            </div>

            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/ecolavanderiars?"
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ecolavanderiars/"
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/555199012797?text=${mensagem}`}
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; 2026 EcoLavanderia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
