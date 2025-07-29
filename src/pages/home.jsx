import { useEffect } from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import Main from "../components/main";
import { fetchApi } from "../utils/peticionApi";

function Home() {

  //llamo a la api, al cargar el home, esto evita tiempo de carga en la pagina con todos mis proyectos
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <Layout>
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Header />
          <Main />
        </div>
      </Layout>
    </>
  );
}

export default Home;
