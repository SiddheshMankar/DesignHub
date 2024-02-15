import React, { useEffect, useState ,useRef} from 'react'

function Eye() {
   const [rotate,setRotate]= useState(0);
   const videoRef = useRef(null);

   const handlePlayVideo = () => {
       if (videoRef.current) {
           videoRef.current.play();
       }
   };
  
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
    <div className='eyes w-full h-screen  overflow-hidden'>

        <div  data-scroll  data-scroll-speed='-.7' className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]  '>
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
    onClick={handlePlayVideo}
    
      className="uppercase cursor-pointer"
      x={100}
      y={105}
      textAnchor="middle"
      fill="#F4F4F4"
    >
      play
      
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
      play
    </text>
  </svg>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Eye