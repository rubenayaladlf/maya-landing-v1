"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const Hero: React.FC = () => {
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false)
  const [isCreditRequestModalOpen, setIsCreditRequestModalOpen] = useState(false)

  return (
    <>
      <div className="shrink-0 mt-8 max-w-full h-px border border-solid border-zinc-300 w-[1328px]" />
      <div className="flex flex-col mt-14 max-w-full w-[1328px] px-4 max-md:mt-10">
        <div className="gap-1 self-center px-4 py-3 text-base leading-tight text-black rounded-lg border border-solid border-neutral-600 border-opacity-20">
          +200 médicos ya confían en maya{" "}
        </div>
        <div className="flex flex-col mt-5 w-full text-center max-md:max-w-full">
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight max-md:max-w-full">
              <span className="block">Tú cuidas su salud,</span>
              <span className="block">juntos financiamos sus procedimientos</span>
            </h1>
            <p className="self-center mt-4 text-xl leading-7 max-w-[473px] max-md:max-w-full">
              Empodera a tus pacientes con préstamos rápidos y mejora su acceso a la salud
            </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center items-center mt-7 text-base">
            <Dialog open={isCreateAccountModalOpen} onOpenChange={setIsCreateAccountModalOpen}>
              <DialogTrigger asChild>
                <button className="flex gap-3 justify-center items-center px-5 py-4 font-medium text-white bg-orange-500 rounded-lg">
                  <span>1. Crear cuenta</span>
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d86ce6584f38ea197742cffda6ec3d6e429e16f495a7ab35d2bb884cdf88b34?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
                    className="object-contain w-5 h-5"
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] h-[600px] p-0">
                <iframe
                  className="airtable-embed"
                  src="https://airtable.com/embed/app3EuvtNHIfYs5YY/pagHJtRzKBqfsG1Bb/form"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  style={{ background: "transparent", border: "1px solid #ccc" }}
                />
              </DialogContent>
            </Dialog>
            <Dialog open={isCreditRequestModalOpen} onOpenChange={setIsCreditRequestModalOpen}>
              <DialogTrigger asChild>
                <button className="flex gap-3 justify-center items-center px-7 py-4 font-semibold text-black whitespace-nowrap rounded-lg border border-solid border-zinc-300 max-md:px-5">
                  <span>2. Solicitud de crédito</span>
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4183257e9ff59eb656a3d76e7640f342f74fa6635d69f5343eed23358482934a?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
                    className="object-contain w-5 h-5"
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] h-[600px] p-0">
                <iframe
                  className="airtable-embed"
                  src="https://airtable.com/embed/app3EuvtNHIfYs5YY/pagLWO50G3UHHKKjN/form"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  style={{ background: "transparent", border: "1px solid #ccc" }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 mt-20 max-w-full rounded-xl border border-solid bg-zinc-100 border-zinc-300 h-[446px] w-[873px] max-md:mt-10" />
    </>
  )
}

export default Hero

