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
  gender: string;
  country: string;
  file: string;
  valid?: boolean;
}

export default ICard;
