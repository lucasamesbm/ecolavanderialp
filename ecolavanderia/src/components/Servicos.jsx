import { Shirt, Sparkles, Droplet, Wind, Package, Leaf } from "lucide-react";

const servicos = [
  {
    icon: Shirt,
    titulo: "Lavar + Secar + Passar",
    descricao: "Serviço completo para roupas simples do dia a dia",
    preco: "R$ 29,90/kg",
  },
  {
    icon: Wind,
    titulo: "Lavar + Secar",
    descricao: "Lavagem e secagem profissional",
    preco: "R$ 25,90/kg",
  },
  {
    icon: Sparkles,
    titulo: "Só Passar",
    descricao: "Passadoria perfeita para suas roupas",
    preco: "R$ 24,90/kg",
  },
  {
    icon: Shirt,
    titulo: "Camisas (Só Passar)",
    descricao: "Manga longa: R$ 14,90 | Manga curta: R$ 13,90",
    preco: "A partir de R$ 13,90",
  },
  {
    icon: Droplet,
    titulo: "Wet Cleaning",
    descricao: "Limpeza ecológica para roupas delicadas e sociais",
    preco: "A partir de R$ 29",
  },
  {
    icon: Package,
    titulo: "Edredons e Cobertores",
    descricao: "Solteiro: R$ 50 | Casal: R$ 58 | Queen: R$ 63 | King: R$ 67",
    preco: "A partir de R$ 50",
  },
];

function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-16 py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas e ecológicas para todas as suas necessidades
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col p-7 border-2 border-green-200 rounded-2xl bg-white">
            <div className="flex items-center gap-4">
              <Leaf className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-2xl font-bold mb-4">Wet-Cleaning</h4>
            </div>

            <p className="text-gray-700">
              Estamos na era da preservação do meio ambiente, por isso
              utilizamos a tecnologia de lavagem Wet-Cleaning, com equipamentos
              Electrolux. <br /> <br />
              Wet-cleaning é um método seguro para limpeza de roupas à úmido,
              substituindo a limpeza a seco. Utiliza a água como agente de
              limpeza, em um processo computadorizado, munido de sensores e
              dosadores especiais. Limpa e hidrata a roupa, sem danificá-la, com
              produtos biodegradáveis que não agridem o meio ambiente.
            </p>

            <div className="mt-6 space-y-2">
              <h4 className="font-bold text-gray-900  mb-3">
                Preços Wet-Cleaning:
              </h4>
              <div className="flex justify-between">
                <p className="text-gray-700 ">Terno/Tailleur</p>
                <p className="font-semibold text-green-600">R$ 58,00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 ">Blazer</p>
                <p className="font-semibold text-green-600">R$ 36,00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 ">Calça Social</p>
                <p className="font-semibold text-green-600">R$ 29,00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 ">Casaco de lã</p>
                <p className="font-semibold text-green-600">R$ 59,00</p>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col p-7 border-2 border-green-200 rounded-2xl">
            <div className="flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-2xl font-bold mb-4">Produtos SEITZ</h4>
            </div>

            <p className="text-gray-700 leading-relaxed">
              A SEITZ produz produtos para lavanderia desde 1885. Toda esta
              experiência é colocada à disposição dos clientes que utilizam
              corretamente os seus produtos.
              <br />
              <br />
              Acreditamos que no segmento de lavanderia, por se tratar de
              prestação de serviços, a qualidade é fundamental para obtenção de
              sucesso em seu empreendimento. É por isso que a SEITZ vem sempre
              desenvolvendo novos produtos e métodos para lavanderia, visando
              beneficiar e facilitar o trabalho de limpeza das roupas.
            </p>
          </div>
        </div>

        <div id="precos" className="bg-linear-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200 mt-12 scroll-mt-28">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900">
                Promoção Especial!
              </h3>
              <p className="text-gray-600">Oferta por tempo limitado</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-green-600 mb-2">
              3 Camisetas por R$ 48,00
            </p>
            <p className="text-gray-600">
              Lavagem completa com passadoria perfeita para você!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <servico.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {servico.titulo}
              </h3>

              <p className="text-gray-600 mb-4">{servico.descricao}</p>

              <div className="text-2xl font-bold text-green-600">
                {servico.preco}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
