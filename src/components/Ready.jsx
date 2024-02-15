import {useEffect, useState,React} from 'react'

function Ready() {
    const [rotate,setRotate]= useState(0);
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
        const mouseX=e.clientX;
        const mouseY=e.clientY;
        let deltaX=mouseX-window.innerWidth/2;
        let deltaY=mouseY-window.innerHeight/2;
        var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI)-90;
        setRotate(angle);
    
        })
        })
  return (
    <div datascroll  data-scroll-speed='-.2' className='w-full h-full bg-[#CDEA68] relative '>
       <div className='textstructure mt-60 px-20 py-20  '>
            {["READY ","TO START","THE PROJECTS?"].map((item,index) => {
                return (
                    
                    <div className="masker flex flex-col justify-center items-center   ">
                        <div className=' w-fit   overflow-hidden  '>
                       
                        <h1 className=' flex items-center text-[12vw] leading-[12vw] tracking-tighter font-bold text-[#212121] uppercase'>
                            {item}
                        </h1>
                        </div>
                    </div>


                    
                    
                );
                
   
            })}
           <div>
           <div className='absolute flex  gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]    '>
                <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                <svg
             style={{transform:`rotate(${rotate}deg)`}}   
    className="w-full h-auto overflow-visible flex-grow"
    data-eye="left"
    width={200}
    height={201}
    viewBox="0 0 200 201"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={100} cy={100} r={100} fill="#F4F4F4" />
    <g className="eyes-svg__group origin-center">
      <circle cx={100} cy={100} r={60} fill="#212121" />
      <circle cx={100} cy={50} r={8} fill="#F4F4F4" />
    </g>
    <text
   
    
      className="uppercase cursor-pointer"
      x={100}
      y={105}
      textAnchor="middle"
      fill="#F4F4F4"
    >
   
      
    </text>
  </svg>
                </div>
                <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                <svg
                  style={{transform:`rotate(${rotate}deg)`}} 
    className="w-full h-auto overflow-visible flex-grow"
    data-eye="left"
    width={200}
    height={201}
    viewBox="0 0 200 201"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={100} cy={100} r={100} fill="#F4F4F4" />
    <g className="eyes-svg__group origin-center">
      <circle cx={100} cy={100} r={60} fill="#212121" />
      <circle cx={100} cy={50} r={8} fill="#F4F4F4" />
    </g>
    <text

      className="uppercase cursor-pointer"
      x={100}
      y={105}
      textAnchor="middle"
      fill="#F4F4F4"
    >
  
    </text>
  </svg>
                </div>
            </div>
           </div>

<div className='flex justify-center items-center py-10 '>
                <button className='border-[2px] py-13 rounded-3xl h-[3vw] flex justify-center items-center gap-2  w-[17vw] text-xl bg-[#212121] uppercase font-semibold'> 
                <p>START THE PROJECT</p>
                <div className='w-2 h-2 bg-zinc-100 rounded-full  '></div>
                
                </button>
               
       </div>

    


       

                         
        </div>
       

       
        
    </div>
  )
}

export default Ready