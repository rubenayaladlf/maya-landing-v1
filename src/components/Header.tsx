import type React from "react"
import Image from "next/image"

const Header: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1328px] mx-auto px-4 py-6 max-md:max-w-full">
      <div className="self-stretch my-auto w-20 text-4xl text-center text-black">maya</div>
      <div className="flex flex-wrap gap-7 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex gap-3 items-center self-stretch my-auto">
            <div className="self-stretch my-auto text-base font-medium text-center text-black">Soy Paciente</div>
            <div className="flex flex-col justify-center self-stretch p-1 my-auto w-4">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dedf69aa93e549d69929a7af24799e3bb344bf5ea2cb7b6fc7e6c5a58ed7b8ba?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
                className="object-contain w-2 aspect-[2]"
                alt=""
                width={8}
                height={4}
              />
            </div>
          </div>
          <div className="flex gap-3 items-center self-stretch my-auto">
            <div className="self-stretch my-auto text-base font-medium text-center text-black">Blog</div>
            <div className="flex flex-col justify-center self-stretch p-1 my-auto w-4">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dedf69aa93e549d69929a7af24799e3bb344bf5ea2cb7b6fc7e6c5a58ed7b8ba?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
                className="object-contain w-2 aspect-[2]"
                alt=""
                width={8}
                height={4}
              />
            </div>
          </div>
          <div className="flex gap-3 items-center self-stretch my-auto">
            <div className="self-stretch my-auto text-base font-medium text-center text-black">Simulador</div>
            <div className="flex flex-col justify-center self-stretch p-1 my-auto w-4">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dedf69aa93e549d69929a7af24799e3bb344bf5ea2cb7b6fc7e6c5a58ed7b8ba?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
                className="object-contain w-2 aspect-[2]"
                alt=""
                width={8}
                height={4}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center self-stretch my-auto text-base font-semibold text-center whitespace-nowrap min-w-[240px]">
          <button className="flex gap-3 justify-center items-center self-stretch px-7 py-3 my-auto text-black border border-solid border-zinc-300 rounded-[100px] max-md:px-5">
            <span className="self-stretch my-auto">Ingresar</span>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/555e68212af004daef6b4a53c36e70e18556d786bac29edf4775d3892410a9fa?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt=""
              width={20}
              height={20}
            />
          </button>
          <button className="gap-3 self-stretch px-8 py-3 my-auto text-white bg-orange-500 rounded-[100px] max-md:px-5">
            Registrate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header

