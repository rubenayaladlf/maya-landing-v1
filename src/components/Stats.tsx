import type React from "react"

interface StatProps {
  value: string
  description: string
}

const Stat: React.FC<StatProps> = ({ value, description }) => (
  <div className="flex flex-col items-center w-full sm:w-1/3 px-2">
    <div className="w-full aspect-square rounded-xl border border-solid bg-zinc-100 border-zinc-300" />
    <div className="flex flex-col mt-6 text-center">
      <div className="text-4xl font-medium">{value}</div>
      <div className="mt-2 text-xl">{description}</div>
    </div>
  </div>
)

const Stats: React.FC = () => {
  const statsData: StatProps[] = [
    { value: "-24hrs", description: "Para aprobar el crédito" },
    { value: "+4,500", description: "Procedimientos financiados" },
    { value: "+10", description: "Especialidades aprovadas" },
  ]

  return (
    <section className="w-full max-w-[1328px] mx-auto px-4 mb-20">
      <div className="flex shrink-0 mt-24 max-w-full h-px bg-zinc-300 w-full max-md:mt-10" />
      <h2 className="mt-20 text-4xl font-medium text-center text-black max-w-[837px] mx-auto max-md:mt-10 max-md:max-w-full">
        Apoyados por la confianza de los doctores; impulsados por tecnología
      </h2>
      <div className="flex flex-wrap justify-center mt-12 font-medium text-black max-md:mt-10">
        {statsData.map((stat, index) => (
          <Stat key={index} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default Stats

