import { useEffect } from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import Main from "../components/main";
import { fetchApi } from "../utils/peticionApi";

//TODO:resolver bug carga de proyectos

function Home() {
  //llamo a la api, al cargar el home, esto evita tiempo de carga en la pagina con todos mis proyectos
  useEffect(() => {
    const alreadyFetched = localStorage.getItem("github_projects");
    const time = localStorage.getItem("github_projects_time");

    const shouldFetch =
      !alreadyFetched ||
      !time ||
      Date.now() - parseInt(time) > 1000 * 60 * 60 * 24; 

    if (shouldFetch) {
      fetchApi()
        .then((data) => {
          localStorage.setItem("github_projects", JSON.stringify(data));
          localStorage.setItem("_time", Date.now());
        })
        .catch((e) => console.error("Error precargando proyectos:", e));
    }
  }, []);

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
