import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.1'  className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className='text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
   
    <div className='w-full  mt-20 border-t-[1px] border-[#3f491c]'>
      <div className='grid gap-y-30    '>
        <div className='flex items-center space-x-10 gap-20'>
          <h1 className='text-[3.5vw] leading-[4.5vw] font-bold '>Our Mission</h1>
          <p className='text-[1.5vw] leading-[2vw]  w-fit mt-10 '>We help tech businesses grow by creating compelling stories that inspire action. We do this by combining our deep understanding of the tech industry with our expertise in storytelling, design, and marketing.</p>
        <p className='text-[1.5vw] leading-[2vw]  w-fit mt-10 '>
We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.

We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
        </div>
        <div className='w-full pt-10 flex gap-5  mt-20 border-t-[1px] border-[#3f491c]'>
          <div className='w-1/2  mt-10 '>
            <h1 className='text-6xl '>Our Approach</h1>
            <button className=' mt-10 flex items-center  gap-10 px-10 py-6 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full '></div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh]  rounded-4xl'>
          <picture>
            <img src="/img.jpg" alt=""  className='rounded-3xl w-[40vw]'/>
          </picture>
          </div>

        </div>

</div>
    </div>

    </div>
  )
}

export default About