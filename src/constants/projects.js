import ProjectImg1 from '../assets/Namelogo.jpg'
import ProjectImg2 from '../assets/project1logo.jpg'
import ProjectImg3 from '../assets/project2logo.png'

const Projects=[
    {
        id:1,
        name:"Portfolio",
        title:"Portfolio Website",
        description:`A personal portfolio website showcasing projects,skills,experience and contact information.`,
        image:ProjectImg1,
        technologies:["HTML","CSS","React","TailwindCSS"]
    },
    {
        id:2,
        name:"Al-mango",
        title:"Al-mango Cafe Interface Project",
        description:`Developed a seamless and intuitive user interface for Al-Mango, a cozy cafe in Oman specializing in Omani flavors and fresh, 
                     mango-inspired dishes. The design enhances customer experience by allowing them to explore the menu, add items to their cart, and place orders 
                     directly into the POS system without staff intervention.This streamlined system offers a variety of offerings, from local coffee to smoothies and desserts, all with a touch of local 
                     inspiration. The interface promotes efficient, independent ordering, making it ideal for busy customers seeking a smooth dining 
                     experience.`,
        image:ProjectImg2,
        technologies:["HTML","CSS","React","TailwindCSS","Framer-motion","Context API"]
    },
    {
        id:3,
        name:"E-Shopper",
        title:" E-commerce Web Application",
        description:` Designed and developed a robust eCommerce platform featuring user authentication, shopping cart, wishlist, and secure 
                      payment integration.`,
        image:ProjectImg3,
        technologies:["HTML","CSS","EJS","NodeJs","ExpressJs","Mongodb","Twilio","Multer"]
    }
]
 
export default Projects;