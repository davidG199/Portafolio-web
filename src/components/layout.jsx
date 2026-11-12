function Layout({children}) {
    return ( 
        <div className="relative min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-yellow-300 selection:text-zinc-950">
            <div className="atelier-ambient-glow" aria-hidden="true" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
     );
}

export default Layout;