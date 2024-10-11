function AboutMe() {
  return (
    <>
      <section
        id="about"
        className=" scroll-mt-16 mb-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className=" sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="font-bold uppercase tracking-widest text-yellow-100">
            Sobre mi
          </h2>
        </div>
        <div>
          <p className="text-gray-400/50 leading-7 mb-4">
            Desarrollador junior, técnico en desarrollo de software; con
            certificación en
            <strong className=" text-gray-300/90"> Scrum</strong>, y 9 meses de
            experiencia laboral formal e informal en sector TI y áreas
            administrativas; responsable de verificar órdenes de servicio,
            desarrollo de aplicaciones y
            <strong className=" text-gray-300/90"> Apis</strong>, escritura de
            código, diseño UX UI, código limpio, relacionamiento con clientes,
            programación orientada a objetos, creación de bases de datos y
            formularios web, distribución de tareas, documentación del
            desarrollo, gestión de bases de datos y elaboración de informes.
          </p>
          <p className="text-gray-400/50 leading-7">
            Con Excel intermedio; manejo de
            <strong className=" text-gray-300/90"> Java</strong>,
            <strong className=" text-gray-300/90"> JavaScript</strong> y
            <strong className=" text-gray-300/90"> Python. </strong>
            SQL, MySQL, Mongo DB; React, Tailwind, HTML, Css, FastApi y sistemas
            Git. Cursos de Frontend; React, Vite, Tailwind Css, E-Commerce; y
            competencias en pensamiento analítico, trabajo colaborativo,
            atención al detalle, enfoque en resultados y actualización
            constante.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
