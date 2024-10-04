import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function ContentIcons() {
    return ( 
        <div className="flex mt-6 gap-8 justify-start">
            <FaGithub className="size-8"/>
            <CiLinkedin className="size-8"/>
        </div>
     );
}

export default ContentIcons;