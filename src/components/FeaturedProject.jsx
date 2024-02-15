import { motion, useAnimation } from 'framer-motion'
import React from 'react'


function FeaturedProject() {
    const cards=[useAnimation(),useAnimation()];
    const handlehover=(index)=>{
        cards[index].start({y:"0"});
    }
    const handlehoverEnd=(index)=>{
        cards[index].start({y:"100%"});
    }
  return (
    <div className='w-full  bg-black'>
        <div className="w-full px-20 text-8xl">
        <h1>Featured </h1>
        <div className="border-b-2 pb-20 border-zinc-700 ">
       
         </div>
        <div className='flex justify-evenly'>
        <h2 className='text-2xl px-10 py-20'>FYDE</h2>
        <h2 className='text-2xl px-10 py-20'>VISE</h2>


        </div>
        <div className='px-20'>
        
        <div className="cards w-full   flex gap-10">

            
            <motion.div onHoverStart={()=>handlehover(0)} 
            onHoverEnd={()=>{
                handlehoverEnd(0);
            }}
            className="cardcontainer w-1/2 h-[75vh]   relative ">
                <h1 className="absolute flex overflow-hidden  left-full text-yellow-300 z-[9] -translate-x-1/2 top-1/2  translate-y-1/2  text-6xl ">
                    {"FYDE".split('').map((letter, index) => {
                    return <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[],delay:index*.054}} className='inline-block  ' >{letter}</motion.span>
                })}</h1>
               <div className="card w-full h-full  rounded-xl overflow-hidden ">
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
                <div className='flex gap-2 '>
                <div className='px-3 py-2 border-[2px] border-zinc-500 rounded-full font-light text-lg capitalize  w-[5vw] '>
Audit
</div>
<div className='px-2 py-2 border-[2px] border-zinc-500 rounded-full font-light text-lg capitalize  w-[8vw] '>
Copy Writing
</div> 
<div className='px-2 py-2 border-[2px] border-zinc-500 rounded-full font-light text-lg capitalize  w-[7vw] '>
Sales Deck
</div>
<div className='px-2 py-2 border-[2px] border-zinc-500 rounded-full font-light text-lg capitalize  w-[8vw] '>
Slide Design
</div>
</div> 
            </motion.div>
            
            
            <motion.div 
            onHoverStart={()=>handlehover(1)} 
            onHoverEnd={()=>{
                handlehoverEnd(1);
            }}
            className="cardcontainer w-1/2 h-[75vh] relative rounded-lg  ">
            <h1 className="absolute  overflow-hidden flex right-full text-yellow-300 z-[9] translate-x-1/2 top-1/2  translate-y-1/2  text-6xl ">
            {"VISE".split('').map((letter, index) => {
                    return <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[],delay:index*.054}} 
                    className='inline-block -translate-y-full'> {letter}</motion.span>
                })}
            </h1>
               <div className="card w-full h-full  rounded-xl overflow-hidden ">
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div> 
                <div className='flex gap-2'>
                <div className='px-2 py-2 border-[2px] border-zinc-500 rounded-full font-light text-lg capitalize  w-[8vw] '>
Copy Writing
</div> 
<div className='px-2 py-2 border-[2px] border-zinc-500 rounded-full font-light text-lg capitalize  w-[7vw] '>
Sales Deck
</div>
                </div>
            </motion.div>
            
        </div>
        </div>





      <div className='px-20 py-20'>
        
        <div className="cards w-full   flex gap-10">

            
           
            
            
          
            
        </div>
        </div>
        </div>
        <div className='flex justify-evenly py-20  gap-20   '>
        <button className=' border-[3px] rounded-full h-[4vw]  px-4 w-[15vw] bg-white text-black '>View All Case Studies</button>
        </div>

        <div className='w-full  bg-zinc-800 rounded-lg'>
            <div className='w-full  '>
            <h1 className='text-8xl'>Client's Reviews</h1>
            <div className="border-b-2 pb-20 border-white mt-10"></div>
            <div className='flex justify-between'>
                <h2 className='text-3xl underline'>Karam Ventures </h2>
                <div>
                    <h2 className='text-3xl leading-none mb-20'>Servies</h2>
                    <button className='border-[2px] border-white text-black bg-white rounded-full'>Investor deck</button>
                   <br />
                   <br />
                    <button className='border-[2px] border-white text-black bg-white rounded-full'>Sales Deck</button>
                </div>
                <div className='relative gap-3   '>
                    <h2 className='text-3xl leading-none mb-20 '>Williams Barnes</h2>
                    <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" className='h-[6vw] mb-20  ' />
                   <div className='w-fit'>
                    <p className=' w-1/2 block '>They were transparent about the time and the stages of the project.</p>
                    <p> I have created a very good project</p>
                   </div>

                </div>
                <div>
                    <h2 className= ' text-gray-600 text-3xl' >Read </h2>
                </div>
            </div>

            </div>
        </div>
        

     <div className='bg-zinc-800'>
     <div className='border-b-2 pb-10 border-white '></div>
        <div className='flex  justify-between  text-lg'>
            <p className='underline'>Planetly</p>
            <p className=''>Nina Walloch</p>
            <p className='underline capitalize'>Read</p>
        </div>

        <div className='border-b-2 pb-10 border-white '></div>
        <div className='flex  justify-between  text-lg'>
            <p className='underline'>Planetly</p>
            <p className=''>Nina Walloch</p>
            <p className='underline capitalize'>Read</p>
        </div>

        <div className='border-b-2 pb-10 border-white '></div>
        <div className='flex  justify-between  text-lg'>
            <p className='underline'>Planetly</p>
            <p className=''>Nina Walloch</p>
            <p className='underline capitalize'>Read</p>
        </div>
        

        <div className='border-b-2 pb-10 border-white '></div>
        <div className='flex  justify-between  text-lg'>
            <p className='underline'>Planetly</p>
            <p className=''>Nina Walloch</p>
            <p className='underline capitalize'>Read</p>
        </div>
        

     </div>
        

        
        


        
        

    </div>
  )
}

export default FeaturedProject