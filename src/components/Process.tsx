"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface StepProps {
  number: string
  title: string
  description: string
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="flex flex-col justify-center items-start gap-[45px] self-stretch w-full max-md:max-w-full">
    <div className="flex grow shrink self-stretch bg-zinc-100 h-[220px] min-w-[240px] w-full" />
    <div className="flex flex-wrap gap-10 items-center self-stretch min-w-[240px] max-md:max-w-full">
      <div className="self-stretch text-5xl max-md:text-4xl">{number}</div>
      <div className="flex flex-col self-stretch min-w-[240px] max-md:max-w-full">
        <div className="text-4xl max-md:max-w-full">{title}</div>
        <div className="mt-3 text-2xl">{description}</div>
      </div>
    </div>
  </div>
)

const Process: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const steps: StepProps[] = [
    { number: "01", title: "Completa tus datos", description: "Regístrate sin costo en la plataforma" },
    {
      number: "02",
      title: "Solicita el crédito para tu paciente",
      description: "El paciente confirma el monto y plazo",
    },
    { number: "03", title: "Realiza el procedimiento", description: "Brinda el cuidado que tus pacientes merecen" },
  ]

  return (
    <section className="flex flex-col items-start w-full max-w-[1328px] px-[46px] py-[52px] gap-4 rounded-2xl bg-stone-50 mb-20">
      <div className="flex flex-col justify-center w-full rounded-xl max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1236px] mx-auto max-md:max-w-full">
          <div className="flex items-center justify-between w-full gap-8 max-md:flex-col max-md:items-start">
            <h2 className="text-4xl font-medium text-black flex-1 max-md:w-full max-md:mb-4">
              Extender créditos a tus pacientes es muy sencillo
            </h2>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button className="flex gap-3 justify-center items-center p-4 text-xl font-semibold text-center text-white bg-orange-500 rounded-lg border border-orange-500 border-solid whitespace-nowrap max-md:w-full">
                  <span className="self-stretch my-auto">Crea tu cuenta gratis</span>
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/221a06b17094eb36a1661fae67e58b2e80434990a9d8491a7dc593ca4233c242?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    alt=""
                    width={24}
                    height={24}
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
          </div>
          <div className="flex flex-col items-start gap-16 self-stretch mt-28 w-full font-medium text-black max-md:mt-10 max-md:max-w-full">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process

