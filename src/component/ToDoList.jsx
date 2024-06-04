import React from 'react';
import image from "../assets/image.png";
import TaskList from './TaskList';
import { useToDoContext } from './ToDoContext/ToDoContext';

const ToDoList = () => {
     
    const {activity,setActivity,update,handleUpdate} =  useToDoContext()

   
  return (
    <div>
        <section className='text-gray-600 body-font overflow-hidden'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='w-[80%] mx-auto flex flex-wrap'>
                    <div className='lg:w-1/2'>
                        <img 
                           alt='coding'
                           className='w-full lg:h-auto h-64 object-cover object-center rounded'
                           src={image}
                          />
                    </div>

                   <div className='lg:w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
                    <h2 className='text-gray-900 font-bold mb-5 text-center text-5xl'>
                        Todo
                    </h2>
                    <div className="mb-4">
                        <input
                          type='text'
                          className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
                          focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
                          duration-200 ease-in-out'
                          value={activity}           // 1step p-2
                          onChange={(e)=>setActivity(e.target.value)}
                          />
                    </div>
                       
                       {
                        update? <button className='text-white bg-indigo-500 border-0 py-2mb-6 px-8 focus:outline-none hover:bg-indigo-600
                        rounded text-lg' 
                        onClick={handleUpdate}>   
                        ADD  
                        </button> :  <button className='text-white bg-indigo-500 border-0 py-2mb-6 px-8 focus:outline-none hover:bg-indigo-600
                    rounded text-lg' 
                    onClick={handleUpdate}>   
                    UPDATE 
                    </button>
                       }

                    

                    <TaskList/>
                   </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ToDoList