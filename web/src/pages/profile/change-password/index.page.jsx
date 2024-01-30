import { Button, Label } from 'flowbite-react'

import TextInput from '@/components/organisms/TextInput'
import Template from '@/components/templates/Template'

import { useHooks } from './hooks'

const ChangePasswordPage = () => {
  const { formState, handleSubmit } = useHooks()
  return (
    <Template>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-2xl font-bold mb-4'>Change Password</div>
        <form
          className='flex flex-col items-center justify-center gap-4'
          onSubmit={handleSubmit}
        >
          <div>
            <div className='mb-2 block'>
              <Label value='Old Password' />
            </div>
            <TextInput name='old_password' type='password' {...formState} />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label value='New Password' />
            </div>
            <TextInput name='password' type='password' {...formState} />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label value='Confirm Password' />
            </div>
            <TextInput
              name='confirmed_password'
              type='password'
              {...formState}
            />
          </div>
          <Button type='submit'>Confirm Password</Button>
        </form>
      </div>
    </Template>
  )
}

export default ChangePasswordPage
