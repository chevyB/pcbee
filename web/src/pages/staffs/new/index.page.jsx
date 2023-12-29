import { Button } from 'flowbite-react';
import React from 'react';

import TextInput from '@/components/organisms/TextInput';


const CreateStaffPage = () => {
  return (

   
   <div className="bg-white min-h-screen p-5">

      <form className="flex flex-col gap-4">  
      <TextInput label='Name' name='createStaff'/>
      <TextInput label='Position' name='createStaff' />
      <TextInput label='Contact Number' name='createStaff' />
      <TextInput label='Account Type' name='createStaff' />
      </form>

                                                       
      <Button color='warning' className='w-32 h-14' type='submit'>
      Submit
      </Button>

    </div>

  );
};

export default CreateStaffPage;

