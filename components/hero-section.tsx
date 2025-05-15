"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { siteConfig } from "@/lib/data"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-black py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 space-y-6 mb-10 md:mb-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="text-sm font-medium text-white uppercase tracking-wider">{siteConfig.description}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Odontologia de <br />
              <span className="text-[#55bbad]">Excelência</span> ao seu <br />
              Alcance
            </h1>
            <p className="text-white text-lg max-w-md">
              Na Clínica RBS, combinamos tecnologia avançada e profissionais experientes para oferecer o melhor
              tratamento odontológico e estético.
            </p>
            <div className="flex gap-4 pt-4">
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#55bbad] hover:bg-[#489e92] text-white rounded-full px-8 py-6">
                  Agendar Consulta
                </Button>
              </a>
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-[#55bbad] text-[#55bbad] hover:bg-[#55bbad] hover:text-white rounded-full px-8 py-6"
                >
                  Saiba Mais
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-white">Mais de {siteConfig.stats.patients} pacientes satisfeitos</p>
              </div>
            </div>
          </div>
          <div
            className={`md:w-1/2 relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[300px] sm:h-[400px] w-full">
              <Image
                src="/images/recepcao.png"
                alt="Recepção da Clínica RBS"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-fadeIn">
              <div className="h-12 w-12 rounded-full bg-[#55bbad]/10 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-[#55bbad]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L14.9452 8.75583L22.1803 9.52786L16.5902 14.7442L18.3607 21.9721L12 18.1971L5.63928 21.9721L7.40982 14.7442L1.81966 9.52786L9.05479 8.75583L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">{siteConfig.stats.treatments}</p>
                <p className="text-xs text-gray-500">Tratamentos realizados</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-fadeIn delay-300">
              <div className="h-12 w-12 rounded-full bg-[#55bbad]/10 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-[#55bbad]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">{siteConfig.stats.patients}</p>
                <p className="text-xs text-gray-500">Pacientes atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
