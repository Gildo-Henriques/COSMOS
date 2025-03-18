import BusinessLogoCrescimentoFinanceiro from "../svgs/CrescimentoSvg";
import LogoLampada from "../svgs/LampadaSvg";
import StartupSvg from "../svgs/StartupsSvg";

export default function Beneficios(){
    return (
        <div className="justify-between *:h-52 *:lg:h-60 flex lg:flex-row flex-col gap-5">
            <article className="lg:flex-1 flex flex-col justify-between bg-gradient-to-t from-transparent rounded-md p-5 via-[#0a0a0a] to-[#080808]">
                <div className="text-blue-600">
                <StartupSvg />
                
                </div>
                <h2 className="text-lg">Para Startups</h2>
                <p className="text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet distinctio quaerat voluptas voluptatem! Nemo suscipit explicabo </p>
            </article>
            <article className="lg:flex-1 flex flex-col justify-between bg-gradient-to-t from-transparent rounded-md p-5 via-[#0a0a0a] to-[#080808]">
                <div className="text-blue-600">
                <BusinessLogoCrescimentoFinanceiro />
                
                </div>
                <h2 className="text-lg">Para Investidores</h2>
                <p className="text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet distinctio quaerat voluptas voluptatem! Nemo suscipit explicabo </p>
            </article>
            <article className="lg:flex-1 flex flex-col justify-between bg-gradient-to-t from-transparent rounded-md p-5 via-[#0a0a0a] to-[#080808]">
                <div className="text-blue-600">
                <LogoLampada />
                
                </div>
                <h2 className="text-lg">Para Talentos</h2>
                <p className="text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet distinctio quaerat voluptas voluptatem! Nemo suscipit explicabo </p>
            </article>
        </div>
    )
}