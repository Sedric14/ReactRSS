import { FormFields } from 'app/interfaces';
import React, { useRef, useState } from 'react';
import FormCard from 'components/formCard';

const Forms = () => {
  const surname = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const check = useRef<HTMLInputElement>(null);
  const male = useRef<HTMLInputElement>(null);
  const female = useRef<HTMLInputElement>(null);
  const file = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLSelectElement>(null);

  const [fields, changeFields] = useState<FormFields>({
    name: '',
    surname: '',
    date: '',
    check: false,
    gender: '',
    file: '',
    country: '',
  });

  const [arr, changeArr] = useState<FormFields[]>([]);
  const nameValid = useRef(true);
  const surnameValid = useRef(true);
  const countryValid = useRef(true);
  const dateValid = useRef(true);
  const genderValid = useRef(true);
  const fileValid = useRef(true);
  const checkValid = useRef(true);
  const [messageValid, changeMessageValid] = useState<boolean>(true);
  const [message, changeMessage] = useState<string>('');

  function HandleSubmit(event: React.FormEvent | undefined) {
    const date = birthday.current?.value as string;
    const nameStr = name.current?.value as string;
    const surnameStr = surname.current?.value as string;
    const f = Object.assign({}, fields);
    if (nameStr.length > 2 && nameStr[0].toUpperCase() === nameStr[0]) {
      nameValid.current = true;
      f.name = name.current?.value as string;
    } else {
      nameValid.current = false;
      f.name = '';
    }

    if (surnameStr.length > 2 && surnameStr[0].toUpperCase() === surnameStr[0]) {
      surnameValid.current = true;
      f.surname = surname.current?.value as string;
    } else {
      surnameValid.current = false;
      f.surname = '';
    }

    if (Number(date.slice(0, -6)) < 2023 && Number(date.slice(0, -6)) > 1933) {
      dateValid.current = true;
      f.date = birthday.current?.value as string;
    } else {
      dateValid.current = false;
      f.date = '';
    }

    if (country.current?.value !== 'empty') {
      countryValid.current = true;
      f.country = country.current?.value as string;
    } else {
      countryValid.current = false;
    }

    if (check.current?.checked) {
      checkValid.current = true;
      f.check = true;
    } else {
      checkValid.current = false;
      f.check = false;
    }

    if (male.current?.checked || female.current?.checked) {
      genderValid.current = true;
      male.current?.checked ? (f.gender = 'male') : (f.gender = 'female');
    } else {
      genderValid.current = false;
    }

    if (file.current?.value) {
      fileValid.current = true;
      const arr = file.current.files;
      if (arr) f.file = URL.createObjectURL(arr[0]);
    } else {
      fileValid.current = false;
      f.file = '';
    }
    CreateCard(f);

    if (event) event.preventDefault();
    changeFields(f);
  }

  function CreateCard(f: FormFields) {
    if (
      checkValid.current &&
      countryValid.current &&
      dateValid.current &&
      fileValid.current &&
      genderValid.current &&
      nameValid.current &&
      surnameValid.current
    ) {
      changeArr(arr.concat(f));
      cleanForm();
      changeMessage(
        `Create new card: name: ${f.name}, surname: ${f.surname}, birthday: ${f.date}, country: ${f.country}, gender: ${f.gender}`
      );
      changeMessageValid(true);
      setTimeout(() => {
        changeMessageValid(false);
      }, 3000);
    }
  }

  function cleanForm() {
    if (name.current?.value) name.current.value = '';
    if (surname.current?.value) surname.current.value = '';
    if (birthday.current?.value) birthday.current.value = '';
    if (country.current?.value) country.current.value = 'empty';
    if (check.current) check.current.checked = false;
    if (male.current) male.current.checked = false;
    if (female.current) female.current.checked = false;
    if (file.current?.value) file.current.value = '';
  }

  sessionStorage.setItem('page', 'Forms');
  const result = arr.map((element, index) => {
    return <FormCard element={element} index={index} key={index} />;
  });
  const messageClass = messageValid ? 'message' : 'cleanMess';
  const nameClass = nameValid.current ? 'errMess' : 'errDis';
  const countryClass = countryValid.current ? 'errMess' : 'errDis';
  const surnameClass = surnameValid.current ? 'errMess' : 'errDis';
  const genderClass = genderValid.current ? 'errMess' : 'errDis';
  const dateClass = dateValid.current ? 'errMess' : 'errDis';
  const checkClass = checkValid.current ? 'errMess' : 'errDis';
  const fileClass = fileValid.current ? 'errMess' : 'errDis';
  return (
    <div>
      <header>
        <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
      </header>
      <h1 className="title">Forms page</h1>
      <form className="form" onSubmit={HandleSubmit}>
        <label className="label">
          Name:
          <input className="inputName" type="text" ref={name} />
        </label>
        <p className={nameClass}>Please enter a valid name</p>
        <label className="label">
          Surname:
          <input className="inputSurname" type="text" ref={surname} />
        </label>
        <p className={surnameClass}>Please enter a valid surname</p>
        <label className="label">
          Birthday:
          <input className="inputBirthday" type="date" ref={birthday} />
        </label>
        <p className={dateClass}>Please enter a valid date</p>
        <label className="label">
          Country:
          <select className="select" ref={country}>
            <option value="empty">Choose your country</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Belarus">Belarus</option>
            <option value="Latvia">Latvia</option>
            <option value="Uzbekistan">Uzbekistan</option>
          </select>
        </label>
        <p className={countryClass}>Please choose your country</p>
        <label className="label">
          I consent to my personal data:
          <input className="inputCheckbox" type="checkbox" ref={check} />
        </label>
        <p className={checkClass}>Check to submit the form</p>
        <label className="label">
          Male:
          <input className="inputGender" type="radio" name="gender" value="male" ref={male} />
        </label>
        <label className="label">
          Female:
          <input className="inputGender" type="radio" name="gender" value="female" ref={female} />
        </label>
        <p className={genderClass}>Choose your gender</p>
        <label className="label">
          File:
          <input className="inputFile" type="file" accept="image/*" ref={file} />
        </label>
        <p className={fileClass}>Choose an image</p>
        <input className="submit" type="submit" value="Отправить" />
      </form>
      <div className="cardsForm">{result}</div>
      <div className={messageClass}>{message}</div>
    </div>
  );
};

export default Forms;
