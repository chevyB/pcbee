import { Select } from 'flowbite-react';
import React from 'react';

const SelectInput = ({ errors, name, register, label, options, ...rest }) => {
    const formRegister = (name && register) && { ...register(name) };
    const error = errors?.[name]?.message || null;

    return (
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
    );
};

export default SelectInput;
