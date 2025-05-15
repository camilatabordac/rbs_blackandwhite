"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { useInView } from "@/hooks/use-in-view"

export function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  return (
    <section id="localizacao" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Localização e Horário</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos localizados em um ponto de fácil acesso em Castro/PR!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/sala.jpg"
                alt="Sala de espera da Clínica RBS"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Endereço</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-[#55bbad] mt-0.5" />
                  <div>
                    <p className="text-gray-700">{siteConfig.contact.address}</p>
                    <p className="text-gray-700">
                      {siteConfig.contact.city} - CEP {siteConfig.contact.zipCode}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Horário de Funcionamento</h3>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-[#55bbad] mt-0.5" />
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-gray-700 font-medium">Segunda a Sexta:</p>
                      <p className="text-gray-700">{siteConfig.hours.weekdays}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700 font-medium">Sábados:</p>
                      <p className="text-gray-700">{siteConfig.hours.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contato</h3>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-[#55bbad] mt-0.5" />
                  <div>
                    <p className="text-gray-700">{siteConfig.contact.phone}</p>
                    <p className="text-gray-700">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="bg-[#55bbad] hover:bg-[#489e92] text-white w-full py-6">Agendar Consulta</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
