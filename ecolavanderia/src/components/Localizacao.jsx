import { MapPin, Car, Clock, Navigation } from "lucide-react";

function Localizacao() {
  return (
    <section id="loc"className="py-20 px-4 md:px-6 lg:px-8 bg-linear-to-br from-green-50 to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-15">
          <h2 className="font-bold text-5xl text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar e garantir conforto e limpeza em suas roupas!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Endereço
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    R. Silveiro, 437
                    <br />
                    Menino Deus
                    <br />
                    Porto Alegre - RS
                    <br />
                    CEP: 90850-000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-semibold">Segunda a Sexta:</span>
                      <span>8:30 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sábado:</span>
                      <span>9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Domingo:</span>
                      <span className="text-red-600 font-semibold">
                        Fechado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <Car className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Estacionamento Incluso
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estacionamento gratuito disponível para clientes na frente
                    da loja. Facilidade e comodidade para você.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-150">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.065483408738!2d-51.2292898!3d-30.0636574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519788dac858f51%3A0x66e673cab565d07b!2sR.%20Silveiro%2C%20437%20-%20Menino%20Deus%2C%20Porto%20Alegre%20-%20RS%2C%2090850-000!5e0!3m2!1spt-BR!2sbr!4v1774376334466!5m2!1spt-BR!2sbr"
              class="w-200 h-150 border-0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Localizacao;
