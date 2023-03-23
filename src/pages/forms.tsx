import { FormFields } from 'app/interfaces';
import Valid from 'app/Validation';
import React, { Component, FormEventHandler } from 'react';

interface IProps {
  name: string;
}

interface IState {
  nameValid: boolean;
  surnameValid: boolean;
  dateValid: boolean;
  checkValid: boolean;
  fileValid: boolean;
}

class Forms extends Component<IProps, IState> {
  static arr: FormFields[] = [];
  static fields: FormFields = {
    name: '',
    surname: '',
    date: '',
    check: false,
    gender: '',
    file: '',
    country: '',
  };
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
      nameValid: true,
      surnameValid: true,
      dateValid: true,
      checkValid: true,
      fileValid: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent | undefined) {
    if (Valid.isName(this.name?.value)) {
      this.setState({ nameValid: true });
      Forms.fields.name = this.name?.value as string;
    } else {
      this.setState({ nameValid: false });
      Forms.fields.name = '';
    }

    if (Valid.isName(this.surname?.value)) {
      this.setState({ surnameValid: true });
      Forms.fields.surname = this.surname?.value as string;
    } else {
      this.setState({ surnameValid: true });
      Forms.fields.surname = '';
    }

    if (Valid.isYear(this.birthday?.value)) {
      this.setState({ dateValid: true });
      Forms.fields.date = this.birthday?.value as string;
    } else {
      this.setState({ dateValid: false });
      Forms.fields.date = '';
    }

    Forms.fields.country = this.country?.value as string;
    if (this.check?.checked) {
      this.setState({ checkValid: true });
      Forms.fields.check = true;
    } else {
      this.setState({ checkValid: false });
      Forms.fields.check = false;
    }

    if (this.male?.checked) {
      Forms.fields.gender = 'male';
    } else {
      Forms.fields.gender = 'female';
    }

    if (this.file?.value) {
      this.setState({ fileValid: true });
      const arr = this.file.files;
      if (arr) Forms.fields.file = URL.createObjectURL(arr[0]);
    } else {
      this.setState({ fileValid: false });
      Forms.fields.file = '';
    }

    if (Valid.all(Forms.fields)) {
      const n = Object.assign({}, Forms.fields);
      Forms.arr.push(n);
      console.log(Forms.arr);
    }
    if (event) event.preventDefault();
  }

  // addState() {
  //   this.setState(() => {
  //     return {
  //       name: this.name?.value as string,
  //       surname: this.surname?.value as string,
  //       date: this.birthday?.value as string,
  //     };
  //   });
  // }

  // addValid() {
  //   // this.setState(() => {
  //   //   return {
  //   //     valid: true,
  //   //   };
  //   // });
  // }

  render() {
    console.log(Forms.fields);
    sessionStorage.setItem('page', 'Forms');
    const headerText = document.querySelector('.headerText');
    if (headerText) headerText.innerHTML = `${sessionStorage.getItem('page')}`;
    const result = Forms.arr.map((element, index) => {
      return (
        <div className="elem" key={index}>
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
          <img className="ava" src={element.file} alt="avatar"></img>
        </div>
      );
    });
    const nameClass = this.state.nameValid === true ? 'errMess' : 'errDis';
    const surnameClass = this.state.surnameValid === true ? 'errMess' : 'errDis';
    const dateClass = this.state.dateValid === true ? 'errMess' : 'errDis';
    const checkClass = this.state.checkValid === true ? 'errMess' : 'errDis';
    const fileClass = this.state.fileValid === true ? 'errMess' : 'errDis';
    return (
      <div>
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
            <select ref={(input) => (this.country = input)}>
              <option value="Ukraine">Ukraine</option>
              <option value="Belarus">Belarus</option>
              <option value="Latvia">Latvia</option>
              <option value="Uzbekistan">Uzbekistan</option>
            </select>
          </label>
          <label className="label">
            I consent to my personal data:
            <input
              className="inputCheckbox"
              type="checkbox"
              defaultChecked
              ref={(input) => (this.check = input)}
            />
          </label>
          <p className={checkClass}>Check to submit the form</p>
          <label className="label">
            Male:
            <input
              defaultChecked
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
          <label className="label">
            File:
            <input
              className="inputFile"
              type="file"
              name="gender"
              accept="image/*"
              ref={(input) => (this.file = input)}
            />
          </label>
          <p className={fileClass}>Choose an image</p>
          <input className="submit" type="submit" value="Отправить" />
        </form>
        <div className="cardsForm">{result}</div>
      </div>
    );
  }
}

export default Forms;
