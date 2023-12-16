import React from 'react';
import { Select } from 'flowbite-react';

const StatusSelect = (props) => {
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
                        <option value="" disabled selected hidden>Status</option>
                        <option value="Open">Open</option>
                        <option value="In-Transit">In-Transit</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Onhold">Onhold</option>
                    </Select>
                    {error && <span className="text-xs text-red-700">{error}</span>}
                </div>
            </div>
        </div>
    );
};

export default StatusSelect;
