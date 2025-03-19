import EntrarSvg from "@/components/svgs/EntrarSvg";
import Image from "next/image";
import Link from "next/link";
// import TestSvg from "@/components/svgs/Test";
// import UserSvg from "@/components/svgs/UserSvg";
import Button from "@/components/ui/Button";
import NavbarHome from "@/components/ui/NavbarHome";
import BlocosAnimados from "@/components/ui/Blocos";
import CardDesign from "@/components/ui/CardPlataform";
import Funcionalidades from "@/components/ui/ListFuncionalidades";
import Beneficios from "@/components/ui/Beneficios";
import Depoimentos from "@/components/ui/Depoimentos";


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
          A COSMOS é a plataforma que une empreendedores visionários, investidores estratégicos e talentos brilhantes para impulsionar inovação e cescimento.
        </p>
        </div>
        
        
        <Link className="flex space-x-2 bg-white px-10 py-3 rounded-md z-20 text-black" href="/feed">
        <span>Testar a plataforma</span>
        <EntrarSvg />
        </Link>
         
        
        <div className="w-full bg-black z-20 flex justify-center items-start md:px-20 lg:px-48 px-5 mt-20">
          <div className="themeShadown lg:w-3/4 w-full p-5 bg-black rounded-2xl">
          <Image src="/cosmos-theme.jpg" width={2000} height={2000} className="w-full" alt="plataforma-cosmos" />
          </div>

        </div>
      </section>
      <section className="2xl:px-48 lg:px-44 mb-20 flex lg:flex-row gap-y-10 flex-col lg:mt-32 mt-10 space-x-32 bg-black lg:justify-between justify-center md:px-20 px-5">
        <div className="flex flex-col z-20 space-y-5 lg:w-3/4 w-full">
          <h2 className="text-white lg:text-4xl text-2xl">Como funciona</h2>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sapiente? Aspernatur vel dolorum modi nesciunt, ad culpa illo at deleniti doloribus molestias saepe nostrum nam. Temporibus corporis dignissimos saepe nesciunt.</p>
          <Funcionalidades/>
        </div>
        <CardDesign />
      </section>
<section className="flex flex-col justify-center items-center w-full lg:px-32 px-5 md:px-20 space-y-10 lg:mt-32 mt-16">
<h2 className="text-white text-center lg:text-4xl text-xl">Benefícios da plataforma</h2>
<Beneficios />
</section>
<Depoimentos />
    </main>
  );
}
