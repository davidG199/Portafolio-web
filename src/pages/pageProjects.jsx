import { Link } from "react-router-dom";
import Layout from "../components/layout";
import { IoMdArrowBack } from "react-icons/io";
import TableProjects from "../components/tableProjects";

function PageProject() {
    return ( 
        <>
        <Layout>
            <div className="lg:py-24">
                <Link to="/" className="group mb-2 inline-flex items-center font-semibold leading-tight text-yellow-200/90">
                    <IoMdArrowBack className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2"/>
                    David Gomez
                </Link>
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Todos mis proyectos</h1>
                <TableProjects/>
            </div>
        </Layout>
        </>
     );
}

export default PageProject;