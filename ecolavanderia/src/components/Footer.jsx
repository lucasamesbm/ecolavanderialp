function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-xl font-bold">MinhaEmpresa</h2>
            <p className="text-gray-400 mt-2">
              Criando soluções digitais modernas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">Sobre</a></li>
              <li><a href="#services" className="hover:text-white">Serviços</a></li>
              <li><a href="#contact" className="hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contato</h3>
            <p className="text-gray-400">email@email.com</p>
            <p className="text-gray-400">(00) 00000-0000</p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} Ecolavanderia. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  )
}

export default Footer