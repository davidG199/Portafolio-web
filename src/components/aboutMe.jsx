function AboutMe() {
  return (
    <>
      <section
        id="about"
        className="scroll-mt-16 mb-24 md:mb-32 lg:scroll-mt-24"
      >
        <div className=" sticky top-0 z-20 -mx-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="font-bold uppercase tracking-[0.25em] text-yellow-100">
            Sobre mí
          </h2>
        </div>
        <div>
          <p className="mb-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            Desarrollador junior, técnico en desarrollo de software; con
            certificación en
            <span className=" text-yellow-200/90"> Scrum</span>, y 9 meses de
            experiencia laboral formal e informal en sector TI y áreas
            administrativas; responsable de verificar órdenes de servicio,
            desarrollo de aplicaciones y
            <span className=" text-yellow-200/90"> Apis</span>, escritura de
            código, diseño UX UI, código limpio, relacionamiento con clientes,
            programación orientada a objetos, creación de bases de datos y
            formularios web, distribución de tareas, documentación del
            desarrollo, gestión de bases de datos y elaboración de informes.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
            Con Excel intermedio; manejo de
            <span className=" text-yellow-200/90"> Java</span>,
            <span className=" text-yellow-200/90"> JavaScript</span> y
            <span className=" text-yellow-200/90"> Python. </span>
            SQL, MySQL, Mongo DB; React, Tailwind, HTML, Css, FastApi, springboot y sistemas
            Git. Cursos de Frontend; React, Vite, Tailwind Css, E-Commerce y certificación en scrum.
            Competencias en pensamiento analítico, trabajo colaborativo,
            atención al detalle, enfoque en resultados y actualización
            constante.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
