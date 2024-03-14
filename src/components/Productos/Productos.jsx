import Imagen from '../../images/CeramicaHero.jpg'
import Imagen1 from '../../images/1.png'
import Imagen2 from '../../images/2.png'
import Imagen3 from '../../images/3.png'
import Imagen4 from '../../images/4.png'
import Imagen5 from '../../images/5.png'
import Imagen6 from '../../images/6.png'

function Productos() {

    return (
        <section
            
            id="samples"
            className="mb-6 flex flex-col items-center justify-center md:mb-0 lg:mb-32 bg-beige-1"
        >
            <h2 className=" font-extrabold text-2xl text-white lg:text-4xl mt-6">TODOS LOS DISEÑOS</h2>
            <span className="mb-5 mt-1 h-1 w-10 bg-black"></span>
            <div className="mb-10 flex w-full flex-col flex-wrap justify-center items-center md:flex-row">


            <section className="w-full p-3 md:w-1/4 lg:w-48">
                    <article
                        
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://www.instagram.com/p/C4WzqlStoDs/?img_index=5" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={Imagen1}
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Medieval</h3>
                                <p className="text-black text-s">Colores Personalizables</p>                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-48">
                    <article
                        
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://www.instagram.com/p/C4WzqlStoDs/?img_index=1" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={Imagen2}
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Serrano</h3>
                                <p className="text-black text-s">Colores Personalizables</p>                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-48">
                    <article
                        
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://www.instagram.com/p/C4WzqlStoDs/?img_index=2" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={Imagen3}
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Trebol Corazón</h3>
                                <p className="text-black text-s">Colores Personalizables</p>                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-48">
                    <article
                       
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://www.instagram.com/p/C4WzqlStoDs/?img_index=3" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={Imagen4}
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Estrella</h3>
                                <p className="text-black text-s">Colores Personalizables</p>                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-48">
                    <article
                        
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://www.instagram.com/p/C4WzqlStoDs/?img_index=4" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={Imagen5}
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Lisboa</h3>
                                <p className="text-black text-s">Colores Personalizables</p>                            </div>
                        </a>
                    </article>
                </section>
                <section className="w-full p-3 md:w-1/4 lg:w-48">
                    <article
                        
                        className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
                    >
                        <a href="https://www.instagram.com/p/C4WzqlStoDs/?img_index=6" target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={Imagen6}
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                            <div className="mt-1 p-2">
                                <h3 className="text-xl text-cyan-400 lg:text-2xl">Medieval</h3>
                                <p className="text-black text-s">Colores Personalizables</p>                            </div>
                        </a>
                    </article>
                </section>
                
            </div>
        </section>

    )
}

export default Productos
