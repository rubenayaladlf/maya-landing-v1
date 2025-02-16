"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-wrap gap-10 justify-between items-center w-full py-4 text-left focus:outline-none"
      >
        <div className="text-xl font-medium">{question}</div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7947bffab10acc850708325be9970216bc21592d65012a11dd81c24f41a3ca12?apiKey=e6fa9547700c484dadaa2d943cc9301c&"
          className={`object-contain shrink-0 w-6 aspect-square transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          alt={isOpen ? "Collapse" : "Expand"}
          width={24}
          height={24}
        />
      </button>
      {isOpen && <div className="mt-4 mb-4 text-base text-gray-600 animate-fadeIn">{answer}</div>}
      <div className="flex w-full bg-zinc-300 h-px" />
    </div>
  )
}

const FAQ: React.FC = () => {
  const faqItems: FAQItemProps[] = [
    {
      question: "¿Cómo puedo comenzar a financiar tratamientos médicos?",
      answer:
        "Para comenzar a financiar tratamientos médicos, primero debe registrarse en nuestra plataforma. Una vez registrado, podrá solicitar créditos para sus pacientes, los cuales serán evaluados rápidamente. Tras la aprobación, podrá proceder con el tratamiento mientras nosotros nos encargamos del financiamiento.",
    },
    {
      question: "¿Qué requisitos debe cumplir un paciente para obtener financiamiento?",
      answer:
        "Los requisitos básicos para que un paciente obtenga financiamiento incluyen: ser mayor de edad, tener una identificación oficial vigente, comprobante de domicilio reciente, y una fuente de ingresos estable. Cada caso se evalúa individualmente, y pueden aplicarse requisitos adicionales dependiendo del monto y tipo de tratamiento.",
    },
    {
      question: "¿Cuánto tiempo toma aprobar una solicitud de financiamiento?",
      answer:
        "Nuestro proceso de aprobación es rápido y eficiente. En la mayoría de los casos, podemos dar una respuesta en menos de 24 horas. Sin embargo, el tiempo exacto puede variar dependiendo de la complejidad del caso y la completitud de la información proporcionada.",
    },
    {
      question: "¿Qué tipos de tratamientos médicos pueden ser financiados?",
      answer:
        "Ofrecemos financiamiento para una amplia gama de tratamientos médicos, incluyendo pero no limitado a: procedimientos dentales, cirugías estéticas, tratamientos oftalmológicos, terapias de fertilidad, y cirugías ortopédicas. Si tiene dudas sobre un tratamiento específico, no dude en contactarnos para más información.",
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center mt-20 w-full max-w-[1328px] mx-auto">
      <div className="w-full h-[274px] flex-shrink-0 rounded-[12px] bg-[#FF712B] flex items-center justify-center mb-16">
        <h2 className="text-5xl font-bold text-white">Preguntas Frecuentes</h2>
      </div>
      <div className="flex flex-col items-start w-full max-w-[1223px] p-[60px_52px] gap-4 rounded-[12px] border border-solid border-[#D6D6D6] bg-[#F9F9F9]">
        <div className="flex flex-col w-full max-md:max-w-full">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

