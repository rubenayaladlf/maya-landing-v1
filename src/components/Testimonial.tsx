import type React from "react"
import Image from "next/image"

const Testimonial: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1328px] px-20 pt-12 pb-16 font-medium text-black rounded-xl border border-solid bg-stone-50 border-zinc-300 max-md:px-5 max-md:max-w-full">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/829977499e0f265ab5a8f636cb9e420a0400b4f00313505f8a3c358a10bc39c6?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
        className="object-contain shrink-0 aspect-[1.1] w-[69px]"
        alt="Decorative quote mark"
        width={69}
        height={63}
      />
      <div className="flex flex-col mt-3 max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d2ae3f69a9c8c0ffdda7ea660dee63c2a45a734b082262928388f4c684d5db3?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
          className="object-contain self-center max-w-full rounded-full aspect-square w-[100px]"
          alt="Dr. Roberto Gonzalez"
          width={100}
          height={100}
        />
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <blockquote className="text-4xl text-center max-md:max-w-full">
            maya ha permitido que mis pacientes puedan planear sus pagos sin preocuparse por el costo inmediato. Les
            permite acceder a la salud privada
          </blockquote>
          <cite className="gap-6 self-center pt-3.5 mt-6 text-3xl">Dr. Roberto Gonzalez </cite>
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb5ee5611c1a49e253eba4f329ef292408cbed42bb8ab216ba638a66702d5e2?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
          className="object-contain shrink-0 self-end mt-px aspect-[1.1] w-[90px] max-md:mt-10"
          alt="Decorative quote mark"
          width={90}
          height={82}
        />
      </div>
    </section>
  )
}

export default Testimonial

