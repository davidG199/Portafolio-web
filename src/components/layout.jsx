function Layout({children}) {
    return ( 
        <div className="min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 text-white">
            {children}
        </div>
     );
}

export default Layout;