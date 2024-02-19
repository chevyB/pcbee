import { Button } from 'flowbite-react'
import { FaTasks } from 'react-icons/fa'

import DatePicker from '@/components/organisms/DatePicker'
import FilePickerInput from '@/components/organisms/FilePickerInput '
import PageHeader from '@/components/organisms/PageHeader'
import SelectInput from '@/components/organisms/SelectInput'
import TextAreaInput from '@/components/organisms/TextAreaInput'
import TextInput from '@/components/organisms/TextInput'
import Template from '@/components/templates/Template'
import { branchOptions, statusOptions } from '@/hooks/const'

import { useHooks } from './hooks'

const Order = () => {
  const { formState, handleSubmit, categories } = useHooks()

  const breadcrumbs = [
    {
      href: '/orders',
      title: 'Orders',
      icon: FaTasks,
    },
    {
      href: '#',
      title: 'Order Create',
    },
  ]
  return (
    <Template>
      <PageHeader breadcrumbs={breadcrumbs} />

      <section className='bg-white dark:bg-gray-900'>
        <div className='container mx-auto px-8 py-8'>
          <form onSubmit={handleSubmit} className='flex flex-col '>
            <div className='flex flex-col space-y-4'>
              <div className='flex space-x-4'>
                <DatePicker label='Date' name='order_at' {...formState} />
                <SelectInput
                  label='Branch'
                  name='store_id'
                  className='w-60'
                  options={branchOptions}
                  {...formState}
                />
              </div>
              <TextInput
                label='Job Order No.'
                name='job_order'
                {...formState}
              />
              <SelectInput
                label='Status'
                name='status'
                className='w-60'
                options={statusOptions}
                {...formState}
              />
              <SelectInput
                label='Category'
                name='category_label'
                className='w-60'
                options={[
                  { value: '', label: 'Category', isDisabled: true },
                  ...(categories?.map((category) => ({
                    value: category.label,
                    label: category.label,
                  })) || []),
                ]}
                {...formState}
              />
              <div className='flex  space-x-4'>
                <TextInput label='Brand' name='brand' {...formState} />
                <TextInput label='Unit Model' name='model' {...formState} />
              </div>
              <TextInput label='Parts Model' name='part_model' {...formState} />
              <TextInput label='Quantity' name='quantity' {...formState} />
              <TextInput label='Link Ref' name='link' {...formState} />
              <div className='flex  space-x-4'>
                <TextInput
                  label='Down Payment'
                  name='downpayment'
                  type='number'
                  {...formState}
                />
                <TextInput
                  label='Amount'
                  name='amount'
                  type='number'
                  {...formState}
                />
              </div>
              <FilePickerInput
                label='Upload File'
                name='files'
                multiple
                {...formState}
              />
              <TextAreaInput
                label='Comments'
                name='notes'
                placeHolder='Comments'
                className='w-full'
                {...formState}
              />
              <Button color='warning' type='submit'>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Template>
  )
}

export default Order
