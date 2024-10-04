import ContentIcons from "./contentIcons";

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-slate-200 text-4xl font-bold">David Gómez</h1>
        <p className="text-yellow-50 text-lg font-medium mt-2 ">
          Desarrollador junior
        </p>
        <p className="text-gray-400/50 text-md mt-4 max-w-xs">
          Construyo aplicaciones web y tipo movil, accesibles y intuitivas para
          cada usuario
        </p>
      </div>
      <ContentIcons />
    </header>
  );
}

export default Header;
