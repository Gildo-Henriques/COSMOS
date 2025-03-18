import Link from "next/link";
import Image from "next/image";
type Props={
    
    size: number,
    style: 1 | 2
}
export default function LogoCOSMOS({size, style}:Props) {
    return (
        <div className="flex">
            <Link href="/" className="flex space-x-2 items-center">
            <Image src="/COSMOS.svg" width={size} height={size} alt="COSMOS-Logo"/>
            <span className={`text-white lg:text-xl 
                ${style === 1 && 'lg:flex'}
                ${style === 2 && 'flex'}`}>COSMOS</span>
            </Link>
        </div>
    )
}