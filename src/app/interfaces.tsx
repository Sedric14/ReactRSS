interface ICard {
  id: number;
  img: string;
  name: string;
  desc: string;
  time: number;
  link: string;
}

export interface FormFields {
  name: string;
  surname: string;
  date: string;
  check: boolean;
  sex: string;
  country: string;
  file: string;
}

export default ICard;
