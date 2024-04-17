import Link from "next/link";
export default function Header(){
    return(
        <div className="bg-yellow-200 ">
            <div>
                <ul className="list-none flex justify-end space-x-5 mx-20 underline p-3">
                    <li>
                        <Link href="/main">Home</Link>
                    </li>
                    <li>
                        <Link href="/aboutme">About me</Link>
                    </li>
                    <li>
                        <Link href="/aboutpage">About Page</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/">App1</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}