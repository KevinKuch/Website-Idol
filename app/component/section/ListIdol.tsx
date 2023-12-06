'use client'
import Image from 'next/image'
import { motion, useAnimate, stagger } from 'framer-motion'

export default function ListIdol({}) {

    const containerIntro = {
        hidden: {opacity: 0},
        visible: {
            opacity:1,
            transition: {
                staggerChildren:0.3,
                delayChildren: 0.8
            }
        }
    }

    const itemIntro = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1, y: 0,
            transition: {type: 'smooth'}
        }
    }

    const image = {
        hidden: {opacity: 0, scale: 1.1, y: 30},
        visible: {
            opacity: 1, 
            scale: 1, y: 0,
            transition: {type: 'smooth'}
        },
    }

    return (
        <div className='mt-40'>
            <motion.div 
            className='md:grid grid-cols-2 gap-x-7 space-y-10'
            initial='hidden'
            whileInView='visible'
            variants={containerIntro}
            viewport={{once:true}}
            >
                <motion.img variants={image} src="/images/redvelvet.jpg" alt="Red velvet" />
                <div className='max-wd:hidden text-4xl md:text-7xl text-neutral-800 flex items-center font-extrabold uppercase'>Elegant</div>
                <motion.div variants={itemIntro}>
                    <h1 className='text-4xl mt-7 mb-4 max-sm:text-3xl uppercase'>Red Velvet</h1>
                    <p className='text-2xl text-neutral-500 max-sm:text-xl'>SM Entertainments</p>
                    <p className='text-neutral-500 mt-3 max-sm:text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam possimus mollitia officia asperiores necessitatibus est nesciunt earum rerum non.</p>
                    <button className='px-5 py-2 mt-5 border-2 border-white hover:bg-white hover:text-black transition-all ease-in duration-200'>Show more</button>
                </motion.div>

                <motion.img variants={image} className='md:mt-[40px]' src="/images/blackpink.jpg" alt="Black pink" />
                <div className='text-4xl md:text-7xl text-neutral-800 flex items-center mb-20 font-extrabold uppercase'>Events</div>
                <motion.div variants={itemIntro}>
                    <h1 className='text-4xl mt-7 mb-4 max-sm:text-3xl uppercase'>Black pink</h1>
                    <p className='text-2xl text-neutral-500 max-sm:text-xl'>SM Entertainments</p>
                    <p className='text-neutral-500 mt-3 max-sm:text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam possimus mollitia officia asperiores necessitatibus est nesciunt earum rerum non.</p>
                    <button className='px-5 py-2 mt-5 border-2 border-white hover:bg-white hover:text-black transition-all ease-in duration-200'>Show more</button>
                </motion.div>
            </motion.div>
        </div>
    );
}