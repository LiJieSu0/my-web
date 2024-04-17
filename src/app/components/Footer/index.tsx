import Image from "next/image";
export default function Footer(){
    return(
        <div className="bg-yellow-200">
            <ul className="list-none flex justify-items-start mx-5">
                <li className="mx-1">
                    <Image src="/github.svg" alt="Github Img" width={50} height={50}/>
                </li>
                <li className="mx-1">
                    <Image src="/linkedin.svg" alt="Github Img" width={50} height={50}/>
                </li>
            </ul>
        </div>
    )
}