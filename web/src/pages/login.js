import { Button, FloatingLabel } from 'flowbite-react'

const Login = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a
          href='#'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <img
            className='w-8 h-8 mr-2'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
            alt='logo'
          />
          Logo Here
        </a>

        <h1 className='text-xl font-bold text-gray-900 '>
          PC BEE ORDERING PARTS SYSTEM
        </h1>

        <form className='mt-8' action='#'>
          <div className='space-y-8'>
            <FloatingLabel variant='outlined' label='Username' width='80' />
            <FloatingLabel variant='outlined' label='Password' width='80' />

            <Button color='warning' className='w-80' type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
