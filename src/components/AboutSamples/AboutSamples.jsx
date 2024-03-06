import Imagen from '../../images/CeramicaHero.jpg'
import './AboutSamples.css'

function AboutSamples() {

    return (
        <section
            id="samples"
            className="mb-6 flex flex-col items-center justify-center md:mb-0 lg:mb-32 about"
        >
            <h2 className=" font-extrabold text-2xl text-black lg:text-4xl mt-6">DISEÑOS MAS VENDIDOS</h2>
            <span className="mb-5 mt-1 h-1 w-10 bg-black"></span>
            <div className="mb-10 flex w-full flex-col flex-wrap justify-center items-center md:flex-row">


            <section className="w-full p-3 md:w-1/4 lg:w-1/5">
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Titulo</h3>
                                <p className="text-black text-s">xd</p>
                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-1/5">
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Titulo</h3>
                                <p className="text-black text-s">xd</p>
                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-1/5">
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Titulo</h3>
                                <p className="text-black text-s">xd</p>
                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-1/5">
                    <article
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://via.placeholder.com/450"
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Titulo</h3>
                                <p className="text-black text-s">xd</p>
                            </div>
                        </a>
                    </article>
                </section>



            </div>

            <a
                href="https://github.com/Laria-Mateo"
                target="_blank"
                rel="noopener"
                className="flex flex-row text-black hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400"
                aria-label="link to repository"
            >
                Ver mas Diseños
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"

                    className="ml-1 h-6 w-6"
                >
                    <path

                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
            </a>

        </section>

    )
}

export default AboutSamples
