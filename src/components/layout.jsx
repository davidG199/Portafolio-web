function Layout({children}) {
    return ( 
        <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-yellow-300 selection:text-zinc-950">
            {children}
        </div>
     );
}

export default Layout;