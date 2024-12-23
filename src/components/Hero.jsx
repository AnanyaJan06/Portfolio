import Profilepic from '../assets/profilepic.jpg'
import {motion} from "framer-motion" 

const containerVariants ={
  hidden:{opacity:0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5,
    }
  }
}

const ChildVariants={
  hidden:{opacity:0,x:-100},
  visible:{opacity:1,
  x:0,
  transition:{
    duration:0.5
  }  
  }
}

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:p-8'>
                <motion.img src={Profilepic} alt="Ananya" className='border border-stone-900 rounded-3xl' height={650} width={650} initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.5}}/>
            </div>
         </div>
         <div className='w-full lg:w-1/2'>
           < motion.div initial="hidden" animate="visible" variants={containerVariants} className='flex flex-col items-center lg:items-start mt-10'>
            <motion.h2 variants={ChildVariants} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Ananya P</motion.h2>
            <motion.span variants={ChildVariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
            <motion.p variants={ChildVariants} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
            A MERN stack developer at levelX with hands-on experience in building full-stack applications using MongoDB, Express.js, React, and Node.js. I have developed live projects, including a restaurant and café ordering system with QR code functionality and real-time admin notifications via WhatsApp. I specialize in creating responsive, user-friendly interfaces, integrating backend services with React, and managing databases. Additionally, I am skilled in using Tailwind CSS for efficient styling and have worked with Twilio for communication features.
            </motion.p>
            <motion.a variants={ChildVariants} href="/resume.pdf" target="_blank" rel="noopener noreferrer" download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>
              Download Resume
            </motion.a>
            </motion.div> 
         </div>
        </div>
    </div>
  )
}

export default Hero
