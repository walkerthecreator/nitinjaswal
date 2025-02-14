import Image from "next/image";
import Link from "next/link";


interface Project{
    title : string ,
    photo : string ,
    desc : string ,
    live : string ,
    tech : string [] ,
    badge : string 
}

function Project({ title, photo, desc, live, tech, badge } : Project ) {
    return (
        <div className="mt-20 ">
            <div className="w-full h-60 p-2 md:h-[40vh] group flex items-center justify-center bg-neutral-800 border border-neutral-700 rounded-md my-4 overflow-hidden ">
                <Image
                    src={photo}
                    width="800"
                    height="600"
                    alt="ratemypg-project-screenshot"
                    className="rounded-t-lg translate-y-10 md:translate-y-28 md:group-hover:translate-y-24 transition-transform"
                />
            </div>

            <div>
                <div className="flex justify-between">
                    <h2 className="text-xl font-medium">{title}</h2>
                    {
                        live && 

                    <Link
                    href={live}
                    target="_blank"
                    className="text-sm rounded-full p-1 px-2 bg-neutral-800 text-muted/60 border border-neutral-600 outline outline-1 outline-black flex justify-center gap-1 items-center"
                    >
                        <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                        Live Preview
                    </Link>
                    }
                </div>

                <p className="pt-1 text-zinc-500 my-2">
                   { desc }
                </p>

                    <div className="flex gap-2 mt-4 items-end flex-wrap ">
                        {
                            tech.map((item , index) => {
                                return <span key={index} className="text-sm px-1.5 rounded-md bg-neutral-800 text-zinc-400">
                                { item  }
                            </span>
                            })
                        }
                </div>
            </div>
        </div>
    );
}

export default Project;
