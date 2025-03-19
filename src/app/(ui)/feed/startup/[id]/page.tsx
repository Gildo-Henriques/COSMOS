"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import CapitalInicial from "@/components/svgs/CapitalSvg";
import MoneySvg from "@/components/svgs/MoneySvg";
import Button from "@/components/ui/Button";
const StartupProfile = () => {
  const params = useParams();
  const id = params.id;
  const [startupsData, setStartupsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Evita buscar sem ID

    fetch("/data/startups.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setStartupsData(data);
        } else {
          console.error("Erro: dados inválidos no JSON.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar startups:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-blue-500">Carregando...</p>;
  }

  if (!startupsData || startupsData.length === 0) {
    return (
      <p className="text-center text-red-500">
        Erro: Nenhuma startup encontrada.
      </p>
    );
  }

  // Pegando apenas o primeiro investidor
  const investor = startupsData[0] ?? {};

  // Verifica se o feed e startups existem antes de acessar
  const startups = investor?.feed?.startups || [];

  if (!Array.isArray(startups) || startups.length === 0) {
    return (
      <p className="text-center text-red-500">
        Erro: Nenhum feed de startups encontrado.
      </p>
    );
  }

  const startup = startups.find((s) => String(s?.id) === String(id));

  if (!startup) {
    return <p className="text-center text-red-500">Startup não encontrada.</p>;
  }

  return (
    <div className="flex-col p-8">
      <div className="flex lg:flex-row flex-col gap-5 ">
        <div className="relative  border-full rounded-lg h-64">
          <Image
            src={startup.logo}
            className="rounded-lg w-full h-full object-cover"
            width={500}
            height={500}
            alt={startup.name}
          />
          <div className="absolute bg-gradient-to-t from-black/70 flex items-end p-8 to-transparent top-0 left-0 w-full h-full">
            <h1>{startup.name}</h1>
          </div>
        </div>
        <div className="">

          <h2 className="text-2xl">{startup.name}</h2>
          <span>sector: {startup.sector}</span>
          <div className="flex mt-5">
            <div className="text-blue-500">
              <CapitalInicial />
            </div>
            <span className="ml-2">Capital Inicial:</span>
            <p className="ml-2 text-lg">{startup.capital}</p>
          </div>
          <div className="flex mt-5">
            <div className="text-blue-500">
              <MoneySvg />
            </div>
            <span className="ml-2">Capital Necessário:</span>
            <p className="ml-2 text-lg">{startup.investment_needed}</p>
          </div>
        </div>
      </div>
      <div className="space-y-5 mt-10">
        <h2 className="text-2xl">Descrição do projecto</h2>
        <p>{startup.description}</p>
       
        <Button >Investir</Button>
      </div>
      {/* Adicione mais detalhes aqui */}
    </div>
  );
};

export default StartupProfile;
