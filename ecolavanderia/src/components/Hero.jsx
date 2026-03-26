import HeroImage from "../assets/imagens/fundoeco.png";

function Hero() {
  return (
    <section className="pt-35 pb-10 px-4 md:px-6 lg:px-8 bg-linear-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <h1 className="text-6xl font-bold leading-tight text-gray-900">
              Roupas limpas respeitando o meio ambiente
            </h1>
            <p className="text-xl text-gray-600">
              Lavanderia ecológica com tecnologia Wet-Cleaning. Cuidamos das
              suas roupas e do planeta com produtos biodegradáveis.
            </p>

            <div className="flex gap-4">
              <button className=" bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold border-2 border-green-600 hover:border-green-700">
                Agendar Coleta
              </button>
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-100 transition-colors font-semibold border-2 border-green-600">
                Ver Serviços
              </button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Ecológico</div>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-gray-600">Avaliação</div>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-gray-900">Maior</div>
                <div className="text-gray-600">Praticidade no seu dia</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={HeroImage}
                alt="foto hero page"
                className="w-280 h-125 object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-1 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-600">Tecnologia</div>
              <div className="text-2xl font-bold text-green-600">
                Wet-Cleaning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
