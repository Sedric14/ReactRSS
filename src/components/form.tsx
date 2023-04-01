import { RefTypes } from 'app/interfaces';
import React from 'react';

const Form = (props: RefTypes) => {
  return (
    <div>
      <header>
        <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
      </header>
      <h1 className="title">Forms page</h1>
      <form className="form" onSubmit={props.handle} data-testid="form">
        <label className="label">
          Name:
          <input className="inputName" type="text" ref={props.name} />
        </label>
        <p className={props.nameClass}>Please enter a valid name</p>
        <label className="label">
          Surname:
          <input className="inputSurname" type="text" ref={props.surname} />
        </label>
        <p className={props.surnameClass}>Please enter a valid surname</p>
        <label className="label">
          Birthday:
          <input className="inputBirthday" type="date" ref={props.birthday} />
        </label>
        <p className={props.dateClass}>Please enter a valid date</p>
        <label className="label">
          Country:
          <select className="select" ref={props.country}>
            <option value="empty">Choose your country</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Belarus">Belarus</option>
            <option value="Latvia">Latvia</option>
            <option value="Uzbekistan">Uzbekistan</option>
          </select>
        </label>
        <p className={props.countryClass}>Please choose your country</p>
        <label className="label">
          I consent to my personal data:
          <input className="inputCheckbox" type="checkbox" ref={props.check} />
        </label>
        <p className={props.checkClass}>Check to submit the form</p>
        <label className="label">
          Male:
          <input className="inputGender" type="radio" name="gender" value="male" ref={props.male} />
        </label>
        <label className="label">
          Female:
          <input
            className="inputGender"
            type="radio"
            name="gender"
            value="female"
            ref={props.female}
          />
        </label>
        <p className={props.genderClass}>Choose your gender</p>
        <label className="label">
          File:
          <input className="inputFile" type="file" accept="image/*" ref={props.file} />
        </label>
        <p className={props.fileClass}>Choose an image</p>
        <input className="submit" type="submit" value="Отправить" />
      </form>
      <div className="cardsForm">{props.result}</div>
      <div className={props.messageClass}>{'Card created successfully'}</div>
    </div>
  );
};

export default Form;
