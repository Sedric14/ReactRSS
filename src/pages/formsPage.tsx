import { FormFields } from 'app/interfaces';
import React, { useState } from 'react';
import FormCard from 'components/formCard';
import Form from 'components/form';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { IRootState } from 'app/store';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { cardAdded } from '../feauters/formSlice';

const FormPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const dispatch = useDispatch();

  const onSubmit = (data: FormFields) => {
    console.log(data);
    // const ar: FileList = JSON.parse(data.file[0]);
    // const binary = [];
    // binary.push(ar[0]);
    // data.file = URL.createObjectURL(new Blob(binary));
    data.file = sessionStorage.getItem('img') as string;
    console.log(data.file);
    dispatch(
      cardAdded({
        id: nanoid(),
        data,
      })
    );
    // console.log((sessionStorage.getItem('img') as string).slice(5));
    // const a = (sessionStorage.getItem('img') as string).slice(5);
    // data.file = a;
    // data.file = (sessionStorage.getItem('img') as string).slice(5);
    // changeArr(arr.concat(data));
    changeMessageValid(true);
    setTimeout(() => {
      changeMessageValid(false);
    }, 3000);
    reset();
  };

  // const [arr, changeArr] = useState<FormFields[]>([]);
  const [messageValid, changeMessageValid] = useState<boolean>(true);

  sessionStorage.setItem('page', 'Forms');

  const arr = useSelector((state: IRootState) => state.formCards);

  const result = arr.map((element, index) => {
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
