import React, {useState} from 'react'
import { FaAngular,SiSwift,SiRealm, SiKotlin, SiDart,SiFirebase, IoLogoJavascript,DiYii,FaJava, DiDotnet, FaReact,SiCsharp, SiPhp, FaSass, FaHtml5, FaNodeJs, FaSymfony,SiFlutter,SiIonic, FaLaravel } from 'react-icons/all';





const Stack = () => {
const [active, setActive] = useState(true)
    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='lg:w-1/2 w-full'>
            <div className='mb-5 lg:py-8 lg:px-6 p-5 rounded-lg cursor-pointer' style={{color: active ? 'white' : 'black', backgroundColor: active ? '#1f4287' : 'white'}} onClick={() => setActive(true)}>
                <h1 className='md:text-3xl text-lg font-bold'>Web Development Stack</h1>
                <h4 className='text-lg lg:mt-4 lg:visible invisible h-0 lg:h-auto'>We follow the latest development approaches and technologies to build web applications that meet your requirements</h4>
            </div>
            <div className='mb-5 lg:py-8 lg:px-6 p-5 rounded-lg cursor-pointer' style={{color: !active ? 'white' : 'black', backgroundColor: !active ? '#1f4287' : 'white'}} onClick={() => setActive(false)}>
                <h1 className='md:text-3xl text-lg font-bold'>Mobile Development Stack</h1>
                <h4 className='text-lg lg:mt-4 lg:visible invisible h-0 lg:h-auto'>Cleveroad’s mobile development department follows the latest tech trends to create and future-proof your iOS or Android application.</h4>
            </div>
            </div>
            <div className='lg:w-1/2 w-full p-10'>
                {
                    active ? (
                        <div>
                            <h2 className='text-2xl font-bold'>Frontend</h2>
                            <h2 className='text-4xl flex items-center justify-between px-2 flex-wrap py-5 text-blue-700'><FaAngular /><FaReact /><IoLogoJavascript /><FaSass /><FaHtml5 /></h2>
                            <h2 className='text-2xl font-bold'>Backend</h2>
                            <h2 className='text-4xl flex items-center justify-between px-2 flex-wrap py-5 text-blue-700'><SiCsharp /><FaNodeJs /><SiPhp /><p></p><p></p><p></p></h2>
                            <h2 className='text-2xl font-bold'>Frameworks</h2>
                            <h2 className='text-4xl flex items-center justify-between px-2 flex-wrap py-5 text-blue-700'><FaSymfony /><DiYii /><DiDotnet /><FaLaravel /><p></p></h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className='text-2xl font-bold'>Languages</h2>
                            <h2 className='text-4xl flex items-center justify-between px-2 flex-wrap py-5 text-blue-700'><SiSwift /><SiKotlin /><SiDart /><FaJava /><p></p></h2>
                            <h2 className='text-2xl font-bold'>Frameworks</h2>
                            <h2 className='text-4xl flex items-center justify-between px-2 flex-wrap py-5 text-blue-700'><SiFlutter /><SiIonic /><FaReact /><p></p><p></p><p></p></h2>
                            <h2 className='text-2xl font-bold'>Database</h2>
                            <h2 className='text-4xl flex items-center justify-between px-2 flex-wrap py-5 text-blue-700'><SiFirebase /><SiRealm /><p></p><p></p><p></p><p></p><p></p></h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Stack
