import { FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs } from "react-icons/fa"
import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb,SiExpress, SiTailwindcss} from "react-icons/si"


const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div>
                     <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-[#83CD29]"  />
                </div>
                <div className="p-4">
                    <SiMongodb className="text-7xl text-[#47A248]"/>
                </div>
                <div className="p-4">
                   <SiExpress className='text-7xl text-gray-600'/>
                </div>
                <div>
                    <FaGitAlt className="text-7xl text-[#F05033]" />
                </div>
                <div className="p-4">
                    <FaHtml5 className="text-7xl text-[#E34F26]"/>
                </div>
                <div className="p-4">
                    <FaCss3Alt  className="text-7xl text-[#1572B6]"/>
                </div>
                <div className="p-4">
                    <SiTailwindcss className="text-7xl text-[#06B6D4]" />
                </div>
                <div className="p-4">
                    <FaJsSquare className="text-7xl text-[#F7DF1E]"/>
                </div>
        </div>
    </div>
  )
}

export default Technologies
