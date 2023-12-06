'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export default function Schedule({}) {

    // State pour suivre l'élément sélectionné et les données de l'horaire
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const [scheduleData, setScheduleData] = useState<ScheduleData[]>([]);

    // Deifinition des types interfaces
    interface Event {
        day: string,
        location: string,
        description: string,
    }

    interface DateData {
        month: string,
        events: Event[],
    }

    interface ScheduleData {
        dates: DateData[],
    }

    // List des kpop idols
    const artists = [
        "BTS",
        "NewJeans",
        "StrayKids",
        "Twice",
        "Red Velvet",
    ];

    // Fonction pour rendre la liste d'images des groupes
    const listImage = () => {
        const images = [
            "/images/bts.jpg",
            "/images/newjeans.jpeg",
            "/images/straykids.jpg",
            "/images/twice.jpg",
            "/images/redvelvet.jpg",
        ];

        // Mapper les images et les afficher
        return images.map((image, index) => (
            <img
              key={index}
              className={`opacity-90 w-full h-auto max-h-[600px] object-cover object-top max-md:mb-20 ${
                selectedItem === index ? "" : "hidden"
              }`}
              src={image}
              alt=""
            />
          ));
        }    

    // Effet pour récupérer les données de l'horaire lors du rendu initial
    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const res = await fetch('/code/data.json');
                const data: ScheduleData[] = await res.json();
                setScheduleData(data);
            } catch (err) { 
                console.log("Error Fetching", err);
            }
        }
        fetchSchedule();
    });

    // Fonction pour rendre les informations de date et événements
    const renderDate = () => {
        // Vérifiez si les données d'horaire pour l'élément sélectionné existent
        if(!scheduleData[selectedItem]) return null;
        const dates = scheduleData[selectedItem].dates;

        return (
            <div className="md:absolute bottom-2 flex items-start justify-around w-full text-neutral-100 max-md:grid grid-cols-2 max-md:gap-6">
                {dates.map((date, index) => (
                    <div key={index} className='text-white'>
                        <h1 className='lg:text=4xl md:text-3xl text=2xl mb-4'>{date.month}</h1>
                        <ul className='lg:space-y-4 space-y-2'>
                            {date.events.map((event, index) => (
                                <li key={index} className='flex flex-row items-center lg:space-x-5 space-x-2'>
                                    <h2 className='lg:text-3xl text-xl'>{event.day}</h2>
                                    <div className='max-md:text-sm'>
                                        <h3>{event.description}</h3>
                                        <h4>{event.location}</h4>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }

    const handleClick = (index:number) => {
        setSelectedItem(index);
    }

    const containerSection = {
        hidden: {opacity: 0},
        visible: {
            opacity:1,
            transition: {
                staggerChildren:0.3,
                delayChildren: 0.8
            }
        }
    }

    const item = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1, y: 0,
            transition: {type: 'smooth'}
        }
    }


    return (
        <motion.div 
        className='mt-20 mb-40'
        initial='hidden'
        whileInView='visible'
        variants={containerSection}
        viewport={{once:true}}
        >
            <motion.div variants={item}>
                <h1 className='lg:text-7x; text-4xl text-center mb-6'>Schedule</h1>
                <p className='lg:text-2xl text-base  text-center w-6/12 max-md:w-10/12 mx-auto text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, harum!</p>
            </motion.div>
            <motion.div variants={item} className='mt-24 lg:text-xl text-base overflow-x-auto'>
                <ul className='flex flex-wrap justify-center items-center text-xl md:text-3xl uppercase space-x-9 whitespace-nowrap scrollbar-hide text-neutral-500'> 
                {/* un tableau généré avec une longueur de 5 */}
                    {Array.from({length:5}, (_, index) => (
                        <li key={index} onClick={() => handleClick(index)}
                            className={`${selectedItem === index ? 'scale-125 text-yellow-500 shadow-xl' : ""} transition-all ease-in duration-150 cursor-pointer`}
                        >
                            {artists[index]}
                        </li>
                    ))}
                </ul>
            </motion.div>
            <motion.div variants={item} className='mt-24'>
                <div className='relative md:bg-gradient-to-tl from-black to-white z-10'>
                    {listImage()}
                    {renderDate()}
                </div>
            </motion.div>
            <motion.div variants={item} className='flex items-baseline mt-32 justify-center'>
                <button className='px-5 py-2 border-2 hover:bg-white hover:text-black transition-all ease-in duration-150'>Show more</button>
            </motion.div>
        </motion.div>
    );
}