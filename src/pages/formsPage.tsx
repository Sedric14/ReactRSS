import { FormFields } from '../app/interfaces';
import React, { useState } from 'react';
import FormCard from '../components/formCard';
import Form from '../components/form';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { IRootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { cardAdded } from '../feauters/formSlice';

const FormPage: React.FC = () => {
  console.log('forms');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const dispatch = useDispatch();

  const onSubmit = (data: FormFields) => {
    // data.file = sessionStorage.getItem('img') as string;
    dispatch(
      cardAdded({
        id: nanoid(),
        data,
      })
    );
    changeMessageValid(true);
    setTimeout(() => {
      changeMessageValid(false);
    }, 3000);
    reset();
  };

  const [messageValid, changeMessageValid] = useState<boolean>(true);

  // sessionStorage.setItem('page', 'Forms');

  const arr = useSelector((state: IRootState) => state.formCards);

  const result = arr.map((element: FormFields, index: number) => {
    return <FormCard element={element} index={index} key={index} />;
  });

  return (
    <Form
      errors={errors}
      reset={reset}
      handle={handleSubmit(onSubmit)}
      register={register}
      result={result}
      messageClass={messageValid ? 'message' : 'cleanMess'}
    />
  );
};

export default FormPage;
