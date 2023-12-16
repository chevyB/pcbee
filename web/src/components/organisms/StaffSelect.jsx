import React from 'react';
import { Select } from 'flowbite-react';

const StaffSelect = (props) => {
    const { errors, name, register, ...rest } = props;

    const formRegister = (name && register) && { ...register(name) };

    const error = errors[name]?.message;

    return (
        <div className="max-w-md grid grid-cols-6 sm:grid-cols-3 gap-4">
            <div className="col-span-6 sm:col-span-3 h-12 md:h-full">
                <div className="w-full h-full">
                    <Select
                        variant='outlined'
                        {...formRegister}
                        {...rest}
                        color={error ? 'error' : 'default'}
                        style={{ color: error ? 'red' : 'black' }}
                    >
                        <option value="" disabled selected hidden>Staff Name</option>
                        <option value="">Leizl - Davao</option>
                        <option value="">Delivered</option>
                        <option value="">Cancelled</option>
                        <option value="">Onhold</option>
                    </Select>
                    {error && <span className="text-xs text-red-700">{error}</span>}
                </div>
            </div>
        </div>
    );
};

export default StaffSelect;
