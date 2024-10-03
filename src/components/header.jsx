import ContentIcons from "./contentIcons";

function Header() {
  return (
    <header>
      <h1 className="text-slate-200 text-4xl font-bold">David Gómez</h1>
      <p className="text-yellow-50 text-lg font-medium mt-2 ">Desarrollador junior</p>
      <p className="text-gray-400/50 text-md mt-4 max-w-xs">Construyo aplicaciones web y tipo movil, accesibles y intuitivas para cada usuario</p>
      <ContentIcons/>
    </header>
  );
} 

export default Header;
