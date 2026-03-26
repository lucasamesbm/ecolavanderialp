import { Star } from "lucide-react";
import img1 from "../assets/imagens/cliente1.png";
import img2 from "../assets/imagens/cliente2.png";
import img3 from "../assets/imagens/cliente3.png";

const clientes = [
  {
    nome: "Lygia Pereira",
    avaliacaoTexto: "Avaliação pelo Google",
    imagem: img1,
    texto:
      "Ótimo atendimento, comprometidos, e oferecem um perfume maravilhoso nas roupas! Além de ser Eco!",
    avaliacao: 5,
  },
  {
    nome: "Fabiana R Corrêa",
    avaliacaoTexto: "Avaliação pelo Google",
    imagem: img2,
    texto: "Exelente serviço",
    avaliacao: 5,
  },
  {
    nome: "Gisa Hanryluk",
    avaliacaoTexto: "Avaliação pelo Google",
    imagem: img3,
    texto: "Excelente trabalho",
    avaliacao: 5,
  },
];

function Clientes() {
  return (
    <section className="bg-white py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-15">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 10 mil clientes satisfeitos confiam em nosso serviço
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(cliente.avaliacao)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{cliente.texto}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={cliente.imagem}
                  alt={cliente.nome}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{cliente.nome}</div>
                  <div className="text-sm text-gray-600">
                    {cliente.avaliacaoTexto}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clientes;
