"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BusinessLogoCrescimentoFinanceiro from "@/components/svgs/CrescimentoSvg";
import Link from "next/link";
interface Startup {
  id: string;
  name: string;
  logo: string;
  resumo: string;
  image: string;
  investment_needed: string;
}
interface InvestorData {
  name: string;
  profile: string;
  feed: {
    startups: Startup[];
  };
}
export default function Page() {
  const [investorData, setInvestorData] = useState<InvestorData | null>(null);

  useEffect(() => {
    fetch("/data/startups.json") // Carregar os dados
      .then((response) => response.json())
      .then((data) => setInvestorData(data[0])); // Pegando o primeiro investidor
  }, []);

  return (
    <main className="lg:px-10 flex flex-col items-center w-full px-5">
      <div className="flex relative w-full h-52 mt-10 rounded-lg">
        <Image
          src="/users.png"
          alt="oi"
          className="w-full h-full object-cover rounded-lg"
          height={1000}
          width={1000}
        />

        <div className="h-full w-full space-y-2 px-5 flex flex-col justify-end bg-gradient-to-t from-black via-[#000000a0] to-transparent absolute">
          {investorData && (
            <>
              <h1 className="text-2xl">Bem-vindo, {investorData.name}</h1>
              <span className="flex items-center">
                <BusinessLogoCrescimentoFinanceiro />
                <span>Conta de investidor</span>
              </span>
            </>
          )}
        </div>
      </div>
      <div className="text-white mt-20 w-full lg:px-5 space-y-5 pb-10 flex flex-col">
        <h2 className="text-2xl">Startups disponíveis para investimento:</h2>
        <section className="w-full bg-[#0b0b0b] p-6 rounded-xl flex flex-wrap *:flex-1 gap-8 lg:flex-row flex-col">
          {investorData && (
            <>
              {investorData?.feed?.startups?.map((startup) => {
                console.log(startup);
                return (
                  <div
                    key={startup.id}
                    className="lg:w-[400px] md:w-96 self-start w-full space-y-5"
                  >
                    <img
                      src={startup.image}
                      alt={startup.name}
                      className="object-cover w-full lg:h-28 2xl:h-52"
                      height="300"
                      width="300"
                    />

                    <div className="self-start w-auto flex  space-x-2 items-center">
                      <div className="bg-black size-5 overflow-hidden  flex items-center justify-center rounded-full border-full">
                        <img
                          src={startup.logo}
                          width={20}
                          height={50}
                          className="size-full"
                        />
                      </div>

                      <h3 className="">{startup.name}</h3>
                    </div>

                    <div className="space-y-5">
                      <p className="text-lg">{startup.resumo}</p>

                      <span>
                        Necessita de:{" "}
                        <span className="text-xl">
                          {startup.investment_needed}
                        </span>
                      </span>
                    </div>
                    <Link href={`/feed/startup/${startup.id}`}>
                      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                        Saber mais
                      </button>
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </section>
      </div>
    </main>
  );
}
