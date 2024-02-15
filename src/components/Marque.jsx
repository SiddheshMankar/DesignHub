import { motion } from 'framer-motion';
import React from 'react';

function Marque() {
    return (
       <div data-scroll data-scroll-section data-scroll-speed='.1'  className='bg-zinc-900'>
         <div className='w-full py-20 bg-[#004D43]   overflow-hidden rounded-xl '>
            <div className="text border-t-2  border-b-2 border-zinc-200 flex whitespace-nowrap">
            <motion.div 
                    initial={{ x: '0' }}
                    animate={{ x: '-100%' }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity,repeatType:"loop"}}
                    className='whitespace-nowrap'>
                    <h1 className='text-[17vw] leading-none gap-3 inline-block -mb-[7vw]'>We are Ochi &nbsp;</h1>
                    
                </motion.div>
                <motion.div 
                    initial={{ x: '0' }}
                    animate={{ x: '-100%' }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity ,repeatType:"loop"}}
                    className='whitespace-nowrap'>
                    <h1 className='text-[17vw] leading-none gap-3 inline-block -mb-[7vw]'>We are Ochi &nbsp; </h1>
                    
                </motion.div>
                <motion.div 
                    initial={{ x: '0' }}
                    animate={{ x: '-100%' }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity ,repeatType:"loop"}}
                    className='whitespace-nowrap'>
                    <h1 className='text-[17vw] leading-none gap-3 inline-block'>We are Ochi  &nbsp;</h1>
               
                    
                </motion.div>
                
               
               
            </div>
        </div>
       </div>
    );
}

export default Marque;