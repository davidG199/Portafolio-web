function Layout({children}) {
    return ( 
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 font-sans md:px-12 md:py-16 lg:px-20 lg:py-0 text-white">
            {children}
        </div>
     );
}

export default Layout;