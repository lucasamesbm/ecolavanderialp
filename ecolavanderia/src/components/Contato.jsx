import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

function Contato() {
  //guarda tudo que o usuário digita
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  //capturar o que o usuário digita, qual campo esta sendo alterado, valor  digitado
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  //quando clica em enviar
  function handleSubmit(e) {
    e.preventDefault();
    const texto = `Olá, vim pelo site e gostaria de informações sobre os serviços!

Nome: ${form.name}
Telefone: ${form.phone}
Email: ${form.email}
Endereço: ${form.address}

Mensagem: ${form.message || "Não informado."}`;
    //mensagem pra URL
    const mensagem2 = encodeURIComponent(texto);
    //abrir wpp com  a mensagem preenchida igual o form
    window.open(`https://wa.me/555199012797?text=${mensagem2}`, "_blank");
  }

  const mensagem = encodeURIComponent(
    "Olá, vim pelo site e gostaria de mais informações sobre os serviços!",
  );

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-15">
          <h2 className="font-bold text-5xl text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Telefone
                    </div>
                    <a
                      href={`https://wa.me/555199012797?text=${mensagem}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-gray-600 hover:text-green-600"
                    >
                      (51) 9901-2797
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </div>
                    <a
                      href={`https://wa.me/555199012797?text=${mensagem}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-gray-600 hover:text-green-600"
                    >
                      (51) 9901-2797
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      E-mail
                    </div>
                    <a
                      href="mailto:contato@ecolavanderia.com.br"
                      className="text-gray-600 hover:text-green-600"
                    >
                      contato@ecolavanderia.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Endereço
                    </div>
                    <p className="text-gray-600">
                      R. Silveiro, 437
                      <br />
                      Menino Deus - Porto Alegre/RS
                      <br />
                      CEP: 90850-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Horário de Funcionamento
                    </div>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8:30 às 19h
                      <br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-green-50 to-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Agende sua Coleta
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Endereço
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  placeholder="Rua, número, bairro"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors resize-none"
                  placeholder="Conte-nos sobre suas necessidades..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
