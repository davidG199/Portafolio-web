import AboutMe from "./aboutMe";
import Projects from "./projects";

function Main() {
    return ( 
        <main className="pt-12 lg:pt-24 lg:w-4/5 lg:py-24 ">
            <AboutMe/>
            <Projects/>
        </main>
     );
}

export default Main;