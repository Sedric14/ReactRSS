import { FormFields } from 'app/interfaces';
import React from 'react';

export interface IP {
  element: FormFields;
  index: number;
}

const FormCard = (props: IP) => {
  console.log((sessionStorage.getItem('img') as string)?.slice(5));
  // const url = URL.createObjectURL(props.element.file);
  return (
    <div className="elem" key={props.index}>
      <img className="ava" src={props.element.file} alt="avatar"></img>
      <p>
        name: <span>{props.element.name}</span>
      </p>
      <p>
        surname: <span>{props.element.surname}</span>
      </p>
      <p>
        birthday: <span>{props.element.date}</span>
      </p>
      <p>
        country: <span>{props.element.country}</span>
      </p>
      <p>
        gender: <span>{props.element.gender}</span>
      </p>
    </div>
  );
};

export default FormCard;
