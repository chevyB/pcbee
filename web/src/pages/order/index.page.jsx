import React from 'react';
import TextInput from "@/components/organisms/TextInput";
import { Button } from "flowbite-react";
import TextAreaInput from '@/components/organisms/TextAreaInput';
import FilePickerInput from '@/components/organisms/FilePickerInput ';
import DatePicker from '@/components/organisms/DatePicker';
import SelectInput from '@/components/organisms/SelectInput';

const Order = () => {

    const staffOptions = [
        {
            value: 0,
            label: 'Staff Name',
            disabled: true,
            selected: true,
            hidden: true,
        },
        {
            value: 1,
            label: 'Leizl'
        },
        {
            value: 2,
            label: 'Kendra'
        },
        {
            value: 3,
            label: 'Narcisa'
        },
        {
            value: 4,
            label: 'Leila'
        },
    ];
    const statusOptions = [
        {
            value: 0,
            label: 'Status',
            disabled: true,
            selected: true,
            hidden: true,
        },
        {
            value: 1,
            label: 'Open',
        },
        {
            value: 2,
            label: 'In-Transit',
        },
        {
            value: 3,
            label: 'Delivered',
        },
        {
            value: 4,
            label: 'Cancelled',
        },
        {
            value: 5,
            label: 'Onhold',
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
                    PC BEE ORDERING PARTS SYSTEM
                </h1>
                <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* First Column */}
                    <div>
                        <div className="p-4 mb-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                            <div className="grid grid-cols-1 gap-4">
                                <DatePicker label='Date' name='created_at' />
                                <TextInput label='Job Order No.' name='job_order' />
                                <SelectInput label="" name='user_id' options={staffOptions} />
                                <TextInput label='Branch Name' name='Store__id' />
                                <TextInput label='Downpayment' name='downpayment' />

                            </div>
                        </div>
                    </div>
                    {/* Second Column */}
                    <div>
                        <div className="p-4 mb-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                            <div className="grid grid-cols-1 gap-4">
                                <TextInput label='Category' name='category_id' />
                                <TextInput label='Brand' name='brand' />
                                <TextInput label='Unit Model' name='model' />
                                <TextInput label='Parts Model' name='part_model' />
                                <TextInput label='Quantity' name='quantity' />
                                
                            </div>
                        </div>
                    </div>
                    {/* Third Column */}
                    <div>
                        <div className="p-4 mb-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
                            <div className="grid grid-cols-1 gap-4">
                            <SelectInput label='' name='status' options={statusOptions} />
                                <TextInput label='Link Ref' name='link' />
                                <TextAreaInput label='Comments' name='notes' />
                                <FilePickerInput label='Upload File' name='images_paths' />
                                <FilePickerInput label='Upload File' name='images_paths' />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full flex pl-64">
                        <Button gradientMonochrome="success" className='w-1/2' type='submit'>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Order;