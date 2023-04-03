import { FormFields } from 'app/interfaces';
import React, { useState } from 'react';
import FormCard from 'components/formCard';
import Form from 'components/form';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();
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
