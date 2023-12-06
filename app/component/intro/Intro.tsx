'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro({}) {

    const containerIntro = {
        hidden: {opacity: 0},
        visible: {
            opacity:1,
            transition: {
                staggerChildren:0.3
            }
        }
    }

    const itemIntro = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1, y: 0,
            transition: {type: 'smooth'},
        }
    }

    return (
        <div className='pt-28'>
            <motion.div 
                className='flex flex-col items-center justify-between'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true}}
                variants={containerIntro}
            >
                <motion.h1 variants={itemIntro} className='text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl'>Danse, rythme, émotion</motion.h1>
                <motion.p variants={itemIntro} className='text-center text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl'>Idol Kpop captivantc</motion.p>
                <motion.p variants={itemIntro} className='text-xl text-center w-10/12 mx-auto tracking-widest text-neutral-400 max-lg:text-base max-md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.
                </motion.p>
            </motion.div>

            <div className='mt-28 text-white'>
                <div className='p-2 relative'>
                    <img className='w-full lg:h-[700px] md:h-[500px] h-[300px] object-cover object-top opacity-100' src="/images/aespa.webp" alt="Aespa" />
                    <motion.div 
                        variants={containerIntro} 
                        initial='hidden' 
                        whileInView='visible' 
                        viewport={{once:true}} 
                        transition={{delay:1.5, delayChildren:0.1}}
                    >
                        <motion.span variants={itemIntro} className="absolute top-4 left-4 lg:text-7xl text-4xl">Aespa</motion.span>
                        <motion.span variants={itemIntro} className="absolute bottom-8 left-4 lg:text-xl md:text-base text-sm max-sm:hidden">Aespa est un groupe de filles sud-coréen formé par SM Entertainment.</motion.span>
                        <motion.span variants={itemIntro}className="absolute top-4 right-4 md:text-xl text-sm">Allez acheter les billets.</motion.span>
                        <motion.span variants={itemIntro} className="absolute right-4 bottom-4 md:text-3xl text-sm">Seoul, December 12</motion.span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}