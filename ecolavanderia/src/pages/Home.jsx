import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import ComoFunciona from "../components/ComoFunciona";
import Clientes from "../components/Clientes";
import Localizacao from "../components/Localizacao";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicos />
      <ComoFunciona />
      <Clientes />
      <Localizacao />
      <Footer />
    </>
  );
}

export default HomePage;
