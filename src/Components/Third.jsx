import React from 'react'

const Third = () => {
  return (
    <div className="w-full p-4 h-full gap-2 md:justify-evenly items-center flex flex-col md:flex-row mt-[6rem]">
        <div className='flex  items-center  justify-center w-full  md:w-[40%] md:h-[90%]  '>
        <img className=' object-cover w-full md:w-[80%] md:h-[50%] md:mr-12 ' src="data:image/png;base64,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" alt="" />
        </div> 
        <div className='flex  md:ml-8 pl-6  mt-7 justify-center flex-col md:w-[40%] md:h-[90%]  '>
        <span className='text-[29px] font-bold  '>The unseen of spending  three</span>
        <span className='text-[29px] font-bold   '>years of pixelgrade</span>
        <span className='text-[14px] text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic delectus similique, itaque, dolores aspernatur doloribus recusandae, neque nulla autem pariatur ullam nesciunt! Perspiciatis id quaerat ea vero! Perspiciatis, soluta quae. </span>
        
        <button type="button" class="py-2.5 px-2 mr-4 w-fit mb-2 mt-3 text-lg  font-sm text-white focus:outline-none bg-green-600  rounded-sm flex flex-row border border-green-600 hover:bg-gray-100 hover:text-green-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn More


</button>
</div>  
                
    </div>
  )
}

export default Third