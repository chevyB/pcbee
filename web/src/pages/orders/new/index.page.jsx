import { Button } from 'flowbite-react'
import React from 'react'

import DatePicker from '@/components/organisms/DatePicker'
import FilePickerInput from '@/components/organisms/FilePickerInput '
import SelectInput from '@/components/organisms/SelectInput'
import TextAreaInput from '@/components/organisms/TextAreaInput'
import TextInput from '@/components/organisms/TextInput'
import Template from '@/components/templates/Template'

import { useHooks } from './hooks'

const Order = () => {
    const { formState, handleSubmit } = useHooks()

    const branchOptions = [
        {
            value: 0,
            label: 'Branch',
            disabled: true,
            selected: true,
            hidden: true,
        },
        {
            value: 1,
            label: 'Cebu',
        },
        {
            value: 2,
            label: 'Davao',
        },
        {
            value: 3,
            label: 'Tagum',
        },
    ]
    const statusOptions = [
        {
            value: 0,
            label: 'Status',
            disabled: true,
            selected: true,
            hidden: true,
        },
        {
            value: 'open',
            label: 'Open',
        },
        {
            value: 'in-transit',
            label: 'In-Transit',
        },
        {
            value: 'delivered',
            label: 'Delivered',
        },
        {
            value: 'cancelled',
            label: 'Cancelled',
        },
        {
            value: 'onhold',
            label: 'Onhold',
        },
    ]
    const categoryOptions = [
        {
            value: 0,
            label: 'Category',
            disabled: true,
            selected: true,
            hidden: true,
        },
        { value: 1, label: 'Charger' },
        { value: 2, label: 'Battery' },
        { value: 3, label: 'Keyboard' },
        { value: 4, label: 'Motherboard' },
        { value: 5, label: 'Flex' },
        { value: 6, label: 'LCD' },
        { value: 7, label: 'Case' },
        { value: 8, label: 'Speaker' },
        { value: 9, label: 'Fan' },
    ]
    return (
        <Template>
            <section className='bg-white dark:bg-gray-900'>
                <div className='container mx-auto px-8 py-8'>
                    <form onSubmit={handleSubmit} className='grid lg:grid-cols-2 gap-4'>
                        <div className='grid grid-cols-1 gap-4'>
                            <DatePicker label='Date' name='order_at' {...formState} />
                            <TextInput
                                label='Job Order No.'
                                name='job_order'
                                {...formState}
                            />
                            <TextInput label='User ID' name='user_id' {...formState} />
                            <SelectInput
                                label='Status'
                                name='status'
                                options={statusOptions}
                                {...formState}
                            />
                            <SelectInput
                                label='Category'
                                name='category_id'
                                options={categoryOptions}
                                {...formState}
                            />
                            <TextInput label='Brand' name='brand' {...formState} />
                            <TextInput
                                label='Order Number'
                                name='order_number'
                                {...formState}
                            />
                            <TextInput label='Parts Model' name='part_model' {...formState} />
                            <TextInput label='Quantity' name='quantity' {...formState} />
                            <TextInput label='Link Ref' name='link' {...formState} />
                            <TextInput label='Down Payment' name='downpayment' {...formState} />
                            <FilePickerInput
                                label='Upload File'
                                name='images_paths'
                                multiple
                                {...formState}
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-2'>
                            <SelectInput
                                label='Branch'
                                name='store_id'
                                options={branchOptions}
                                {...formState}
                            />
                            <TextInput
                                label='Unit Model'
                                name='model'
                                className='mb-36'
                                {...formState}
                            />
                        </div>
                        <div className='col-span-full'>
                            <TextAreaInput
                                label='Comments'
                                name='notes'
                                placeHolder='Comments'
                                {...formState}
                            />
                        </div>
                        <div className='col-span-full'>
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
