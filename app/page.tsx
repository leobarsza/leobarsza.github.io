"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Smartphone,
  Star,
  GitFork,
  Sun,
  Moon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function HomePage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center">
              <Image
                src={theme === "dark" ? "/logo-ls-light.png" : "/logo-ls-dark.png"}
                alt="Leonardo Souza Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg">Leonardo Souza</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Habilidades
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projetos
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {mounted && (
              <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            )}
            <Button asChild>
              <Link href="#contact">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-muted"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Desenvolvedor Full Stack
                  <span className="text-primary"> Especialista em Back-end</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Transformo ideias em soluções robustas e escaláveis. Full Stack Developer com especialização em
                  arquiteturas back-end, APIs RESTful e sistemas distribuídos que sustentam aplicações de alto
                  desempenho.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#projects">Ver Meus Projetos</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://github.com/leobarsza" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Linguagens & Tecnologias</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Domino as principais tecnologias do mercado para criar soluções completas e eficientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <Code2 className="h-8 w-8 text-primary" />
                    <CardTitle>JavaScript & Frontend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Desenvolvimento moderno com JavaScript ES6+, React e Vue.js para interfaces dinâmicas e
                      responsivas.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Vue.js</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Database className="h-8 w-8 text-primary" />
                    <CardTitle>PHP & Laravel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Desenvolvimento back-end robusto com PHP e Laravel, criando APIs escaláveis e sistemas web
                      completos.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">Laravel</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Globe className="h-8 w-8 text-primary" />
                    <CardTitle>Python & APIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Automação, integração de sistemas e desenvolvimento de APIs RESTful com Python e frameworks
                      modernos.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">APIs</Badge>
                      <Badge variant="secondary">Webhooks</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Smartphone className="h-8 w-8 text-primary" />
                    <CardTitle>DevOps & Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Containerização com Docker, versionamento com GitHub e gerenciamento de bancos PostgreSQL e MySQL.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">GitHub</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder-wf3p7.png"
                  width="400"
                  height="400"
                  alt="Desenvolvedor trabalhando"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos em Destaque</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Alguns dos meus trabalhos mais recentes que demonstram minhas habilidades e paixão por
                  desenvolvimento.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/crm-dashboard-interface.png"
                    width="400"
                    height="200"
                    alt="CRM Personalizado"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="flex items-center justify-between">
                    CRM Personalizado
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">87</span>
                      <GitFork className="h-4 w-4 ml-2" />
                      <span className="text-sm">23</span>
                    </div>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Sistema para otimizar a captação de clientes. Atendimento comercial reduzido de 30min para menos de
                    5min.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com/leobarsza" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/chatbot-whatsapp-interface.png"
                    width="400"
                    height="200"
                    alt="Chatbot com GPT e n8n"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="flex items-center justify-between">
                    Chatbot com GPT e n8n
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">142</span>
                      <GitFork className="h-4 w-4 ml-2" />
                      <span className="text-sm">38</span>
                    </div>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Assistente com IA integrada ao WhatsApp para ofertas de crédito automatizadas, coleta de dados e
                    suporte ao cliente.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">GPT API</Badge>
                    <Badge variant="outline">n8n</Badge>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com/leobarsza" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/data-analytics-dashboard.png"
                    width="400"
                    height="200"
                    alt="Analytics Dashboard"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="flex items-center justify-between">
                    Analytics Dashboard
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">156</span>
                      <GitFork className="h-4 w-4 ml-2" />
                      <span className="text-sm">45</span>
                    </div>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Dashboard de analytics com visualizações interativas usando Python e Streamlit.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Streamlit</Badge>
                    <Badge variant="outline">Pandas</Badge>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com/leobarsza" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Informações de Contato</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">leonardobarsza@gmail.com</p>
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent" asChild>
                    <Link href="mailto:leonardobarsza@gmail.com">Enviar Email</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto" />
                  <CardTitle>Telefone</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">+55 (19) 99558-8687</p>
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent" asChild>
                    <Link href="tel:+5519995588687">Ligar</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto" />
                  <CardTitle>Localização</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Casa Branca, SP - Brasil</p>
                  <p className="text-sm text-muted-foreground mt-1">Disponível para trabalho remoto/regional </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pronto para Começar um Projeto?</h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vamos transformar sua ideia em realidade. Entre em contato e vamos discutir como posso ajudar seu
                  projeto a crescer.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#contact">Fale Comigo</Link>
                </Button>
                <Button className="text-black" size="lg" variant="outline" asChild>
                  <Link href="https://github.com/leobarsza" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <Image
                  src={theme === "dark" ? "/logo-ls-light.png" : "/logo-ls-dark.png"}
                  alt="Leonardo Souza Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold">Leonardo Souza</span>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/leobarsza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/leonardosouzab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:leonardobarsza@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="mt-4 border-t pt-4 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Leonardo Souza. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
