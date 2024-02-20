import { Button } from 'flowbite-react'
import React from 'react'
import { FaUserFriends } from 'react-icons/fa'

import PageHeader from '@/components/organisms/PageHeader'
import TextInput from '@/components/organisms/TextInput'
import AdminGuard from '@/components/templates/AdminGuard'
import Template from '@/components/templates/Template'

import { useHooks } from './hooks'

const AddStaff = () => {
  const { formState, handleSubmit } = useHooks()
  const breadcrumbs = [
    {
      href: '/staffs',
      title: 'Staffs',
      icon: FaUserFriends,
    },
    {
      href: '#',
      title: 'Staff Create',
    },
  ]

  return (
    <Template>
      <AdminGuard>
        <PageHeader breadcrumbs={breadcrumbs} />

        <form
          className='flex center w-80 flex-col gap-2'
          onSubmit={handleSubmit}
        >
          <TextInput label='Name' name='name' {...formState} />
          <TextInput label='Username' name='username' {...formState} />
          <TextInput label='Position' name='position' {...formState} />
          <TextInput label='Contact Number' name='phone' {...formState} />
          <TextInput label='Account Type' name='role' {...formState} />

          <Button color='warning' type='submit' style={{ width: 140 }}>
            Submit
          </Button>
        </form>
      </AdminGuard>
    </Template>
  )
}

export default AddStaff
