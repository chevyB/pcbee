import { Button } from 'flowbite-react'
import { useHooks } from './hooks'
import TextInput from '@/components/organisms/TextInput'

const Login = () => {
  const {formState, handleSubmit } = useHooks()

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a
          href='#'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-800 dark:text-white'
        >
          <img
            className='w-8 h-8 mr-2'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
            alt='logo'
          />
          Logo Here
        </a>

        <h1 className='text-xl font-bold text-gray-800'>
          PC BEE ORDERING PARTS SYSTEM
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='space-y-8 mt-8 w-80'>

            <TextInput label='Username' name='username' {...formState}/>
            <TextInput label='Password' name='password' type="password" {...formState}/>

            <Button color='warning' className='w-full' type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
