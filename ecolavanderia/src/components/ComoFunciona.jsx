import { Calendar, Truck, Sparkles, Home } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

//array para os dados dos passos
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

//componente de cada um dos cards
function PassoCard({ passo, index }) {
  //pegar se é mobile ou desktop para o tipo de animação
  const [isMobile, setIsMobile] = useState(false);

  // roda quando o componente monta
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // roda na inicialização

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  //ref para cada card ligada a sua posição
  const ref = useRef(null);

  //monitorar scroll do card
  const { scrollYProgress } = useScroll({
    target: ref, //card com ref é monitorado
    offset: ["start 90%", "end 10%"], // controla quando anima, card tocando 90% do fim e 10% de tocar no topo
  });

  //quanto ver do card para começar e acabar, 283 = tamanho da circunferência
  const progress = useTransform(scrollYProgress, [0.1, 0.6], [283, 0]);

  //delay baseado no index
  const start = index / 4;
  const mid = start + 0.2;
  const end = start + 0.4;

  //movimento que vai fazer, vertical
  const y = useTransform(scrollYProgress, [start, mid, end], [0, -40, 0]);

  return (
    //ref para localizar o card e relative para posicionamento interno
    <div ref={ref} className="relative">
      {/* inicio do container*/}
      <motion.div
        style={
          isMobile
            ? {}
            : {
                y,
              }
        }
        className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
      >
        {/*icone do card*/}
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <passo.icon className="w-8 h-8 text-white" />
        </div>

        {/* container do num mais borda do card*/}
        <div className="absolute -top-3 -right-3 w-12 h-12 flex items-center justify-center">
          {/*circulo fixo do num*/}
          <div className="absolute w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
            {index + 1}
          </div>

          {/*sgv para desenhar a borda*/}
          {isMobile && (
            <motion.svg
              className="absolute w-15 h-15 -rotate-90 pointer-events-none"
              viewBox="0 0 100 100"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="#90ee90"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="283"
                style={{
                  strokeDashoffset: progress,
                }}
              />
            </motion.svg>
          )}
        </div>

        {/*pegando o titulo de passos para o card*/}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{passo.titulo}</h3>

        {/*pegando a descrição de passos para o card*/}
        <p className="text-gray-600">{passo.descricao}</p>
      </motion.div>
    </div>
  );
}

//componente principal - section
function ComoFunciona() {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-10 bg-linear-to-br from-green-50 to-white">
      {/*espaçamento interno e cor de fundo */}

      {/*centralizamento da página pré definido*/}
      <div className="max-w-7xl mx-auto">
        {/*titulo e descrição  da sessão*/}
        <div className="text-center mb-15">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Processo simples e rápido em apenas 4 passos!
          </p>
        </div>

        {/*grid para organização da página*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/*map para renderizar o array dos cards*/}
          {passos.map((passo, index) => (
            <PassoCard key={index} passo={passo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
