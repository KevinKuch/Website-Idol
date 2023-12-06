'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'



export default function Navbar({}) {

    const navVariants = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: 50}
    }

    return (
        <>
            <nav className='pt-5'>
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <Image 
                        priority={true} 
                        src='/images/logo.png'
                        alt='Logo' 
                        width={196} 
                        height={20} 
                        />
                    </div>
                    <motion.ul 
                    initial='hidden'
                    whileInView='visible'
                    variants={navVariants}
                    viewport={{once:true}}
                    transition={{duration: 0.5, delay: 0.2}}
                    
                    className='flex flex-row items-center lg:space-x-10 space-x-6 max-md:hidden'>
                        <li><a href="">Accueil</a></li>
                        <li><a href="">Performance</a></li>
                        <li><a href="">Reservation</a></li>
                        <li><a href="">Store</a></li>
                        <li><a href="">About</a></li>
                    </motion.ul>
                    <div className='cursor-pointer'>
                        <button className='lg:px-7 py-2 px-5 bg-white text-black'>Sign in/Log in</button>
                    </div>
                </div>
            </nav>  
        </>
    );
}