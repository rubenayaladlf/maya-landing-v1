import type React from "react"

const ContactForm: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch px-4 py-12 w-full max-w-[1328px] mx-auto">
      <div className="px-8 w-full rounded-xl bg-stone-50 max-md:px-4">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[39%] max-md:w-full">
            <h2 className="mt-12 mb-3 text-4xl font-medium text-black max-md:mt-8">
              Más salud.
              <br />
              Menos pretextos.
              <br />
              Pagando poco a poco.
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-wrap grow gap-10 py-12 max-md:py-8">
              <div className="flex shrink-0 w-px bg-zinc-300 h-full" />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <h3 className="text-4xl font-medium text-black max-md:max-w-full">Contáctanos</h3>
                <div className="flex flex-col mt-12 w-full text-base max-md:mt-8 max-md:max-w-full">
                  <div className="flex flex-col w-full text-black max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <label htmlFor="email" className="font-medium max-md:max-w-full">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="flex gap-2.5 items-center p-4 mt-2.5 w-full tracking-normal rounded-lg border border-solid border-zinc-300 max-md:max-w-full"
                        placeholder="Ingresa tu correo electrónico"
                        required
                      />
                    </div>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                      <label htmlFor="phone" className="font-medium max-md:max-w-full">
                        Número de teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="flex gap-2.5 items-center p-4 mt-2.5 w-full tracking-normal rounded-lg border border-solid border-zinc-300 max-md:max-w-full"
                        placeholder="+52"
                        required
                      />
                    </div>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                      <label htmlFor="curp" className="font-medium max-md:max-w-full">
                        CURP
                      </label>
                      <input
                        type="text"
                        id="curp"
                        className="flex gap-2.5 items-center p-4 mt-2.5 w-full tracking-normal rounded-lg border border-solid border-zinc-300 max-md:max-w-full"
                        placeholder="Como aparece en tu INE"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="gap-3 self-start px-5 py-4 mt-7 font-medium text-center text-white whitespace-nowrap bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

