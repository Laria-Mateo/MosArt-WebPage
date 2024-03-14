import Imagen from '../../images/CeramicaHero.jpg'
import './AboutSamples.css'

function AboutSamples() {

    return (
        <section
            id="dmv"
            className="mb-6 flex flex-col items-center justify-center md:mb-0 lg:mb-32 about"
        >
            <h2 className=" font-extrabold text-2xl text-black lg:text-4xl mt-6">DISEÑOS MAS VENDIDOS</h2>
            <span className="mb-5 mt-1 h-1 w-10 bg-black"></span>
            <div className="mb-10 flex w-full flex-col flex-wrap justify-center items-center md:flex-row">


            <section className="w-full p-3 md:w-1/4 lg:w-1/5">
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://wa.link/wnmgdd" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://i.postimg.cc/VNt1nM1r/6e09870e-752c-4282-a2ce-f89784f79179.jpg"
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Venecia</h3>
                                <p className="text-black text-s">Colores Personalizables</p>
                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-1/5">
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://wa.link/wnmgdd" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://i.postimg.cc/KzcqxS9G/285bd16e-f80a-49f9-9425-661425d2b1aa.jpg"
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Cubos 3D</h3>
                                <p className="text-black text-s">Colores Personalizables</p>
                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-1/5">
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://wa.link/wnmgdd" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://i.postimg.cc/rmtJ8V1L/bcd414d3-c781-4b07-8eea-859ea2f5825a.jpg"
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Margarita</h3>
                                <p className="text-black text-s">Colores Personalizables</p>
                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-1/5">
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://wa.link/wnmgdd" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://i.postimg.cc/gk7H6Prt/e950a842-f848-4159-aed3-f887c2319a0f.jpg"
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Simona</h3>
                                <p className="text-black text-s">Colores Personalizables</p>
                            </div>
                        </a>
                    </article>
                </section>



            </div>

            

        </section>

    )
}

export default AboutSamples
