import React from 'react';
import RadioButton from './RadioButton';
import FormFieldError from './FormFieldError';

const RadioGroup = ({ name, label, options, register, validationRules, errors, defaultOption }) => (
  <fieldset className='w-full flex flex-col p-2'>
    <legend className="block text-lg pb-4 underline font-medium leading-6 text-white">{label}</legend>
    <div className='w-full h-full flex justify-evenly'>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          id={option.value}
          name={name}
          value={option.value}
          label={option.label}
          register={register}
          validationRules={validationRules}
          isChecked={defaultOption == option.value} 
        />
      ))}
    </div>
    <FormFieldError name={name} errors={errors} />
  </fieldset>
);

export default RadioGroup;