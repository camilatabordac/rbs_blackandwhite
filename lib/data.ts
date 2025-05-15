// Dados simulados que poderiam vir de uma API ou CMS
export const siteConfig = {
  name: "Clínica RBS",
  description: "Odontologia de Excelência em Castro/PR",
  contact: {
    phone: "(42) 99902-1449",
    email: "rbsimplantescastro@gmail.com",
    address: "Rua Dr. Romário Martin, 123 - Centro",
    city: "Castro/PR",
    zipCode: "84165-010",
    whatsapp: "554299021449",
    whatsappLink:
      "https://wa.me/+554299021449?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
  },
  socialMedia: {
    facebook: "https://www.facebook.com/rbsodonto",
    instagram: "https://www.instagram.com/rbsodontocastro/",
    twitter: "https://twitter.com/clinicarbs",
  },
  hours: {
    weekdays: "8h às 18h",
    saturday: "8h às 12h",
    sunday: "Fechado",
  },
  stats: {
    treatments: "8k+",
    patients: "2k+",
  },
}

export const services = [
  {
    id: "estetica-dental",
    title: "Estética Dental",
    description: "Transforme seu sorriso com nossos tratamentos estéticos avançados.",
    image: "/images/estetica.jpg",
    items: ["Lentes de contato dental", "Facetas dentárias", "Clareamento dental", "Restaurações estéticas"],
  },
  {
    id: "ortodontia",
    title: "Ortodontia e Alinhamento",
    description: "Alinhe seus dentes de forma discreta e confortável com tecnologias modernas.",
    image: "/images/aparelho.jpg",
    items: ["Invisalign®", "Ortodontia convencional", "Extração de siso", "Aparelhos estéticos"],
  },
  {
    id: "reabilitacao",
    title: "Reabilitação e Saúde Bucal",
    description: "Recupere a função e estética do seu sorriso com tratamentos avançados.",
    image: "/images/implante.jpg",
    items: ["Implantes dentários", "Prótese dentária", "Tratamento de canal", "Periodontia", "Harmonização orofacial"],
  },
]

export const specialists = [
  {
    id: "ramon",
    name: "Dr. Ramon Blum Santos",
    specialty: "Especialista em Implantodontia e Prótese Dentária",
    bio: "Especialista em implantes e prótese dentária, o Dr. Ramon une as especialidades para oferecer o melhor tratamento a seus pacientes, tendo uma visão clara e humana do paciente como um todo, resultando em excelentes trabalhos estéticos e funcionais.",
    image: "/images/dr-ramon.jpeg",
    socialMedia: {
      facebook: "https://facebook.com",
      instagram: "https://www.instagram.com/rbsodontocastro/",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "janaina",
    name: "Dra. Janaína Blum Santos",
    specialty: "Especialista em Ortodontia",
    bio: "Especialista em Ortodontia e Radiologia e Imaginologia odontológica, a Dra. Janaína busca transformar sorrisos, entregando estética e função",
    image: "/images/dra-janaina.jpeg",
    socialMedia: {
      facebook: "https://facebook.com",
      instagram: "https://www.instagram.com/rbsodontocastro/",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "luiz",
    name: "Dr. Luiz Henrique Rosso",
    specialty: "Especialista em Endodontia",
    bio: "Especialista em Endodontia e Implantodontia. Com dedicação, técnica e empatia, seu principal objetivo é acolher cada paciente com respeito e atenção, proporcionando um atendimento humanizado e seguro.",
    image: "/images/dr-luiz.jpeg",
    socialMedia: {
      facebook: "https://facebook.com",
      instagram: "https://www.instagram.com/rbsodontocastro/",
      twitter: "https://twitter.com",
    },
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Bruna Leal",
    text: "Profissionais muito atenciosos e competentes! Atendimento e estrutura excelentes!",
    rating: 5,
    image: "/images/avatar-bruna.png",
    treatment: "Lentes de Contato Dental",
  },
  {
    id: 2,
    name: "Marielza Schila",
    text: "Ótimos profissionais, saí satisfeita com meu tratamento! Super indico!",
    rating: 5,
    image: "/images/avatar-marielza.png",
    treatment: "Ortodontia - Invisalign",
  },
  {
    id: 3,
    name: "Diego Romanini",
    text: "Fui muito bem atendido, preço justo e profissionais muito dedicados e simpáticos",
    rating: 5,
    image: "/images/avatar-diego.png",
    treatment: "Implantes Dentários",
  },
  {
    id: 4,
    name: "R. Jefferson",
    text: "Bom atendimento e ótimos profissionais",
    rating: 5,
    image: "/images/avatar-jefferson.png",
    treatment: "Implantes Dentários",
  },
  {
    id: 5,
    name: "Maira Lima",
    text: "Eu gosto muito da RBS, pois eles tem um atendimento ágil, humanizado e gentil e souberam resolver o meu problema.",
    rating: 5,
    image: "/images/avatar-maira.png",
    treatment: "Implantes Dentários",
  },
]
