import Header from "../components/header";
import Layout from "../components/layout";
import Main from "../components/main";

function Home() {
    return ( 
        <>
        <Layout>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header/>
          <Main/>
        </div>
      </Layout>
        </>
     );
}

export default Home;