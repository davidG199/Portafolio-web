import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function ContentIcons() {
  return (
    <div className="flex mt-6 gap-8 justify-start">
      <a href="https://github.com/davidG199" target="_blank">
        <FaGithub className="size-8 opacity-50 hover:opacity-100" />
      </a>
      <a href="#">
        <CiLinkedin className="size-8 opacity-50 hover:opacity-100" />
      </a>
    </div>
  );
}

export default ContentIcons;
