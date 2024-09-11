import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpeg";
import adapta from "@/assets/adapta.jpeg";
import cheesecake from "@/assets/cheesecake.png";
import awari from "@/assets/awari.png";
import sicoob from "@/assets/sicoob.png";
import sebrae from "@/assets/sebrae.png";
import ufpr from "@/assets/ufpr.png";
import { MessageSquareQuote } from "lucide-react";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] font-sans">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex h-96 ">
        <div className="w-1/2 pr-8 h-full">
          <Image
            src={profile}
            alt="Your Name"
            width={80}
            height={80}
            className="rounded-full mb-8"
          />
          <h1 className="text-5xl  mb-4">
            <span className="font-semibold">
              E aí, tudo certo?
            </span>{" "}
            <br /> Eu sou o Lucas Braga!
          </h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-evenly">
          <h2 className="text-2xl font-semibold mb-4">
            A Website designer based in Brazil.
          </h2>
          <p className=" mb-8">
            Passionate about creating great experiences for
            Digital Product
          </p>
          <div className="space-x-4">
            <Button className="text-sm">
              Vamos conversar
              <MessageSquareQuote className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experiences, Studies and Texts Section */}
      <section className="bg-white py-16 ">
        <div className="container mx-auto px-4 grid grid-cols-3 gap-6">
          {/* Experiences */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Experiências
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Image
                  src={adapta}
                  alt="Adapta"
                  width={25}
                  height={25}
                  className="rounded-full mr-4 mt-1"
                />
                <div>
                  <h4 className="font-semibold ">
                    Head de Tecnologia
                  </h4>
                  <h2 className="text-sm text-gray-600">
                    Adapta - São Paulo, Brasil
                  </h2>
                  <p className="text-sm text-gray-600">
                    Setembro 2023 - Presente
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Image
                  src={cheesecake}
                  alt="Cheesecake"
                  width={25}
                  height={25}
                  className="rounded-full mr-4 mt-1"
                />
                <div>
                  <h4 className="font-semibold ">
                    Sr. Technical Product Manager
                  </h4>
                  <h2 className="text-sm text-gray-600">
                    Cheesecake Labs - Florianópolis, Brasil
                    (Remoto)
                  </h2>
                  <p className="text-sm text-gray-600">
                    Julho 2022 - Setembro 2023
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Image
                  src={awari}
                  alt="Awari"
                  width={25}
                  height={25}
                  className="rounded-full mr-4 mt-1"
                />
                <div>
                  <h4 className="font-semibold ">
                    Technical Product Manager
                  </h4>
                  <h2 className="text-sm text-gray-600">
                    Awari - São Paulo, Brasil
                  </h2>
                  <p className="text-sm text-gray-600">
                    Julho 2021 - Março 2022
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Image
                  src={sicoob}
                  alt="Sicoob"
                  width={25}
                  height={25}
                  className="rounded-full mr-4 mt-1"
                />
                <div>
                  <h4 className="font-semibold ">
                    Sr. Product Owner
                  </h4>
                  <h2 className="text-sm text-gray-600">
                    Sicoob - São Paulo, Brasil
                  </h2>
                  <p className="text-sm text-gray-600">
                    Janeiro 2020 - Julho 2021
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Image
                  src={sebrae}
                  alt="SEBRAE"
                  width={25}
                  height={25}
                  className="rounded-full mr-4 mt-1"
                />
                <div>
                  <h4 className="font-semibold ">
                    Gerente de Projetos de Tecnologia
                  </h4>
                  <h2 className="text-sm text-gray-600">
                    SEBRAE - Belo Horizonte, Brasil
                  </h2>
                  <p className="text-sm text-gray-600">
                    Outubro 2017 - Janeiro 2020
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Studies */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Estudos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-between">
                <div className="flex items-start">
                  <Image
                    src={ufpr}
                    alt="UFPR"
                    width={25}
                    height={25}
                    className="rounded-full mr-4 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">
                      Especialização em Inteligência
                      Artificial Aplicada
                    </h4>
                    <h2 className="text-sm text-gray-600">
                      Universidade Federal do Paraná
                    </h2>
                    <p className="text-sm text-gray-600">
                      Novembro 2023
                    </p>
                  </div>
                </div>
              </li>
              <li className="border-t border-gray-200 my-4"></li>
              <li className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black rounded-full mr-4 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">
                      RAG Avançado
                    </h4>
                    <p className="text-sm text-gray-600">
                      Estudando
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black rounded-full mr-4 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">
                      Site of the Day at Awwwards
                    </h4>
                    <p className="text-sm text-gray-600">
                      24 August 2022
                    </p>
                  </div>
                </div>
                <span className="text-2xl">2</span>
              </li>
            </ul>
          </div>

          {/* Blog Texts */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Blog
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-black rounded-full mr-4 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Full pages Website design
                  </h4>
                  <p className="text-sm text-gray-600">
                    Crafting immersive and engaging
                    full-page website designs that captivate
                    audiences and deliver a seamless user
                    experience
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-xl font-semibold mb-6">
          I can help you with
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-black rounded-full mr-4 mt-1"></div>
            <div>
              <h4 className="font-semibold mb-2">
                Full pages Website design
              </h4>
              <p className="text-sm text-gray-600">
                Crafting immersive and engaging full-page
                website designs that captivate audiences and
                deliver a seamless user experience
              </p>
            </div>
          </div>
          {/* Add more services here */}
        </div>
        <div className="mt-8 text-right">
          <Button variant="link" className="text-sm">
            See my work
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Sebastian
          Brooks. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
