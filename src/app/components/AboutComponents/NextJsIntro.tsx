import Image from "next/image"
export default function NextJsIntro(){
    return(
        <div className="flex justify-center items-center h-screen ">
            <div className="mx-60">
                <Image src="next.svg" alt="nextjs" width={500} height={500}/>
                <p className="mt-4 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, eaque excepturi accusamus explicabo dicta, 
                    qui eius alias facilis sed, beatae atque deleniti cum voluptatem aut labore suscipit? Commodi, eligendi ratione?
                    qui eius alias facilis sed, beatae atque deleniti cum voluptatem aut labore suscipit? Commodi, eligendi ratione?
                    qui eius alias facilis sed, beatae atque deleniti cum voluptatem aut labore suscipit? Commodi, eligendi ratione?
                </p>
            </div>
        </div>
    )
}