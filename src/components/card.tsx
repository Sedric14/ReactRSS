import React from 'react';
import { Component, ReactNode } from 'react';
import data from 'app/data';
import ICard from 'app/interfaces';

interface Props {
  value: ICard;
  key: number;
}

export class Board extends Component {
  render(): ReactNode {
    return (
      <div className="cardsBlock" data-testid="1">
        {data.map((item) => (
          <Card value={item} key={item.id} />
        ))}
      </div>
    );
  }
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img className="imgCard" src={props.value.img} alt="img"></img>
      <h2 className="nameCard">
        {props.value.name}
        <a href={props.value.link} target="_blank" className="linkCard" rel="noreferrer">
          ᐅ
        </a>
      </h2>
      <p className="descCard">{props.value.desc}</p>
      <p className="timeCard" data-testid="time">
        {time(props.value.time)}
      </p>
    </div>
  );
};

export function time(t: number) {
  let str: string;
  const hours = Math.floor(t / 3600);
  let minutes = Math.floor(t / 60);
  if (minutes > 60) minutes = minutes % 60;
  const seconds = t % 60;
  if (hours > 0) {
    str = `${hours}:${minutes}:${seconds}`;
  } else {
    str = `${minutes}:${seconds}`;
  }
  return str;
}

export default Board;
