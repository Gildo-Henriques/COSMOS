import BomSvg from "../svgs/BomSvg"
type Props = {
  title: string;
  description: string;
}
export default function Funcionalidades({title, description}:Props){
    return (
        <ul className="space-y-5">
            <li className="flex space-x-2">
               <div className="text-blue-500">
                 <BomSvg />
               </div>
                <span className="text-gray-300"><span className="text-white">{title} →</span> {description}</span>
            </li>
            
        </ul>
    )
}