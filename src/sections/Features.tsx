import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"
import Image from "next/image";
import Avatar from "@/components/Avatar";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center">

                <Tag>Feature</Tag>
            </div>
            <h2 className="text-6xl max-w-2xl mx-auto font-medium text-center mt-6">Where power meets <span className="text-lime-400">simplicity</span></h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8"> 

                <FeatureCard className="md:col-span-2 group lg:col-span-1" title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing">
                    <div className="aspect-video flex items-center justify-center">

                        <Avatar className="z-40">
                            <Image className="rounded-full" src={avatar1} alt="avatar 1"/>
                        </Avatar>

                        <Avatar className="-ml-6 z-30 border-indigo-500">
                            <Image className="rounded-full"  src={avatar2} alt="avatar 2"/>
                        </Avatar>

                        <Avatar className="border-amber-400 z-20 -ml-6">
                            <Image className="rounded-full"  src={avatar3} alt="avatar 3"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent transition group-hover:border-green-500 ">

                            <div className="size-full relative bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                            <Image src={avatar4} alt="avatart4" className="rounded-full group-hover:opacity-100 opacity-0 transition absolute size-full"/>
                                {
                                    Array.from({length:3}).map((_,i)=>{
                                        return(
                                            <span key={i} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                        )
                                    })
                                }

                            </div>
                        </Avatar>

                    </div>
                </FeatureCard>
                
                <FeatureCard className="md:col-span-2 group  lg:col-span-1" title="Interactive Prototyping" description="Engage your clients with prototype that react to user action">
                    <div className="aspect-video flex justify-center items-center">
                        <p className="text-4xl font-extrabold text-white/20 duration-500 transition  group-hover:text-white/10 text-center">We've achieved <span className="bg-gradient-to-r relative from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            <span>
                            incredible
                            </span>
                            <video src="/assets/gif-incredible.mp4" muted autoPlay loop playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 duration-500 rounded-2xl shadow-xl opacity-0 pointer-events-none transition group-hover:opacity-100" />

                            </span> growth this year </p>

                    </div>
                </FeatureCard>

                <FeatureCard className="md:col-span-2 group md:col-start-2 lg:col-span-1 lg:col-start-auto" title="Keyboard Quick Action" description="Powerful commands to help you create design more quickly.">
                    <div className="aspect-video flex items-center gap-4 justify-center">
                        <Key className="w-28 outline outline-2 outline-offset-2 outline-transparent transition-all duration-500 group-hover:translate-y-1 group-hover:outline-lime-400">Shift</Key>

                        <Key className="outline outline-2 outline-offset-2 outline-transparent transition-all duration-500 group-hover:translate-y-1 group-hover:outline-lime-400 delay-150">alt</Key>

                        <Key className="outline outline-2 transition-all duration-500 outline-transparent group-hover:translate-y-1 outline-offset-2 group-hover:outline-lime-400 delay-300">C</Key>
                        

                    </div>

                </FeatureCard>
                

            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {features.map((element) => {
                    return (
                        <div className="hover:scale-105 transition duration-500 group  bg-neutral-900 border gap-3 items-center border-white/10 inline-flex px-3 md:px-5 md:py-2  py-1.5 rounded-2xl" key={element}>
                            <span className="bg-lime-400 text-neutral-950 rounded-full size-5 text-xl inline-flex justify-center group-hover:rotate-45 transition duration-500 items-center">&#10038;</span>
                            <span className="md:text-lg font-medium">{element}</span>
                        </div>
                    )
                })}
            </div>


        </div>


    </section>;
}
