// import { IState } from 'pages/forms';
// import React from 'react';
// import { Component, ReactNode } from 'react';

// interface Ipr {
//   handleSubmit: (event: React.FormEvent<Element> | undefined) => void;
//   data: IState;
// }

// export class FormContainer extends Component {
//   handleSubmit: (event: React.FormEvent<Element> | undefined) => void;
//   name: HTMLInputElement | null | undefined;
//   data: IState;
//   surname: HTMLInputElement | null;
//   constructor(props: Ipr) {
//     super(props);
//     this.handleSubmit = props.handleSubmit;
//     this.data = props.data;
//   }
//   render(): ReactNode {
//     const messageClass = this.data.messageValid === true ? 'message' : 'cleanMess';
//     const nameClass = this.data.nameValid === true ? 'errMess' : 'errDis';
//     const countryClass = this.data.countryValid === true ? 'errMess' : 'errDis';
//     const surnameClass = this.data.surnameValid === true ? 'errMess' : 'errDis';
//     const genderClass = this.data.genderValid === true ? 'errMess' : 'errDis';
//     const dateClass = this.data.dateValid === true ? 'errMess' : 'errDis';
//     const checkClass = this.data.checkValid === true ? 'errMess' : 'errDis';
//     const fileClass = this.data.fileValid === true ? 'errMess' : 'errDis';
//     return (
//       <div>
//         <header>
//           <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
//         </header>
//         <h1 className="title">Forms page</h1>
//         <form className="form" onSubmit={this.handleSubmit}>
//           <label className="label">
//             Name:
//             <input
//               className="inputName"
//               defaultValue="John"
//               type="text"
//               ref={(input) => (this.name = input)}
//             />
//           </label>
//           <p className={nameClass}>Please enter a valid name</p>
//           <label className="label">
//             Surname:
//             <input
//               className="inputSurname"
//               defaultValue="Doe"
//               type="text"
//               ref={(input) => (this.surname = input)}
//             />
//           </label>
//           <p className={surnameClass}>Please enter a valid surname</p>
//           <label className="label">
//             Birthday:
//             <input
//               className="inputBirthday"
//               defaultValue="1995-01-01"
//               type="date"
//               ref={(input) => (this.birthday = input)}
//             />
//           </label>
//           <p className={dateClass}>Please enter a valid date</p>
//           <label className="label">
//             Country:
//             <select className="select" ref={(input) => (this.country = input)}>
//               <option value="empty">Choose your country</option>
//               <option value="Ukraine">Ukraine</option>
//               <option value="Belarus">Belarus</option>
//               <option value="Latvia">Latvia</option>
//               <option value="Uzbekistan">Uzbekistan</option>
//             </select>
//           </label>
//           <p className={countryClass}>Please choose your country</p>
//           <label className="label">
//             I consent to my personal data:
//             <input
//               className="inputCheckbox"
//               type="checkbox"
//               ref={(input) => (this.check = input)}
//             />
//           </label>
//           <p className={checkClass}>Check to submit the form</p>
//           <label className="label">
//             Male:
//             <input
//               className="inputGender"
//               type="radio"
//               name="gender"
//               value="male"
//               ref={(input) => (this.male = input)}
//             />
//           </label>
//           <label className="label">
//             Female:
//             <input
//               className="inputGender"
//               type="radio"
//               name="gender"
//               value="female"
//               ref={(input) => (this.female = input)}
//             />
//           </label>
//           <p className={genderClass}>Choose your gender</p>
//           <label className="label">
//             File:
//             <input
//               className="inputFile"
//               type="file"
//               accept="image/*"
//               ref={(input) => (this.file = input)}
//             />
//           </label>
//           <p className={fileClass}>Choose an image</p>
//           <input className="submit" type="submit" value="Отправить" />
//         </form>
//         <div className="cardsForm">{result}</div>
//         <div className={messageClass}>{this.state.message}</div>
//       </div>
//     );
//   }
// }
