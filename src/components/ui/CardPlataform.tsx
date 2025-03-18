import LogoCOSMOS from "./LogoCOSMOS";

export default function CardDesign(){
    return (
        <div className="lg:w-[500px] mx-auto w-[80%] h-96 border-full-card relative px-5 rounded-lg flex justify-center bg-gradient-to-tr from-[#161616] via-[#0d0d0d] to-black z-20">
            <div className="flex w-auto h-auto self-start mt-5">
            <LogoCOSMOS size={25} style={2} />
            <span className="text-center">Plataforma de conexão</span>
            </div>
            <div className="w-full lg:h-20 h-16 shadow-lg shadow-black lg:-left-20 -left-10 top-20 rounded-lg bg-gradient-to-r from-[#161616] via-[#0d0d0d] to-black absolute border-full-card"></div>

            <div className="w-[90%] lg:h-20 h-16 top-44 rounded-lg bg-gradient-to-t from-[#0f0f0f] via-[#0a0a0a] to-[#080808]  absolute border-full-card"></div>
            <div className="w-[90%] h-16 top-72 rounded-lg bg-white/30  absolute border-full-card"></div>
        </div>
    )
}