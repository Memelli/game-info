import React from 'react'
import { Link } from 'react-router-dom'
import { RiComputerFill, RiPlaystationFill, RiXboxFill, RiAppleFill, RiMacbookFill, RiAndroidFill } from 'react-icons/ri'
import { FaLinux } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'

const Card = ({ color, title, platform, rating, image, slug, type }) => {

    return (
        <>
            <div style={{ backgroundColor: `#${color}` }} className="px-10 my-10 lg:mx-2 xl:mx-2 mx-auto py-6 rounded shadow-md hover:shadow-xl w-full lg:w-96 xl:w-96 ">
                <div className="mb-5">
                    <img className="lg:h-40 h-70 w-full" alt="a" src={`${image}`} />
                </div>
                <div className="flex justify-between items-center">

                    <span className="font-light text-gray-200">{type}</span>
                    <a className='font-bold text-gray-100 rounded px-2 py-1 bg-blue-500 hover:bg-blue-900'
                        href="/">
                        {rating}/5
                    </a>
                </div>
                <div className="mt-2 w-full">
                    <a className="text-2xl text-gray-200 font-bold hover:text-gray-400" href="/">

                        {title}
                    </a>
                    <div className="mt-2 flex flex-row wrap w-full items-center text-gray-400">
                        {platform.map(plat => (
                            <span className="text-white mr-1 text-xl">{
                                plat.platform.name.toLowerCase() === 'pc' ? <RiComputerFill /> :
                                    plat.platform.name.toLowerCase() === 'playstation' ? <RiPlaystationFill /> :
                                        plat.platform.name.toLowerCase() === 'xbox' ? <RiXboxFill /> :
                                            plat.platform.name.toLowerCase() === 'ios' ? <RiAppleFill /> :
                                                plat.platform.name.toLowerCase() === 'apple macintosh' ? <RiMacbookFill /> :
                                                    plat.platform.name.toLowerCase() === 'android' ? <RiAndroidFill /> :
                                                        plat.platform.name.toLowerCase() === 'linux' ? <FaLinux className="text-current" /> :
                                                            plat.platform.name.toLowerCase() === 'nintendo' ? <SiNintendo /> : plat.platform.name
                            }</span>
                        ))}
                    </div>
                </div>
                {/* <div className="flex justify-between items-center mt-4">
                        <a className="text-blue-600 hover:underline" href={`/${slug}`}>Ver mais</a>
                    </div> */}
            </div>
        </>
    )
}

export default Card
