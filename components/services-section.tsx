"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { services, siteConfig } from "@/lib/data"
import { useInView } from "@/hooks/use-in-view"

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  return (
    <section id="servicos" className="py-16 bg-black" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#55bbad] mb-4">Nossos Serviços</h2>
          <p className="text-white max-w-2xl mx-auto">
            Explore nossa abrangente gama de serviços odontológicos projetados para atender suas necessidades de saúde
            bucal. Desde cuidados preventivos até tratamentos estéticos avançados, oferecemos soluções completas para o
            seu sorriso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-700 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                {/* Imagem com borda decorativa */}
                <div className="absolute inset-0 p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    {/* Borda decorativa */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#55bbad]/30 to-[#55bbad]/10 rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Borda interna */}
                    <div className="absolute inset-0 border-4 border-[#55bbad]/20 rounded-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#55bbad]"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#55bbad] font-medium hover:underline flex items-center"
                >
                  Saiba Mais <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
