"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { specialists } from "@/lib/data"
import { useInView } from "@/hooks/use-in-view"

export function SpecialistsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeSpecialist, setActiveSpecialist] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  return (
    <section id="especialistas" className="py-16 bg-gradient-to-r from-[#e6f7f5] to-[#f5fffd]" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conheça Nossa Equipe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa equipe de especialistas altamente qualificados está comprometida em oferecer o melhor tratamento
            odontológico com uma abordagem personalizada e humanizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialists.map((specialist, index) => (
            <div
              key={specialist.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveSpecialist(specialist.id)}
              onMouseLeave={() => setActiveSpecialist(null)}
            >
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={specialist.image || "/placeholder.svg"}
                  alt={specialist.name}
                  fill
                  className={`object-cover object-top transition-transform duration-700 ${
                    activeSpecialist === specialist.id ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{specialist.name}</h3>
                <p className="text-[#55bbad] font-medium mb-3">{specialist.specialty}</p>
                <p className="text-gray-700 text-sm">{specialist.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
