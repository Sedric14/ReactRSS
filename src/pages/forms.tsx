// import { FormFields } from 'app/interfaces';
import { FormFields } from 'app/interfaces';
import Valid from 'app/Validation';
import React, { Component, FormEventHandler, LegacyRef } from 'react';

class Forms extends Component {
  input: LegacyRef<HTMLInputElement> | undefined;
  inputSurname: LegacyRef<HTMLInputElement> | undefined;
  inputBirthday: LegacyRef<HTMLInputElement> | undefined;
  inputCheckbox: LegacyRef<HTMLInputElement> | undefined;
  inputSex: LegacyRef<HTMLInputElement> | undefined;
  inputFile: LegacyRef<HTMLInputElement> | undefined;
  inputCountry: LegacyRef<HTMLSelectElement> | undefined;
  inputSubmit: FormEventHandler<HTMLInputElement> | undefined;
  name: string | undefined;
  surname: string | undefined;
  nameIsValid = false;
  constructor(props: FormFields) {
    super(props);
    const name = this.name;
    const nameIsValid = Valid.isName(name);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputSurname = React.createRef();
    this.inputBirthday = React.createRef();
    this.inputCheckbox = React.createRef();
    this.inputSex = React.createRef();
    this.inputCountry = React.createRef();
    this.inputFile = React.createRef();
    // this.inputSubmit = React.createRef();
  }

  handleSubmit() {
    if (this.nameIsValid) {
      alert(this.name);
    } else {
      alert(this.nameIsValid);
    }
    // event.preventDefault();
  }

  render(): React.ReactNode {
    sessionStorage.setItem('page', 'Forms');
    const headerText = document.querySelector('.headerText');
    if (headerText) headerText.innerHTML = `${sessionStorage.getItem('page')}`;
    return (
      <div>
        <h1 className="title">Forms page</h1>
        <form className="form">
          <label className="label">
            Name:
            <input
              className="inputName"
              defaultValue="John"
              type="text"
              ref={(input) => (this.name = input?.value)}
            />
          </label>
          <label className="label">
            Surname:
            <input
              className="inputSurname"
              defaultValue="Dow"
              type="text"
              ref={(input) => (this.surname = input?.value)}
            />
          </label>
          <label className="label">
            Birthday:
            <input className="inputBirthday" type="date" ref={this.inputBirthday} />
          </label>
          <label className="label">
            Country:
            <select ref={this.inputCountry}>
              <option value="Ukraine">Ukraine</option>
              <option value="Belarus">Belarus</option>
              <option value="Latvia">Latvia</option>
              <option value="Uzbekistan">Uzbekistan</option>
            </select>
          </label>
          <label className="label">
            I consent to my personal data:
            <input className="inputCheckbox" type="checkbox" ref={this.inputCheckbox} />
          </label>
          <label className="label">
            Male/Female:
            <input className="inputSex" type="radio" ref={this.inputSex} />
          </label>
          <label className="label">
            File:
            <input className="inputFile" type="file" ref={this.inputFile} />
          </label>
          <input
            className="submit"
            type="submit"
            value="Отправить"
            // ref={this.inputSubmit}
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Forms;
