type Props = {
    children:React.ReactNode;
}
export default function Button({children}:Props){
    return (
        <button className="z-20 space-x-1 px-5 py-2 flex cursor-pointer items-center rounded-md text-black bg-white" >
            {children}
        </button>
    )
}