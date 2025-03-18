import Link from "next/link";

import LogoCOSMOS from "./LogoCOSMOS";
import EntrarSvg from "../svgs/EntrarSvg";
import Button from "./Button";
import UserSvg from "../svgs/UserSvg";
import NavbarSvg from "../svgs/NavbarSvg";

// import Image from "next/image";
export default function NavbarHome() {
  return (
    <nav className="z-20 flex w-full justify-between items-center">
      <LogoCOSMOS size={30} style={2} />
      <div className="flex items-center space-x-8">
        <Link href="/" className="lg:flex hidden space-x-1 items-center text-white">
          <EntrarSvg />
          <span>Entrar</span>
        </Link>
        <Link href="/" className="lg:flex hidden space-x-1 items-center">
        <Button>
        
        <UserSvg />
        <span>Criar Conta</span>
        
        </Button>
        </Link>
        <button className="text-white lg:hidden flex">
          <NavbarSvg />
        </button>
      </div>
    </nav>
  );
}
