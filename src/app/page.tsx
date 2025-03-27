import EntrarSvg from "@/components/svgs/EntrarSvg";
import Image from "next/image";
import Link from "next/link";
// import TestSvg from "@/components/svgs/Test";

import NavbarHome from "@/components/ui/NavbarHome";
import BlocosAnimados from "@/components/ui/Blocos";
import CardDesign from "@/components/ui/CardPlataform";
import Funcionalidades from "@/components/ui/ListFuncionalidades";
import Beneficios from "@/components/ui/Beneficios";
import Depoimentos from "@/components/ui/Depoimentos";
import CardUIPlataforma from "@/components/ui/CardContas";

export default function Home() {
  return (
    <main>
      <BlocosAnimados />
      <header className="w-full z-20 flex justify-between items-center h-28 md:px-20 lg:px-48 px-5">
        <NavbarHome />
      </header>
      <section className="z-20 flex lg:mt-20 mt-10 flex-col space-y-5 justify-center items-center ">
        <div className="z-20 lg:px-5 px-2 py-2 rounded-lg border-2 border-full text-sm bg-white/5">
          <span>Transformando conexões em oportunidades</span>
        </div>
        <div className="z-20 md:px-20 lg:px-48 px-5">
          <h1 className=" text-white text-center lg:text-6xl text-4xl">
            Onde grandes ideias encontram recursos certos para crescer
          </h1>
        </div>
        <div className="z-20 lg:px-52 px-5">
          <p className="lg:text-xl text-lg text-center">
            A COSMOS é a plataforma que une empreendedores visionários,
            investidores estratégicos e talentos brilhantes para impulsionar
            inovação e cescimento.
          </p>
        </div>

        <Link
          className="flex space-x-2 bg-white px-10 py-3 rounded-md z-20 text-black"
          href="/feed"
        >
          <span>Testar a plataforma</span>
          <EntrarSvg />
        </Link>

        <div className="w-full bg-black z-20 flex justify-center items-start md:px-20 lg:px-48 px-5 mt-20">
          <div className="themeShadown lg:w-3/4 w-full p-5 bg-black rounded-2xl">
            <Image
              src="/cosmos-theme.jpg"
              width={2000}
              height={2000}
              className="w-full"
              alt="plataforma-cosmos"
            />
          </div>
        </div>
      </section>
      <section className="2xl:px-48 lg:px-44 lg:mb-20 flex lg:flex-row gap-y-10 flex-col lg:mt-32 mt-10 space-x-32 bg-black lg:justify-between justify-center lg:items-center md:px-20 px-5">
        <div className="flex flex-col z-20 space-y-5 lg:w-3/4 w-full">
          <h2 className="text-white lg:text-4xl text-2xl">Uma plataforma pensada em <br /> Inovação e conexões <br />estratégicas</h2>
          <p className="text-white">
          A Cosmos é uma plataforma inovadora criada para conectar investidores a startups promissoras em Angola e talentos. Nosso objetivo é impulsionar o crescimento do ecossistema empreendedor, facilitando o acesso a oportunidades de investimento e promovendo soluções sustentáveis para desafios urbanos.
          </p>
          <Funcionalidades title="Investidores" description="encontram startups promissoras para financiar e impulsionar."/>
          <Funcionalidades title="Startups" description="acessam oportunidades de investimento e parcerias estratégicas."/>
          <Funcionalidades title="Empresas estabelecidas" description=" encontram startups inovadoras para resolver desafios tecnológicos e acelerar a transformação digital."/>
          <Funcionalidades title="Talentos" description="  podem se cadastrar na plataforma e se conectar a startups e empresas que precisam de suas habilidades."/>
        </div>
        <CardDesign />
      </section>

      <section className="2xl:px-48 lg:px-44 mb-20 flex lg:flex-row gap-y-10 flex-col lg:mt-32 mt-10 space-x-32 bg-black lg:justify-between justify-center md:px-20 px-5">
        <div className="flex flex-col z-20 space-y-5 lg:w-3/4 w-full">
          <h2 className="text-white lg:text-4xl text-2xl">Como Funciona</h2>
         
          <Funcionalidades title="Cadastre-se" description="Startups, investidores, talentos e empresas criam seus perfis."/>
          <Funcionalidades title="Conecte-se" description="Startups buscam investimentos, talentos encontram oportunidades e empresas acessam soluções inovadoras."/>
          <Funcionalidades title="Negocie" description="Inicie conversas, marque reuniões e feche parcerias."/>
          <Funcionalidades title="Cresça" description="Com o suporte certo, startups evoluem, investidores lucram e empresas inovam."/>
        </div>
        <CardUIPlataforma />
      </section>
      <section className="flex flex-col justify-center items-center w-full lg:px-32 px-5 md:px-20 space-y-10 lg:mt-60 mt-16">
        <h2 className="text-white text-center lg:text-4xl text-xl">
          Benefícios da plataforma
        </h2>
        <Beneficios />
      </section>
      <Depoimentos />
    </main>
  );
}
