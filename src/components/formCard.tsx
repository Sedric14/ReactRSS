import { FormFields } from 'app/interfaces';
import { Component } from 'react';
import React from 'react';

export interface IP {
  element: FormFields;
  index: number;
}

export class FormCard extends Component<IP> {
  render(): React.ReactNode {
    return (
      <div className="elem" key={this.props.index}>
        <img className="ava" src={this.props.element.file} alt="avatar"></img>
        <p>
          name: <span>{this.props.element.name}</span>
        </p>
        <p>
          surname: <span>{this.props.element.surname}</span>
        </p>
        <p>
          birthday: <span>{this.props.element.date}</span>
        </p>
        <p>
          country: <span>{this.props.element.country}</span>
        </p>
        <p>
          gender: <span>{this.props.element.gender}</span>
        </p>
      </div>
    );
  }
}

export default FormCard;
