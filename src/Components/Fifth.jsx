import React from 'react'

const Fifth = () => {
  return (
    <div className="w-full p-4 h-full md:mt-12 gap-2 justify-evenly items-center flex flex-col md:flex-row mt-[2rem]">
    
      <div className='flex   items-center  justify-evenly  md:w-[40%] md:h-[90%]  '>
      <img className=' object-cover w-full md:w-[80%] md:h-[50%] md:mr-12 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHi9YdJIxQnrolOvvnTnn8VmUuJCv9ZqwTPA&usqp=CAU" alt="" />
      </div> 
      <div className='flex  md:ml-8      mt-7 justify-center flex-col md:w-[40%] md:h-[90%]'>
      <span className='text-[30px] font-bold  '>How to design your site footer like</span>
      <span className='text-[30px] font-bold  '>we did</span>
      <span className='text-[14px] text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam doloribus maiores, nobis nulla quasi pariatur impedit. Exercitationem, repellat est sequi eum cum deleniti tempora, aliquid corporis libero repudiandae aperiam.</span>
      
      <button type="button" class="py-2.5 px-2 mr-3 w-fit mb-2 mt-3 text-lg font-sm text-white focus:outline-none bg-green-600  rounded-sm flex flex-row border border-green-600 hover:bg-gray-100 hover:text-green-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn More


</button>
</div>  
              

  </div>
    
  )
}

export default Fifth