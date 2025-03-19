import BomSvg from "../svgs/BomSvg"
export default function Funcionalidades(){
    return (
        <ul className="space-y-5">
            <li className="flex space-x-2">
               <div className="text-blue-500">
                 <BomSvg />
               </div>
                <span className="text-gray-300"><span className="text-white">Crie sua Conta →</span> Escolha entre Startup, Investidor ou Talento.</span>
            </li>
            <li className="flex space-x-2">
              <div className="text-blue-500">
                 <BomSvg />
              </div>
                <span className="text-gray-300"><span className="text-white">Conecte-se com Oportunidades →</span> Matchmaking inteligente sugere conexões relevantes.</span>
            </li>
            <li className="flex space-x-2">
               <div className="text-blue-500">
                 <BomSvg />
               </div>
                <span className="text-gray-300"><span className="text-white">Engaje-se e Cresça → </span>Participe de mentorias, eventos e interações exclusivas.</span>
            </li>
            <li className="flex space-x-2">
               <div className="text-blue-500">
                 <BomSvg />
               </div>
                <span className="text-gray-300"><span className="text-white">Negocie e Evolua →</span> Converse com investidores, encontre talentos e impulsione seu negócio.</span>
            </li>
        </ul>
    )
}