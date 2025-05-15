"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { siteConfig } from "@/lib/data"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  return (
    <section id="quem-somos" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image src="/images/fachada.png" alt="Fachada da Clínica RBS" fill className="object-cover" />
            </div>
          </div>
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900">Quem Somos</h2>
            <p className="text-gray-700">
              A Clínica RBS nasceu da visão de unir a mais avançada tecnologia odontológica com um atendimento
              verdadeiramente personalizado. Há mais de uma década, somos referência em Castro e região por nossa
              abordagem que integra saúde bucal e estética facial.
            </p>
            <p className="text-gray-700">
              Nosso espaço foi meticulosamente projetado para oferecer conforto e privacidade, em um ambiente que
              reflete o mesmo cuidado que dedicamos aos nossos tratamentos. Cada detalhe foi pensado para proporcionar
              uma experiência única, onde a excelência técnica encontra o acolhimento humano.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#55bbad] hover:bg-[#489e92] text-white">Conheça Nossa História</Button>
              </a>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
