import Social from "../ui/social";


export default function Contacto() {
    return (
        <section
            data-testid="contact"
            id="contact"
            class="mb-6 flex flex-col items-center justify-center md:mb-0 lg:mb-32 about">
            <h2 class="font-monospace text-2xl text-white lg:text-4xl ">Contacto</h2>
            <span class="mb-10 h-1 w-10 bg-cyan-400"></span>
            <div class="flex flex-box gap-8 flex-wrap justify-center lg:flex lg:flex-row lg:gap-20 lg:p-20">
                <Social/>
            </div>
        </section>)
}
