import { FormFields } from 'app/interfaces';
import React, { useState } from 'react';
import FormCard from 'components/formCard';
import Form from 'components/form';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const FormPage: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .matches(/^[A-Z,А-Я]/, 'Name must be start with uppercase')
      .min(2, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    surname: Yup.string()
      .required('Username is required')
      .matches(/^[A-Z,А-Я]/, 'Name must be start with uppercase')
      .min(2, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    date: Yup.string().required('Enter date'),
    check: Yup.bool().oneOf([true], 'Check to submit the form is required'),
    country: Yup.string()
      .required('Choose your country')
      .matches(/[^empty]/, 'Please choose your country'),
    gender: Yup.string().matches(/^male|female/, 'Choose your gender'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormFields) => {
    data.file = sessionStorage.getItem('img') as string;
    changeArr(arr.concat(data));
    changeMessageValid(true);
    setTimeout(() => {
      changeMessageValid(false);
    }, 3000);
    reset();
  };

  const [arr, changeArr] = useState<FormFields[]>([]);
  const [messageValid, changeMessageValid] = useState<boolean>(true);

  sessionStorage.setItem('page', 'Forms');
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
