import { Select } from 'flowbite-react';
import React from 'react';

const SelectInput = ({ errors, name, register, label, options, ...rest }) => {
    const formRegister = (name && register) && { ...register(name) };
    const error = errors?.[name]?.message || null;

    return (
        <div className="max-w-md grid grid-cols-6 sm:grid-cols-3 gap-4">
            <div className="col-span-6 sm:col-span-3 h-12 md:h-full">
                <div className="w-full h-full">
                    <label htmlFor={name} className="block mb-1 font-medium text-gray-700 text-xs">
                        {label}
                    </label>
                    <Select
                        id={name}
                        variant='outlined'
                        {...formRegister}
                        {...rest}
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                    {error && <span className="text-xs text-red-700">{error}</span>}
                </div>
            </div>
        </div>
    );
};

export default SelectInput;
