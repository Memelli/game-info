import React from 'react'
import { RiComputerFill, RiPlaystationFill, RiXboxFill, RiAppleFill, RiMacbookFill, RiAndroidFill } from 'react-icons/ri'
import { FaLinux } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'

const Card = ({ color, title, platform, rating, image, type }) => {

    return (
        <>
            <div className="px-10 my-5 lg:mx-2 xl:mx-2 mx-auto py-6 hover:shadow-xl w-full lg:w-96 xl:w-96 ">
                <div className="mb-5">
                    <img className="lg:h-40 h-70 w-full" alt="a" src={`${image}`} />
                </div>
                <div className="flex justify-between items-center">

                    <span className="font-light text-gray-200">{type}</span>
                    <span className='font-bold text-gray-100 rounded px-2 py-1 bg-blue-500 hover:bg-blue-900'>
                        {rating}/5
                    </span>
                </div>
                <div className="mt-2 w-full">
                    <span className="text-2xl text-gray-500 font-bold hover:text-gray-600" href="/">
                        {title}
                    </span>
                    <div className="mt-2 flex flex-row wrap w-full items-center text-gray-400">
                        {platform.map(plat => (
                            <span key={plat.platform.id} className="text-white mr-1 text-xl">{
                                plat.platform.name.toLowerCase() === 'pc' ? <RiComputerFill key={plat.platform.id} /> :
                                    plat.platform.name.toLowerCase() === 'playstation' ? <RiPlaystationFill key={plat.platform.id} /> :
                                        plat.platform.name.toLowerCase() === 'xbox' ? <RiXboxFill key={plat.platform.id} /> :
                                            plat.platform.name.toLowerCase() === 'ios' ? <RiAppleFill key={plat.platform.id} /> :
                                                plat.platform.name.toLowerCase() === 'apple macintosh' ? <RiMacbookFill key={plat.platform.id} /> :
                                                    plat.platform.name.toLowerCase() === 'android' ? <RiAndroidFill key={plat.platform.id} /> :
                                                        plat.platform.name.toLowerCase() === 'linux' ? <FaLinux className="text-current" key={plat.platform.id} /> :
                                                            plat.platform.name.toLowerCase() === 'nintendo' ? <SiNintendo key={plat.platform.id} /> : plat.platform.name
                            }</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
