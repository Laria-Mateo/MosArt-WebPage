import Imagen from '../../images/CeramicaHero.jpg'
import Imagen2 from '../../images/CeramicaHero2.jpg'
function Hero() {
    return (
        <div className='relative w-full h-96'>
            <div className='absolute inset-0'>
                <img src={Imagen} alt="" className='h-full w-full object-cover ' />
            </div>
            <div className='absolute right-64 top-56 lg:right-40 lg:top-1/3 rounded-lg border-4 border-stone-500 '>
                <img src={Imagen2} alt="" className='h-32 lg:h-40' />
            </div>
        </div>
    )
}

export default Hero
