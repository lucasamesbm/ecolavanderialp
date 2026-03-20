import { Calendar, Truck, Sparkles, Home } from "lucide-react";

const passos = [
  {
    icon: Calendar,
    titulo: "Agende a Coleta",
    descricao:
      "Entre em contato por WhatsApp, telefone ou site e escolha o melhor horário para você",
  },
  {
    icon: Truck,
    titulo: "Coletamos suas Roupas",
    descricao:
      "Nossa equipe vai até sua casa buscar suas roupas, sem custo adicional",
  },
  {
    icon: Sparkles,
    titulo: "Lavamos com Cuidado",
    descricao:
      "Suas roupas são lavadas com tecnologia Wet-Cleaning e produtos biodegradáveis",
  },
  {
    icon: Home,
    titulo: "Entregamos em Casa",
    descricao:
      "Em até 24h suas roupas estão limpas, passadas e de volta na sua casa",
  },
];

function ComoFunciona() {
  return (
    <section className="pt-20 pb-10 bg-linear-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-15">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Processo simples e rápido em apenas 4 passos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((passo, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <passo.icon className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {passo.titulo}
                </h3>

                <p className="text-gray-600">{passo.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
