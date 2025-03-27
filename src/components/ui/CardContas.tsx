import BusinessLogoCrescimentoFinanceiro from "../svgs/CrescimentoSvg";
import StartupSvg from "../svgs/StartupSvg";
import UserSvg from "../svgs/UserSvg";

export default function CardUIPlataforma(){
    return (
        <div className="lg:w-[500px] w-full lg:flex hidden relative *:h-60 *:w-56 *:rounded-xl *:p-5 *:flex *:justify-center *:items-center *:flex-col *:backdrop-blur-lg *:absolute *:space-y-3">
            <div className="top-0 left-0 bg-white/5">
            <div className="text-white/35">
                <BusinessLogoCrescimentoFinanceiro size="size-8" />
            </div>
            <div className="w-32 h-2 rounded-full bg-white/5"></div>
            <div className="w-44 h-2 rounded-full bg-white/5"></div>
            <button className="border px-5 py-1 rounded-lg border-white/5 text-white/5 text-sm">
                Conta Investidor
            </button>
            </div>
            <div className="lg:top-20 lg:left-32 top-32 left-20 bg-white/10">
            <div className="text-white/35">
                <UserSvg size="size-8"/>
            </div>
            <div className="w-32 h-2 rounded-full bg-white/5"></div>
            <div className="w-42 h-2 rounded-full bg-white/5"></div>
            <button className="border px-5 py-1 text-white/10 border-white/15 text-sm rounded-lg">
                Conta Talento
            </button>
            </div>
            <div className="top-52 lg:left-60 left-44 bg-blue-500/10">
            
               <div className="text-white/35">
                 <StartupSvg size="size-8"/>
               </div>
                <div className="w-32 h-2 rounded-full bg-white/5"></div>
                <div className="w-44 h-2 rounded-full bg-white/5"></div>
                <button className="border border-blue-500/15 text-blue-500/15 text-sm px-5 py-1 rounded-lg">
                    Conta Startup
                </button>
            
            </div>
        </div>
    )
}