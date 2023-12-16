import React from 'react';
import TextInput from "@/components/organisms/TextInput";
import { useHooks } from "../login/hooks";
import StatusSelect from "@/components/organisms/StatusSelect";
import { Button } from "flowbite-react";
import CommentInput from "@/components/organisms/CommentInput";
import ImgUpload from '@/components/organisms/ImgUpload';

const Order = () => {
    const { formState, handleSubmit } = useHooks();

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="md:h-screen lg:py-0 flex flex-col">
                <h1 className="text-xl font-bold text-gray-800 text-center">
                    PC BEE ORDERING PARTS SYSTEM
                </h1>
                <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                    <div className="col-span-2">
                        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Date' name='created_at' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Job Order No.' name='job_order' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Staff' name='user_id' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Category' name='category_id' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Brand' name='brand' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Unit Model' name='model' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Parts Model' name='part_model' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Downpayment' name='downpayment' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Quantity' name='quantity' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <TextInput label='Link Ref' name='link' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <StatusSelect label='Status' name='status' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-12">
                                        <CommentInput label='Comments' name='notes' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-12">
                                        <ImgUpload label='Upload File' name='images_paths' {...formState} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-12">
                                        <Button gradientMonochrome="success" className='w-1/2 mx-auto' type='submit'>
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;
