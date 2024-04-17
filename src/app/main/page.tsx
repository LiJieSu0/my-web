import Image from 'next/image';
import Footer from '../components/Footer';
export default function Main(){
    return(
        <div>
            <div className="m-5 mx-10 flex justify-evenly items-center h-[80vh] bg-backGroundColor">
                <div className="p-4">
                    <h1 className="text-4xl animate-bounce">LiJie Su</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officiis minus natus excepturi vitae, ipsa
                        cupiditate illo nostrum autem dicta, mollitia fugit, eaque necessitatibus cum ut consequuntur odit. Cupiditate, nam?</p>
                    <div>
                        <a href="/LiJieSu.pdf" download>
                            <button className="border border-gray-300 focus:bg-yellow-50 hover:bg-gray-500 rounded-md p-3 m-2">Resume</button>
                        </a>
                        <button className="border border-gray-300 focus:bg-yellow-50 hover:bg-gray-500 rounded-md p-3 m-2">Contact</button>
                    </div>

                </div>
                <div>
                    <h1>Page</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellendus ipsam incidunt alias quisquam, blanditiis provident exercitationem id fuga, non laudantium minus sit quibusdam earum ipsa? Ea assumenda quae a ad?</p>
                    <Image src="/selfie.jpg" alt="Selfie" width={500} height={300}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}