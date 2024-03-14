import { faInstagram, faWhatsapp, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Social() {
    return (
        <>

            <a
                aria-label="Instagram"
                href="https://www.instagram.com/fabrica.mosart/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex py-2 text-black hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400 lg:px-3"
            >
                <FontAwesomeIcon className='h-10' icon={faInstagram} />
            </a>
            <a
                aria-label="Whatsapp"
                href="https://wa.link/wnmgdd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex py-2 text-black hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400 lg:px-3"
            >
                <FontAwesomeIcon className='h-10' icon={faWhatsapp} />
            </a>
            <a
                aria-label="Whatsapp"
                href="https://wa.link/wnmgdd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex py-2 text-black hover:text-cyan-400 dark:text-white dark:hover:text-cyan-400 lg:px-3"
            >
                <FontAwesomeIcon  className='h-10' icon={faEnvelope} />        </a>
        </>
    );
}
