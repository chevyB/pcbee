import { Button } from 'flowbite-react'
import React from 'react'

import TextInput from '@/components/organisms/TextInput'
import Template from '@/components/templates/Template'

const AddStaff = () => {
  return (
    <Template>
      <form className='flex w-80 flex-col gap-2'>
        <TextInput label='Name' name='createStaff' />
        <TextInput label='Position' name='createStaff' />
        <TextInput label='Contact Number' name='createStaff' />
        <TextInput label='Account Type' name='createStaff' />

        <Button
          color='warning'
          type='submit'
          style={{ width: 140, height: 55 }}
        >
          Submit
        </Button>
      </form>
    </Template>
  )
}

export default AddStaff
