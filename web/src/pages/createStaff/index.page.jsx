import { Button } from 'flowbite-react';
import React from 'react';

import TextInput from '@/components/organisms/TextInput';


//webpage backdround
const backgroundColor = () => {
  return (
    <div className="bg-white min-h-screen p-4"> {/* Use Flowbite class for white background */}
      

      <form className="mt-10 ml-4 w-1/2 lg:w-1/4  ">
       
         <TextInput label='Name' name='createStaff'/>
        <TextInput label='Position' name='createStaff' />
        <TextInput label='Contact Number' name='createStaff' />
        <TextInput label='Account Type' name='createStaff' />
                                                 

       </form>

                                                       
            <Button color='warning' className='w-full' type='submit' 
            style={{width: '160px', height: '60px', float:'left', marginLeft:'19px', marginTop:'5px'}}>
              Submit
            </Button>

   
     
    </div>
  );
};

export default backgroundColor;

