import type React from "react"
import Link from "next/link"

interface FooterSectionProps {
  title: string
  items: string[]
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div className="flex flex-col min-w-[240px] w-[270px]">
    <h3 className="text-3xl font-medium leading-none text-white">{title}</h3>
    <nav className="flex flex-col mt-16 w-full text-2xl leading-none max-md:mt-10">
      {items.map((item, index) => (
        <Link key={index} href="#" className={`text-white hover:underline ${index > 0 ? "mt-9" : ""}`}>
          {item}
        </Link>
      ))}
    </nav>
  </div>
)

const Footer: React.FC = () => {
  const footerSections: FooterSectionProps[] = [
    {
      title: "Información",
      items: ["Información"],
    },
    {
      title: "Regulación",
      items: ["Avisos Privacidad", "Términos y Condiciones", "Costos y Comisiones", "Medios de pago y cobro"],
    },
    {
      title: "Ayuda",
      items: ["Línea de atención"],
    },
  ]

  return (
    <footer className="flex flex-col justify-between px-4 py-16 w-full max-w-[1328px] mx-auto text-white">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full">
        {footerSections.map((section, index) => (
          <FooterSection key={index} {...section} />
        ))}
      </div>
      <div className="w-[205px] h-[113.889px] flex-shrink-0 text-[#F9F9F9] text-center font-jua text-[91.111px] font-normal leading-normal mt-16">
        maya
      </div>
    </footer>
  )
}

export default Footer

