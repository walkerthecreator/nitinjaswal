import Image from "next/image";
import Link from "next/link";
import { UrlObject } from "url";


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
        <div className="mt-20">
            <div className="w-full h-[70vh] group flex items-end justify-center bg-stone-100 rounded-md my-4 overflow-hidden ">
                <Image
                    src={photo}
                    width="800"
                    height="600"
                    alt="ratemypg-project-screenshot"
                    className="rounded-t-lg translate-y-8  group-hover:translate-y-0 transition-transform"
                ></Image>
            </div>

            <div>
                <div className="flex justify-between">
                    <h2 className="text-xl font-medium">{title}</h2>
                    <span className="bg-zinc-700 p-1 px-3 text-sm text-white rounded-full">
                        {badge}
                    </span>
                </div>

                <p className="pt-1 text-zinc-500 my-2">
                   { desc }
                </p>

                <div className="flex items-end justify-between ">
                    <Link
                        href={live}
                        target="_blank"
                        className={("p-1 rounded-md px-3 " + ((live) ? "bg-emerald-100/90 text-emerald-600" : "bg-zinc-100 text-zinc-600"))}
                    >
                        Live Preview
                    </Link>

                    <div className="flex gap-2 mt-4 ">
                        {
                            tech.map((item , index) => {
                                return <span key={index} className="p-1 px-3 rounded-md bg-zinc-100 text-zinc-400">
                                { item  }
                            </span>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
