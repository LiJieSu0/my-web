import Image from "next/image"
export default function DockerIntro(){
    return(
        <div className="flex items-center h-screen  justify-evenly mx-72">
            <Image src="/docker.png" alt="docker" width={250} height={250}/>
            <div className="mx-10">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquam voluptatum consequuntur nam magni ea 
                    adipisci cupiditate ex odio explicabo delectus doloremque, exercitationem dolor assumenda iure quasi eum est vel?</p>
            </div>
        </div>
    )

}