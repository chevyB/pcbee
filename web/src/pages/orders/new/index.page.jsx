import { Button } from "flowbite-react";
import React from 'react';

import DatePicker from '@/components/organisms/DatePicker';
import FilePickerInput from '@/components/organisms/FilePickerInput ';
import SelectInput from '@/components/organisms/SelectInput';
import TextAreaInput from '@/components/organisms/TextAreaInput';
import TextInput from "@/components/organisms/TextInput";

const Order = () => {

    const staffOptions = [
        {
            value: 0,
            label: 'Select Staff Name',
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
            label: 'Select Status',
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
                <form className="lg:w-3/4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <DatePicker label='Date' name='created_at' />
                        <TextInput label='Job Order No.' name='job_order' />
                        <TextInput label='Category' name='category_id' />
                        <TextInput label='Brand' name='brand' />
                        <TextInput label='Unit Model' name='model' />
                        <TextInput label='Parts Model' name='part_model' />
                        <TextInput label='Quantity' name='quantity' />
                        <TextInput label='Link Ref' name='link' />
                        <TextInput label='Downpayment' name='downpayment' />
                        <TextInput label='Branch Name' name='Store__id' />
                        <SelectInput label='Staff Name' name='user_id' options={staffOptions} />
                        <SelectInput label='Status' name='status' options={statusOptions} />
                        <TextAreaInput label='Comments' name='notes' placeHolder='Comments' />
                        <FilePickerInput label='Upload File' name='images_paths' multiple />
                    </div>
                    
                    <div className="flex justify-center mt-8 ">
                        <Button gradientMonochrome="success" className='w-full lg:w-1/2' type='submit'>
                            Submit
                        </Button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Order;