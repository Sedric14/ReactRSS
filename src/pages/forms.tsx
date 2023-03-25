import { FormFields } from 'app/interfaces';
import Valid from 'app/Validation';
import React, { Component, FormEventHandler } from 'react';

interface IProps {
  name: string;
}

interface IState {
  messageValid: boolean;
  nameValid: boolean;
  surnameValid: boolean;
  countryValid: boolean;
  dateValid: boolean;
  checkValid: boolean;
  fileValid: boolean;
  genderValid: boolean;
  arr: FormFields[];
  fields: FormFields;
  message: string;
}

class Forms extends Component<IProps, IState> {
  inputSubmit: FormEventHandler<HTMLInputElement> | undefined;
  surname: HTMLInputElement | null | undefined;
  name: HTMLInputElement | null | undefined;
  birthday: HTMLInputElement | null | undefined;
  check: HTMLInputElement | null | undefined;
  male: HTMLInputElement | null | undefined;
  female: HTMLInputElement | null | undefined;
  file: HTMLInputElement | null | undefined;
  country: HTMLSelectElement | null | undefined;

  constructor(props: IProps) {
    super(props);
    this.state = {
      fields: {
        name: '',
        surname: '',
        date: '',
        check: false,
        gender: '',
        file: '',
        country: '',
      },
      arr: [],
      nameValid: true,
      surnameValid: true,
      countryValid: true,
      dateValid: true,
      checkValid: true,
      genderValid: true,
      fileValid: true,
      messageValid: false,
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent | undefined) {
    const f = Object.assign({}, this.state.fields);
    if (Valid.isName(this.name?.value)) {
      this.setState({ nameValid: true });
      f.name = this.name?.value as string;
    } else {
      this.setState({ nameValid: false });
      f.name = '';
    }

    if (Valid.isName(this.surname?.value)) {
      this.setState({ surnameValid: true });
      f.surname = this.surname?.value as string;
    } else {
      this.setState({ surnameValid: false });
      f.surname = '';
    }

    if (Valid.isYear(this.birthday?.value)) {
      this.setState({ dateValid: true });
      f.date = this.birthday?.value as string;
    } else {
      this.setState({ dateValid: false });
      f.date = '';
    }

    if (Valid.isCountry(this.country?.value)) {
      this.setState({ countryValid: true });
      f.country = this.country?.value as string;
    } else {
      this.setState({ countryValid: false });
    }

    if (this.check?.checked) {
      this.setState({ checkValid: true });
      f.check = true;
    } else {
      this.setState({ checkValid: false });
      f.check = false;
    }

    if (Valid.isGender(this.male, this.female)) {
      console.log(this.male?.value);
      this.setState({ genderValid: true });
      this.male?.value !== '' ? (f.gender = 'male') : (f.gender = 'female');
    } else {
      this.setState({ genderValid: false });
    }

    if (this.file?.value) {
      this.setState({ fileValid: true });
      const arr = this.file.files;
      if (arr) f.file = URL.createObjectURL(arr[0]);
    } else {
      this.setState({ fileValid: false });
      f.file = '';
    }

    if (Valid.all(f)) {
      this.state.arr.push(f);
      this.cleanForm();
      this.setState({
        message: `Create new card: name: ${f.name}, surname: ${f.surname}, birthday: ${f.date}, country: ${f.country}, gender: ${f.gender}`,
      });
      this.setState({ messageValid: true });
      setTimeout(() => {
        this.setState({ messageValid: false });
      }, 3000);
    }
    if (event) event.preventDefault();
    this.setState({ fields: f });
  }

  cleanForm() {
    if (this.name) this.name.value = 'John';
    if (this.surname) this.surname.value = 'Dou';
    if (this.birthday) this.birthday.value = '1995-01-01';
    if (this.country) this.country.value = 'empty';
    if (this.check) this.check.checked = false;
    if (this.male) this.male.checked = false;
    if (this.female) this.female.checked = false;
    if (this.file) this.file.value = '';
  }

  render() {
    sessionStorage.setItem('page', 'Forms');
    const result = this.state.arr.map((element, index) => {
      return (
        <div className="elem" key={index}>
          <img className="ava" src={element.file} alt="avatar"></img>
          <p>
            name: <span>{element.name}</span>
          </p>
          <p>
            surname: <span>{element.surname}</span>
          </p>
          <p>
            birthday: <span>{element.date}</span>
          </p>
          <p>
            country: <span>{element.country}</span>
          </p>
          <p>
            gender: <span>{element.gender}</span>
          </p>
        </div>
      );
    });
    const messageClass = this.state.messageValid === true ? 'message' : 'cleanMess';
    const nameClass = this.state.nameValid === true ? 'errMess' : 'errDis';
    const countryClass = this.state.countryValid === true ? 'errMess' : 'errDis';
    const surnameClass = this.state.surnameValid === true ? 'errMess' : 'errDis';
    const genderClass = this.state.genderValid === true ? 'errMess' : 'errDis';
    const dateClass = this.state.dateValid === true ? 'errMess' : 'errDis';
    const checkClass = this.state.checkValid === true ? 'errMess' : 'errDis';
    const fileClass = this.state.fileValid === true ? 'errMess' : 'errDis';
    return (
      <div>
        <header>
          <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
        </header>
        <h1 className="title">Forms page</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">
            Name:
            <input
              className="inputName"
              defaultValue="John"
              type="text"
              ref={(input) => (this.name = input)}
            />
          </label>
          <p className={nameClass}>Please enter a valid name</p>
          <label className="label">
            Surname:
            <input
              className="inputSurname"
              defaultValue="Doe"
              type="text"
              ref={(input) => (this.surname = input)}
            />
          </label>
          <p className={surnameClass}>Please enter a valid surname</p>
          <label className="label">
            Birthday:
            <input
              className="inputBirthday"
              defaultValue="1995-01-01"
              type="date"
              ref={(input) => (this.birthday = input)}
            />
          </label>
          <p className={dateClass}>Please enter a valid date</p>
          <label className="label">
            Country:
            <select className="select" ref={(input) => (this.country = input)}>
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
            <input
              className="inputCheckbox"
              type="checkbox"
              ref={(input) => (this.check = input)}
            />
          </label>
          <p className={checkClass}>Check to submit the form</p>
          <label className="label">
            Male:
            <input
              className="inputGender"
              type="radio"
              name="gender"
              value="male"
              ref={(input) => (this.male = input)}
            />
          </label>
          <label className="label">
            Female:
            <input
              className="inputGender"
              type="radio"
              name="gender"
              value="female"
              ref={(input) => (this.female = input)}
            />
          </label>
          <p className={genderClass}>Choose your gender</p>
          <label className="label">
            File:
            <input
              className="inputFile"
              type="file"
              accept="image/*"
              ref={(input) => (this.file = input)}
            />
          </label>
          <p className={fileClass}>Choose an image</p>
          <input className="submit" type="submit" value="Отправить" />
        </form>
        <div className="cardsForm">{result}</div>
        <div className={messageClass}>{this.state.message}</div>
      </div>
    );
  }
}

export default Forms;
