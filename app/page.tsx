"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  BookOpenText,
  PackageCheck,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 200);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-6 px-52">
      {/* Navbar */}
      <nav className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="2"
              stroke="#00A211"
              strokeWidth="2"
            />
            <circle cx="8" cy="9" r="2" fill="#00A211" />
            <circle cx="16" cy="9" r="2" fill="#00A211" />
            <path
              d="M7 15C7 15 9 17 12 17C15 17 17 15 17 15"
              stroke="#00A211"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-xl font-bold">
            Novos Robôs
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            className="text-sm font-medium hover:underline"
            href="#"
          >
            Supply-Chain
          </Link>
          <Link
            className="text-sm font-medium hover:underline"
            href="#"
          >
            Pricing & Benefits
          </Link>
          <Link
            className="text-sm font-medium hover:underline"
            href="#"
          >
            FAQ
          </Link>
          <Button className="bg-[#00A211] text-white hover:bg-[#008E0F]">
            Work with us
          </Button>
        </div>
      </nav>
      {/* Hero Section */}
      <Card className="p-8 mb-12">
        <div className="flex items-start justify-between">
          <div className="max-w-2xl">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
              Vamos levar o seu negócio para o próximo nível
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Transforme os resultados da sua empresa usando
              IA Generativa
            </h1>
            <p className="text-gray-600 mb-6">
              Somo um grupo de experts em IA impulsionando a
              vantagem competitiva e eficiência da sua
              empresa através de soluções personalizadas
              para levar o seu negócio ao futuro.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-[#00A211] text-white hover:bg-[#008E0F]">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="4"
                    y="2"
                    width="16"
                    height="20"
                    rx="2"
                    ry="2"
                  />
                  <line x1="8" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="16" y2="10" />
                  <line x1="8" y1="14" x2="12" y2="14" />
                </svg>
                Solicitar proposta gratuita
              </Button>
              <Button variant="outline">
                Nossos serviços
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <Card className="bg-green-900 text-white p-4">
              <h3 className="text-3xl font-bold">+ 40%</h3>
              <p>Melhoria na eficiência operacional</p>
              <p className="text-sm text-green-500">
                ↑ 34% a mais que a média de mercado
              </p>
            </Card>
            <Card className="bg-white p-4">
              <h3 className="text-3xl font-bold text-green-500">
                - 30%
              </h3>
              <p>Redução nos custos operacionais</p>
            </Card>
            <Card className="bg-white p-4">
              <h3 className="text-3xl font-bold text-green-500">
                - 60%
              </h3>
              <p>Redução de erros</p>
            </Card>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <h3 className="text-4xl font-bold">10+</h3>
            <p>Empresas atendidas</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">7+</h3>
            <p>Anos de experiência</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">83</h3>
            <p>NPS médio</p>
          </div>
        </div>
      </Card>
      {/* Nuvem de empresas parceiras */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Algumas das nossas{" "}
          <span className="text-[#00A211]">
            empresas parceiras
          </span>
        </h2>
      </div>
      {/* Nuvem de empresas parceiras */}
      <div className="relative h-20 overflow-hidden mb-12">
        <div className="flex space-x-8 absolute w-full bg-red-200 items-center justify-evenlyß">
          {[...Array(8)].map((_, i) => (
            <Image
              key={i}
              src={`/placeholder.svg?height=80&width=160`}
              alt={`Logo ${(i % 8) + 1}`}
              width={160}
              height={80}
              className="object-contain bg-green-300"
            />
          ))}
        </div>
      </div>
      {/* Serviços */}
      <Card className="p-8 mb-12">
        <p className="text-3xl font-bold mb-8">
          Como vamos te ajudar?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-green-100 p-2 rounded-lg inline-block mb-4">
              <Sparkles className="h-5 w-5 text-[#00A211]" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Consultoria estratégica em IA
            </h3>
            <p className="text-gray-600">
              Mapeamos oportunidades e traçamos o caminho
              ideal para integrar IA ao seu negócio,
              maximizando resultados e minimizando riscos.
            </p>
          </div>
          <div>
            <div className="bg-green-100 p-2 rounded-lg inline-block mb-4">
              <BookOpenText className="h-5 w-5 text-[#00A211]" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Trainamento em IA
            </h3>
            <p className="text-gray-600">
              Prepare sua equipe para a era da IA com nossos
              programas de treinamento personalizados.
              Abordamos desde conceitos básicos até
              aplicações avançadas.
            </p>
          </div>
          <div>
            <div className="bg-green-100 p-2 rounded-lg inline-block mb-4">
              <Zap className="h-5 w-5 text-[#00A211]" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Integrações e automações
            </h3>
            <p className="text-gray-600">
              Otimizamos seus processos com automações
              avançadas e integrações perfeitas, aumentando
              eficiência e reduzindo custos operacionais.
            </p>
          </div>
        </div>
        {/* Serviços */}
        <Card className="p-8  mt-8 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="lg:w-1/2 z-10">
              <div className="inline-block bg-green-100 text-[#00A211] px-3 py-1 rounded-full text-sm mb-4">
                <span className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Resultados rápidos
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Comece a perceber resultados{" "}
                <span className="text-[#00A211]">
                  já na segunda semana
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                Nossa metodologia é baseada em projetos
                reais e testes com dados reais, o que nos
                permite entregar resultados rápidos e
                significativos para nossos clientes.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Card className="p-4 flex items-center space-x-2 bg-green-50">
                  <svg
                    className="w-6 h-6 text-[#00A211]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-semibold">
                    Projetos com duração de 3 a 10 semanas
                  </span>
                </Card>
                <Card className="p-4 flex items-center space-x-2 bg-green-50">
                  <PackageCheck className="w-6 h-6 text-[#00A211]" />
                  <span className="font-semibold">
                    Atendimento totalmente personalizado
                  </span>
                </Card>
                <Card className="p-4 flex items-center space-x-2 bg-green-50">
                  <UsersRound className="w-6 h-6 text-[#00A211]" />
                  <span className="font-semibold">
                    Acompanhamento contínuo, se necessário
                  </span>
                </Card>
              </div>
              <Button className="bg-[#00A211] text-white hover:bg-[#008E0F]">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="4"
                    y="2"
                    width="16"
                    height="20"
                    rx="2"
                    ry="2"
                  />
                  <line x1="8" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="16" y2="10" />
                  <line x1="8" y1="14" x2="12" y2="14" />
                </svg>
                Solicitar proposta customizada gratuita
              </Button>
            </div>
            {/* Imagem */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
              <div className="w-full h-full absolute top-0 left-0 bg-dot-pattern opacity-10" />
              <div className="w-full h-full absolute top-0 left-0">
                <div className="w-24 h-24 bg-[#00A211] rounded-full absolute top-1/4 left-1/4 opacity-20" />
                <div className="w-32 h-32 bg-[#00A211] rounded-full absolute bottom-1/3 right-1/3 opacity-20" />
                <div className="w-16 h-16 bg-[#00A211] rounded-full absolute top-1/2 right-1/4 opacity-20" />
              </div>
            </div>
          </div>
        </Card>
      </Card>
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">
            Turn 7 stops to 1 stop.
          </h2>
          <p className="text-gray-600">
            Say goodbye to traditional old-fashioned
            fulfillment. With Ecomflow fulfillment you are
            able to scale worldwide based on actual demand
            instead of sales forecasts without having to
            wait 60 days with 7 stops.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-5xl font-bold text-[#00A211]">
                65+
              </p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#00A211]">
                98%
              </p>
              <p className="text-gray-600">
                On-Time Delivery
              </p>
            </div>
          </div>
          <Button
            className="text-[#00A211] hover:text-[#008E0F] p-0"
            variant="link"
          >
            Pricing & benefits →
          </Button>
        </div>
        <div className="lg:w-1/2">
          <div className="flex gap-4">
            <Card className="w-1/2 bg-red-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-semibold">
                  Traditional Way
                </p>
                <p className="text-sm font-semibold">
                  • 60 days
                </p>
              </div>
              <h3 className="text-lg font-bold mb-4">
                Traditional Method
              </h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm">
                  📦 Ready in your factory
                </p>
                <p className="text-sm">11 day by land 🚛</p>
                <p className="text-sm">
                  22 days by water 🚢
                </p>
                <p className="text-sm">5 days by land 🚛</p>
                <p className="text-sm">6 days by air ✈️</p>
                <p className="text-sm">
                  16 days by land 🚛
                </p>
              </div>
              <p className="text-sm mb-4">
                🏠 Your customers doorstep
              </p>
              <div className="text-center">
                <p className="text-4xl font-bold text-red-600">
                  60 Days
                </p>
                <p className="text-sm">Avg shipping time</p>
              </div>
            </Card>
            <Card className="w-1/2 bg-green-500 text-white p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-semibold">
                  Future of Shipment
                </p>
                <p className="text-sm font-semibold">
                  • 10 days
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
                <p className="text-lg font-bold">
                  ecomflow
                </p>
              </div>
              <div className="space-y-2 mb-4">
                <Card className="bg-green-600 p-2 rounded">
                  <p className="text-sm">
                    📦 Ready in your factory
                  </p>
                  <p className="text-xs">
                    1 day by land 🚛
                  </p>
                </Card>
                <Card className="bg-green-600 p-2 rounded">
                  <p className="text-sm">
                    🏭 Received in our warehouse
                  </p>
                  <p className="text-xs">
                    1-3 days by air ✈️
                  </p>
                </Card>
                <Card className="bg-green-600 p-2 rounded">
                  <p className="text-sm">
                    🚚 Last mile fulfillment
                  </p>
                  <p className="text-xs">
                    2-5 days by land 🚛
                  </p>
                </Card>
              </div>
              <p className="text-sm mb-4">
                🏠 Your customers doorstep
              </p>
              <div className="text-center">
                <p className="text-4xl font-bold">45%</p>
                <p className="text-sm">
                  Avg improvement on shipping time
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Card className="bg-[#0A2F1F] text-white p-8 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">
            Any Questions?
          </h2>
          <p className="mb-6">
            In case you still have any questions, feel free
            reach out to us by filling in the form below,
            and our team will get back to you as soon as
            possible.
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white text-black"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement>
                ) => setEmail(e.target.value)}
                className="bg-white text-black"
                placeholder="jane@ecomflow.com"
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className="text-white"
              >
                Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white text-black"
                placeholder="Enter your question..."
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#00A211] hover:bg-[#008E0F]"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-dot-pattern" />
        </div>
      </Card>
    </div>
  );
}
