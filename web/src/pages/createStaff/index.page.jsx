import { Button } from 'flowbite-react';
import React from 'react';

import TextInput from '@/components/organisms/TextInput';


//webpage backdround
const backgroundColor = () => {
  return (
    <div className="bg-white min-h-screen p-4"> {/* Use Flowbite class for white background */}
      

      <form className="mt-10 ml-4 w-1/2 lg:w-1/4  ">
        
         <div className>
         <TextInput label='Name' name='createStaff' />
             </div>

                  <div className = 'mt-5'>
               <TextInput label='Position' name='createStaff' />
                  </div>

                        <div className ='mt-5'>
                           <TextInput label='Contact Number' name='createStaff' />
                              </div>

                                 <div className ='mt-5'>
                                       <TextInput label='Account Type' name='createStaff' />
                                                </div> 

                                                       </form>

                                                       
            <Button color='warning' className='w-full' type='submit' 
            style={{width: '160px', height: '60px', float:'left', marginLeft:'18px', marginTop:'11px'}}>
              Submit
            </Button>

   
     
    </div>
  );
};

export default backgroundColor;

