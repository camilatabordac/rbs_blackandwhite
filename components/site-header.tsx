"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Instagram } from "lucide-react"
import { siteConfig } from "@/lib/data"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="relative h-16 w-48">
            <Image src="/images/logo.png" alt="RBS Odontologia e Estética Facial" fill className="object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#quem-somos" className="text-base font-bold text-gray-700 hover:text-[#55bbad] transition-colors">
            Quem Somos
          </Link>
          <Link href="#servicos" className="text-base font-bold text-gray-700 hover:text-[#55bbad] transition-colors">
            Serviços
          </Link>
          <Link
            href="#especialistas"
            className="text-base font-bold text-gray-700 hover:text-[#55bbad] transition-colors"
          >
            Especialistas
          </Link>
          <Link href="#depoimentos" className="text-base font-bold text-gray-700 hover:text-[#55bbad] transition-colors">
            Depoimentos
          </Link>
          <Link href="#localizacao" className="text-base font-bold text-gray-700 hover:text-[#55bbad] transition-colors">
            Localização
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={siteConfig.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#55bbad] transition-colors"
          >
            <Instagram className="h-7 w-7" />
          </a>
          <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#55bbad] hover:bg-[#489e92] text-white rounded-full px-6">Agendar Consulta</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container flex flex-col space-y-4">
            <Link
              href="#quem-somos"
              className="text-sm font-medium text-gray-700 hover:text-[#55bbad] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              href="#servicos"
              className="text-sm font-medium text-gray-700 hover:text-[#55bbad] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#especialistas"
              className="text-sm font-medium text-gray-700 hover:text-[#55bbad] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Especialistas
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium text-gray-700 hover:text-[#55bbad] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Link
              href="#localizacao"
              className="text-sm font-medium text-gray-700 hover:text-[#55bbad] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Localização
            </Link>
            <div className="flex items-center justify-between py-2">
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#55bbad] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 ml-4"
              >
                <Button className="bg-[#55bbad] hover:bg-[#489e92] text-white rounded-full w-full">
                  Agendar Consulta
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
