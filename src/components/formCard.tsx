import { FormFields } from '../app/interfaces';
import React from 'react';

export interface IP {
  element: FormFields;
  index: number;
}

const FormCard = (props: IP) => {
  return (
    <div className="elem" key={props.index} data-testid={'entered'}>
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
