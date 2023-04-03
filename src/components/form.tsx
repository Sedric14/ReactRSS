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
          <input className="inputName" type="text" {...props.register('name')} />
        </label>
        <p className={`form-control ${props.errors.name ? 'errDis' : 'errMess'}`}>
          {props.errors.name?.message}
        </p>
        <label className="label">
          Surname:
          <input className="inputSurname" type="text" {...props.register('surname')} />
        </label>
        <p className={`form-control ${props.errors.surname ? 'errDis' : 'errMess'}`}>
          {props.errors.surname?.message}
        </p>
        <label className="label">
          Birthday:
          <input className="inputBirthday" type="date" {...props.register('date')} />
        </label>
        <p className={`form-control ${props.errors.date ? 'errDis' : 'errMess'}`}>
          {props.errors.date?.message}
        </p>
        <label className="label">
          Country:
          <select className="select" {...props.register('country')}>
            <option value="empty">Choose your country</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Belarus">Belarus</option>
            <option value="Latvia">Latvia</option>
            <option value="Uzbekistan">Uzbekistan</option>
          </select>
        </label>
        <p className={`form-control ${props.errors.country ? 'errDis' : 'errMess'}`}>
          {props.errors.country?.message}
        </p>
        <label className="label">
          I consent to my personal data:
          <input className="inputCheckbox" type="checkbox" {...props.register('check')} />
        </label>
        <p className={`form-control ${props.errors.check ? 'errDis' : 'errMess'}`}>
          {props.errors.check?.message}
        </p>
        <label className="label">
          Male:
          <input className="inputGender" type="radio" value="male" {...props.register('gender')} />
        </label>
        <label className="label">
          Female:
          <input
            className="inputGender"
            type="radio"
            value="female"
            {...props.register('gender')}
          />
        </label>
        <p className={`form-control ${props.errors.gender ? 'errDis' : 'errMess'}`}>
          {props.errors.gender?.message}
        </p>
        <label className="label">
          File:
          <input
            className="inputFile"
            type="file"
            accept="image/*"
            {...props.register('file')}
            onChange={(e) => {
              if (e.target?.files?.[0]) {
                sessionStorage.setItem('img', URL.createObjectURL(e.target?.files?.[0]));
              }
            }}
          />
        </label>
        <p className={`form-control ${props.errors.file ? 'errDis' : 'errMess'}`}>
          Choose an image
        </p>
        <input className="submit" type="submit" value="Отправить" />
      </form>
      <div className="cardsForm">{props.result}</div>
      <div className={props.messageClass}>{'Card created successfully'}</div>
    </div>
  );
};

export default Form;
