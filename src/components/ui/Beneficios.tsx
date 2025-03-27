import BusinessLogoCrescimentoFinanceiro from "../svgs/CrescimentoSvg";
import LogoLampada from "../svgs/LampadaSvg";
import StartupSvg from "../svgs/StartupsSvg";

export default function Beneficios(){
    return (
        <div className="justify-between *:h-80 *:lg:h-72 flex lg:flex-row flex-col gap-5">
            <article className="lg:flex-1 flex flex-col justify-between bg-gradient-to-t from-transparent rounded-md p-5 via-[#0a0a0a] to-[#080808]">
                <div className="text-blue-600">
                <StartupSvg />
                
                </div>
                <h2 className="text-lg">Para Startups</h2>
                <p className="text-white/50">A plataforma oferece visibilidade para novos empreendimentos, conectando-os a investidores e empresas que buscam soluções inovadoras. Além disso, possibilita o acesso a talentos qualificados que podem fortalecer as equipes e impulsionar o crescimento do negócio. </p>
            </article>
            <article className="lg:flex-1 flex flex-col justify-between bg-gradient-to-t from-transparent rounded-md p-5 via-[#0a0a0a] to-[#080808]">
                <div className="text-blue-600">
                <BusinessLogoCrescimentoFinanceiro size="size-6"/>
                
                </div>
                <h2 className="text-lg">Para Investidores</h2>
                <p className="text-white/50">A Cosmos facilita a descoberta de startups promissoras, fornecendo informações detalhadas para decisões mais estratégicas. Além do retorno financeiro, os investidores podem participar do desenvolvimento de inovações que transformam mercados e resolvem grandes desafios. </p>
            </article>
            <article className="lg:flex-1 flex flex-col justify-between bg-gradient-to-t from-transparent rounded-md p-5 via-[#0a0a0a] to-[#080808]">
                <div className="text-blue-600">
                <LogoLampada />
                
                </div>
                <h2 className="text-lg">Para Talentos</h2>
                <p className="text-white/50">Profissionais têm a chance de trabalhar em projetos inovadores e de alto impacto, se conectando diretamente com startups e empresas que precisam de suas habilidades. A Cosmos também permite que talentos se posicionem no mercado e encontrem oportunidades que combinam com seus perfis. </p>
            </article>
        </div>
    )
}