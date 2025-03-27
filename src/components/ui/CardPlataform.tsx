
import BomSvg from "../svgs/BomSvg";
import BusinessLogoCrescimentoFinanceiro from "../svgs/CrescimentoSvg";
import LogoLampada from "../svgs/LampadaSvg";

import StartupsSvg from "../svgs/StartupsSvg";


export default function CardDesign(){
    return (
        // <div className="lg:w-[500px] mx-auto w-[90%] h-96 border-full-card relative px-5 rounded-lg flex justify-center bg-gradient-to-tr from-[#161616] via-[#0d0d0d] to-black z-20">
        //     <div className="flex w-auto h-auto self-start mt-5">
        //     <LogoCOSMOS size={25} style={2} />

        //     </div>
        //     <div className="w-full lg:h-20 h-16 shadow-lg shadow-black lg:-left-20 -left-10 top-20 rounded-lg bg-gradient-to-r from-[#161616] via-[#0d0d0d] to-black absolute border-full-card"></div>

        //     <div className="w-[90%] lg:h-20 h-16 top-44 rounded-lg bg-gradient-to-t from-[#0f0f0f] via-[#0a0a0a] to-[#080808]  absolute border-full-card"></div>
        //     <div className="w-[90%] h-16 top-72 rounded-lg bg-white/30  absolute border-full-card"></div>
        // </div>
        <div className="z-20 lg:w-[450px] w-full  h-[480px] relative">
            <div className="z-20 h-full w-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black  "></div>
            <div className=" z-20 border-full backdrop-blur-lg space-y-5 rounded-4xl px-5 w-full h-full">
            <div className="z-20 w-full space-x-2 flex justify-center py-5 mx-auto">
                <div className="z-20 w-14 rounded-xl border-full"></div>
                <div className="z-20 size-2 rounded-full border-full"></div>
            </div>
            <div className="z-20 lg:w-[400px] w-full items-center px-5 h-20 bg-white/10 backdrop-blur-md rounded-lg flex justify-between lg:-ml-20">
           <div className="z-20 flex space-x-3">
           <div className="z-20 bg-white/5 rounded-lg p-3 backdrop-blur-lg">
           <StartupsSvg/>
           </div>
           <div className="">
            <h2>+500 Startups</h2>
            <p className="z-20 text-xs text-white/50">Startups no mercado Angolano</p>
           </div>
           </div>
           <div className="z-20 text-green-500">
            <BomSvg />
           </div>
            </div>
            <div className="z-20 w-full h-16 bg-gradient-to-b from-white/10 to-white/5 flex justify-between px-3 items-center rounded-lg">
            <div className="z-20 flex space-x-3">
                <div className="z-20 bg-white/5 rounded-lg p-3">
                <BusinessLogoCrescimentoFinanceiro size="size-6"/>
                </div>
                <div className="">
            <h2>+100 Investidores</h2>
            <p className="z-20 text-xs text-white/50">Dispostos a investir em startups</p>
           </div>
            </div>
            <div className="z-20 text-green-500">
            <BomSvg />
           </div>
            </div>
            <div className="z-20 w-full h-16 bg-gradient-to-b from-white/10 to-white/5 flex justify-between px-3 items-center rounded-lg">
            <div className="z-20 flex space-x-3">
                <div className="z-20 bg-white/5 rounded-lg p-3">
                <LogoLampada />
                </div>
                <div className="">
            <h2>+50 Talentos</h2>
            <p className="z-20 text-xs text-white/50">Profissionais dispostos a participar em startups</p>
           </div>
            </div>
            <div className="z-20 text-green-500">
            <BomSvg />
           </div>
            </div>
           
            
        </div>
        </div>
    )
}