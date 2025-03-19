"use client"
import Link from "next/link";
import UserSvg from "../svgs/UserSvg";
import LogoCOSMOS from "./LogoCOSMOS";
import FeedSvg from "../svgs/FeedSvg";
import EventosSvg from "./EventosSvg";
import MensagemSvg from "../svgs/MensagemSvg";
import ChatSvg from "../svgs/ChatSvg";
import NotificationSvg from "../svgs/NotificationSvg";
import LightSvg from "../svgs/LightSvg";
import StarsSvg from "../svgs/StarsSvg";
import FaQSvg from "./FaQsvg";
import LogOutSvg from "../svgs/LogOutSvg";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    const links = [
        {href:"/feed", label:"Feed", Icon:FeedSvg},
        {href:"/profile", label:"Perfil", Icon:UserSvg},
        {href:"/mensagem", label:"Mensagem", Icon:MensagemSvg},
        {href:"/notification", label:"Notificações", Icon:NotificationSvg},
        {href:"/eventos", label:"Eventos", Icon:EventosSvg},
    ]
  return (
    <aside className="w-96 2xl:min-w-96 lg:min-w-72 h-screen flex flex-col justify-between lg:sticky -right-full fixed p-5 bg-[#0b0b0b] border-right top-0 lg:left-0">
     <div className="px-5">
     <LogoCOSMOS size={30} style={1} />
     </div>
      <nav className="*:w-full *:space-x-3 space-y-5 *:py-3 *:px-5 *:rounded-md">
        {links.map(({href, label, Icon}) => {
            const isActive = pathname === href
            return (
                <Link key={href} href={href} className={`flex ${isActive ? 'bg-[#181818]' : 'bg-transparent'}`} >
          <Icon />
          <span>{label}</span>
        </Link>
            )
        })}
        <Link className="flex text-black bg-white" href="">
          <ChatSvg />
          <span>Iniciar um chat</span>
        </Link>
       
      </nav>
      <div className="flex flex-col space-y-5 py-8 *:space-x-3 border-top *:px-5">
      <Link className="flex " href="">
          <LightSvg />
          <span>Modo Light</span>
        </Link>
      <Link className="flex " href="">
          <StarsSvg />
          <span>Cosmos Premium</span>
        </Link>
      <Link className="flex " href="">
          <FaQSvg />
          <span>FaQ</span>
        </Link>
      <Link className="flex text-red-500" href="">
          <LogOutSvg />
          <span>Sair</span>
        </Link>
      </div>
    </aside>
  );
}
